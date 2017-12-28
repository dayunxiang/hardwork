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
    $(".scrollBox").css({
        "height": (h - 66 - 50) + "px",
        "width": w + "px"
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
        "height": (h - 66 - 60 - 50 - 40-50) + "px"
    })
    $(".csedit .secondBox").css({
        "height": (h - 66 - 60 - 50 - 40-50) + "px"
    })
    $(".csedit .thirdBox").css({
        "height": (h - 66 - 60 - 50 - 40-50) + "px"
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
