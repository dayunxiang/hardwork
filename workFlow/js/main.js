var start = document.getElementById("开始判断")
var iszhipai = document.getElementById("开始判断是执行改派配置")
var kspdsfzp = document.getElementById("开始判断否指派配置")
  // var kspdfzppzline = document.getElementsByClassName("kspdfzppzline")
  // var kspdfzppzrect  = document.getElementsByClassName("kspdfzppzrect")
var kspdfzppzline = document.getElementById("kspdfzppzline")
var kspdfzppzrect = document.getElementById("kspdfzppzrect")
var zppd = document.getElementById("指派配置判断")
var zppds = document.getElementById("开始判断-是-执行中配置挂单")
var zppdszxgppz = document.getElementById("指派配置判断-是（执行改派配置）")
var zppdszxgppzf = document.getElementById("指派配置判断-否（执行改派配置）")
var zxzpz = document.getElementById("执行中配置")
var yqsppz = document.getElementById("延期审批配置")
var zxztjpd = document.getElementById("执行中提交判断")
var zxgppzhl = document.getElementById("执行改派配置-忽略")
var zxgppzf = document.getElementById("执行中提交判断-否")
var zxgppzs = document.getElementById("执行中提交判断-是")
var zxztjpdxyjpdf = document.getElementById("执行中提交判断-下一级判断-否")
var zxztjpdxyjpds = document.getElementById("执行中提交判断-下一级判断-是")
var end = document.getElementById("完成")
var number = 0;
  //添加颜色
function addcolor(pre, next) {
  $(pre).css({
    "background-color": '#3D8BFB',
    "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
  })
  $(next).css({
    "background-color": '#3D8BFB',
    "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
  })
}
//删除颜色
function removeColor(pre, next) {
  $(pre).css({
    "background-color": '#D7D7D7',
    "box-shadow": "0 0px 0px 0 rgba(215, 215, 215 0.50)"
  })
  $(next).css({
    "background-color": '#D7D7D7',
    "box-shadow": "0 0px 0px 0 rgba(215, 215, 215 0.50)",
  })
}
//执行改派 非空验证
function zxhgp() {
  if ($("#zxORgp0").attr('feik')=="feik" && $("#zxORgp1").attr('feik')=="feik" && $("#qyzjdgn").find("input").is(':checked') == false) {
    console.log("zenmhuis")

    addcolor("#pred", "#nextd")
    // if (iszhipai.style.display == 'block') {
    //   //执行或改派上一步
    //   $("#pred").on("click", function () {
    //     //svg
    //     //option
    //     $(".start").css("display", 'block')
    //     $(".designate").css("display", 'none')
    //     $(".appointApproval").css("display", 'none')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'none')
    //   })

    //   //执行或改派 下一步
    //   $("#nextd").on("click", function () {
    //     zxzpz.style.display = 'block';
    //     kspdsfzp.style.display = 'block';
    //     kspdfzppzline.style.display = 'none';
    //     kspdfzppzrect.style.display = 'none';
    //     //option
    //     $(".start").css("display", 'none')
    //     $(".appointApproval").css("display", 'none')
    //     $(".designate").css("display", 'none')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'block')

    //   })

    // } else if (iszhipai.style.display == "none") {
    //   $("#pred").on("click", function () {
    //     //svg
    //     //option
    //     $(".start").css("display", 'none')
    //     $(".designate").css("display", 'none')
    //     $(".appointApproval").css("display", 'block')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'none')
    //   })

    //   //执行或改派 下一步
    //   $("#nextd").on("click", function () {
    //     zxzpz.style.display = 'block';
    //     //option
    //     $(".start").css("display", 'none')
    //     $(".appointApproval").css("display", 'none')
    //     $(".designate").css("display", 'none')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'block')

    //   })
    // }


  } else if ($("#zxORgp0").attr('feik')=="feik" && $("#zxORgp1").attr('feik')=="feik" && $("#zxORgp2").attr('feik')=="feik" && $("#zxORgp3").attr('feik')=="feik" && $("#qyzjdgn").find("input").is(':checked') == true) {
    console.log("feik")
    addcolor("#pred", "#nextd")

    // if (iszhipai.style.display == 'block') {
    //   //执行或改派上一步
    //   $("#pred").on("click", function () {
    //     //svg
    //     //option
    //     $(".start").css("display", 'block')
    //     $(".designate").css("display", 'none')
    //     $(".appointApproval").css("display", 'none')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'none')
    //   })

    //   //执行或改派 下一步
    //   $("#nextd").on("click", function () {
    //     zxzpz.style.display = 'block';
    //     kspdsfzp.style.display = 'block';
    //     kspdfzppzline.style.display = 'none';
    //     kspdfzppzrect.style.display = 'none';
    //     //option
    //     $(".start").css("display", 'none')
    //     $(".appointApproval").css("display", 'none')
    //     $(".designate").css("display", 'none')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'block')

    //   })

    // } else if (iszhipai.style.display == "none") {
    //   $("#pred").on("click", function () {
    //     //svg
    //     //option
    //     $(".start").css("display", 'none')
    //     $(".designate").css("display", 'none')
    //     $(".appointApproval").css("display", 'block')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'none')
    //   })

    //   //执行或改派 下一步
    //   $("#nextd").on("click", function () {
    //     zxzpz.style.display = 'block';
    //     //option
    //     $(".start").css("display", 'none')
    //     $(".appointApproval").css("display", 'none')
    //     $(".designate").css("display", 'none')
    //     $(".zxORgp").css("display", 'none')
    //     $(".zxz").css("display", 'block')

    //   })
    // }

  } else {

    removeColor("#pred", "#nextd")

    //解除绑定事件
    $("#pred").off("click")
    $("#nextd").off("click")
  }
}


