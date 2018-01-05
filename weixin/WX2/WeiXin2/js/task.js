$(function() {
    
    setNiceScroll(".optionSearch")

    //待处理详情
    tzdclDetail()
    showSearchOption()
    //呼出选择菜单
    showSearchOption('.option li')

      $.ajax({
                type:'get',
                url:"./11.json",
                dataType:'json',
                success:function (data) {
                    var str = ''
                    $.each(data,function (index,item) {
                        str+='<li class="clearfix">'+
                                '<a href="dclDetail.html">'+
                                    '<img src="img/ico-photo@1x.png" alt="">'+
                                '<dl>'+
                                    '<dt>堵塞漫溢</dt>'+
                                    '<dd>2017.06.26 12:30:30</dd>'+
                                    '<dd>阜成门内大街68号</dd>'+
                                '</dl>'+
                                '</a>'+
                            '</li>'
                    })
                    $("#aa").html(str)
                    mySwiper()
                },
                error:function (err) {
                    console.log(err)
                }
            })
})


//touch tab
function mySwiper() {
    mySwiper = new Swiper('.swiper-container', {
        autoHeight: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        onSlideChangeStart: function() {
            $(".taskTab a").removeClass('active');
            $(".taskTab a").eq(mySwiper.activeIndex).addClass('active');
        }
    });
    $(".taskTab li").on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active');
        mySwiper.slideTo($(this).index());
    });
    $(".taskTab li").click(function(e) {
        e.preventDefault();
    });
}


//待处理详情
function tzdclDetail() {
    $(".dcl li").on("click", function() {
        console.log(this)
    })
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
