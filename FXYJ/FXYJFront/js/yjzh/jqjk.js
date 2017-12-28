$(function() {
	
	var jqList = []; //警情列表
	var timer;//点位闪烁时间控制
	var currentJQD = {
		"DDDPFZR": "孙洪喜"
	};
var mySwiper = new Swiper('.swiper-container', {


        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
         observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper

    })

	height();//设置页面高度

	//汛情列表
	getXQList();
	
	//防讯队列表
	getFXDList();
	
	//sideBar show/hide 左侧面板显示
	toggleShow()

	// tab show/hide 左侧面板隐藏
	tabShow()
	
	//table切换，警情点、防讯队、图层数据
//	tabcount(".tabBar", 'active', '.tabcontent')
	$('.tabBar li').click(function() {
        var index = $(this).index();
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active')
        $('.tabcontent').eq(index).show().siblings('.tabcontent').hide();
        initBar();//初始化滚动条
        
        $(".fxdDetail").hide();//关闭防讯队详情
    })
	
	//警情录入-上传图片
	uploadPic();
	
	//关闭工单详情
	closegdxq()
	//关闭警情处理
	closejqcl()
	//关闭派单面板
	closePD()
	//关闭项目录入
	closexmlr()
	//提交录入
	tijaoluru()

	//sideBar show/hide 左侧面板显示
	function toggleShow() {
		$(".mainContainer .sideBarBrand .right>span").on("click", function() {
			$('.mainContainer .sideBarBrand').hide();
			$(".mainContainer .sideBar ").show();
			$('.zbfx').hide();
			initBar();//初始化滚动条
		})
	}

	// tab show/hide 左侧面板隐藏
	function tabShow() {
		$('.mainContainer .sideBar .tilte span').on("click", function() {
			$('.mainContainer .sideBar').hide();
			$('.mainContainer .sideBarBrand').show();
			initBar();//初始化滚动条
		})
	}
	
	//警情录入-上传图片
	function uploadPic(){
		$(".uploadPicture").on("change",function(){
			//判断是否支持FileReader
	        if (window.FileReader) {
	            var reader = new FileReader();
	        } else {
	            alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
	        }
			fileDom = this;
	        //获取文件
	        var file = fileDom.files[0];
	        var imageType = /^image\//;
	        //是否是图片
	        if (!imageType.test(file.type)) {
	            alert("请选择图片！");
	            return;
	        }
	        //读取完成
	        reader.onload = function(e) {
	            //图片路径设置为读取的图片
	            $(".previewPic").attr("src",e.target.result)
	        };
	        reader.readAsDataURL(file);
		});
	}
	//关闭工单详情
	function closegdxq() {
		$('.gdxq .title img').on("click", function() {
			//关闭工单详情
			$(".gdxq").hide();
		})
	}
	//关闭警情处理
	function closejqcl() {
		$('.jqcl .title img').on("click", function() {
			//关闭警情处理
			$(".jqcl").hide();
			//关闭防讯队详情
			$(".fxdDetail").hide();
		})
	}
	
	//关闭派单面板
	function closePD() {
		//点击关闭按钮
		$(".jqclpd .pdBox .closeBtn").on("click", function() {
			$(".jqclpd").hide();
		})
		//点击取消按钮
		$(".jqclpd .pdBox .pdcont .cancel").on("click", function() {
			$(".jqclpd").hide();
		})
		//点击确认按钮
		$(".jqclpd .pdBox .pdcont .confirm").on("click", function() {
			$(".jqclpd").hide();
		})
	}
	
	//关闭项目录入
	function closexmlr() {
		$(".jqlr .title img").on("click", function() {
			do_closexmlr()
		})
		$("#cancleqx").on("click", function() {
			do_closexmlr()
		})
		$("#guanbilr").on("click", function() {
			do_closexmlr()
		})
	}
	//关闭项目录入
	function do_closexmlr() {
		$(".jqlrcont").show()
		$(".jqlrbottom").show()
		$(".success").hide()
		$(".jqlr").hide()
	}
	
	//提交录入
	function tijaoluru() {
		$("#tijiao").on("click", function() {
			$(".jqlrcont").hide();
			$(".jqlrbottom").hide();
			$(".success").show();
			var sbr = $(".jqlrcont .sbr").val();
			var sbrPhone = $(".jqlrcont .sbrPhone").val();
			var jqLocation = $(".jqlrcont .jqLocation").val();
			var bjType = $(".jqlrcont .bjType").val();
			var jqms = $(".jqlrcont .jqms").val();
			var jqPic = $(".jqlrcont .previewPic").attr("src");
			debugger;
		})
	}

	//获取汛情列表
	function getXQList() {
		$.ajax({
			type: "post",
			//			url: "testdata/xqList.json",
			url: fxyjBackUrl + "getFloodNameList",
			dataType: 'json',
			success: function(data) {
				console.log("汛情列表");
				console.log(data);
				var dataList = data.data;
				//				var dataList = eval('(' + data.data + ')');
				var listHTML = '';
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<li data-code="' + dataObj.FLOODCODE + '">' + dataObj.FLOODNAME + '</li>';
					listHTML += oneHTML;
				}
				$(".jingqingTop .selectOption").empty();
				$(".jingqingTop .selectOption").append(listHTML);
				$(".mainContainer .sideBar .tabContContainer .tabcontent .jingqingTop .select").find("span").html(dataList[0].FLOODNAME);
				select('.mainContainer .sideBar .tabContContainer .tabcontent .jingqingTop .select', '.mainContainer .sideBar .tabContContainer .tabcontent .jingqingTop .selectOption');
				$('.mainContainer .sideBar .tabContContainer .tabcontent .jingqingTop .selectOption').find('li').on("click", function() {
					//警情列表
					getJQList($(this).attr('data-code'));
				})
				//警情列表
				getJQList(dataList[0].FLOODCODE);
			}
		});
	}

	//获取警情列表
	function getJQList(floodCode) {
		rmap.removePoint();
		jqList = [];
		var jsonObj = {
			"FloodCode": floodCode
		};
		var jsonStr = json2str(jsonObj);
		$.ajax({
			type: "post",
			//			url: "testdata/jqList.json",
			url: fxyjBackUrl + "getWaringSpotByFloodCode",
			data: jsonStr,
			//			data:'{"FloodCode":"20130625205840"}',
			contentType: 'application/json',
			dataType: 'json',
			success: function(data) {
				console.log("警情列表");
				console.log(data);
				if(data.data != null) {
					jqList = data.data;
				}
				//新增警情列表
				setNewJQList();

				var countDCL = 0;
				var countYPD = 0;
				var countCLZ = 0;
				var countYCL = 0;
				var newPoints = [];
				for(var i = 0; i < jqList.length; i++) {
					var dataObj = jqList[i];
					var picUrl = "";
					if(dataObj.WARNING_ISCOMPLETE == "待处理") {
						countDCL++;
						picUrl = "img/mapicon/label-r.png";
					} else if(dataObj.WARNING_ISCOMPLETE == "已派单") {
						countYPD++;
						picUrl = "img/mapicon/label-o.png";
					} else if(dataObj.WARNING_ISCOMPLETE == "处理中") {
						countCLZ++;
						picUrl = "img/mapicon/label-y.png";
					} else if(dataObj.WARNING_ISCOMPLETE == "已完成") {
						countYCL++;
						picUrl = "img/mapicon/label-b.png";
					}

					newPoints.push([dataObj.X, dataObj.Y]);
					rmap.addPoint(dataObj.X, dataObj.Y, {
						pic: picUrl,
						anchor: [14, 31],
						onClick: onPointClick,
						data: dataObj
					});
				}
				if(newPoints.length > 0) {
					rmap.extentByData(newPoints);
				}
				$(".jingqingInfo-All").find("span").text(jqList.length);
				$(".jingqingInfo-DCL").find("span").text(countDCL);
				$(".jingqingInfo-YPD").find("span").text(countYPD);
				$(".jingqingInfo-CLZ").find("span").text(countCLZ);
				$(".jingqingInfo-YCL").find("span").text(countYCL);

				//默认显示全部
				setJQListTable("全部");
				$(".jingqingInfo-All").on("click", function() {
					setJQListTable("全部");
				});
				$(".jingqingInfo-DCL").on("click", function() {
					setJQListTable("待处理");
				});
				$(".jingqingInfo-YPD").on("click", function() {
					setJQListTable("已派单");
				});
				$(".jingqingInfo-CLZ").on("click", function() {
					setJQListTable("处理中");
				});
				$(".jingqingInfo-YCL").on("click", function() {
					setJQListTable("已完成");
				});
				$(".jingqingInfo-New").on("click", function() {
					createNewJQ(); //新建警情
				});
			}
		});
	}

	//新建警情
	function createNewJQ() {
		rmap.drawPoint(onDrawPointComplate, {
			pic: "img/mapicon/label-r.png",
			anchor: [14, 31]
		});
	}
	//添加新建警情点完成
	function onDrawPointComplate(e) {
		var infoDiv = document.createElement('infoWindow');
		$(infoDiv).addClass("newjqd");

		var infoHTML = '<ul style="width:130px"><li class="clearfix"><input type="button" value="取消" class="cancel"><input type="button" value="录入" class="confirm"></li></ul>';
		$(infoDiv).append(infoHTML);
		rmap.showPopWindow(e.lng, e.lat, infoDiv, {
			isShowCloseButton: false,
			isHighLight: true,
			autoPan: false //显示气泡时是否确保当前气泡在地图范围，默认为true
		});
		$(".leaflet-popup-content-wrapper").css("border-radius", "0px"); //设置气泡样式
		$(".leaflet-popup-content-wrapper, .leaflet-popup-tip").css("background", "#000000"); //设置气泡样式

		var drawId = e.id; //获取绘制点位ID
		//取消
		$('.newjqd .cancel').on("click", function() {
			rmap.hidePopWindow();
			rmap.removeDrawPoint(drawId);
		})
		//录入
		$('.newjqd .confirm').on("click", function() {
			$(".jqlr").show();
			rmap.hidePopWindow();
		})
	}

	//新增警情列表
	function setNewJQList() {
		var listHTML = '';
		for(var i = 0; i < jqList.length; i++) {
			var dataObj = jqList[i];
			if(dataObj.WARNING_ISCOMPLETE == "待处理") {
				var oneHTML = '<li class="alertBox-li" data-jqbh="' + dataObj.WARNING_CODE + '"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><p>' +
					dataObj.WARNING_LOCATION + '</p><p>' + dataObj.WARNING_UPLOADTIME + '</p></li>';
				listHTML += oneHTML;
			}
		}
		$(".alertBox").empty();
		$(".alertBox").append(listHTML);

		$(".mainContainer .alertBox button").on("click", function() {
			$(this).parent().remove()
		})

		$(".alertBox-li").die().live("click", function() {
			jqListClick(this);
		});
	}

	//警情列表填充
	function setJQListTable(clqk) {
		removeHighlightPoint();
		var tableHTML = '<table><tr><th>警情编号</th><th>处理情况</th><th>警情描述</th></tr>';
		for(var i = 0; i < jqList.length; i++) {
			var dataObj = jqList[i];
			if(clqk == "全部" || clqk == dataObj.WARNING_ISCOMPLETE) {
				var oneHTML = '<tr class="jingqingBottom-tr" data-jqbh="' + dataObj.WARNING_CODE + '">';
				oneHTML += '<td>' + dataObj.WARNING_CODE + '</td>';
				oneHTML += '<td>' + dataObj.WARNING_ISCOMPLETE + '</td>';
				oneHTML += '<td>' + dataObj.WARNING_DESCRIPTION + '</td>';
				oneHTML += '</tr>';
				tableHTML += oneHTML;

				if(clqk != "全部") {
					//添加闪烁点位
					rmap.addPoint(dataObj.X, dataObj.Y, {
						id: "currentPoint" + i,
						pic: "img/mapicon/red.gif"
					});
				}
			}
		}
		//点位闪烁两秒后移除
		clearTimeout(timer);
		timer = setTimeout(removeHighlightPoint, 2000);

		tableHTML += '</table>';
		$(".jingqingBottom").empty();
		$(".jingqingBottom").append(tableHTML);
		$(".jingqingBottom .jingqingBottom-tr").die().live("click", function() {
			jqListClick(this);
		});
	}
	
	//点位闪烁移除
	function removeHighlightPoint() {
		for(var i = 0; i < jqList.length; i++) {
			rmap.removePoint("currentPoint" + i);
		}
	}
	
	//点位点击显示气泡
	function onPointClick(e) {
		var infoList = [{
			label: "警情编号",
			value: e.data.WARNING_CODE
		}, {
			label: "发生位置",
			value: e.data.WARNING_LOCATION
		}, {
			label: "警情描述",
			value: e.data.WARNING_DESCRIPTION
		}, {
			label: "接警时间",
			value: e.data.WARNING_UPLOADTIME
		}, {
			label: "报警方式",
			value: e.data.WARNING_SOURCE
		}];
		var infoDiv = createInfoWindow(infoList,e.data.WARNING_ISCOMPLETE);

		rmap.showPopWindow(e.lng, e.lat, infoDiv, {
			isHighLight: true,
			autoPan: false //显示气泡时是否确保当前气泡在地图范围，默认为true
		});

		$(".leaflet-popup-content-wrapper").css("border-radius", "0px");
		$(".leaflet-container a.leaflet-popup-close-button").hide();

		$(".popBox .closeImg").on("click", function() {
			rmap.hidePopWindow();
		});
		$('.zbfx').attr("data-lng", e.lng);
		$('.zbfx').attr("data-lat", e.lat);
		currentJQD.WARNING_CODE = e.data.WARNING_CODE;
		currentJQD.WARNING_NAME = e.data.WARNING_NAME;
		currentJQD.WARNING_LOCATION = e.data.WARNING_LOCATION;

		//点击警情处理
		$(".openjqcl").on("click", function() {
			$('.mainContainer .sideBarBrand').hide();
			$(".mainContainer .sideBar ").show();
			$('.zbfx').hide();
			$('.gdxq').hide();
			$(".jqcl").show();
			
			openjqclClick();
		})
		//点击工单详情
		$(".opengdxq").on("click", function() {
			$('.mainContainer .sideBarBrand').hide();
			$(".mainContainer .sideBar ").show();
			$('.zbfx').hide();
			$('.gdxq').show();
			$(".jqcl").hide();
			
			opengdxqClick();
		})
		//点击周边分析
		$(".openzbfx").on("click", function() {
			$('.mainContainer .sideBarBrand').hide();
			$(".mainContainer .sideBar ").show();
			$('.zbfx').show();
			$('.gdxq').hide();
			$(".jqcl").hide();
			
			loadPage("yjzh/jqjk_jqd_zbfx", "zbfx");
		})
	}
	
	//设置气泡内容
	function createInfoWindow(infoList,clzt) {
		var infoDiv = document.createElement('infoWindow');
		$(infoDiv).addClass("popBox");
		var listHTML = '<img class="closeImg" src="img/btn-panle-close.png" alt=""><i class="fa  fa-caret-down"></i><ul>';
		for(var i = 0; i < infoList.length; i++) {
			var infoObj = infoList[i];
			var oneHTML = '<li><span>' + infoObj.label + ' : </span><span>' + infoObj.value + '</span></li>';
			listHTML += oneHTML;
		}
		if(clzt=="待处理"){
			listHTML += '<li><a href="javascript:;" class="openjqcl">警情处理</a><a href="javascript:;" "  class="openzbfx ">周边分析</a></li>';
		}else{
			listHTML += '<li><a href="javascript:;" class="opengdxq">工单详情</a><a href="javascript:;" "  class="openzbfx ">周边分析</a></li>';
		}
		listHTML += '</ul>';
		$(infoDiv).append(listHTML);
		return infoDiv;
	}

	//警情列表点击
	function jqListClick(_this) {
		removeHighlightPoint();
		var currentJQBH = $(_this).attr("data-jqbh");
		for(var i = 0; i < jqList.length; i++) {
			if(jqList[i].WARNING_CODE == currentJQBH) {
//				//添加闪烁点位
//				rmap.addPoint(jqList[i].X, jqList[i].Y, {
//					id: "currentPoint" + i,
//					pic: "img/mapicon/red.gif"
//				});
				var pointObj = {
					lng:jqList[i].X,
					lat:jqList[i].Y,
					data:jqList[i],
				}
				onPointClick(pointObj);
			}
		}
//		//点位闪烁两秒后移除
//		clearTimeout(timer);
//		timer = setTimeout(removeHighlightPoint, 2000);
	}
	
	//派发给片区负责人工单
	$(".jqclmiddle .pfgd").on("click", function() {
		currentJQD.GDJSR = $(this).closest("li").find(".pqfzr").text();
		$(".jqclpd .pdBox .pdcont .jqdbh").text(currentJQD.WARNING_NAME);
		$(".jqclpd .pdBox .pdcont .jqdwz").text(currentJQD.WARNING_LOCATION);
		$(".jqclpd .pdBox .pdcont .fxd").text(currentJQD.GDJSR);
		$(".jqclpd .pdBox .pdcont .dddpfzr").text(currentJQD.DDDPFZR);
	
		$(".jqclpd").show();
	})
	
	//打开工单详情
	function opengdxqClick() {
		
	}
	
	//打开警情处理
	function openjqclClick() {
		$.ajax({
			type: "get",
			url: "testdata/zbfxdList.json",
			contentType: 'application/json',
			dataType: 'json',
			success: function(data) {
				console.log("周边防讯队");
				console.log(data);
				var dataList = [];
				if(data.data != null) {
					dataList = data.data;
				}
				var listHTML = '<tr><th>负责人</th><th>人数</th><th>距离</th><th>未完成工单数</th><th>操作</th></tr>';
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<tr data-fxdbh="' + dataObj.PFTID + '">';
					oneHTML += '<td>' + dataObj.CHARGEPERSON + '</td>'
					oneHTML += '<td>' + dataObj.PERSONSCOUNT + '</td>'
					oneHTML += '<td>--</td>'
					oneHTML += '<td>' + dataObj.UNCOMPLETE + '</td>'
					oneHTML += '<td><a href="#" class="detailImg"><img src="img/ico-detail.png" title="详情" alt=""></a><a href="#" class="fxdPD"><img src="img/ico-detail copy.png" title="派单" alt=""></a></td>'
					listHTML += oneHTML;
				}
				$(".jqclbotom table").empty();
				$(".jqclbotom table").append(listHTML);

				initBar();
				//防讯队详情
				$(".jqclbotom table .detailImg").on("click", function() {
					$(".fxdDetail").show();
					//初始化滚动条
					initBar();
					//防讯队详情
					getFXDXQ($(this).closest("tr").attr("data-fxdbh"), dataList);
					//防讯队详情-工单列表
					getGDList($(this).closest("tr").attr("data-fxdbh"));
				});

				//防讯队派单
				$(".jqclbotom table .fxdPD").on("click", function() {
					for(var i = 0; i < dataList.length; i++) {
						if(dataList[i].PFTID == $(this).closest("tr").attr("data-fxdbh")) {
							currentJQD.GDJSR = dataList[i].CHARGEPERSON;
						}
					}

					$(".jqclpd .pdBox .pdcont .jqdbh").text(currentJQD.WARNING_NAME);
					$(".jqclpd .pdBox .pdcont .jqdwz").text(currentJQD.WARNING_LOCATION);
					$(".jqclpd .pdBox .pdcont .fxd").text(currentJQD.CHARGEPERSON);
					$(".jqclpd .pdBox .pdcont .dddpfzr").text(currentJQD.DDDPFZR);

					$(".jqclpd").show();
				})
			}
		});
	}
	
	//获取防讯队列表
	function getFXDList() {
		$.ajax({
			type: "post",
//			url: "testdata/fxdList.json",
			url: fxyjBackUrl + "getAllPreFloodTeam",
			contentType:'application/json',
			dataType: 'json',
			success: function(data) {
				console.log("防讯队列表");
				console.log(data);
				var fxdList = data.data;
				var listHTML = '<tr><th>名称</th><th>负责人</th><th>人数</th><th>操作</th></tr>';
				for(var i = 0; i < fxdList.length; i++) {
					var dataObj = fxdList[i];
					var oneHTML = '<tr class="fangxunduibottom-tr" data-fxdbh="'+ dataObj.PFTID +'">';
					oneHTML += '<td>' + dataObj.PFTNAME + '</td>';
					oneHTML += '<td>' + dataObj.CHARGEPERSON + '</td>';
					oneHTML += '<td>' + dataObj.PERSONSCOUNT + '</td>';
					oneHTML += '<td><a href="#"><img src="img/ico-detail.png" title="详情" alt=""></a></td></tr>';
					listHTML += oneHTML;
				}
				$(".fangxunduibottom table").empty();
				$(".fangxunduibottom table").append(listHTML);
				
				//打开详情
				$(".sideBar .tabContContainer .tabcontent .fangxunduibottom table tr img").die().live("click", function() {
					$(".fxdDetail").show();
					//初始化滚动条
					initBar();
					//防讯队详情
					getFXDXQ($(this).closest("tr").attr("data-fxdbh"),fxdList);
					//防讯队详情-工单列表
					getGDList($(this).closest("tr").attr("data-fxdbh"));
				});
				//关闭详情
				$('.fxdDetail .detailtitle img').die().live("click", function() {
					$(this).parent().parent().hide();
				})
			}
		});
	}
	
	/**start-防讯队详情*********************************************************************/
	//防讯队详情
	function getFXDXQ(fxdbh, fxdList) {
		for(var i = 0; i < fxdList.length; i++) {
			var dataObj = fxdList[i];
			if(dataObj.PFTID == fxdbh) {
				$(".fxdxq li .fxdmc").text(dataObj.PFTNAME);
				$(".fxdxq li .fzrxm").text(dataObj.CHARGEPERSON);
				$(".fxdxq li .fzrdh").text(dataObj.CHARGEPERSONTEL);
				$(".fxdxq li .fzryx").text(dataObj.CHARGEPERSONEMAIL);
				$(".fxdxq li .rs").text(dataObj.PERSONSCOUNT);
				$(".fxdxq li .rymd").text(dataObj.PERSONS);
			}
		}
	}
	
	//防讯队详情-工单列表
	function getGDList(fxdbh) {
		var jsonObj = {
			"PFTID": fxdbh,
			"FLOODID": "12"
		};
		var jsonStr = json2str(jsonObj);
		$.ajax({
			type: "post",
			url: fxyjBackUrl + "getWorksheetByPreFloodTeamID",
			//			url: "testdata/fxd-gdList.json",
			data: jsonStr,
			contentType: 'application/json',
			dataType: 'json',
			success: function(result) {
				console.log("工单列表");
				console.log(result);
				var dataList = [];
				if(result.data != null && result.data.length > 0) {
					dataList = result.data;
				}
	
				var listHTML = '<table><tr><th>工单编号</th><th>警情点编号</th><th>警情点位置</th><th>派单时间</th><th>完成时间</th><th>工单内容</th><th>图片</th><th>工单状态</th></tr>';
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<tr>';
					oneHTML += '<td>' + dataObj.TASKID + '</td>';
					oneHTML += '<td>' + dataObj.WARNING_NAME + '</td>';
					oneHTML += '<td>' + dataObj.WARNING_LOCATION + '</td>';
					oneHTML += '<td>' + dataObj.ORDERTIME + '</td>';
					oneHTML += '<td>' + dataObj.FINISHTIME + '</td>';
					oneHTML += '<td>' + dataObj.WARNING_DESCRIPTION + '</td>';
					oneHTML += '<td class="taskPic" style="cursor: pointer;" data-taskid="' + dataObj.TASKID + '">' + dataObj.PICTURECOUNT + '</td>';
					oneHTML += '<td>' + dataObj.TASKSTATUS + '</td>';
					listHTML += oneHTML;
				}
				listHTML += '</table>';
				$(".fxd-gdList-table").empty();
				$(".fxd-gdList-table").append(listHTML);
	
				$(".fxd-gdList-table .taskPic").on("click", function() {
					getTaskPicture($(this).attr("data-taskid"));
				});
			}
		});
	}
	
	function getTaskPicture(taskid) {
		var jsonObj = {
			"TASKID": taskid
		};
		var jsonStr = json2str(jsonObj);
		$.ajax({
			type: "post",
			url: fxyjBackUrl + "getWorksheetPictureByTaskId",
			data: jsonStr,
			contentType: 'application/json',
			dataType: 'json',
			success: function(result) {
				console.log("工单图片信息");
				console.log(result);
				var dataList = [];
				if(result.data != null && result.data.length > 0) {
					dataList = result.data;
					for(var i = 0; i < dataList.length; i++) {
						var dataObj = dataList[i];
						var picUrl = fangxunPictureUrl + dataObj.URL;
						var description = dataObj.DESCRIPTION;
						window.open(picUrl)
					}
				}
			}
		});
	}
	/**end-防讯队详情*********************************************************************/
})