iszhipai.style.display = 'none'
kspdsfzp.style.display = 'none'
zppd.style.display = 'none'
zppds.style.display = 'none'
zppdszxgppz.style.display = 'none'
zppdszxgppzf.style.display = 'none'
zxzpz.style.display = 'none'
yqsppz.style.display = 'none'
zxztjpd.style.display = 'none'
zxztjpdxyjpds.style.display = 'none'
zxgppzhl.style.display = 'none'
zxgppzf.style.display = 'none'
zxgppzs.style.display = 'none'
zxztjpdxyjpdf.style.display = 'none'
end.style.display = 'none'



// iszhipai.style.display = 'block';
//   kspdsfzp.style.display = 'block';
//   zppd.style.display = 'block'
//   zppds.style.display = 'block'
//   zppdszxgppz.style.display = 'block'
//   zppdszxgppzf.style.display = 'block'
//   zxzpz.style.display = 'block'
//   yqsppz.style.display = 'block'
//   zxztjpd.style.display = 'block'
//   zxztjpdxyjpds.style.display = 'block'
//   zxgppzhl.style.display = 'block'
//   zxgppzf.style.display = 'block'
//   zxgppzs.style.display = 'block'
//   zxztjpdxyjpdf.style.display = 'block'
//   end.style.display = 'block'

start.style.display = 'block'


//点击开始判断 
function stratShow() {
  // iszhipai.style.display = 'none';
  // kspdsfzp.style.display = 'none';
  // zppd.style.display = 'none'
  // zppds.style.display = 'none'
  // zppdszxgppz.style.display = 'none'
  // zppdszxgppzf.style.display = 'none'
  // zxzpz.style.display = 'none'
  // yqsppz.style.display = 'none'
  // zxztjpd.style.display = 'none'
  // zxztjpdxyjpds.style.display = 'none'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'none'
  // zxgppzs.style.display = 'none'
  // zxztjpdxyjpdf.style.display = 'none'
  // end.style.display = 'none'


  start.style.display = 'block'
    //option 控制
  $(".option").toggleClass("optionClosed")

  //控制option
  $(".start").css("display", 'block')
  $(".designate").css("display", 'none')
  $(".appointApproval").css("display", 'none')
  $(".zxORgp").css("display", 'none')
  $(".zxz").css("display", 'none')
  $(".yqsp").css("display", 'none')
  $(".zxztjsfsp").css("display", 'none')
  $(".gdsfys").css("display", 'none')
}

