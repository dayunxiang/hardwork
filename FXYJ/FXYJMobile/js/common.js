
//注册回调函数，第一次连接时调用 初始化函数
connectWebViewJavascriptBridge(function(bridge) {
	bridge.init(function(message, responseCallback) {
//			alert('默认接收收到来自Java数据： ' + message);
		var responseData = '默认接收收到来自Java的数据，回传数据给你';
		responseCallback(responseData);
	});

	bridge.registerHandler("setImgPic", function(data, responseCallback) {
//			alert(data);
		var picList = eval('(' + data + ')');
//			document.getElementById("testIMG").src = picList[0].picPath;
		for(var i=0;i<picList.length;i++){
			var picPath = picList[i].picPath;
			var picHTML = '<div class="swiper-slide"><img src="'+picPath+'"></div>';
			$(".addpic-div").prepend(picHTML);
		}
		var responseData = '指定接收收到来自Java的数据，回传数据给你';
		responseCallback(responseData);
	});

	bridge.registerHandler("setLoc", function(data, responseCallback) {
//			alert(data);
		var locObj = eval('(' + data + ')');
		createJQWithLocation(locObj.longitude, locObj.latitude);
		var responseData = '指定接收收到来自Java的数据，回传数据给你';
		responseCallback(responseData);
	});
})

//注册事件监听
function connectWebViewJavascriptBridge(callback) {
	if(window.WebViewJavascriptBridge) {
		callback(WebViewJavascriptBridge)
	} else {
		document.addEventListener(
			'WebViewJavascriptBridgeReady',
			function() {
				callback(WebViewJavascriptBridge)
			},
			false
		);
	}
}

//获取url
var fxyjBackUrl = "http://192.168.200.100:8088/fangxun/";

/**start与webview接口交互****************************************************************/

function getInfoFromWebView(type) {
	//发送消息给java代码
	//	var data = "{action:'" + type + "',value:''}";
	var data = "{action:\"" + type + "\",value:\"\"}";
	//第一个参数要发送的数据 第二个参数js在被回调后具体执行方法，responseData为java层回传数据
	window.WebViewJavascriptBridge.send(data, function(responseData) {
		alert("回调成功" + type);
		alert('来自Java的回传数据： ' + responseData);
	});
}

////照片返回路径接口
//function setImgPic(path){
////  document.getElementById("imgPic").src=path;
////	path = "file://"+path;
//	alert(path);
//	document.getElementById("testIMG").src=path;
////	var picHTML = '<div class="swiper-slide addpic"><img src="'+path+'"></div>';
////	$(".addpic-jqsb").prepend(picHTML);
//}
//
//////拍摄照片后返回路径接口
////function setImgTake(path){
//////  document.getElementById("imgTake").src=path;
////	$(".addpic-jqsb img").attr("src",path);
////}
//
////定位信息
//function setLoc(loc){
//	alert(loc);
//	var locObj = eval('(' + loc + ')');
//	createJQWithLocation(locObj.latitude,locObj.longitude);
//}
//
////调用相机、图片库
//function getImgPic(){
//	if(window.Android){
//  	window.Android.startPictureService();
//  }else{
//  	var path = 'img/login-bg@3x.jpg';
////  	var path = 'file:///E:/workspace/FXYJ/FXYJFront/img/weather-bg@3x.jpg';
//  	var picHTML = '<div class="swiper-slide addpic"><img src="'+path+'"></div>';
//		$(".addpic-jqsb").prepend(picHTML);
//  }
//}
//
//////调用相机
////function getImgPic(){
////	window.Android.startCameraSelector();
////}
////
//////调用图片库
////function getImgTake(){
////	window.Android.startImageSelector();
////}
//
////获得定位数据
//function getLoc(){
//  if(window.Android){
//  	 window.Android.getLocation();
//  }else{
//  	createJQWithLocation(116.332553,39.997475);
//  }
//}

/**end与webview接口交互****************************************************************/

//解析url传参
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

/**start将对象转换成字符串****************************************************************/
/**
 * 将对象转换成字符串
 */
function json2str(it, prettyPrint) {
	return stringify(it, function(key, value) {
		if(value) {
			var tf = value.__json__ || value.json;
			if(typeof tf == "function") {
				return tf.call(value);
			}
		}
		return value;
	}, prettyPrint && this.toJsonIndentStr)
}

function stringify(value, replacer, spacer) {

	var undef;
	if(typeof replacer == "string") {
		spacer = replacer;
		replacer = null;
	}

	function stringify(it, indent, key) {
		if(replacer) {
			it = replacer(key, it);
		}
		var val, objtype = typeof it;
		if(objtype == "number") {
			return isFinite(it) ? it + "" : "null";
		}
		if(objtype == "boolean") {
			return it + "";
		}
		if(it === null) {
			return "null";
		}
		if(typeof it == "string") {
			return escapeString(it);
		}
		if(objtype == "function" || objtype == "undefined") {
			return undef;
		}

		if(typeof it.toJSON == "function") {
			return stringify(it.toJSON(key), indent, key);
		}
		if(it instanceof Date) {
			return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(t, prop, plus) {
				var num = it["getUTC" + prop]() + (plus ? 1 : 0);
				return num < 10 ? "0" + num : num;
			});
		}
		if(it.valueOf() !== it) {

			return stringify(it.valueOf(), indent, key);
		}
		var nextIndent = spacer ? (indent + spacer) : "";

		var sep = spacer ? " " : "";
		var newLine = spacer ? "\n" : "";

		if(it instanceof Array) {
			var itl = it.length,
				res = [];
			for(key = 0; key < itl; key++) {
				var obj = it[key];
				val = stringify(obj, nextIndent, key);
				if(typeof val != "string") {
					val = "null";
				}
				res.push(newLine + nextIndent + val);
			}
			return "[" + res.join(",") + newLine + indent + "]";
		}

		var output = [];
		for(key in it) {
			var keyStr;
			if(typeof key == "number") {
				keyStr = '"' + key + '"';
			} else if(typeof key == "string") {
				keyStr = escapeString(key);
			} else {

				continue;
			}
			val = stringify(it[key], nextIndent, key);
			if(typeof val != "string") {

				continue;
			}

			output.push(newLine + nextIndent + keyStr + ":" + sep + val);
		}
		return "{" + output.join(",") + newLine + indent + "}";
	}
	return stringify(value, "", "");

};

function escapeString( /*String*/ str) {
	return('"' + str.replace(/(["\\])/g, '\\$1') + '"').
	replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").
	replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
}
/**end将对象转换成字符串****************************************************************/