var start = document.getElementById("kspd")
var iszhipai = document.getElementById("iszhipai")
var kspdsfzp = document.getElementById("kspdsfzp")
var kspdfzppzline = document.getElementById("kspdfzppzline")
var kspdfzppzrect = document.getElementById("kspdfzppzrect")
var zppd = document.getElementById("zppd")
var zppds = document.getElementById("zppds")
var zppdszxgppz = document.getElementById("zppdszxgppz")
var zppdszxgppzf = document.getElementById("zppdszxgppzf")
var zxzpz = document.getElementById("zxzpz")
var zxzguadan = document.getElementById("zxzguadan")
var zxgpzx = document.getElementById("zxgpzx")
var zxzjd = document.getElementById("zxzjd")
var zxztuidan = document.getElementById("zxztuidan")
var yqsppz = document.getElementById("yqsppz")
var zxztjpd = document.getElementById("zxztjpd")
var zxgppzhl = document.getElementById("zxgppzhl")
var zxgppzf = document.getElementById("zxgppzf")
var zxgppzs = document.getElementById("zxgppzs")
var zxztjpdxyjpdf = document.getElementById("zxztjpdxyjpdf")
var zxztjpdxyjpds = document.getElementById("zxztjpdxyjpds")
var end = document.getElementById("end")

// 节点默认全部关闭
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
start.style.display = 'none'

initScroll()

function initScroll() {
    $(".option> div").each(function(index, item) {
        console.log($(item).css("display"))
        if ($(item).css("display") == 'block') {
            setNiceScroll('optioncontentContainer', 'optioncontent');
        }
    })
}

//初始化滚动条
function setNiceScroll(containerClass1,containerClass2) {
  $("."+containerClass1).niceScroll("."+containerClass2, {
    cursorcolor: "#dfdfdf",
    autohidemode: false,
    cursorborderradius: 4,
    background: '#f8f8f8',
    cursorminheight: 32,
    disableoutline: true,
    zindex: 200
  }).show();
  $("."+containerClass1).niceScroll("."+containerClass2, {
    cursorcolor: "#dfdfdf",
    autohidemode: false,
    cursorborderradius: 4,
    background: '#f8f8f8',
    cursorminheight: 32,
    disableoutline: true,
    zindex: 200
  }).resize();
}

//清空
clear()
//添加颜色
function addcolor(next) {
$(next).css({
    "background-color": '#3D8BFB',
    "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
})
}
//删除颜色
function removeColor(next) {
$(next).css({
    "background-color": '#D7D7D7',
    "box-shadow": "0 0px 0px 0 rgba(215, 215, 215 0.50)",
})
}


//所有的都清空
function clear() {
// $("#dl_chose2").val("")
// $("#dl_chose2").trigger("chosen:updated");
$("#dl_chose3").val("")
$("#dl_chose3").trigger("chosen:updated");
// $("#dl_chose14").val("")
// $("#dl_chose14").trigger("chosen:updated");
$("#dl_chose15").val("")
$("#dl_chose15").trigger("chosen:updated");
$(".optionzpsp").empty()
$("#optionzxztjsfsp").empty()
$("#optiongdsfys").empty()
$(".zxztisp").css("display", 'none')
$(".gdsfyssho").css("display", 'none')


}

//点击开始判断 
function stratShow() {
    //所有的都清空
    clear()
    start.style.display = 'block'
    //option 控制
    // $(".option").toggleClass("optionClosed")
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'block')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    stratShowClick();
}

//指派 否
function zp() {
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'block')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    ZhiPaiClick('nextb');
}
//指派 是
function zps() {
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'block')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    ZhiPaiClick('nextbf');
}
//是否指派审批
function sfzpsp() {
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'block')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    ZhiPaiShenPiClick();
}

//执行或改派
function zxORgp() {
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'block')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    ZhiXingGaiPai();
}

//执行中
function zxz() {
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'block')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    ZhiXingIng();
}

//延期审批
function yqsp() {
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'block')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    YanQiShenPi();
}

//执行中判断
function zxzpd() {
    $(".option").css('transform', 'translateX(0px)')
    //控制option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'block')
    $(".gdsfys").css("display", 'none')
    initScroll()
    GongDanShenPi();
}