//指派
function zp() {
  // zppd.style.display = 'block';
  // iszhipai.style.display = 'block';
  // kspdsfzp.style.display = 'block';
  // zppds.style.display = 'none'
  // zppdszxgppz.style.display = 'none'
  // zppdszxgppzf.style.display = 'none'
  // zxzpz.style.display = 'none'
  // yqsppz.style.display = 'none'
  // zxztjpd.style.display = 'none'
  // zxztjpdxyjpds.style.display = 'none'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'none'
  // zxgppzs.style.display = 'none'
  // zxztjpdxyjpdf.style.display = 'none'
  // end.style.display = 'none'

  // start.style.display = 'block'

  //控制option
  $(".start").css("display", 'none')
  $(".designate").css("display", 'block')
  $(".appointApproval").css("display", 'none')
  $(".zxORgp").css("display", 'none')
  $(".zxz").css("display", 'none')
  $(".yqsp").css("display", 'none')
  $(".zxztjsfsp").css("display", 'none')
  $(".gdsfys").css("display", 'none')
}

//是否指派审批
function sfzpsp() {
  // iszhipai.style.display = 'block';
  // kspdsfzp.style.display = 'block';
  // zppd.style.display = 'block'
  // zppdszxgppz.style.display = 'block'
  // zppdszxgppzf.style.display = 'block'

  // zxzpz.style.display = 'none'
  // yqsppz.style.display = 'none'
  // zxztjpd.style.display = 'none'
  // zxztjpdxyjpds.style.display = 'none'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'none'
  // zxgppzs.style.display = 'none'
  // zxztjpdxyjpdf.style.display = 'none'
  // end.style.display = 'none'





  // start.style.display = 'block'
  //控制option
  $(".start").css("display", 'none')
  $(".designate").css("display", 'none')
  $(".appointApproval").css("display", 'block')
  $(".zxORgp").css("display", 'none')
  $(".zxz").css("display", 'none')
  $(".yqsp").css("display", 'none')
  $(".zxztjsfsp").css("display", 'none')
  $(".gdsfys").css("display", 'none')
}

//执行或改派
function zxORgp() {
  // iszhipai.style.display = 'block';
  // kspdsfzp.style.display = 'block';
  // zppd.style.display = 'block'
  // zppdszxgppz.style.display = 'block'
  // zppdszxgppzf.style.display = 'block'
  // zxzpz.style.display = 'block'
  // yqsppz.style.display = 'none'
  // zxztjpd.style.display = 'none'
  // zxztjpdxyjpds.style.display = 'none'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'none'
  // zxgppzs.style.display = 'none'
  // zxztjpdxyjpdf.style.display = 'none'
  // end.style.display = 'none'



  // start.style.display = 'block'

  //控制option
  console.log("aaa")
  $(".start").css("display", 'none')
  $(".designate").css("display", 'none')
  $(".appointApproval").css("display", 'none')
  $(".zxORgp").css("display", 'block')
  $(".zxz").css("display", 'none')
  $(".yqsp").css("display", 'none')
  $(".zxztjsfsp").css("display", 'none')
  $(".gdsfys").css("display", 'none')
}

//执行中
function zxz() {
  // iszhipai.style.display = 'block';
  // kspdsfzp.style.display = 'block';
  // zppd.style.display = 'block'
  // zppdszxgppz.style.display = 'block'
  // zppdszxgppzf.style.display = 'block'
  // zxzpz.style.display = 'block'
  // yqsppz.style.display = 'block'
  // zxztjpd.style.display = 'block'
  // zxztjpdxyjpds.style.display = 'none'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'none'
  // zxgppzs.style.display = 'none'
  // zxztjpdxyjpdf.style.display = 'none'
  // end.style.display = 'none'



  // start.style.display = 'block'

  //控制option
  $(".start").css("display", 'none')
  $(".designate").css("display", 'none')
  $(".appointApproval").css("display", 'none')
  $(".zxORgp").css("display", 'none')
  $(".zxz").css("display", 'block')
  $(".yqsp").css("display", 'none')
  $(".zxztjsfsp").css("display", 'none')
  $(".gdsfys").css("display", 'none')
}

