$(function() {
    height()
    $(window).on("resize", function() {
        height()
    })
})

// 设置高度
function height() {
    var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight; // 当前窗口的高度
    var wW = window.innerWidth; // 当前窗口的宽度
    var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    $(".wuzitongji").css({ "height": (h - 66 - 45) + "px", "width": (w - 30) + "px" })
    $(".wuzitongji .main").css({ "height": (h - 66 - 75) + "px", "width": (w - 30) + "px" })
    $("#fxren").css({ "height": (h - 66 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })
    $("#fxwu").css({ "height": (h - 66 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })

    $(".xunjingqingtongji").css({ "height": (h - 66 - 45) + "px", "width": (w - 30) + "px" })
    $(".xunjingqingtongji .main").css({ "height": (h - 66 - 75) + "px", "width": (w - 30) + "px" })
    $("#xunqing").css({ "height": (h - 66 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })
    $("#jingqing").css({ "height": (h - 66 - 75 - 80) + "px", "width": ((w - 30) / 2) + "px" })

    $(".xitongjianjie").css({ "height": (h - 66 - 30) + "px", "width": (w - 30) + "px" })
    $(".xitongjianjie .intro").css({ "height": (h - 66 - 30) + "px", "width": (w - 30 - 60) / 3 * 2 + "px" })
    $(".xitongjianjie .weather").css({ "height": (h - 66 - 30) + "px", "width": (w - 30 - 60) / 3 + "px" })
    $(".xitongjianjie .intro .intromain").css({ "height": (h - 66 - 30 - 40) + "px", "width": (w - 30 - 60) / 3 * 2 + "px" })
    $(".xitongjianjie .weather .weathermain").css({ "height": (h - 66 - 30 - 40) + "px", "width": (w - 30 - 60) / 3 + "px" })

    //防汛应急
    $(".mainContainer").css({ "height": h + "px", "width": w + "px" })
    // $(".mainContainer .sideBar").css({ "height": (h - 66) + "px" })
    $(".mainContainer .sideBar .tabContContainer").css({ "height": (h - 66 - 71 - 41 - 5) + "px" })
    $(".mainContainer .sideBar .tabContContainer .tabcontent").css({ "height": (h - 66 - 71 - 41 - 5 - 9) + "px" })
    $(".mainContainer .sideBar .tabContContainer .tabcontent .shistatus").css({ "height": (h - 66) + "px" })
    $(".mainContainer .sideBar .tabContContainer .tabcontent .shistatus .subcontent").css({ "height": (h - 66 - 73-9) + "px" })

    $(".mainContainer .sideBar .tabContContainer .tabcontent .detail").css({ "height": (h-66)  + "px","width":(w-300)+"px" })
    $(".mainContainer .sideBar .tabContContainer .tabcontent .detail .detailContainer").css({ "height": (h-66-72-9)  + "px","width":(w-300)+"px" })
}

//tab
function tabcount(eleid, activeclass, subareatabcontent) {
    $(eleid + ' li').click(function() {
        var index = $(this).index();
        $(this).addClass(activeclass);
        $(this).siblings('li').removeClass(activeclass)
        $(subareatabcontent).eq(index).show().siblings(subareatabcontent).hide();
        setNiceScroll(".tabcontent")
        setNiceScroll(".subcontent")
        setNiceScroll(".detailContainer")
    })
}
//select
function select(select, selectOption) {
    $(select).on("click", function() {
        $(selectOption).css("display", 'block')
        stopBubble("e")

    })
    $(selectOption).find('li').on("click", function() {
        $(select).find('span').text($(this).text())
        $(selectOption).css("display", 'none')
        stopBubble("e")
    })
}
//阻止事件冒泡的通用函数
function stopBubble(e) {
    // 如果传入了事件对象，那么就是非ie浏览器
    if (e && e.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        //否则我们使用ie的方法来取消事件冒泡
        window.event.cancelBubble = true;
    }
}


//滚动条
function setNiceScroll(containerClass1) {
    $(containerClass1).niceScroll({
        cursorcolor: "#dfdfdf",
        autohidemode: false,
        // cursorborderradius: 4,
        background: '#f8f8f8',
        cursorminheight: 32,
        // disableoutline: true,
    }).show();
    $(containerClass1).niceScroll({
        cursorcolor: "#dfdfdf",
        autohidemode: false,
        // cursorborderradius: 4,
        background: '#f8f8f8',
        cursorminheight: 32,
        // disableoutline: true,
    }).resize();
}
