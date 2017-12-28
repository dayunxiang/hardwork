var rmap;
var jqList=[]; //警情列表
var floodCode="";//最新一次汛情编号

$(function() {
	
	//初始化地图
	initMap();
	//获取最新一次汛情
	getLastXQ();
	//图层开关控制
	controlTc();
	//点击上报
	report();
	//图层控制
	clikTc();
	//点击我的任务
	clickMyTask();
	// 是否派发给自己
	checBox();
	//调用拍照上传图片
	clickAddPicture();
	//初始化swiper
	initSwiper();
	//预警标志点击
	clickYJFlag();
//	//警情录入-上传图片
//	uploadPic();
})
	
//初始化swiper
function initSwiper() {
	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true //修改swiper的父元素时，自动初始化swiper
	})
}
//初始化地图，默认地图为在线高德地图
function initMap() {
	rmap = new RMap.Map('map');
	//以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
	rmap.centerZoom(116.390985, 39.906358, 12);

	rmap.showZoomControl({
		bottom: 20,
		right: 20
	});
}

//图层开关控制
function controlTc() {
	$(".toogle").on("click", function() {
		$(this).toggleClass('now')
		if($(this).hasClass('now')) {
			$(this).attr('checked', 'true')
			$(this).find('i').css("display", 'none')
			$(this).find('span').css("display", 'block')

		} else {
			$(this).removeAttr('checked')
			$(this).find('i').css("display", 'block')
			$(this).find('span').css("display", 'none')

		}

	})
}
//点击上报
function report() {
	$("#report").on("click", function() {
		//新建警情
		createNewJQ();
	})
}
//点击图层 
function clikTc() {
	$("#tckz").on("click", function() {
		$(".masker").show()
		$(".tckz").show(200)
		clickMasker(); //点击masker遮罩层
	})
}
//点击我的任务
function clickMyTask() {
	$("#myTask").on("click", function() {
		window.open("myTask.html?floodCode="+escape(floodCode), "_self");
	})
}
//点击masker遮罩层
function clickMasker() {
	$(".masker").on("click", function() {
		$(".tckz").hide();//图层控制隐藏
		$(".report").css('transform', 'translateY(7.72rem)');//上报面板隐藏
		$(".jqd").hide();//警情点信息隐藏
		$(".yjInfo").hide();//预警信息弹框隐藏
		$(this).hide();//遮罩层隐藏
	})
}

function clickCXDW(){
	$(".cxdw img").on("click", function(){
		getInfoFromWebView("getLoc");//调用定位接口
//		getLoc();//调用定位接口
	})
}

// 是否派发给自己
function checBox() {
	$("#checBox").on("click", function() {
		if($(this).attr('checked')) {
			$(this).removeAttr('checked')
		} else {
			$(this).attr('checked', 'checked')
		}
	})
}

//调用拍照上传图片
function clickAddPicture(){
	$(".addpic-div .addpic").on("click", function(){
		getInfoFromWebView("getPic");//调用相机、图片库
//		getImgPic();//调用相机、图片库
	})
}

//新建警情
function createNewJQ() {
	getInfoFromWebView("getLoc");//调用定位接口
//	getLoc();//调用定位接口
}

//添加新建警情点
function createJQWithLocation(lng,lat){
	rmap.addPoint(lng, lat, {
		pic: "img/mapicon/label-r.png",
		anchor: [15, 30],
		onClick: onNewPointClick
	});
	rmap.center(lng, lat);//居中到点位
	showCreatePanel(lng, lat);//显示警情上班面板
}
//新建警情点点击
function onNewPointClick(e){
	showCreatePanel(e.lng,e.lat);//显示警情上班面板
}
//显示警情上报面板
function showCreatePanel(lng, lat){
	$(".masker").show();
	$(".report").css('transform', 'translateY(0rem)');
	clickMasker(); //点击masker遮罩层
	$(".report .submit").on("click", function() {
		jqReport();//警情上报
	});
}