//延期审批
function yqsp() {
  // iszhipai.style.display = 'block';
  // kspdsfzp.style.display = 'block';
  // zppd.style.display = 'block'
  // zppdszxgppz.style.display = 'block'
  // zppdszxgppzf.style.display = 'block'
  // zxzpz.style.display = 'block'
  // yqsppz.style.display = 'block'
  // zxztjpd.style.display = 'block'
  // zxztjpdxyjpds.style.display = 'none'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'none'
  // zxgppzs.style.display = 'none'
  // zxztjpdxyjpdf.style.display = 'none'
  // end.style.display = 'none'


  // start.style.display = 'block'

  //控制option
  $(".start").css("display", 'none')
  $(".designate").css("display", 'none')
  $(".appointApproval").css("display", 'none')
  $(".zxORgp").css("display", 'none')
  $(".zxz").css("display", 'none')
  $(".yqsp").css("display", 'block')
  $(".zxztjsfsp").css("display", 'none')
  $(".gdsfys").css("display", 'none')
}

//执行中判断
function zxzpd() {
  // iszhipai.style.display = 'block';
  // kspdsfzp.style.display = 'block';
  // zppd.style.display = 'block'
  // zppdszxgppz.style.display = 'block'
  // zppdszxgppzf.style.display = 'block'
  // zxzpz.style.display = 'block'
  // yqsppz.style.display = 'block'
  // zxztjpd.style.display = 'block'
  // zxztjpdxyjpds.style.display = 'none'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'block'
  // zxgppzs.style.display = 'block'
  // zxztjpdxyjpdf.style.display = 'none'
  // end.style.display = 'none'


  // start.style.display = 'block'

  //控制option
  $(".start").css("display", 'none')
  $(".designate").css("display", 'none')
  $(".appointApproval").css("display", 'none')
  $(".zxORgp").css("display", 'none')
  $(".zxz").css("display", 'none')
  $(".yqsp").css("display", 'none')
  $(".zxztjsfsp").css("display", 'block')
  $(".gdsfys").css("display", 'none')

}

function xyjpd() {
  // iszhipai.style.display = 'block';
  // kspdsfzp.style.display = 'block';
  // zppd.style.display = 'block'
  // zppdszxgppz.style.display = 'block'
  // zppdszxgppzf.style.display = 'block'
  // zxzpz.style.display = 'block'
  // yqsppz.style.display = 'block'
  // zxztjpd.style.display = 'block'
  // zxztjpdxyjpds.style.display = 'block'
  // zxgppzhl.style.display = 'none'
  // zxgppzf.style.display = 'block'
  // zxgppzs.style.display = 'block'
  // zxztjpdxyjpdf.style.display = 'block'
  // end.style.display = 'block'



  // start.style.display = 'block'

  $(".start").css("display", 'none')
  $(".designate").css("display", 'none')
  $(".appointApproval").css("display", 'none')
  $(".zxORgp").css("display", 'none')
  $(".zxz").css("display", 'none')
  $(".yqsp").css("display", 'none')
  $(".zxztjsfsp").css("display", 'none')
  $(".gdsfys").css("display", 'block')

}

