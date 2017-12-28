$(function() {
	
	var floodCode = getQueryString("floodCode");
	
	//关闭我的任务页面
	closemyTask();
	//获取警情列表
	getJQList();
	

	//touch tab
	function mySwiper() {
		var mySwiper = new Swiper('.swiper-container', {
			autoHeight: true,
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper
			onSlideChangeStart: function() {
				$(".tabBar a").removeClass('active');
				$(".tabBar a").eq(mySwiper.activeIndex).addClass('active');
			}
		});
		$(".tabBar li").on('click', function(e) {
			e.preventDefault();
			$(".tabs a").removeClass('active');
			$(this).addClass('active');
			mySwiper.swipeTo($(this).index());
		});
		$(".tabBar li").click(function(e) {
			e.preventDefault();
		});
	}
	//跳转详情
	function ckDetail() {
		$(".ckDetail").on("click", function() {
			var waringId = $(this).closest("li").attr("data-code");//警情点编号
			window.open("taskDetail.html?floodCode="+escape(floodCode)+"&waringId="+escape(waringId), "_self");
		})
	}

	//立即处理
	function ljDeal() {
		$(".ljDeal").on("click", function() {
			var waringId = $(this).closest("li").attr("data-code");//警情点编号
			window.open("dealFill.html?floodCode="+escape(floodCode)+"&waringId="+escape(waringId), "_self");
		})
	}
	//完成处理
	function complete() {
		$(".complete").on("click", function() {
			var waringId = $(this).closest("li").attr("data-code");//警情点编号
			window.open("completeFill.html?floodCode="+escape(floodCode)+"&waringId="+escape(waringId), "_self");
		})
	}
	//关闭我的任务页面
	function closemyTask() {
		$("#myTaskTitle").on("click", function() {
			window.open("index.html", "_self");
		})
	}
	
	var jqList;
	//获取警情列表
	function getJQList() {
		var jsonObj = {
				"TeamId":"28",
				"FloodCode":floodCode
		};
		var jsonStr = json2str(jsonObj);
		$.ajax({
//			type: "get",
//			url: "testdata/taskList.json",
			type: "post",
			url: fxyjBackUrl + "getWorksheetByTeamIDUseMobile",
			data: jsonStr,
			contentType:'application/json',
			dataType: 'json',
			success: function(result) {
				console.log("警情列表");
				console.log(result);
				jqList = result.data;
				var listHTML_all = "<ul>";
				var listHTML_dcl = "<ul>";
				var listHTML_clz = "<ul>";
				var listHTML_ycl = "<ul>";
				for(var i = 0; i < jqList.length; i++) {
					var dataObj = jqList[i];
					var oneHTML = getOneHTML(dataObj);
					if(dataObj.WARNING_ISCOMPLETE == 2){//"待处理、已派单"
						listHTML_dcl += oneHTML;
					}else if(dataObj.WARNING_ISCOMPLETE == 3){//"处理中"
						listHTML_clz += oneHTML;
					}else if(dataObj.WARNING_ISCOMPLETE == 4){//"已完成"
						listHTML_ycl += oneHTML;
					}
					listHTML_all += oneHTML;
				}
				listHTML_all += '</ul>';
				listHTML_dcl += '</ul>';
				listHTML_clz += '</ul>';
				listHTML_ycl += '</ul>';
				
				$(".swiper-wrapper .all").empty();
				$(".swiper-wrapper .all").append(listHTML_all);
				$(".swiper-wrapper .dcl").empty();
				$(".swiper-wrapper .dcl").append(listHTML_dcl);
				$(".swiper-wrapper .clz").empty();
				$(".swiper-wrapper .clz").append(listHTML_clz);
				$(".swiper-wrapper .ycl").empty();
				$(".swiper-wrapper .ycl").append(listHTML_ycl);
				
				//touch tab
				mySwiper();
				//立即处理
				ljDeal();
				//完成处理
				complete();
				//跳转详情
				ckDetail();
			}
		});
	}
	
	function getOneHTML(dataObj){
		var oneHTML = '<li data-code="'+ dataObj.WARNINGID +'"><div class="top">'
		oneHTML += '<h4>警情名称：' + dataObj.WARNING_NAME + '</h4>';
		if(dataObj.WARNING_ISCOMPLETE == 2){//"待处理、已派单"
			oneHTML += '<span class="clzt">待处理</span></div>';
		}else if(dataObj.WARNING_ISCOMPLETE == 3){//"处理中"
			oneHTML += '<span class="clzt">处理中</span></div>';
		}else if(dataObj.WARNING_ISCOMPLETE == 4){//"已完成"
			oneHTML += '<span class="clzt">已完成</span></div>';
		}
		oneHTML += '<ul class="content">';
		oneHTML += '<li><span>报警描述:</span><span>'+dataObj.WARNING_DESCRIPTION+'</span></li>';
		oneHTML += '<li><span>报警位置:</span><span>'+dataObj.WARNING_LOCATION+'</span></li>';
		if(dataObj.WARNING_ISCOMPLETE == 2 || dataObj.WARNING_ISCOMPLETE == 3){
			oneHTML += '<li><span>上报时间:</span><span>'+dataObj.WARNING_UPLOADTIME+'</span></li></ul>';
		}else if(dataObj.WARNING_ISCOMPLETE == 4){
			oneHTML += '<li><span>完成时间:</span><span>'+dataObj.FINISHTIME+'</span></li></ul>';
		}
		oneHTML += '<div class="foot">'
		if(dataObj.WARNING_ISCOMPLETE == 2){
			oneHTML += '<input type="button" value="立即处理" class="ljDeal">'
		}else if(dataObj.WARNING_ISCOMPLETE == 3){
			oneHTML += '<input type="button" value="完成处理" class="complete">'
		}
		oneHTML += '<input type="button" value="查看详情" class="ckDetail">'
		oneHTML += '</div></li>'
		return oneHTML;
	}
	
})