function xyjpd() {
    $(".option").css('transform', 'translateX(0px)')
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'block')
    initScroll()
    GongDanYanShou();
}

// ------------------------------各个可点击节点的点击事件------------------------------------------------------
/**
 * [stratShowClick 开始按钮盘点击事件]
 * @return {[type]} [description]
 */
function stratShowClick() {
    // 给文本框赋值
    var cfg = getSwitchConfigByNodeId('isAssigned');
    if (cfg.onoff!='-1') {
        if (cfg.onoff=='true') {
            var text = "<span>是</span>" + "<i class='fa fa-close faclear'></i>"
            $(".optionpz").html(text)
        }else{
            var text = "<span>否</span>" + "<i class='fa fa-close faclear'></i>"
            $(".optionpz").html(text)
        }
    }else{
        $(".optionpz").html('')
    }
}

/**
 * [ZhiPaiClick 指派节点]
 */
function ZhiPaiClick(select) {
    var cfg = getNodeConfigByNodeId('assigned')[0];
    if (cfg.roles!='-1') {
        if (select=='nextb') {
            chose_mult_set_ini('#dl_chose2', cfg.roles);
            addcolor('#nextb')
        }else{
            chose_mult_set_ini('#dl_chose16', cfg.roles);
            addcolor('#nextbf')
        }
    }else{
        chose_mult_set_ini('#dl_chose16', '');
    }
}
/**
 * [ZhiPaiShenPiClick 是否需要指派审批]
 */
function ZhiPaiShenPiClick() {
    var cfg = getSwitchConfigByNodeId('isAssignNeedApprove');
    if (cfg.onoff!='-1') {
        if (cfg.onoff=='true') {
            var text = "<span>是</span>" + "<i class='fa fa-close faclear'></i>"
            $(".optionzpsp").html(text)
            // 获取审批人
            var nodeCfg = getNodeConfigByNodeId('assignApproveUsers')[0];
            chose_mult_set_ini('#dl_chose3',nodeCfg.roles);
        }else{
            var text = "<span>否</span>" + "<i class='fa fa-close faclear'></i>"
            $(".optionzpsp").html(text)
        }
        addcolor('#nextc')
    }else{
        $(".optionzpsp").html('')
    }
}
/**
 * [ZhiXingGaiPai 执行改派节点]
 */
function ZhiXingGaiPai() {
    // 执行改派
    var cfgList = getNodeConfigByNodeId('implementAndReassignment');
    for(var i=0;i<cfgList.length;i++) {
        var cfg = cfgList[i];
        var doId = cfg.doid;
        var doShowName = cfg.doshowname;
        var roles = cfg.roles;
        // 改派
        if (doId=='reassignment'&&doShowName=='改派'&&roles!='-1') {
            chose_mult_set_ini('#dl_chose4',roles);
        }else if(doId=='reassignment'&&doShowName=='改派'&&roles=='-1'){
            chose_mult_set_ini('#dl_chose4','')
        }
        // 接单
        if (doId=='implement'&&doShowName=='接单'&&roles!='-1') {
            chose_mult_set_ini('#dl_chose5',roles);
        }else if(doId=='implement'&&doShowName=='接单'&&roles=='-1'){
            chose_mult_set_ini('#dl_chose5','')
        }
        // 启用了转单功能——转单人员
        if (doId=='reassignment'&&doShowName=='转单'&&roles!='-1') {
            // debugger
            // 勾选启用转单功能单选框
            $("#qyzjdgn").find("input").attr('checked',true); 
            // 显示转单dom
            $(".zd").css("display", "block"); 
            $(".zwzd").css("display", "block"); 
            // 给文本框赋值
            chose_mult_set_ini('#dl_chose6',roles);
        }else if (doId=='reassignment'&&doShowName=='转单'&&roles=='-1'){
            // 勾选启用转单功能单选框
            $("#qyzjdgn").find("input").attr('checked',false); 
            // 显示转单dom
            $(".zd").css("display", "none"); 
            $(".zwzd").css("display", "none"); 
            chose_mult_set_ini('#dl_chose6','')
        }
        // 转外接单人员
        if (doId=='implement'&&doShowName=='转外接单'&&roles!='-1') {
            chose_mult_set_ini('#dl_chose7',roles);
        }else if (doId=='implement'&&doShowName=='转外接单'&&roles=='-1'){
            chose_mult_set_ini('#dl_chose7','')
        }
    }
    addcolor('#nextd')
}
/**
 * [ZhiXingIng 执行中节点]
 */