//判断是否指派
$(".optionpz").on("DOMSubtreeModified", function () {
  if ($(this).find("span").text() == '是') {
    iszhipai.style.display = 'block';
    kspdsfzp.style.display = 'none'
    zppd.style.display = 'none'
    zppds.style.display = 'none'
    zppdszxgppz.style.display = 'none'
    zppdszxgppzf.style.display = 'none'
    zxzpz.style.display = 'none'
    yqsppz.style.display = 'none'
    zxztjpd.style.display = 'none'
    zxztjpdxyjpds.style.display = 'none'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'none'
    zxgppzs.style.display = 'none'
    zxztjpdxyjpdf.style.display = 'none'
    end.style.display = 'none'

    $("#nexta").css({
      "background-color": '#3D8BFB',
      "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
    })


    //点击下一步到 执行或改派
    $("#nexta").on("click", function () {
      $(".start").css("display", 'none')
      $(".designate").css("display", 'none')
      $(".appointApproval").css("display", 'none')
      $(".zxORgp").css("display", 'block')
    })



  } else if ($(this).find("span").text() == '否') {
    iszhipai.style.display = 'none';
    kspdsfzp.style.display = 'block'
    zppd.style.display = 'none'
    zppds.style.display = 'none'
    zppdszxgppz.style.display = 'none'
    zppdszxgppzf.style.display = 'none'
    zxzpz.style.display = 'none'
    yqsppz.style.display = 'none'
    zxztjpd.style.display = 'none'
    zxztjpdxyjpds.style.display = 'none'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'none'
    zxgppzs.style.display = 'none'
    zxztjpdxyjpdf.style.display = 'none'
    end.style.display = 'none'

    $("#nexta").css({
      "background-color": '#3D8BFB',
      "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
    })

    //点击下一步到 指派人
    $("#nexta").on("click", function () {
      $(".start").css("display", 'none')
      $(".designate").css("display", 'block')
      $(".appointApproval").css("display", 'none')
    })

  } else if ($(this).val() == " ") {
    kspdsfzp.style.display = 'none';
    iszhipai.style.display = 'none';
    $("#nexta").css({
      "background-color": '#d7d7d7',
      "box-shadow": "0 0px 0px 0 rgba(215, 215, 215, 0.50)"
    })
    $("#nexta").off("click")
  }
})

contolClick("#preb", "#nextb")

// 配置指派人 的上下步
function contolClick(pre, next) {
  $(".chzn-choices").on("DOMSubtreeModified", function () {

    if ($('.search-choice').find('span').text().length !== 0) {
      $(pre).css({
        "background-color": '#3D8BFB',
        "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
      })
      $(next).css({
          "background-color": '#3D8BFB',
          "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
        })
        //配置指派人 上一步
      $(pre).on("click", function () {
          $(".start").css("display", 'block')
          $(".designate").css("display", 'none')
        })
        //配置指派人 下一步
      $(next).on("click", function () {
        zppd.style.display = 'block';
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'block')
      })
    } else {

      $(pre).css({
        "background-color": '#D7D7D7',
        "box-shadow": "0 0px 0px 0 rgba(215, 215, 215 0.50)"
      })
      $(next).css({
          "background-color": '#D7D7D7',
          "box-shadow": "0 0px 0px 0 rgba(215, 215, 215 0.50)",
        })
        //解除绑定事件
      $(pre).off("click")
      $(next).off("click")
    }

  })
}


