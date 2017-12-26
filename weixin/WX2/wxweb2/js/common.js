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
        'height': (h - 64) + "px"
    });
    //用户管理
    $(".userContainer").css({
        'height': (h - 64 - 60 - 24 - 30) + "px",
    });
     //用户表格
    $(".usermanaContainer").css({
        'height': (h - 64 - 60 - 24 - 30 - 60 - 20 - 50) + "px"
    });
    //警情管理
     $(".jqContainer").css({
        'height': (h - 64 - 60 - 24 - 30) + "px",
    });
     //警情表格
     $(".jqmanaContainer").css({
        'height': (h - 64 - 60 - 24 - 30 - 60 - 20 - 50) + "px"
    });
     //待处理警情
     $(".jqdclContainer").css({
        'height': (h - 64 - 60 - 24 - 30) + "px",
    });
     //详情地图
     $(".detailmap").css({
        'height': (h - 64 - 60 - 24 - 30-70-340) + "px",
    });
     $("#map").css({
        'height': (h - 64 - 60 - 24 - 30-70-340-20) + "px",
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
   

}


// sideBar-mini切换

function changeSideBarMini() {
    $(".sideBar").on("mouseover", function() {
        if (!$('.sideBar').hasClass('sideBar-mini')) {
            $('.sideBar').addClass('sideBar-mini');
            $(".mainContainer").css("padding-left", '64px')

        } else {
            $('.sideBar').removeClass('sideBar-mini');
            $(".mainContainer").css("padding-left", '250px')


        }
    }).on("mouseout", function() {
        if (!$('.sideBar').hasClass('sideBar-mini')) {
            $('.sideBar').addClass('sideBar-mini');
            $(".mainContainer").css("padding-left", '64px')


        } else {
            $('.sideBar').removeClass('sideBar-mini');
            $(".mainContainer").css("padding-left", '250px')


        }
    })
}


//模拟title
function hovermn(ele) {
    var x = -20;
    var y = 30;
    $(ele).on("mouseover", ".tooltip", function(e) {
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>" + this.myTitle + "<\/div>"; //创建 div 元素 文字提示
        $("body").append(tooltip); //把它追加到文档中
        $("#tooltip")
            .css({
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            }).show(); //设置x坐标和y坐标，并且显示
    })
    $(ele).on("mouseout", ".tooltip", function() {
        this.title = this.myTitle;
        $("#tooltip").remove(); //移除 
    })
    $(ele).on("mousemove", ".tooltip", function(e) {
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
