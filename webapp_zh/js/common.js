$(function() {
    height()
    $(window).on("resize", function() {
        height()
    })

   
})

// 设置高度
function height() {
    var whdef = 100 / 1618; // 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight; // 当前窗口的高度
    var wW = window.innerWidth; // 当前窗口的宽度
    var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;



    //警情监控
    $(".topBanner").css({
        "width": w + "px"
    })
    $(".mainWrap").css({
        "height": (h) + "px",
        "width": w + "px"
    })
    $(".sideBar").css({
        "height": (h) + "px"
    })
    $(".newBox").css({
        "height": (h - 66 - 50) + "px",
       
    })
     $(".newMain").css({
        "height": (h - 66 - 50-60-30) + "px",
       
    })
    $(".newForm").css({
        "height": (h - 66 - 50-60-30) + "px",
       
    })
     $(".newMap").css({
        "height": (h - 66 - 50-60-30) + "px",
       
    })
    $(".tabh").css({
        "min-height": (h - 66 - 50 - 76 - 70 - 50) + "px"
    })
    $("#map").css({
        "height": (h - 66 - 50 - 60 - 9 - 15) + "px"

    })
    $(".table-cons").css({
        "min-height": (h - 66 - 50 - 76 - 90) + "px"

    })
    $(".repairContent").css({
        "height": (h - 66 - 50 - 51 - 15 - 30) + "px"

    })
    $(".repairConRight #map").css({
        "height": (h - 66 - 50 - 51 - 15 - 30) + "px"

    })
    $(".repiarConLeft").css({
        "height": (h - 66 - 50 - 51 - 15 - 30) + "px"

    })
    $(".repairUp").css({
        "height": (h - 66 - 50 - 51 - 15 - 30) / 2 - 10 + "px"
    })
    $(".repairDown").css({
        "height": (h - 66 - 50 - 51 - 15 - 30) / 2 - 10 + "px"
    })


    $(".repairCont").css({
        "height": (h - 66 - 96 - 60 - 32) + "px"

    })
    $(".repairCont .table-cons").css({
        "height": (h - 66 - 96 - 60 - 32) + "px"
    })
    $(".repairCont .repairRight").css({
        "height": (h - 66 - 96 - 60 - 32) + "px"
    })
    $(".repairRight #myChart").css({
        "height": (h - 66 - 96 - 60 - 32 - 50) + "px"
    })

    $(".taskPanel-body").css({
        "height": (h - 66) + "px"
    })
    $(".taskPanel-body .asset-list").css({
        "height": (h - 66 - 60) + "px"
    })
    $(".taskPanel-body .asset-list .qucols").css({
        "height": (h - 66 - 60) + "px"
    })
    $(".taskPanel-body .asset-list .qylist").css({
        "height": (h - 66 - 60 - 15 - 50) + "px"
    })

    $(".taskPanel-body .asset-list .bjcols").css({
        "height": (h - 66 - 60) + "px"
    })
    $(".taskPanel-body .asset-list .bjlist").css({
        "height": (h - 66 - 60 - 15 - 50) + "px"
    })
    $(".mapcols").css({
        "height": (h - 66 - 60) + "px"
    })
    $(".mapcols #map").css({
        "height": (h - 66 - 60) + "px"
    })
    $(".csedit").css({
        "height": (h - 66 - 60 - 50) + "px"
    })
    $(".csedit .asset-list").css({
        "height": (h - 66 - 60 - 50 - 40) + "px"
    })
    $(".csedit .fican").css({
        "height": (h - 66 - 60 - 50 - 40) + "px"
    })
    $(".csedit .thcan").css({
        "height": (h - 66 - 60 - 50 - 40) + "px"
    })
    $(".csedit .thican").css({
        "height": (h - 66 - 60 - 50 - 40) + "px"
    })
    $(".csedit .firstBox").css({
        "height": (h - 66 - 60 - 50 - 40 - 50) + "px"
    })
    $(".csedit .secondBox").css({
        "height": (h - 66 - 60 - 50 - 40 - 50) + "px"
    })
    $(".csedit .thirdBox").css({
        "height": (h - 66 - 60 - 50 - 40 - 50) + "px"
    })

    // $(".rowleft").css({
    //     "height": (h - 66 - 60 - 40)/3*2 + "px"
    // })
    //   $(".rowright").css({
    //     "height": (h - 66 - 60 - 40)/3*2 + "px"
    // })
    //   $(".sprow").css({
    //     "height": (h - 66 - 60 - 40)/3+ "px"
    // })
    // $(".modal-dialog").css({
    //     "height": (h-66-50-76-70-30) + "px",

    // })
    // $(".modal-content").css({
    //     "height": (h-66-50-76-70-40) + "px",

    // })

}

function initBar() {
    setNiceScroll(".swiper-container");
    setNiceScroll(".modal-dialog")
    setNiceScroll(".repairLeft")
    setNiceScroll(".qylist")
    setNiceScroll(".bjlist")
    setNiceScroll(".firstBox")
    setNiceScroll(".secondBox")
    setNiceScroll(".thirdBox")




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


//模拟title
function hovermn(ele) {
    console.log(111)
    var x = -20;
    var y = 30;
    $(ele).on("mouseover", "img", function(e) {
        this.myTitle = this.text();
        this.text('');
        var tooltip = "<div id='tooltip'>" + this.myTitle + "<\/div>"; //创建 div 元素 文字提示
        $("body").append(tooltip); //把它追加到文档中
        $("#tooltip")
            .css({
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            }).show(); //设置x坐标和y坐标，并且显示
    })
    $(ele).on("mouseout", "img", function() {
        this.text(this.myTitle);
        $("#tooltip").remove(); //移除 
    })
    $(ele).on("mousemove", "img", function(e) {
        $("#tooltip")
            .css({
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            });
    });
}


//select
function select(select, selectOption) {
    $(select).on("click", function() {
        $(selectOption).css("display", 'block')
        $(this).parent().parent().siblings().find('.selectOption').css("display", 'none')
        stopBubble("e")
    })
    $(selectOption).find('li').on("click", function() {
        $(select).find('span').text($(this).text())
        $(selectOption).css("display", 'none')
        $(this).attr("selected","selected")
        stopBubble("e")
    })
    $(document).click(function() {
        $(selectOption).css("display", 'none')
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
