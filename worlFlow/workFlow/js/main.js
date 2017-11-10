var start = document.getElementById("kspd")
var iszhipai = document.getElementById("iszhipai") //判断是否指派-是(执行中改派)
var kspdsfzp = document.getElementById("kspdsfzp") //开始判断是否指派-否(配置指派人)
// var kspdfzppzline = document.getElementById("kspdfzppzline")
// var kspdfzppzrect = document.getElementById("kspdfzppzrect")
var zppd = document.getElementById("zppd") //指派判断配置
var zppds = document.getElementById("zppds") //判断是否指派-是(配置指派人)
var zppdszxgppz = document.getElementById("zppdszxgppz") //指派判断配置-是
var zppdszxgppzf = document.getElementById("zppdszxgppzf") //指派判断配置-否
var zxzpz = document.getElementById("zxzpz") //执行中配置(包括退单挂单)
var zxzguadan = document.getElementById("zxzguadan") //执行中 挂单节点
var zxgpzx = document.getElementById("zxgpzx") // 执行中 执行节点
var zxzjd = document.getElementById("zxzjd") //执行中  执行中节点
var zxztuidan = document.getElementById("zxztuidan") //执行中 退单节点
var yqsppz = document.getElementById("yqsppz") //延期审批配置
var zxztjpd = document.getElementById("zxztjpd") //执行中提交判断
var zxgppzhl = document.getElementById("zxgppzhl") // 忽略
var zxgppzf = document.getElementById("zxgppzf") // 执行中提交判断-否(包括验收判断节点)
var zxgppzs = document.getElementById("zxgppzs") // 执行中提交判断 - 是(包括验收判断节点)
var zxztjpdxyjpdf = document.getElementById("zxztjpdxyjpdf") // 验收-否
var zxztjpdxyjpds = document.getElementById("zxztjpdxyjpds") // 验收 - 是
var end = document.getElementById("end")

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

start.style.display = 'block'
// console.log($(".option> div").css("display"))
initScroll()

function initScroll() {
    $(".option> div").each(function(index, item) {
        console.log($(item).css("display"))
        if ($(item).css("display") == 'block') {
            setNiceScroll('optioncontentContainer', 'optioncontent');
        }
    })
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

//执行改派 非空验证
function zxhgp() {
    if ($("#zxORgp0").attr('feik') == "feik" && $("#zxORgp1").attr('feik') == "feik" && $("#qyzjdgn").find("input").is(':checked') == false) {
        addcolor("#nextd")
    } else if (($("#zxORgp0").attr('feik') == "feik") && ($("#zxORgp1").attr('feik') == "feik") && ($("#zxORgp2").attr('feik') == "feik") && ($("#zxORgp3").attr('feik') == "feik") && ($("#qyzjdgn").find("input").is(':checked') == true)) {
        addcolor("#nextd")
    } else {
        removeColor("#nextd")
    }
}
//所有的都清空
function clear() {
    $("#dl_chose2").val("")
    $("#dl_chose2").trigger("chosen:updated");
    $("#dl_chose3").val("")
    $("#dl_chose3").trigger("chosen:updated");
    $("#dl_chose14").val("")
    $("#dl_chose14").trigger("chosen:updated");
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
}

//指派 否
function zp() {
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
}
//指派 是
function zps() {
    console.log("zps")
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
}
//是否指派审批
function sfzpsp() {
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
}

//执行或改派
function zxORgp() {
    console.log('zxORgp')
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
}

//执行中
function zxz() {
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
}

//延期审批
function yqsp() {
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
}

//执行中判断
function zxzpd() {
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
}

function xyjpd() {
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".designateS").css("display", 'none')

    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'none')
    $(".yqsp").css("display", 'none')
    $(".zxztjsfsp").css("display", 'none')
    $(".gdsfys").css("display", 'block')
}

//判断是否指派
//下一步
$("#nexta").on("click", function() {

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
    } else if ($(".optionpz").find("span").text() == '否') {
        //点击下一步到 指派人
        $(".start").css("display", 'none')
        $(".designate").css("display", 'block')
        $(".appointApproval").css("display", 'none')
    }
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

        iszhipai.style.display = 'none';
        kspdsfzp.style.display = 'block'
        zppd.style.display = 'none'
        zppds.style.display = 'none'

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
$("#preb").on("click", function() {
    
    $(".start").css("display", 'block')
    $(".designate").css("display", 'none')
    initScroll()
});
//配置指派人 下一步
$("#nextb").on("click", function() {

    if (!($("#dl_chose2").val() == "")) {


        zppd.style.display = 'block';
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'block')
    }
    initScroll()
});
$("#dl_chose2").change(function() {
   

    if (!($("#dl_chose2").val() == "")) {


        addcolor("#nextb")
    } else {
        removeColor("#nextb")
    }
});

//开始判断-是-执行中配置挂单 配置人
//配置指派人 下一步
$("#nextbf").on("click", function() {
    

    if (!($("#dl_chose16").val() == "")) {


        zppd.style.display = 'block';
        $(".designateS").css("display", 'none');
        $(".appointApproval").css("display", 'block');
    }
    initScroll()
});
$("#dl_chose16").change(function() {
   

    if (!($("#dl_chose16").val() == "")) {


        addcolor("#nextbf")
    } else {
        removeColor("#nextbf")
    }
});


