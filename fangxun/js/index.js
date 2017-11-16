$(function() {
    height()
    $(window).on("resize", function() {
        height()
    })
})

// 设置高度
function height() {
    var whdef = 100/1920; // 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight; // 当前窗口的高度
    var wW = window.innerWidth; // 当前窗口的宽度
    var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    $(".wuzitongji").css({ "height": (h - 86 - 45) + "px", "width": (w - 30) + "px" })
    $(".wuzitongji .main").css({ "height": (h - 86 - 75) + "px", "width": (w - 30) + "px" })
    $("#fxren").css({ "height": (h - 86 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })
    $("#fxwu").css({ "height": (h - 86 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })

    $(".xunjingqingtongji").css({ "height": (h - 86 - 45) + "px", "width": (w - 30) + "px" })
    $(".xunjingqingtongji .main").css({ "height": (h - 86 - 75) + "px", "width": (w - 30) + "px" })
    $("#xunqing").css({ "height": (h - 86 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })
    $("#jingqing").css({ "height": (h - 86 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })

    $(".xitongjianjie").css({ "height": (h - 86 - 30) + "px", "width": (w - 30) + "px" })
    $(".xitongjianjie .intro").css({ "height": (h - 86 - 30) + "px", "width": (w - 30 - 60) / 3 * 2 + "px" })
    $(".xitongjianjie .weather").css({ "height": (h - 86 - 30) + "px", "width": (w - 30 - 60) / 3 + "px" })
    $(".xitongjianjie .intro .intromain").css({ "height": (h - 86 - 30 - 40) + "px", "width": (w - 30 - 60) / 3 * 2 + "px" })
    $(".xitongjianjie .weather .weathermain").css({ "height": (h - 86 - 30 - 40) + "px", "width": (w - 30 - 60) / 3 + "px" })

}