function ZhiXingIng() {
    // 获取执行改派中的接单人员json
    var cfgList = getNodeConfigByNodeId('implementAndReassignment');
    for(var i=0;i<cfgList.length;i++) {
        var cfg = cfgList[i];
        var doId = cfg.doid;
        var doShowName = cfg.doshowname;
        var roles = cfg.roles;
        // 挂单
        if (doId=='implement'&&doShowName=='接单') {
            chose_mult_set_ini('#dl_chose8',roles);
            chose_mult_set_ini('#dl_chose9',roles);
            chose_mult_set_ini('#dl_chose10',roles);
            chose_mult_set_ini('#dl_chose11',roles);
        }
    }
    $('#dl_chose11').prop('disabled', true).trigger("chosen:updated");
    addcolor('#nexte')
}
/**
 * [YanQiShenPi 延期审批]
 */
function YanQiShenPi() {
    // 延期审批点击事件
    var cfg = getNodeConfigByNodeId('delayApprove')[0];
    // debugger
    if (cfg.roles!='-1') {
        chose_mult_set_ini('#dl_chose13',cfg.roles);
        addcolor('#nextf')
    }else{
        chose_mult_set_ini('#dl_chose13','');
    }
}
/**
 * [GongDanShenPi 工单是否需要审批]
 */
function GongDanShenPi() {
    // 是否工单审批点击事件
    var cfg = getSwitchConfigByNodeId('isDoNeedApprove');
    if (cfg.onoff!='-1') {
        if (cfg.onoff=='true') {
            var text = "<span>是</span>" + "<i class='fa fa-close faclear'></i>"
            $("#optionzxztjsfsp").html(text)
            // 获取审批人
            var nodeCfg = getNodeConfigByNodeId('doNeedApprove')[0];
            chose_mult_set_ini('#dl_chose14',nodeCfg.roles);
        }else{
            var text = "<span>否</span>" + "<i class='fa fa-close faclear'></i>"
            $("#optionzxztjsfsp").html(text)
        }
        addcolor('#nextg')
    }else{
        $("#optionzxztjsfsp").html('')
    }
}
/**
 * [GongDanYanShou 工单是否需要验收]
 */
function GongDanYanShou() {
    // 是否需要工单验收点击事件
    // debugger
    var cfg = getSwitchConfigByNodeId('isNeedAcceptApprove');
    if (cfg.onoff!='-1') {
        if (cfg.onoff=='true') {
            var text = "<span>是</span>" + "<i class='fa fa-close faclear'></i>"
            $("#optiongdsfys").html(text)
            // 获取审批人
            var nodeCfg = getNodeConfigByNodeId('acceptApprove')[0];
            chose_mult_set_ini('#dl_chose15',nodeCfg.roles);
        }else{
            var text = "<span>否</span>" + "<i class='fa fa-close faclear'></i>"
            $("#optiongdsfys").html(text)
        }
        addcolor('#nexth')
    }else{
        $("#optiongdsfys").html('')
    }
}