//判断是否指派审批
//点击上一步到 配置指派人
$("#prec").on("click", function() {


    if (iszhipai.style.display == 'block') {


        //控制svg
        kspdsfzp.style.display = 'none'
        //option
        $(".designateS").css("display", 'block')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')

    } else if (iszhipai.style.display == 'none') {


        //控制svg
        kspdsfzp.style.display = 'block'
        //option
        $(".designate").css("display", 'block')
        $(".appointApproval").css("display", 'none')
        $(".designateS").css("display", 'none')
    }
 initScroll()
});

//下一步
$("#nextc").on("click", function() {
    

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
});
$("#optionzpsp").on("DOMSubtreeModified", function() {
    if ($(this).find("span").text() == '是') {


        $(".zpspr").css("display", 'block')
        //控制svg
        // kspdsfzp.style.display = 'block'
        zppdszxgppz.style.display = 'block'
        zppdszxgppzf.style.display = 'none'
        $("#dl_chose3").change(function() {
            

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
        $("#zxORgp2").val("")
        $("#zxORgp3").val("")
        $("#zxORgp2").trigger("chosen:updated");
        $("#zxORgp3").trigger("chosen:updated");

    }
});
//执行或改派的上一步
$("#pred").on("click", function() {
    

    if (iszhipai.style.display == 'block') {
        //svg
        //option
        $(".start").css("display", 'block')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
    } else if (iszhipai.style.display == 'none') {
        //option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'block')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')

    }
     initScroll()
})
//执行或改派 下一步
$("#nextd").on("click", function() {
   

    if ($("#zxORgp0").attr('feik') == "feik" && $("#zxORgp1").attr('feik') == "feik" && $("#qyzjdgn").find("input").is(':checked') == false) {
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
    } else if (($("#zxORgp0").attr('feik') == "feik") && ($("#zxORgp1").attr('feik') == "feik") && ($("#zxORgp2").attr('feik') == "feik") && ($("#zxORgp3").attr('feik') == "feik") && ($("#qyzjdgn").find("input").is(':checked') == true)) {
        if (iszhipai.style.display == 'block') {
            //执行或改派 下一步
            iszhipai.style.display = 'block'
            zxzpz.style.display = 'block';
            // kspdsfzp.style.display = 'block';
            // kspdfzppzline.style.display = 'none';
            // kspdfzppzrect.style.display = 'none';
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
     initScroll()
})
$(".zxORgp [id^='dl_chose']").each(function(index, value) {
     

    $(value).change(function() {
        

        if (!($(this).val() == "")) {


            $(this).attr("feik", "feik")
            $(this).attr("id", "zxORgp" + index)
        } else {
            $(this).removeAttr("feik")
        }

        zxhgp()
    })

})


//执行中 option 非空 上下步
//上一步
$("#pree").on("click", function() {
   

    // option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'block')
    $(".zxz").css("display", 'none')
     initScroll()
});
$("#nexte").on("click", function() {
   

    if ($("#zxz0").attr('fnull') == "fnull" && $("#zxz1").attr('fnull') == "fnull" && $("#zxz2").attr('fnull') == "fnull" && $("#zxz3").attr('fnull') == "fnull" && $("#zxz4").attr('fnull') == "fnull") {
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
});
$(".zxz [id^='dl_chose']").each(function(index, value) {
    $(value).change(function() {
        

        if (!($(this).val() == "")) {

            $(this).attr("fnull", "fnull")
            $(this).attr("id", "zxz" + index)
        } else {
            $(this).removeAttr("fnull")
        }
        if ($("#zxz0").attr('fnull') == "fnull" && $("#zxz1").attr('fnull') == "fnull" && $("#zxz2").attr('fnull') == "fnull" && $("#zxz3").attr('fnull') == "fnull" && $("#zxz4").attr('fnull') == "fnull") {
            addcolor("#nexte")
        } else {
            removeColor("#nexte")
        }
    })
});

//延期审批非空 上下步
//上一步
$("#pref").on("click", function() {
    

    // option
    $(".start").css("display", 'none')
    $(".designate").css("display", 'none')
    $(".appointApproval").css("display", 'none')
    $(".zxORgp").css("display", 'none')
    $(".zxz").css("display", 'block')
    $(".yqsp").css("display", 'none')
     initScroll()
});
//下一步

$("#nextf").on("click", function() {
   

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
});
$("#dl_chose13").change(function() {
   

    if (!($("#dl_chose13").val() == "")) {


        addcolor("#nextf")

    } else {
        removeColor("#nextf")

    }
});



//执行中提交是否审批
//上一步
$("#preg").on("click", function() {
     

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
});
//配置下步
$("#nextg").on("click", function() {
   

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
     initScroll()
});



//是否验收
//配置上下步
$("#preh").on("click", function() {
  

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
});
//点击提交
$("#nexth").on("click", function() {
  

    if ($("#optiongdsfys").find("span").text() == '是') {
        if (!($("#dl_chose15").val() == "")) {
            console.log(111)
        }
    } else if ($("#optiongdsfys").find("span").text() == '否') {
        console.log(222)
    }
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
