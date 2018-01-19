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

  $(".return").on("click", function() {
      window.history.back()
  })

  //关闭选项
  $(".zs_layout .optionSearch .optiontitle>img").on("click", function() {
      $(".zs_layout .optionSearch").hide()
      $(".masker").hide()
  })


  /**
   * [warningConten 生成警告框]
   * @return {[type]} [警告内容]
   */
  function warningConten(text) {
      var str = ' <div class="warningContainer">' + text + '</div>'
      $(".zs_layout").append(str)
      $(".warningContainer").fadeIn(300)
      setTimeout(function() {
          $(".warningContainer").fadeOut(300)
      }, 1000)

  }

  //转发选择菜单
  function showZF() {
      $(".zfIco img").on("click", function() {
          $(".masker").show()
          $(".zfContainer").show(200);
      })
      $(".zfContainer .optioncont li").on("click", function() {
          var str = '<img src="img/ico-yes@3x.png" alt="" class="yes">'
          $(this).append(str)
          $(this).siblings('li').find('img').remove()

      })
      $(".button input").on("click", function() {
          $(".zfContainer").hide(200)
          $(".masker").hide()
      })
      //关闭选项
      $(".zs_layout .zfContainer .optiontitle>img").on("click", function() {
          $(".zs_layout .zfContainer").hide()
          $(".masker").hide()
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