//判断是否指派审批
$("#optionzpsp").on("DOMSubtreeModified", function () {
  if ($(this).find("span").text() == '是') {
    $(".zpspr").css("display", 'block')
    $(".appointApproval .chzn-choices").on("DOMSubtreeModified", function () {
      if ($(this).find('.search-choice').length !== 0) {
        addcolor("#prec", "#nextc")
          //控制svg
        iszhipai.style.display = 'none';
        kspdsfzp.style.display = 'block'
        zppd.style.display = 'none'
        zppds.style.display = 'none'
        zppdszxgppz.style.display = 'block'
        zppdszxgppzf.style.display = 'none'
        zxzpz.style.display = 'none'
        yqsppz.style.display = 'none'
        zxztjpd.style.display = 'none'
        zxztjpdxyjpds.style.display = 'none'
        zxgppzhl.style.display = 'none'
        zxgppzf.style.display = 'none'
        zxgppzs.style.display = 'none'
        zxztjpdxyjpdf.style.display = 'none'
        end.style.display = 'none'

        //点击上一步到 配置指派人
        $("#prec").on("click", function () {
          //控制svg
          iszhipai.style.display = 'none';
          kspdsfzp.style.display = 'block'
          zppd.style.display = 'none'
          zppds.style.display = 'none'
          zppdszxgppz.style.display = 'none'
          zppdszxgppzf.style.display = 'none'
          zxzpz.style.display = 'none'
          yqsppz.style.display = 'none'
          zxztjpd.style.display = 'none'
          zxztjpdxyjpds.style.display = 'none'
          zxgppzhl.style.display = 'none'
          zxgppzf.style.display = 'none'
          zxgppzs.style.display = 'none'
          zxztjpdxyjpdf.style.display = 'none'
          end.style.display = 'none'

          //option
          $(".designate").css("display", 'block')
          $(".appointApproval").css("display", 'none')


        })

        //点击下一步到 指派人
        $("#nextc").on("click", function () {
          $(".appointApproval").css("display", 'none')
          $(".designate").css("display", 'none')
          $(".zxORgp").css("display", 'block')
        })
      } else {
        removeColor("#prec", "#nextc")
        $("#prec").off("click ")
        $("#nextc").off("click")

      }
    })
  } else if ($(this).find("span").text() == '否') {
    $(".zpspr").css("display", 'none')
    addcolor("#prec", "#nextc")
      //控制svg
    iszhipai.style.display = 'none';
    kspdsfzp.style.display = 'block'
    zppd.style.display = 'block'
    zppds.style.display = 'none'
    zppdszxgppz.style.display = 'none'
    zppdszxgppzf.style.display = 'block'
    zxzpz.style.display = 'none'
    yqsppz.style.display = 'none'
    zxztjpd.style.display = 'none'
    zxztjpdxyjpds.style.display = 'none'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'none'
    zxgppzs.style.display = 'none'
    zxztjpdxyjpdf.style.display = 'none'
    end.style.display = 'none'

    //点击上一步到 配置指派人
    $("#prec").on("click", function () {
      //控制svg
      iszhipai.style.display = 'none';
      kspdsfzp.style.display = 'block'
      zppd.style.display = 'none'
      zppds.style.display = 'none'
      zppdszxgppz.style.display = 'none'
      zppdszxgppzf.style.display = 'none'
      zxzpz.style.display = 'none'
      yqsppz.style.display = 'none'
      zxztjpd.style.display = 'none'
      zxztjpdxyjpds.style.display = 'none'
      zxgppzhl.style.display = 'none'
      zxgppzf.style.display = 'none'
      zxgppzs.style.display = 'none'
      zxztjpdxyjpdf.style.display = 'none'
      end.style.display = 'none'

      //option
      $(".designate").css("display", 'block')
      $(".appointApproval").css("display", 'none')

    })

    //点击下一步到 指派人
    $("#nextc").on("click", function () {
      $(".appointApproval").css("display", 'none')
      $(".designate").css("display", 'none')
      $(".zxORgp").css("display", 'block')
    })

  } else {
    removeColor("#prec", "#nextc")
    $("#prec").off("click")
    $("#nextc").off("click")

  }

})

//执行或改派

$("#qyzjdgn").find("input").on("change", function () {
  zxhgp()
  if ($("#qyzjdgn").find("input").is(':checked')) {
    $(".zd").css("display", "block")
    $(".zwzd").css("display", "block")
  } else {
    $(".zd").css("display", "none")
    $(".zwzd").css("display", "none")

  }
})

$(".zxORgp .chzn-choices").each(function (index, value) {

  $(value).on("DOMSubtreeModified", function () {
    if ($(this).find('.search-choice').length >= 1 ) {
      $(this).attr("feik","feik")
      $(this).attr("id","zxORgp"+index)
    } else {
       $(this).removeAttr("feik")
    }

    zxhgp()
  })
})

