$(function() {
    mySwiper()
    setNiceScroll(".optionSearch")
})


//touch tab
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
        mySwiper.swipeTo($(this).index());
    });
    $(".taskTab li").click(function(e) {
        e.preventDefault();
    });
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