// ------------------------------各个下一步按钮的点击事件------------------------------------------------------
//判断是否指派
//下一步
$("#nexta").off('click').on("click", function() {
    var callBackFunA = function(res) {
        if (res.resCode==1) {
            console.log('是否指派配置成功！');
            findWfConfigByKey(currentWfKey);
            // 更新成功后跳往下一步
            if ($(".optionpz").find("span").text() == '是') {
                //点击下一步到 执行或改派
                $(".start").css("display", 'none')
                $(".designate").css("display", 'none')
                $(".appointApproval").css("display", 'none')
                $(".zxORgp").css("display", 'block')
                $(".zxz").css("display", 'none')
                $(".yqsp").css("display", 'none')
                $(".zxztjsfsp").css("display", 'none')
                $(".gdsfys").css("display", 'none')
                // ZhiPaiClick('nextbf');
                ZhiXingGaiPai()
            } else if ($(".optionpz").find("span").text() == '否') {
                //点击下一步到 指派人
                $(".start").css("display", 'none')
                $(".designate").css("display", 'block')
                $(".appointApproval").css("display", 'none')
                ZhiPaiClick('nextb');
            }

        }else{
            alert(res.msg);
        }
    }
    initScroll()
    if (currentWfKey=='') {
        alert('currentWfKey不得为空！');
        return;
    }
    // 获取是否已经指派
    var isZp = '';
    // debugger
    if ($(".optionpz").find("span").text() == '是') {
        isZp = 'true';
    }else{
        isZp = 'false';
    }
    
    initScroll()
    // 更新是否已指派
    updateNodeSwitchByNodeId(currentWfKey,'isAssigned',isZp,callBackFunA);
    initScroll()
});
$(".optionpz").on("DOMSubtreeModified", function() {
if ($(this).find("span").text() == '是') {
    iszhipai.style.display = 'block';
    zppds.style.display = 'block';

    // kspdsfzp.style.display = 'none'
    // zppd.style.display = 'none'
    // zppdszxgppz.style.display = 'none'
    // zppdszxgppzf.style.display = 'none'
    // zxzpz.style.display = 'none'
    // yqsppz.style.display = 'none'
    // zxztjpd.style.display = 'none'
    // zxztjpdxyjpds.style.display = 'none'
    // zxgppzhl.style.display = 'none'
    // zxgppzf.style.display = 'none'
    // zxgppzs.style.display = 'none'
    // zxztjpdxyjpdf.style.display = 'none'
    // end.style.display = 'none'

    addcolor("#nexta")


} else if ($(this).find("span").text() == '否') {

    kspdsfzp.style.display = 'block'
    // iszhipai.style.display = 'none';
    // zppd.style.display = 'none'
    // zppds.style.display = 'none'

    // zppdszxgppz.style.display = 'none'
    // zppdszxgppzf.style.display = 'none'
    // zxzpz.style.display = 'none'
    // yqsppz.style.display = 'none'
    // zxztjpd.style.display = 'none'
    // zxztjpdxyjpds.style.display = 'none'
    // zxgppzhl.style.display = 'none'
    // zxgppzf.style.display = 'none'
    // zxgppzs.style.display = 'none'
    // zxztjpdxyjpdf.style.display = 'none'
    // end.style.display = 'none'
    addcolor("#nexta")
} else {

    removeColor("#nexta")
}
});

// 配置指派人否 的上下步
//配置指派人 上一步
$("#preb").off('click').on("click", function() {
    $(".start").css("display", 'block')
    $(".designate").css("display", 'none')
     initScroll()
    stratShowClick();
    initScroll()
   
});
//配置指派人 下一步
$("#nextb").off('click').on("click", function() {
if (!($("#dl_chose2").val() == "")) {
    // 回调
    var callBackFunB = function(res) {
        if (res.resCode==1) {
            console.log('指派人设置成功！');
            findWfConfigByKey(currentWfKey);
            zppd.style.display = 'block';
            $(".designate").css("display", 'none')
            $(".appointApproval").css("display", 'block')
        }else{
            alert(res.msg);
            return;
        }
         initScroll()
        ZhiPaiShenPiClick();
    }
    // 获取指派人
    var zhiPaiPerson = getJsonFromArray($('#dl_chose2').val());
    if (zhiPaiPerson=='') {
        alert('角色组数据不得为空！');
        return;
    } 
    initScroll()
    updateNodeRoleByNodeId(currentWfKey,'assigned',zhiPaiPerson,callBackFunB);
     initScroll()
}

});
$("#dl_chose2").change(function() {
    initScroll()
if (!($("#dl_chose2").val() == "")) {
    addcolor("#nextb")
} else {
    removeColor("#nextb")
}
});

//开始判断-是-执行中配置挂单 配置人
//配置指派人 下一步
$("#nextbf").off('click').on("click", function() {
if (!($("#dl_chose16").val() == "")) {

    // 回调
    var callBackFunBF = function(res) {
        if (res.resCode==1) {
            console.log('指派人设置成功！');
            findWfConfigByKey(currentWfKey);
            zppd.style.display = 'block';
            $(".designateS").css("display", 'none');
            $(".appointApproval").css("display", 'block');
        }else{
            alert(res.msg);
            return;
        }
        ZhiPaiShenPiClick();
    }
    // 获取指派人
    var zhiPaiPerson = getJsonFromArray($('#dl_chose16').val());
    if (zhiPaiPerson=='') {
        alert('角色组数据不得为空！');
        return;
    } 
    updateNodeRoleByNodeId(currentWfKey,'assigned',zhiPaiPerson,callBackFunBF);
}
initScroll()

});
$("#dl_chose16").change(function() {
    initScroll()
if (!($("#dl_chose16").val() == "")) {
    addcolor("#nextbf")
} else {
    removeColor("#nextbf")
}
});


