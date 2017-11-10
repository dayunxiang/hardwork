 $(function () {
   height()
   sideBarOpen()
   radiooption(".optionpz", ".radio")
   radiooption("#optionzpsp", ".radio1")
   radiooption("#optionzxztjsfsp", ".radio2")
   radiooption("#optiongdsfys", ".radio3")

   $(window).on("resize", function () {
     height()
   })

   // 初始化方法
   init();

 })

 // 清除choosen value
 $(".search-field").find("input").val("")

 // 设置高度
 function height() {
   var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   $(".container-fluid").css("height", h + "px")
   $(".sideBarContent").css("height", (h - 63) + "px")
   $(".option").css("height", h)
   $(".optioncontent").css("height", (h - 83) + "px")
   $(".assignOption").css("height", (h - 103) + "px")
 }
 //侧边栏开关
 function sideBarOpen() {
   $(".opened").on("click", function () {
     $(".sideBar").toggleClass("openToggle")
     $(this).toggleClass('ToggleOpend')
   })
 }

 // ------------------ 数据定义 ----------------------
 // 创建人，模拟用户
 var creator = '0';
 // 当前选中模板的key值
 var currentWfKey = '';
 // OMS的所有角色
 var allRoles = [];
 // 当前模板的节点配置数据
 var wfNodeCfgData = [];
 // 当前模板的开关配置数据
 var wfSwitchData = [];

