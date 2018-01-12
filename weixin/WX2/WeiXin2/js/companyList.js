$(function () {
   var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  listSwiper()
  //添加单位
  $(".addCompany input").on("click",function () {
    window.location.href = './addCompany.html'
  })
})
//touch tab
function listSwiper() {
    mySwiper = new Swiper('.swiper-container', {
        autoHeight: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        onSlideChangeStart: function() {
            $(".listTab a").removeClass('active');
            $(".listTab a").eq(mySwiper.activeIndex).addClass('active');
        }
    });
    $(".listTab li").on('click', function(e) {
      console.log(111)
        e.preventDefault();
        $(this).addClass('active');
        mySwiper.slideTo($(this).index());
    });
    $(".listTab li").click(function(e) {
        e.preventDefault();
    });
}