//判断是否指派审批
//点击上一步到 配置指派人
$("#prec").off('click').on("click", function() {
if (iszhipai.style.display == 'block') {
    //控制svg
    kspdsfzp.style.display = 'none'
    //option
    $(".designateS").css("display", 'block')
    $(".designate").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    initScroll()
    ZhiPaiClick('nextbf')
} else if (iszhipai.style.display == 'none') {
     //控制svg
    kspdsfzp.style.display = 'block'
    //option
    $(".designate").css("display", 'block')
    $(".appointApproval").css("display", 'none')
    $(".designateS").css("display", 'none')
     initScroll()
    ZhiPaiClick('nextb')
}
initScroll()

});
//下一步
$("#nextc").off('click').on("click", function() {
    var callBackFunC = function(res) {
        if (res.resCode==1) {
            // debugger
            console.log('指派审批节点设置成功！')
            findWfConfigByKey(currentWfKey);
            if ($("#optionzpsp").find("span").text() == '是') {
                if (!($("#dl_chose3").val() == "")) {
                    //点击下一步到 指派人
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'block')
                }
            } else if ($("#optionzpsp").find("span").text() == '否') {
                //点击下一步到 指派人
                $(".appointApproval").css("display", 'none')
                $(".designate").css("display", 'none')
                $(".zxORgp").css("display", 'block')
            }
            initScroll()
            ZhiXingGaiPai();
        }else{
            alert(res.msg);
            return;
        }
    

    }
    // 获取是否指派审批
    var isNeed = '';
    if ($("#optionzpsp").find("span").text() == '是') {
        isNeed = 'true';
    }else{
        isNeed = 'false';
    }
    // 获取指派人
    var person = getJsonFromArray($('#dl_chose3').val());
    if (isNeed=='true' && person=='') {
        alert('角色组数据不得为空！');
        return;
    } 
    initScroll()
    approvalCategorySetting(currentWfKey,'assignApprove',isNeed,person,callBackFunC);
     initScroll()
});
$("#optionzpsp").on("DOMSubtreeModified", function() {
if ($(this).find("span").text() == '是') {
    $(".zpspr").css("display", 'block')
    //控制svg
    // kspdsfzp.style.display = 'block'
    zppdszxgppz.style.display = 'block'
    zppdszxgppzf.style.display = 'none'
    $("#dl_chose3").change(function() {
        initScroll()
        if (!($("#dl_chose3").val() == "")) {
            addcolor("#nextc")
        } else {
            removeColor("#nextc")
        }
    })

} else if ($(this).find("span").text() == '否') {
    $(".zpspr").css("display", 'none')
    addcolor("#nextc")
    //控制svg
    // kspdsfzp.style.display = 'block'
    zppd.style.display = 'block'
    zppdszxgppz.style.display = 'none'
    zppdszxgppzf.style.display = 'block'

} else {
    removeColor("#nextc")
}
});

