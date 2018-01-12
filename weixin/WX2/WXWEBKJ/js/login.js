$(function () {
  //微信登录
 showERwm()
})
//微信登录
function showERwm() {
  $('.loginContent .zhmm .kjdl .pic img').on('click',function () {
    $(".wxewm").show()
    $(".zhmm").hide()
  })
}
