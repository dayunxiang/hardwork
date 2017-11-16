$(function() {
height()
 $(window).on("resize", function () {
     height()
   })
})

// 设置高度
function height() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    $(".wuzitongji").css({"height":(h-86-60)+"px","width":(w-30)+"px"})
    $(".wuzitongji .main").css({"height":(h-86-90)+"px","width":(w-30)+"px"})
    $("#fxren").css({"height":(h-86-90-80)+"px","width":((w-30)/2)+"px"})
    $("#fxwu").css({"height":(h-86-90-80)+"px","width":((w-30)/2)+"px"})

    $(".xunjingqingtongji").css({"height":(h-86-60)+"px","width":(w-30)+"px"})
    $(".xunjingqingtongji .main").css({"height":(h-86-90)+"px","width":(w-30)+"px"})
    $("#xunqing").css({"height":(h-86-90-80)+"px","width":((w-30)/2)+"px"})
    $("#jingqing").css({"height":(h-86-90-80)+"px","width":((w-30)/2)+"px"})

    $(".xitongjianjie").css({"height":(h-86-60)+"px","width":(w-30)+"px"})
    $(".xitongjianjie .intro").css({"height":(h-86-60)+"px","width":(w-30-60)/3*2+"px"})
    $(".xitongjianjie .weather").css({"height":(h-86-60)+"px","width":(w-30-60)/3+"px"})
    $(".xitongjianjie .intro .intromain").css({"height":(h-86-60-40)+"px","width":(w-30-60)/3*2+"px"})
    $(".xitongjianjie .weather .weathermain").css({"height":(h-86-60-40)+"px","width":(w-30-60)/3+"px"})

  }
   