//执行或改派
$("#qyzjdgn").find("input").on("change", function() {
zxhgp();

if ($("#qyzjdgn").find("input").is(':checked')) {
    $(".zd").css("display", "block");
    $(".zwzd").css("display", "block");
} else {
    $(".zd").css("display", "none");
    $(".zwzd").css("display", "none");
    $("#dl_chose6").val("")
    $("#dl_chose7").val("")
    $("#dl_chose6").trigger("chosen:updated");
    $("#dl_chose7").trigger("chosen:updated");

}
});
//执行或改派的上一步
$("#pred").off('click').on("click", function() {
    if (iszhipai.style.display == 'block') {
        //svg
        //option
        $(".start").css("display", 'block')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        ZhiPaiClick('nextbf')
    } else if (iszhipai.style.display == 'none') {
        //option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'block')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        ZhiPaiClick('nextb')

    }
    initScroll()

})
//执行或改派 下一步
$("#nextd").off('click').on("click", function() {
    // 回调
    var callBackFunD = function(res) {
        if (res.resCode==1) {
            console.log('执行改派节点设置成功！');
            findWfConfigByKey(currentWfKey);
            // 在执行改派节点设置执行人后，给执行中节点的下拉框设置数据源
            setExecutingSelectedInput(jieDanPerson);
            // 样式控制
            if ($("#dl_chose4").val() != "" && $("#dl_chose5").val() != "" && $("#qyzjdgn").find("input").is(':checked') == false) {
                if (iszhipai.style.display == 'block') {
                    zxzpz.style.display = 'block';
                    zxzguadan.style.display = 'block';
                    zxztuidan.style.display = 'block';
                    zppds.style.display = 'block';
                    yqsppz.style.display = 'block';

                    zxgppzhl.style.display = 'block';
                    end.style.display = 'block';
                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')
                } else if (iszhipai.style.display == "none") {
                    //执行或改派 下一步
                    zxzpz.style.display = 'block';
                    yqsppz.style.display = 'block';
                    zxgppzhl.style.display = 'block';
                    end.style.display = 'block';
                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')
                }
            } else if (($("#dl_chose4").val() != "") && ($("#dl_chose5").val() != "") && ($("#dl_chose6").val() != "") && ($("#dl_chose7").val() != "") 
                && ($("#qyzjdgn").find("input").is(':checked') == true)) {
                if (iszhipai.style.display == 'block') {
                    //执行或改派 下一步
                    zxzpz.style.display = 'block';
                    kspdsfzp.style.display = 'block';
                    kspdfzppzline.style.display = 'none';
                    kspdfzppzrect.style.display = 'none';
                    yqsppz.style.display = 'block';
                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')
                } else if (iszhipai.style.display == "none") {
                    //执行或改派 下一步
                    zxzpz.style.display = 'block';
                    yqsppz.style.display = 'block';
                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')
                }
            }
            ZhiXingIng();
        }else{
            alert(res.msg);
            return;
        }
    }
    // debugger;
    // 改派人员
    var gaiPaiPerson = getJsonFromArray($('#dl_chose4').val());
    // 接单人员
    var jieDanPerson = getJsonFromArray($('#dl_chose5').val());
    // 是否启用转单功能
    var ifTurn = '';
    if ($("#qyzjdgn").find("input").is(':checked')==true) {
        ifTurn = '1';
    }else{
        ifTurn = '0';
    }
    // 可以转单的人员
    var turnPersion = getJsonFromArray($('#dl_chose6').val());
    // 转外接单人员
    var turnImplementPerson = getJsonFromArray($('#dl_chose7').val());
    if (gaiPaiPerson==''||jieDanPerson=='') {
        alert('角色组数据不得为空！');
        return;
    } 
    if (ifTurn=='1') {
        if (turnPersion==''||turnImplementPerson=='') {
            alert('角色组数据不得为空！');
            return;
        }
    }
    initScroll()
    implementAndReassignmentSetting(currentWfKey,gaiPaiPerson,jieDanPerson,ifTurn,turnPersion,turnImplementPerson,callBackFunD);
    initScroll()
})
$(".zxORgp [id^='dl_chose']").each(function(index, value) {

$(value).change(function() {
initScroll()
    zxhgp()
})

})
zxhgp()


//执行改派 非空验证
function zxhgp() {
if ($("#dl_chose4").val() != "" && $("#dl_chose5").val() != ""
    && $("#qyzjdgn").find("input").is(':checked') == false) {
    addcolor("#nextd")
} else if (($("#dl_chose4").val() != "") && ($("#dl_chose5").val() != "") 
    && ($("#dl_chose6").val() != "") && ($("#dl_chose7").val() != "") 
    && ($("#qyzjdgn").find("input").is(':checked') == true)) {
    addcolor("#nextd")
} else {
    removeColor("#nextd")
}
}

