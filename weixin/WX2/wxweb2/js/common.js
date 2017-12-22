$(function() {
    height()
    changeSideBarMini()
    $(window).on("resize", function() {
        height()
    })

})

// 设置高度
function height() {
    var whdef = 100 / 1680; // 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight; // 当前窗口的高度
    var wW = window.innerWidth; // 当前窗口的宽度
    var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


    //wrap
    $(".wrap").css({
        'height': h + "px",
        'width': w + 'px'
    });
    // 侧边栏
    $(".sideBar").css({
        'height': h + "px"
    });
    // 中间内容容器
    $(".mainContainer").css({
        'height': h + "px"
    });
    $(".content").css({
        'height': (h-64) + "px"
    });
    $(".userContainer").css({
        'height': (h-64-60-24-30) + "px",
    });

    // 删除容器
    $(".deleteContainer").css({
        'height': h + "px",
        'width': w + 'px'
    });
    //编辑容器
    $(".editContainer").css({
        'height': h + "px",
        'width': w + 'px'
    });
    //新建单位容器
    $(".newunitContainer").css({
        'height': h + "px",
        'width': w + 'px'
    });
    //login
    $(".loginContainer").css({
        'height': h + "px",
        'width': w + 'px'
    });
    //用户表格
    $(".usermanaContainer").css({
         'height': (h-64-60-24-30-60-20-50) + "px"
    });

}


// sideBar-mini切换

function changeSideBarMini() {
    $(".sideBar").on("mouseover",function () {
          if (!$('.sideBar').hasClass('sideBar-mini')) {
            $('.sideBar').addClass('sideBar-mini');
           $(".mainContainer").css("padding-left",'64px')

        }else{
            $('.sideBar').removeClass('sideBar-mini');
           $(".mainContainer").css("padding-left",'250px')
           

        }
    }).on("mouseout",function () {
          if (!$('.sideBar').hasClass('sideBar-mini')) {
            $('.sideBar').addClass('sideBar-mini');
           $(".mainContainer").css("padding-left",'64px')
           

        }else{
            $('.sideBar').removeClass('sideBar-mini');
           $(".mainContainer").css("padding-left",'250px')
           

        }
    })
}