//执行中 option 非空
$(".zxz .chzn-choices").each(function (index,value) {
  $(value).on("DOMSubtreeModified",function () {
    if($(this).find('.search-choice').length == 1){
      number++
    }else{
      number--
    }
  })
  if(number >= 5 ){
    addcolor("#pree","#nexte")
  }else {
    removeColor("#pree","#nexte")
  }
})


//执行中提交是否审批
$("#optionzxztjsfsp").on("DOMNodeInserted", function () {

  if ($(this).find("span").text() == '是') {
    $(".zxztisp").css("display", 'block')


    iszhipai.style.display = 'block';
    kspdsfzp.style.display = 'block';
    zppd.style.display = 'block'
    zppdszxgppz.style.display = 'block'
    zppdszxgppzf.style.display = 'block'
    zxzpz.style.display = 'block'
    yqsppz.style.display = 'block'
    zxztjpd.style.display = 'block'
    zxztjpdxyjpds.style.display = 'none'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'none'
    zxgppzs.style.display = 'block'
    zxztjpdxyjpdf.style.display = 'none'
    end.style.display = 'none'
  } else if ($(this).find("span").text() == '否') {
    $(".zpspr").css("display", 'none')
    iszhipai.style.display = 'block';
    kspdsfzp.style.display = 'block';
    zppd.style.display = 'block'
    zppdszxgppz.style.display = 'block'
    zppdszxgppzf.style.display = 'block'
    zxzpz.style.display = 'block'
    yqsppz.style.display = 'block'
    zxztjpd.style.display = 'block'
    zxztjpdxyjpds.style.display = 'none'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'block'
    zxgppzs.style.display = 'none'
    zxztjpdxyjpdf.style.display = 'none'
    end.style.display = 'none'

    //点击下一步到 指派人
    // $("#nextc").on("click", function () {
    //   $(".appointApproval").css("display", 'none')
    //   $(".designate").css("display", 'none')
    //   $(".zxORgp").css("display", 'block')
    // })

  } else if ($(".appointApproval .optionzpsp").text() == " ") {
    kspdsfzp.style.display = 'none';
    iszhipai.style.display = 'none';
  }
})

//是否验收
$("#optiongdsfys").on("DOMNodeInserted", function () {

  if ($(this).find("span").text() == '是') {
    $(".gdsfyssho").css("display", 'block')

    iszhipai.style.display = 'block';
    kspdsfzp.style.display = 'block';
    zppd.style.display = 'block'
    zppdszxgppz.style.display = 'block'
    zppdszxgppzf.style.display = 'block'
    zxzpz.style.display = 'block'
    yqsppz.style.display = 'block'
    zxztjpd.style.display = 'block'
    zxztjpdxyjpds.style.display = 'block'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'block'
    zxgppzs.style.display = 'block'
    zxztjpdxyjpdf.style.display = 'none'
    end.style.display = 'block'
  } else if ($(this).find("span").text() == '否') {
    $(".gdsfyssho").css("display", 'none')


    iszhipai.style.display = 'block';
    kspdsfzp.style.display = 'block';
    zppd.style.display = 'block'
    zppdszxgppz.style.display = 'block'
    zppdszxgppzf.style.display = 'block'
    zxzpz.style.display = 'block'
    yqsppz.style.display = 'block'
    zxztjpd.style.display = 'block'
    zxztjpdxyjpds.style.display = 'block'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'block'
    zxgppzs.style.display = 'none'
    zxztjpdxyjpdf.style.display = 'block'
    end.style.display = 'block'

    //点击下一步到 指派人
    // $("#nextc").on("click", function () {
    //   $(".appointApproval").css("display", 'none')
    //   $(".designate").css("display", 'none')
    //   $(".zxORgp").css("display", 'block')
    // })

  } else if ($(".appointApproval .optionzpsp").text() == " ") {
    kspdsfzp.style.display = 'none';
    iszhipai.style.display = 'none';
  }
})