//执行中 option 非空 上下步
//上一步
$("#pree").off('click').on("click", function() {
    // option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'block')
    $(".zxz").css("display", 'none')
    initScroll()
    ZhiXingGaiPai();

});
$("#nexte").off('click').on("click", function() {
    var callBackFunE = function(res) {
        if (res.resCode==1) {
            console.log('执行中节点配置成功！');
            findWfConfigByKey(currentWfKey);
            // debugger
            if ($("#dl_chose8").val() != "" && $("#dl_chose9").val() != "" && $("#dl_chose10").val() != "" 
                && $("#dl_chose11").val() != "") {
                // debugger
                if (iszhipai.style.display == 'block') {
                    //svg
                    zxzpz.style.display = 'block';
                    zxzguadan.style.display = 'block';
                    zxztuidan.style.display = 'block';
                    // option
                    $(".start").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'none')
                    $(".yqsp").css("display", 'block')
                } else if (iszhipai.style.display == 'none') {
                    yqsppz.style.display = 'block'
                    $(".start").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'none')
                    $(".yqsp").css("display", 'block')
                }
            }
             initScroll()
            YanQiShenPi();
        }else{
            alert(res.msg);
            return;
        }
    }
    // debugger
    // 具有延期权限的角色组
    var delayStr = getJsonFromArray($('#dl_chose8').val());
    // 具有挂单权限的角色组
    var hangUpStr = getJsonFromArray($('#dl_chose9').val());
    // 具有退单权限的角色组
    var backStr = getJsonFromArray($('#dl_chose10').val());
    // 具有回单（提交）权限的角色组
    var submitStr = getJsonFromArray($('#dl_chose11').val());
    if (delayStr==''||hangUpStr==''||backStr==''||submitStr=='') {
        alert('角色组数据不得为空！');
        return;
    }
    initScroll()
    executingSetting(currentWfKey,delayStr,hangUpStr,backStr,submitStr,callBackFunE);
    initScroll()


});
$(".zxz [id^='dl_chose']").each(function(index, value) {
$(value).change(function() {
   initScroll()
    if ($("#dl_chose8").val() != "" && $("#dl_chose9").val() != "" && $("#dl_chose10").val() != "" 
        && $("#dl_chose11").val() != "") {
        addcolor("#nexte")
    } else {
        removeColor("#nexte")
    }
})
});
  if ($("#dl_chose8").val() != "" && $("#dl_chose9").val() != "" && $("#dl_chose10").val() != "" 
        && $("#dl_chose11").val() != "") {
        addcolor("#nexte")
    } else {
        removeColor("#nexte")
    }

//延期审批非空 上下步
//上一步
$("#pref").off('click').on("click", function() {
    // option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'block')
    $(".yqsp").css("display", 'none')
    initScroll()
    ZhiXingIng();

});
//下一步

$("#nextf").off('click').on("click", function() {
    var callBackFunF = function(res) {
        if (res.resCode==1) {
            // debugger
            console.log('延期审批人配置成功！');
            findWfConfigByKey(currentWfKey);
            if (!($("#dl_chose13").val() == "")) {
                zxztjpd.style.display = "block"
                // option
                $(".start").css("display", 'none')
                $(".designate").css("display", 'none')
                $(".appointApproval").css("display", 'none')
                $(".zxORgp").css("display", 'none')
                $(".zxz").css("display", 'none')
                $(".yqsp").css("display", 'none')
                $(".zxztjsfsp").css("display", 'block')
            }
             initScroll()
            GongDanShenPi();
        }else{
            alert(res.msg);
            return;
        }
    }
    // debugger
    var person = getJsonFromArray($('#dl_chose13').val());
    if (person=='') {
        alert('角色组数据不得为空！');
        return;
    }
    initScroll()
    updateNodeRoleByNodeId(currentWfKey,'delayApprove',person,callBackFunF);
     initScroll()
});
$("#dl_chose13").change(function() {
    initScroll()
if (!($("#dl_chose13").val() == "")) {
    addcolor("#nextf")

} else {
    removeColor("#nextf")

}
});



