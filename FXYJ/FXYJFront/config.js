//后台服务地址
var fxyjBackUrl = window.location.origin + "/fangxun/";
if(window.location.origin == "http://127.0.0.1:8020"){
	fxyjBackUrl = "http://127.0.0.1:8088/fangxun/";
}else if(window.location.origin == "http://127.0.0.1:8080") {
  fxyjBackUrl = "http://192.168.200.100:8088/fangxun/";
}

//图片服务地址
var fangxunPictureUrl = "http://192.168.200.30:8787/fangxunPicture";