//警情上报
function jqReport(){
	$(".tckz").hide();
	$(".report").css('transform', 'translateY(7.72rem)')
	$(".masker").hide();
}
//预警标志点击
function clickYJFlag(){
	$(".yjFlag").on("click",function(){
		$(".yjInfo").show();//预警信息弹框
		$(".masker").show();//显示遮罩层
		clickMasker(); //点击masker遮罩层
		$(".yjInfo input").on("click",function(){
			$(".yjInfo").hide();//预警信息弹框
			$(".masker").hide();//显示遮罩层
		});
	});
}


//获取最新一次汛情
function getLastXQ() {
	$.ajax({
		type: "get",
		url: fxyjBackUrl + "getFloodWarningStatus",
//		url: "testdata/lastXQ.json",
		contentType: 'application/json',
		dataType: 'json',
		success: function(result) {
			console.log("最新一次汛情");
			console.log(result);
			var dataObj = result.data[0];
			$(".yjFlag i").css("background", dataObj.FLOODCOLOR);
			$(".yjFlag span").text(dataObj.FLOODLEVEL);
			floodCode = dataObj.FLOODCODE;//最新一次汛情编号
			//警情列表
			getJQList(floodCode);
		}
	});
}

//获取警情列表
function getJQList(_floodCode) {
	rmap.removePoint();
	var jsonObj = {
			"FloodCode":_floodCode
	};
	var jsonStr = json2str(jsonObj);
	$.ajax({
		type: "post",
//			url: "testdata/jqList.json",
		url: fxyjBackUrl + "getWaringSpotByFloodCode",
		data: jsonStr,
		contentType:'application/json',
		dataType: 'json',
		success: function(data) {
			console.log("警情列表");
			console.log(data);
			if(data.data!=null) {
				jqList = data.data;
			}
			var newPoints=[];
			for(var i = 0; i < jqList.length; i++) {
				var dataObj = jqList[i];
				var picUrl = ""
				if(dataObj.WARNING_ISCOMPLETE == "待处理") {
					picUrl = "img/mapicon/label-r.png";
				} else if(dataObj.WARNING_ISCOMPLETE == "已派单") {
					picUrl = "img/mapicon/label-o.png";
				} else if(dataObj.WARNING_ISCOMPLETE == "处理中") {
					picUrl = "img/mapicon/label-y.png";
				} else if(dataObj.WARNING_ISCOMPLETE == "已完成") {
					picUrl = "img/mapicon/label-b.png";
				}
				
				newPoints.push([dataObj.X, dataObj.Y]);
				rmap.addPoint(dataObj.X, dataObj.Y, {
					pic: picUrl,
					anchor: [15, 30],
					onClick: onPointClick,
					data: dataObj
				});
			}
			if(newPoints.length>0){
				rmap.extentByData(newPoints);
			}
		}
	});
}

//点位点击显示气泡
function onPointClick(e) {
	$(".masker").show();
	$(".jqd").show();
	clickMasker(); //点击masker遮罩层
	$(".jqd .fl-r").text(e.data.WARNING_ISCOMPLETE);
	$(".jqd ul .jqbh").text(e.data.WARNING_NAME);
	$(".jqd ul .fswz").text(e.data.WARNING_LOCATION);
	$(".jqd ul .jqms").text(e.data.WARNING_DESCRIPTION);
	$(".jqd ul .jjsj").text(e.data.WARNING_UPLOADTIME);
}

////警情录入-上传图片
//function uploadPic(){
//	$(".uploadPicture").on("change",function(){
//		//判断是否支持FileReader
//      if (window.FileReader) {
//          var reader = new FileReader();
//      } else {
//          alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
//      }
//		fileDom = this;
//      //获取文件
//      var file = fileDom.files[0];
//      var imageType = /^image\//;
//      //是否是图片
//      if (!imageType.test(file.type)) {
//          alert("请选择图片！");
//          return;
//      }
//      //读取完成
//      reader.onload = function(e) {
//          //图片路径设置为读取的图片
//          $("#testIMG").attr("src",e.target.result)
//      };
//      reader.readAsDataURL(file);
//	});
//}