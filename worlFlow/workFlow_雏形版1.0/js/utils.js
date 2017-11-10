
	// 后台服务路径前缀
 	var pathUrl = 'http://127.0.0.1:8086/activity';

  	/**
	 * 动态控制模态框的公共方法
	 * @param _data：要传递的数据
	 * @param _title：显示的标头
	 * @param _btnText：按钮显示的文本
	 * @param _clickEvent：调用的事件
	 */
	function formModalPublicSetting(_data, _title, _content, _btnText,
			_clickEvent) {
		//设置标题
		$('#formModalLabel').text(_title);
		//追加主体内容
		if (_content != null) {
			$('#formModalBody').empty().append(_content);
		} else {
			$('#formModalBody').empty().append('');
		}
		//设置事件按钮的文字
		$("#_btn").text(_btnText);
		//为按钮绑定事件,并传参
		// 此处设置按钮只能点击一次，防止多次点击造成数据错误
		$('#_btn').one('click', {
			obj : _data
		}, _clickEvent);
		$('#formModal').modal('show');
	};

	/**
	 * chosen.jquery动态选中事件
	 * @param  {[type]} select [description]
	 * @param  {[type]} values [description]
	 * @return {[type]}        [description]
	 */
    function chose_mult_set_ini(select, values) {
        var arr = values.split(',');
        var length = arr.length;
        var value = '';
        for (i = 0; i < length; i++) {
            value = arr[i];
            $(select + " option[value='" + value + "']").attr('selected', 'selected');
        }
        $(select).trigger("chosen:updated");
    }
    /**
     * [getJsonFromArray 从数组中获取拼接后的字符串]
     * @param  {[type]} arrayData [description]
     * @return {[type]}           [description]
     */
    function getJsonFromArray(arrayData) {
      var resJson = '';
      if (arrayData&&arrayData.length>0) {
        for(var i=0;i<arrayData.length;i++) {
          var arr = arrayData[i];
          resJson += arr + ',';
        }
        if (resJson.length>0) {
          resJson = resJson.substring(0, resJson.length-1);
        }
      }
      return resJson;
    }

    // ------------------------------------------ 公共方法区 ------------------------------------
    /**
     * [updateNodeSwitchByNodeId 根据节点id设置开关]
     * @param  {[type]} workFlowKey     [description]
     * @param  {[type]} nodeId          [description]
     * @param  {[type]} cfgValue        [description]
     * @param  {[type]} callBackFuntion [description]
     * @return {[type]}                 [description]
     */
   function updateNodeSwitchByNodeId(workFlowKey,nodeId,cfgValue,callBackFuntion) {
   	JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/updateNodeSwitchByNodeId',{
        // 参数
        workFlowKey: workFlowKey,
        nodeId: nodeId,
        cfgValue: cfgValue
      },
      function success(result) {
        callBackFuntion(result);
      }, function error(error) {
        console.log(error);
      });
   }   
   /**
    * [updateNodeRoleByNodeId 根据节点id设置角色组]
    * @param  {[type]} workFlowKey     [description]
    * @param  {[type]} nodeId          [description]
    * @param  {[type]} cfgValue        [description]
    * @param  {[type]} callBackFuntion [description]
    * @return {[type]}                 [description]
    */
   function updateNodeRoleByNodeId(workFlowKey,nodeId,roles,callBackFuntion) {
   	JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/updateNodeRoleByNodeId',{
        // 参数
        workFlowKey: workFlowKey,
        nodeId: nodeId,
        roles: roles
      },
      function success(result) {
        callBackFuntion(result);
      }, function error(error) {
        console.log(error);
      });
   }
   /**
    * [implementAndReassignmentSetting 执行、改派节点配置]
    * @param  {[type]} workFlowKey         [工作流模板key]
    * @param  {[type]} reassignPerson      [改派人员]
    * @param  {[type]} implementPerson     [接单人员]
    * @param  {[type]} ifTurn              [是否启用转单]
    * @param  {[type]} turnPerson          [转单人员]
    * @param  {[type]} turnImplementPerson [转外接单人员]
    * @param  {[type]} callBackFuntion     [description]
    * @return {[type]}                     [description]
    */
  function implementAndReassignmentSetting(workFlowKey,reassignPerson,implementPerson,
        ifTurn,turnPerson,turnImplementPerson,callBackFuntion) {
    JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/implementAndReassignmentSetting',{
        // 参数
        workFlowKey: workFlowKey,
        reassignPerson: reassignPerson,
        implementPerson: implementPerson,
        ifTurn: ifTurn,
        turnPerson: turnPerson,
        turnImplementPerson: turnImplementPerson
      },
      function success(result) {
        callBackFuntion(result);
      }, function error(error) {
        console.log(error);
      });
   }  
   /**
    * [approvalCategorySetting 审批类设置：指派审批、工单审批和工单验收三个节点的配置]
    * @param  {[type]} workFlowKey         [description]
    * @param  {[type]} reassignPerson      [description]
    * @param  {[type]} implementPerson     [description]
    * @param  {[type]} ifTurn              [description]
    * @param  {[type]} turnPerson          [description]
    * @param  {[type]} turnImplementPerson [description]
    * @param  {[type]} callBackFuntion     [description]
    * @return {[type]}                     [description]
    */
   function approvalCategorySetting(workFlowKey,approvalType,isNeed,approver,callBackFuntion) {
    JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/approvalCategorySetting',{
        // 参数
        workFlowKey: workFlowKey,
        approvalType: approvalType,
        isNeed: isNeed,
        approver: approver
      },
      function success(result) {
        callBackFuntion(result);
      }, function error(error) {
        console.log(error);
      });
   }   
   /**
    * [executingSetting 执行中节点配置]
    * @param  {[type]} workFlowKey     [description]
    * @param  {[type]} delayStr        [description]
    * @param  {[type]} hangUpStr       [description]
    * @param  {[type]} backStr         [description]
    * @param  {[type]} submitStr       [description]
    * @param  {[type]} callBackFuntion [description]
    * @return {[type]}                 [description]
    */
   function executingSetting(workFlowKey,delayStr,hangUpStr,backStr,submitStr,callBackFuntion) {
    JQueryUtil.sendAsyncRCP(pathUrl + '/workFlowConfigController/executingSetting',{
        // 参数
        workFlowKey: workFlowKey,
        delayStr: delayStr,
        hangUpStr: hangUpStr,
        backStr: backStr,
        submitStr: submitStr
      },
      function success(result) {
        callBackFuntion(result);
      }, function error(error) {
        console.log(error);
      });
   }
