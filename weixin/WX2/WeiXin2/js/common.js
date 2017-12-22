  //呼出选择菜单
  function showSearchOption(ele) {
      $(ele).on("click", function() {
          $(".masker").show()
          $(".optionSearch").show(200);
          that = this
      })
      $(".optionSearch .optioncont li").on("click", function() {
          console.log($(that).find('span').first())
          $(that).find('span').first().text($(this).text())
          $(".optionSearch").hide(200)
          $(".masker").hide()
      })
  }

$(".return").on("click",function () {
   window.history.back()
})

//关闭选项
$(".zs_layout .optionSearch .optiontitle>img").on("click",function () {
  $(".zs_layout .optionSearch").hide()
  $(".masker").hide()
})