// ------------------ 方法定义 -----------------------
  /**
   * [init 初始化方法]
   * @return {[type]} [description]
   */
  function init() {
    // 获取oms的所有分组集合
    getAllRoles();
    // 配置下拉框的数据源
    selectedInputSetting();
    // 获取工作流配置集合
    findWorkFlowCfgList();
  }

 /**
  * [findWorkFlowCfgList 获取工作流配置集合]
  * @return {[type]} [description]
  */
 function findWorkFlowCfgList() {
    JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/findWorkFlowCfgList',{
      // 参数
    },
    function success(result) {
      // 操作成功
      if(result.resCode==1){
        if (result.data!='') {
          var wfCfgList = JSON.parse(result.data);
          var html = '';
          for(var i=0;i<wfCfgList.length;i++) {
            var wfData = wfCfgList[i];
            html += '<li class="wfCfg" data-wfkey="'+wfData.wfkey+'">';
            html += '<input type="text" id="wfNameInput" value="'+wfData.wfname+'" >';
            html += '<span class="fa fa-edit editCfg" title="修改配置名称" data-wfid="'+wfData.wfid+'" data-wfname="'+wfData.wfname+'"></span>';
            html += '<span class="fa fa-copy copyCfg" title="复制该模板" data-wfid="'+wfData.wfid+'" data-wfname="'+wfData.wfname+'"></span>';
            html += '</li>';
          }
         $(".sideBarContent").find("ul").html('').append(html);
        }
        ReNameAndCopy()
      }else{
        alert(result.msg);
      }
    }, function error(error) {
      console.log(error);
    });
 }

  /**
   * [newWorkFlow 新建工作流]
   * @return {[type]} [description]
   */
  function newWorkFlow() {
    var title = '新建流程';
    var btnText = '创建';
    var content = '';
    content = '<div class="row">'
         //获取方式
           +'<div class="col-md-12">流程名称</div>'
           +'<div class="col-md-12">'
             +'<input type="text" id="flowName" class="modelInput">'
           +'</div>'
           +'</div>'
    formModalPublicSetting('', title, content, btnText, createWorkFlowConfig);
  }

   /**
    * 新建工作流事件
    * @return {[type]} [description]
    */
   function createWorkFlowConfig() {
     // $("#modalSure").on('click', function () {
      var wfName = $("#flowName").val().trim();
      if (wfName=='') {
        alert('请输入工作流配置名称！');
        return;
      }
      JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/createWorkFlowConfig',{
        // 参数
        wfName: wfName,
        creator: creator
      },
      function success(result) {
        // debugger;
        // 操作成功
        if(result.resCode==1){
          alert('创建成功！');
          findWorkFlowCfgList();
        }else{
          alert(result.msg);
        }
        $('.newModal').modal('hide');
      }, function error(error) {
        console.log(error);
      });
   }
   /**
    * [ReNameAndCopy 重命名和复制的点击事件]
    */
   function ReNameAndCopy() {
    /**
     * [点击模板事件]
     * @param  {[type]} ) [description]
     * @return {[type]}   [description]
     */
     $(".wfCfg").on("click", function () {
       // 工作流id
       var wfKey = $(this)[0].dataset.wfkey;
       if (wfKey=='') {
        alert('wfKey不得为空！');
        return;
       }
       // 将工作流模板key赋值到全局变量
       currentWfKey = wfKey;
       console.log('当前模板Key：' + currentWfKey)
       // 根据工作流模板key获取数据
       findWfConfigByKey(wfKey);
       // 工作流模板初始化
       workFlowNodeInit();
     })
      /**
      * [重命名]
      * @param  {[type]} ) {}
      * @return {[type]}   [description]
      */
     $(".editCfg").on("click", function (event) {
       // 阻止冒泡事件
       event.stopPropagation();
       var value = $(this).parent("li").find("input").val()
       $(this).parent("li").find("input").removeAttr("readonly")
       $(this).parent("li").find("input").focus().val(value)
       // 工作流id
       var wfId = $(this)[0].dataset.wfid;
       // 更新之前的名称
       var oldWfName = $(this)[0].dataset.wfname;
       // 绑定键盘回车事件
       $(this).parent("li").find("input").bind('keydown', function(event) {
         if(event.keyCode == "13") {
            // 获取文本框的内容
            var newWfName = $(this).parent("li").find("input").val();
            if (newWfName==oldWfName) {
              // 取消焦点事件
              $(this).parent("li").find("input").blur();
              return;
            }
            // 回调函数
            var keyDownCallBack = function(result) {
              // 操作成功
              if(result.resCode==1){
                alert('工作流配置名称更新成功！');
              }else{
                // 还原名称
                $('#wfNameInput').val(oldWfName);
                alert(result.msg);
              }  
            }
            updateWfNameById(wfId, newWfName, keyDownCallBack);
            // 取消焦点事件
            $(this).parent("li").find("input").blur();
         }
       });
     })
     // -------------------------------------------------------------------
   /**
    * [复制模板]
    * @param  {[type]} ) {[description]
    * @return {[type]}   [description]
    */
    $(".copyCfg").on("click", function (event) {
      // 阻止冒泡事件
      event.stopPropagation();
      // 工作流id
      var wfId = $(this)[0].dataset.wfid;
      // 参照的模板名称
      var existCfgName = $(this)[0].dataset.wfname;
      var title = '复制工作流配置模板';
      var btnText = '复制';
      var content = '';
      content = ''
            +'<div class="form-group">'
               +'<label class="col-sm-5 control-label">参照模板：</label>'
               +'<div class="col-sm-7">'
               +'<p>'+ existCfgName +'</p>'
               +'</div>'
             +'</div>'
           +'<div class="row">'
           //获取方式
           +'<div class="col-md-12">流程名称</div>'
           +'<div class="col-md-12">'
             +'<input type="text" id="flowName" class="modelInput" >'
           +'</div>'
           +'</div>'
      formModalPublicSetting(wfId, title, content, btnText, copyExistingConfig);
    })

   }

   /**
    * [updateWfNameById 更新工作流名称]
    * @param  {[type]} wfId      [description]
    * @param  {[type]} newWfName [description]
    * @return {[type]}           [description]
    */
   function updateWfNameById(wfId, newWfName, callBackFun) {
    if (wfId=='' || newWfName=='') {
      alert('参数不得为空！');
      return;
    }
    JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/updateWfNameById',{
      // 参数
      wfId: wfId,
      wfName: newWfName
    },
    function success(result) {
      callBackFun(result);
    }, function error(error) {
      console.log(error);
    });
   }
   /**
    * [copyExistingConfig 复制工作流配置模板]
    * @param  {[type]} param [description]
    * @return {[type]}       [description]
    */
    function copyExistingConfig(param) {
      var existWfId = param.data.obj;
      var wfName = $('#flowName').val().trim();
      if (existWfId=='' || wfName=='') {
        alert('参数不得为空！');
        return;
      }
      JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/copyExistingConfig',{
        // 参数
        existWfId: existWfId,
        wfName: wfName,
        creator: creator
      },
      function success(result) {
        // 操作成功
        if(result.resCode==1){
          alert('复制成功！');
          findWorkFlowCfgList();
        }else{
          alert(result.msg);
        }
        $('.newModal').modal('hide');
      }, function error(error) {
        console.log(error);
      });

    }
    /**
     * [findWfConfigByKey 根据工作流配置标识获取配置数据]
     * @param  {[type]} wfKey [description]
     * @return {[type]}       [description]
     */
    function findWfConfigByKey(wfKey) {
      // 清空下两个数组
      wfNodeCfgData = wfSwitchData = [];
      JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/findWfConfigDataByKey',{
        // 参数
        wfKey: wfKey
      },
      function success(result) {
        // 操作成功
        if(result.resCode==1){
          if (result.data!='') {
            var res = JSON.parse(result.data);
            // 对两个数组进行赋值
            if (res.wfNodeList) {
              wfNodeCfgData = JSON.parse(res.wfNodeList);
              console.log(wfNodeCfgData);
            }
            if (res.wfSwitchList) {
              wfSwitchData = JSON.parse(res.wfSwitchList);
              console.log(wfSwitchData)
            }
          }
        }else{
          alert(result.msg);
        }
      }, function error(error) {
        console.log(error);
      });
    }
    /**
     * [getAllRoles 获取OMS的所有角色]
     * @return {[type]} [description]
     */
    function getAllRoles() {
      var allRolesJson = localStorage.getItem('allRolesJson');
      // 如果缓存为空则获取数据
      if (allRolesJson==null||allRolesJson==''||allRolesJson=='null') {
        JQueryUtil.sendAsyncRCP(pathUrl + '/omsAndSso/getAllRoles',{
          // 参数
        },
        function success(result) {
          // 操作成功
          if(result.resCode==1){
            if (result.data!='') {
              allRolesJson = result.data;
              localStorage.setItem('allRolesJson', result.data);
            }else{
              alert('OMS角色组为空！');
              return;
            }
          }else{
            alert(result.msg);
          }
        }, function error(error) {
          console.log(error);
        });
      }
      // 得到角色组集合
      var roles = allRolesJson.split('|');
      for(var i=0;i<roles.length;i++) {
        if (roles[i]) {
          var role = roles[i].split(',');
          var obj = {
            value: role[0],
            text: role[1]
          }
          allRoles.push(obj);
        }
      }
    }
    /**
     * [selectedInputSetting 配置下拉框的数据源]
     * @return {[type]} [description]
     */
    function selectedInputSetting() {
      // debugger;
      if (allRoles && allRoles.length>0) {
        for(var i=0;i<allRoles.length;i++) {
          var role = allRoles[i];
          $('.chzn-select').append("<option value='"+role.value+"'>"+role.text+"</option>");
        }
        // 插件chosen.jquery动态插入数据后需要更新一下
        $('.chzn-select').trigger("chosen:updated");    
      }
    }
    /**
     * [setExecutingSelectedInput 在执行改派节点设置执行人后，给执行中节点的下拉框设置数据源]
     * @param {[type]} executeRoles [description]
     */
    function setExecutingSelectedInput(executeRoles) {
      if (executeRoles) {
        // debugger
        $('.zxz .chzn-select').html('')
        var arr = executeRoles.split(',');
        if (arr && arr.length>0 && allRoles && allRoles.length>0) {}
          for(var i=0;i<arr.length;i++) {
            var exe = arr[i];
            // 匹配组名称
            for(var j=0;j<allRoles.length;j++) {
              var role = allRoles[j];
              if (exe==role.value) {
                $('.zxz .chzn-select').append("<option value='"+role.value+"'>"+role.text+"</option>");
              }
            }
          }
          // 插件chosen.jquery动态插入数据后需要更新一下
          $('.zxz .chzn-select').trigger("chosen:updated");   
      }
    }
    /**
     * [getNodeConfigByNodeId 根据节点id获取该节点的配置数据]
     * @param  {[type]} nodeId [description]
     * @return {[type]}        [description]
     */
    function getNodeConfigByNodeId(nodeId) {
      var result = [];
      if (wfNodeCfgData && wfNodeCfgData.length>0) {
        for(var i=0;i<wfNodeCfgData.length;i++) {
          var nodeCfg = wfNodeCfgData[i];
          if (nodeCfg.nodeid==nodeId) {
            result.push(nodeCfg);
          }
        }
        return result;
      }else{
        alert('工作流节点配置数据为空！');
      }
    }
    /**
     * [getSwitchConfigByNodeId 根据节点id获取开关数据]
     * @param  {[type]} nodeId [description]
     * @return {[type]}        [description]
     */
    function getSwitchConfigByNodeId(nodeId) {
      if (wfSwitchData && wfSwitchData.length>0) {
        for(var i=0;i<wfSwitchData.length;i++) {
          var switchCfg = wfSwitchData[i];
          if (switchCfg.nodeid==nodeId) {
            return switchCfg;
          }
        }
      }else{
        alert('工作流开关配置数据为空！');
      }
    }
    /**
     * [workFlowNodeInit 根据配置数据进行节点展示的初始化]
     * @return {[type]} [description]
     */
    function workFlowNodeInit() {
      iszhipai.style.display = 'none'
      kspdsfzp.style.display = 'none'
      zppd.style.display = 'none'
      zppds.style.display = 'none'
      zppdszxgppz.style.display = 'none'
      zppdszxgppzf.style.display = 'none'
      zxzpz.style.display = 'none'
      yqsppz.style.display = 'none'
      zxztjpd.style.display = 'none'
      zxztjpdxyjpds.style.display = 'none'
      zxgppzhl.style.display = 'none'
      zxgppzf.style.display = 'none'
      zxgppzs.style.display = 'none'
      zxztjpdxyjpdf.style.display = 'none'
      end.style.display = 'none'
      // 只显示开始
      start.style.display = 'block'
      // 循环节点配置文件
      for(var i=0;i<wfSwitchData.length;i++) {
        // debugger
        var wfSwitch = wfSwitchData[i];
        // 如果角色组配置了则进入判断
        if (wfSwitch.onoff!='-1') {
          // 是否已指派
          if (wfSwitch.nodeid=='isAssigned') {
            if (wfSwitch.onoff=='true') {
                zppds.style.display = 'block';
                iszhipai.style.display = 'block';
            }else{
               kspdsfzp.style.display = 'block';
            }
          }else if (wfSwitch.nodeid=='isAssignNeedApprove') {
            // 是否需要执行改派审批
            if (wfSwitch.onoff=='true') {
              zppdszxgppz.style.display = 'block'
              zppd.style.display = 'block'
              zxzpz.style.display = 'block'
              yqsppz.style.display = 'block'
              zxztjpd.style.display = 'block'
              zxgppzhl.style.display = 'block'
              end.style.display = 'block'
            }else{
              zppdszxgppzf.style.display = 'block'
              zppd.style.display = 'block'
              zxzpz.style.display = 'block'
              yqsppz.style.display = 'block'
              zxztjpd.style.display = 'block'
              zxgppzhl.style.display = 'block'
              end.style.display = 'block'
            }
          }else if (wfSwitch.nodeid=='isDoNeedApprove') {
            // 工单是否需要审批
            if (wfSwitch.onoff=='true') {
              zxgppzs.style.display = 'block'
            }else{
              zxgppzf.style.display = 'block'
            }
          }else{
            // 工单是否需要验收
            if (wfSwitch.onoff=='true') {
              zxztjpdxyjpds.style.display = 'block' 
              end.style.display = 'block'  //完成节点
            }else{
              zxztjpdxyjpdf.style.display = 'block'
              end.style.display = 'block' //完成节点
            }
          }
        }
      } 

    }



 //保存退出
 $(".modalbc").on("click", function () {
     $('.tubjmodal').modal('hide');
   })
   //是否选项
 function radiooption(option, subop) {
   $(option).on("click", function () {
     $(".choose").css("display", "block")
   })
   $(subop).on("click", function () {
     $(this).find("b").css("display", 'block');
     $(this).siblings(subop).find("b").css("display", "none");
     $(".choose").css("display", "none")
     var text = "<span>" + $(this).find('span').text() + "</span>" + "<i class='fa fa-close faclear'></i>"
     $(option).html(text)

   })
   $(option).on("click", ".faclear", function (e) {
     $(option).html("")
     e.stopPropagation();
   })
 }


 var config = {

   '.chosen-select': {},

   '.chosen-select-deselect': {
     allow_single_deselect: true
   },

   '.chosen-select-no-single': {
     disable_search_threshold: 10
   },

   '.chosen-select-no-results': {
     no_results_text: 'Oops, nothing found!'
   },

   '.chosen-select-width': {
     width: "95%"
   }

 }

 for (var selector in config) {

   $(selector).chosen(config[selector]);

 }

