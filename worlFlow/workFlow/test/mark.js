var start = document.getElementById("kspd")  
var iszhipai = document.getElementById("iszhipai")  //判断是否指派-是(执行/改派)
var kspdsfzp = document.getElementById("kspdsfzp")  //开始判断是否指派-否(配置指派人)
// var kspdfzppzline = document.getElementById("kspdfzppzline")
// var kspdfzppzrect = document.getElementById("kspdfzppzrect")
var zppd = document.getElementById("zppd") //指派判断配置
var zppds = document.getElementById("zppds") //判断是否指派-是(包括配置指派人)
var zppdszxgppz = document.getElementById("zppdszxgppz") //指派判断配置-是
var zppdszxgppzf = document.getElementById("zppdszxgppzf") //指派判断配置-否
var zxzpz = document.getElementById("zxzpz") //执行中配置(包括退单挂单)
var zxzguadan = document.getElementById("zxzguadan") //执行中 挂单节点
var zxgpzx = document.getElementById("zxgpzx") // 执行中 执行节点
var zxzjd = document.getElementById("zxzjd") //执行中  执行中节点
var zxztuidan = document.getElementById("zxztuidan") //执行中 退单节点
var yqsppz = document.getElementById("yqsppz") //延期审批配置
var zxztjpd = document.getElementById("zxztjpd") //执行中提交判断
var zxgppzhl = document.getElementById("zxgppzhl") // 忽略
var zxgppzf = document.getElementById("zxgppzf") // 执行中审批判断-否(包括验收判断节点)
var zxgppzs = document.getElementById("zxgppzs") // 执行中审批判断 - 是(包括验收判断节点)
var zxztjpdxyjpdf = document.getElementById("zxztjpdxyjpdf") // 验收-否
var zxztjpdxyjpds = document.getElementById("zxztjpdxyjpds") // 验收 - 是
var end = document.getElementById("end")

//开始判断 start
  //开始判断-是
  zppds.style.display = 'block'
  iszhipai.style.display = 'block'
  //开始判断-否
  kspdsfzp.style.display = 'block'

//指派判断配置 zppd
  //指派判断-是
  zppdszxgppz.style.display = 'block'
  //指派判断-否
  zppdszxgppzf.style.display = 'block'

//是否审批
  //审批-是
  zxgppzs.style.display = 'block'
  //是屁-否
  zxgppzf.style.display = 'block'
//是否验收
  //验收-是
  zxztjpdxyjpds.style.display = 'block' 
  end.style.display = 'block'  //完成节点
  //验收-否
zxztjpdxyjpdf.style.display = 'block'
  end.style.display = 'block' //完成节点
