$(function() {
    //创建文本编辑器
     var E = window.wangEditor
        var editor1 = new E('#div1', '#div2')  // 两个参数也可以传入 elem 对象，class 选择器
        editor1.create()


    height()

    // setNiceScroll(".jqzjtabcontent")
    //tab
    tabcount(".jqzjsideBar .jqzjtabBar", 'now', '.jqzjsideBar .jqzjtabcontent')
    tabcount(".jqtabcontainer .jqtabBar", 'now', '.jqtabcontainer .jqtabcontent')
    //select
    select('.jqzjsideBar .jqzjoption .select', '.jqzjsideBar .jqzjoption .selectOption')
    select('.jqtabcontent .top .select', '.jqtabcontent .top .selectOption')
    select('.addjqzjreport .select2', '.addjqzjreport .selectOption2')
    select('.addjqzjreport .select1', '.addjqzjreport .selectOption1')
    //init swiper
    initSwiper()
    //关闭 待处理详情
    closedclDetail()
    //打开 待处理详情
    opendclDetail()
    //收起.jqzjsideBar
    closejqzjsideBar()
    //打开jqzjsideBar 
    openjqzjsideBar()
    //关闭分类
    closefl()
    //打开分类
    openfl()
    addbq()
    removebq()
    closebab()
    openbg()
})

//init swiper
function initSwiper() {
    var mySwiper = new Swiper('#swiper-container4', {
        slidesPerView: 6,
        spaceBetween: 20,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
    })
    var mySwiper = new Swiper('#swiper-container5', {
        slidesPerView: 3,
        spaceBetween: 0,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
    })
    var mySwiper = new Swiper('#swiper-container6', {
        slidesPerView: 3,
        spaceBetween: 0,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
    })

}

//关闭 待处理详情
function closedclDetail() {
    $(".jqzjsideBar .dclDetail .detailtitle img").on("click", function() {
        $(".jqzjsideBar  .dclDetail").hide()
    })
}
//打开 待处理详情
function opendclDetail() {
    $(".jqzjsideBar .jqzjtabContContainer .jqzjtabcontent table .opendclDetail").on("click", function() {
        $(".jqzjsideBar .dclDetail").show()
        $('.jqzjsideBar  .dclfenlei').hide()

        initBar()
    })
}

//收起.jqzjsideBar
function closejqzjsideBar() {
    $(".jqzjsideBar .jqzjtitle span").on("click", function() {
        $(".jqzjsideBar").hide()
        closeall()
    })
}

//打开jqzjsideBar 
function openjqzjsideBar() {
    $(".mainContainer .sideBarBrand .right>span").on("click", function() {
        $(".jqzjsideBar").show()
        initBar()
        closeall()
    })
}

//关闭分类
function closefl() {
    $(".jqzjsideBar  .dclfenlei .subtitle img").on("click", function() {
        $('.jqzjsideBar  .dclfenlei').hide()
    })
}
//打开分类
function openfl() {
    $(".jqzjsideBar .jqzjtabContContainer .jqzjtabcontent table .openfl").on("click", function() {
        $('.jqzjsideBar .dclfenlei').show()
        $(".jqzjsideBar  .dclDetail").hide()
        initBar()
    })
}

//关闭所有
function closeall() {
    $(".jqzjsideBar .dclDetail").hide()
    $('.jqzjsideBar .dclfenlei').hide()
}

//添加标签
function addbq() {
    $(".add").on("click", function() {
        console.log('add')
    })
}
//删除标签
function removebq() {
    $(".removebq").on("click", function() {
        $(this).parent().parent().remove()
    })
}
//关闭新建宝宝
function closebab() {
    $(".jqzjsideBar .addjqzjreport .addjqzjtitle img").on("click",function () {
        $(".jqzjsideBar .addjqzjreport").hide()  
    })
}

//打开新建报告
function openbg() {
    $("#addbg").on("click",function () {
          $(".jqzjsideBar .addjqzjreport").show() 
    })
}