//执行中提交是否审批
//上一步
$("#preg").off('click').on("click", function() {
    // option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'block')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'none')
    initScroll()
    YanQiShenPi();

});
//配置下步
$("#nextg").off('click').on("click", function() {
    var callBackFunG = function(res) {
        if (res.resCode==1) {
            console.log('工单审批节点设置成功！');
            findWfConfigByKey(currentWfKey);
            if ($("#optionzxztjsfsp").find("span").text() == '是') {
                if (!($("#dl_chose14").val() == "")) {
                    // option
                    $(".start").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'none')
                    $(".yqsp").css("display", 'none')
                    $(".zxztjsfsp").css("display", 'none')
                    $(".gdsfys").css("display", 'block')
                }
            } else if ($("#optionzxztjsfsp").find("span").text() == '否') {
                // option
                $(".start").css("display", 'none')
                $(".designate").css("display", 'none')
                $(".appointApproval").css("display", 'none')
                $(".zxORgp").css("display", 'none')
                $(".zxz").css("display", 'none')
                $(".yqsp").css("display", 'none')
                $(".zxztjsfsp").css("display", 'none')
                $(".gdsfys").css("display", 'block')
            }
            GongDanYanShou();
        }else{
            alert(res.msg);
            return;
        }
    }
    var isNeed = '';
    if ($("#optionzxztjsfsp").find("span").text() == '是') {
        isNeed = 'true';
    }else{
        isNeed = 'false';
    }
    // debugger
    // 获取审批人
    var person = getJsonFromArray($('#dl_chose14').val());
    if (isNeed=='true' && person=='') {
        alert('角色组数据不得为空！');
        return;
    } 
    initScroll()
    approvalCategorySetting(currentWfKey,'doNeedApprove',isNeed,person,callBackFunG);
     initScroll()
});
$("#optionzxztjsfsp").on("DOMSubtreeModified", function() {

if ($(this).find("span").text() == '是') {
    $(".zxztisp").css("display", 'block')
    zxgppzf.style.display = 'none'
    zxgppzs.style.display = 'block'
    $("#dl_chose14").change(function() {
        if (!($("#dl_chose14").val() == "")) {
            addcolor("#nextg")

        } else {
            removeColor("#nextg")
        }
    })

} else if ($(this).find("span").text() == '否') {
    addcolor("#nextg")
    $(".zxztisp").css("display", 'none')
    zxgppzf.style.display = 'block'
    zxgppzs.style.display = 'none'


} else {
    removeColor("#nextg")
}
});



//是否验收
//配置上下步
$("#preh").off('click').on("click", function() {
    // option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'block')
    $(".gdsfys").css("display", 'none')
    initScroll()
    GongDanShenPi();

});
//点击提交
$("#nexth").off('click').on("click",function () {

    var callBackFunH = function(res) {
        // debugger
        findWfConfigByKey(currentWfKey);
        // 判断工作流是否配置完整？
         initScroll()
        judgeIsComplete();
        if (res.resCode==1) {
            if ($("#optiongdsfys").find("span").text() == '是') {
                 if (!($("#dl_chose15").val() == "")) {
                    console.log(111)
                 }
            }else if($("#optiongdsfys").find("span").text() == '否'){
                    console.log(222)

            }
        }else{
            alert(res.msg);
            return;
        }
    }
    // debugger
    var isNeed = '';
    if ($("#optiongdsfys").find("span").text() == '是') {
        isNeed = 'true';
    }else{
        isNeed = 'false';
    }
    // 获取指派人
    var person = getJsonFromArray($('#dl_chose15').val());
    if (isNeed=='true' && person=='') {
        alert('角色组数据不得为空！');
        return;
    } 
    initScroll()
    approvalCategorySetting(currentWfKey,'acceptApprove',isNeed,person,callBackFunH);
     initScroll()
})
$("#optiongdsfys").on("DOMSubtreeModified", function() {
if ($(this).find("span").text() == '是') {
    $(".gdsfyssho").css("display", 'block')
    zxztjpdxyjpds.style.display = "block"
    zxztjpdxyjpdf.style.display = "none"
    end.style.display = "block"
    $("#dl_chose15").change(function() {
        if (!($("#dl_chose15").val() == "")) {
            addcolor("#nexth")

        } else {
            removeColor("#nexth")
        }
    })
} else if ($(this).find("span").text() == '否') {
    $(".gdsfyssho").css("display", 'none')
    addcolor("#nexth")
    zxztjpdxyjpds.style.display = "none"
    zxztjpdxyjpdf.style.display = "block"
    end.style.display = "block"
} else {
    removeColor("#nexth")
}
});
