$(function() {
	height()
	$(window).on("resize", function() {
		height()
	})
	//控制是否显示下载页面
	var url = window.location.host;
	if(url == "192.168.200.30:7003" || url == "210.12.197.197:7003" || url == "47.95.1.140:8585" || url == "127.0.0.1:8020"){
		$(".downloadLi").css("display","block")
	}else{
		$(".downloadLi").css("display","none")
	}
	
})

// 设置高度
function height() {
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	$(".zs_content").css("height", h - 50 + "px");
	$(".zs_examples").css("min-height", h - 150 + "px");
	$("#tcifra").css("height", h - 160 + "px");
	$("#dcifra").css("height", h - 160 + "px");
	$("#ifrCode").css("height", h - 160 + "px");
//	$(".zs_scroll").css("height", h + 5000 + "px");
	$(".tree").css("height", h - 160 + "px");
	$(".contenview").css("height", h - 160 + "px");
	$("#contentb").css("min-height", h - 200 + "px");
	$("#contenta").css("min-height", h - 200 + "px");
	$(".codearea").css('height', h - 200 + "px");
	//	$(".contentzhan").css('height',h-200 + "px");
}
// var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//   var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//   $("#tcifra").css("height", h - 160 + "px");
//   $("#dcifra").css("height", h - 160 + "px");

//  $(window).on("resize", function () {
//    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//   var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//   $("#tcifra").css("height", h - 160 + "px");
//   $("#dcifra").css("height", h - 160 + "px");
//   })
//获取url中的字符串
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串  
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

$("#myresource").height()

//tablan

$(document).ready(function() {
	$('#tabchange li').click(function() {
		var index = $(this).index();
		$(this).attr('class', "tabhover now").siblings('li').attr('class', '');
		$('.tabcontent').eq(index).show().siblings('.tabcontent').hide();
	})
})

function setNiceScroll(containerClass1,containerClass2) {
	$("."+containerClass1).niceScroll("."+containerClass2, {
		cursorcolor: "#646660",
		autohidemode: false,
		cursorborderradius: 4,
		background: '#e8e5df',
		cursorminheight: 32,
		disableoutline: true,
		zindex: 200
	}).show();
	$("."+containerClass1).niceScroll("."+containerClass2, {
		cursorcolor: "#646660",
		autohidemode: false,
		cursorborderradius: 4,
		background: '#e8e5df',
		cursorminheight: 32,
		disableoutline: true,
		zindex: 200
	}).resize();
}