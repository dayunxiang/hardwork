 $(function() {
	var floodCode = getQueryString("floodCode");
 	var waringId = getQueryString("waringId");
 	//任务详情
 	getTaskDetail(waringId);
 	
 	//关闭查看详情
 	closetaskDetail()
 	var mySwiper = new Swiper('.swiper-container', {
 		slidesPerView: 3,
 		spaceBetween: 20,
 	})
 	
	//关闭查看详情
 	function closetaskDetail() {
 		$("#taskDetailTitle img").on("click", function() {
 			window.open("myTask.html?floodCode="+escape(floodCode), "_self");
 		})
 	}
 	
 	//任务详情
 	function getTaskDetail(_waringId){
 		var jsonObj = {
				"WARNINGID":_waringId
		};
		var jsonStr = json2str(jsonObj);
 		
// 		var _url = "";
// 		if(clzt == "待处理"){
// 			_url = "testdata/taskDetail_dcl.json";
// 		}
// 		if(clzt == "处理中"){
// 			_url = "testdata/taskDetail_clz.json";
// 		}
// 		if(clzt == "已完成"){
// 			_url = "testdata/taskDetail_ycl.json";
// 		}
 		$.ajax({
//			type: "get",
//			url: _url,
			type: "post",
			url: fxyjBackUrl + "getWorksheetDetailByWaringId",
			data: jsonStr,
			contentType:'application/json',
			dataType: 'json',
			success: function(result) {
				console.log("任务详情");
				console.log(result);
				var dataObj = result.data[0];
				$(".clInfo").hide();
				$(".wcInfo").hide();
				$(".pdInfo .cont").css("border-left","none");
				$(".clInfo .cont").css("border-left","none");
				
				$(".sbInfo .sbsj").text(dataObj.WARNING_UPLOADTIME);//上报时间
				$(".sbInfo .bjms").text(dataObj.WARNING_DESCRIPTION);//警情描述
				$(".sbInfo .jqmc").text(dataObj.WARNING_NAME);//警情名称
				$(".sbInfo .jqwz").text(dataObj.WARNING_LOCATION);//警情位置
				$(".sbInfo .sbr").text(dataObj.WARNING_UPLOADPERSON);//上报人
				$(".pdInfo .pdsj").text(dataObj.ORDERTIME);//派单时间
				$(".pdInfo .pdr").text(dataObj.ORDERPERSON);//派单人
				if(dataObj.WARNING_ISCOMPLETE == 3 || dataObj.WARNING_ISCOMPLETE == 4){//处理中或已完成
					$(".clInfo").show();
					$(".pdInfo .cont").css("border-left","1px solid #DFDFDF");
					$(".clInfo .clsj").text(dataObj.HANDLETIME);//处理时间
					$(".clInfo .jsmj").text(dataObj.EFFECTAREA);//积水面积
					$(".clInfo .jssd").text(dataObj.WATERDEPTH);//积水深度
					$(".clInfo .clr").text(dataObj.WARNIING_HANDLEPERSON);//处理人
				}
				if(dataObj.WARNING_ISCOMPLETE == 4){//已完成
					$(".wcInfo").show();
					$(".clInfo .cont").css("border-left","1px solid #DFDFDF");
					$(".wcInfo .wcsj").text(dataObj.COMPLETETIME);//完成时间
					$(".wcInfo .xcclcs").text(dataObj.METHOD);//现场处理措施
					$(".wcInfo .jsyy").text(dataObj.WARNINGREASON);//积水原因
					$(".wcInfo .jyzgfa").text(dataObj.REPAIR_DETAIL);//建议整改方案
				}
			}
		});
 	}
 	
 })
