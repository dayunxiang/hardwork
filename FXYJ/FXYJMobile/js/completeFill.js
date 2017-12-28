$(function() {
	var floodCode = getQueryString("floodCode");

	setNiceScroll(".optionSearch")
	//关闭optionSearch菜单
	closeoptionSearch()
	//关闭完成填报
	closewctb()

	//现场处理措施列表
	getXCCLCS();
	//积水原因列表
	getJSYY();
	//建议整改方案列表
	getJYZGFA();

	//呼出选择菜单
	function showSearchOption(optionType) {
		$("#wctb ." + optionType).on("click", function() {
			$(".optionSearch." + optionType).show(200);
			that = this
		})
		$(".optionSearch." + optionType + " .optioncont li").on("click", function() {
			$(that).find('span').last().text($(this).text())
			$(".optionSearch." + optionType).hide(200);
		})
	}
	//关闭optionSearch菜单
	function closeoptionSearch() {
		$(".optionSearch .optiontitle img").on("click", function() {
			$(".optionSearch").hide(200)
		})
	}
	//关闭完成填报
	function closewctb() {
		$("#wctbTitle img").on("click", function() {
			window.open("myTask.html?floodCode=" + escape(floodCode), "_self");
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

	//现场处理措施列表
	function getXCCLCS() {
		$.ajax({
//			type: "get",
//			url: "testdata/wcsb_xcclcs.json",
			type: "post",
			url: fxyjBackUrl + "getMethodList",
			contentType: 'application/json',
			dataType: 'json',
			success: function(result) {
				console.log("任务详情");
				console.log(result);
				var dataList = result.data;
				var listHTML = "";
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<li>' + dataObj.NAME + '</li>';
					listHTML += oneHTML;
				}
				$(".xcclcs .fl-r").text(dataList[0].NAME);
				$(".optionSearch.xcclcs .optioncont").html(listHTML);

				//呼出选择菜单-现场处理措施
				showSearchOption("xcclcs")
			}
		});
	}

	//积水原因列表
	function getJSYY() {
		$.ajax({
//			type: "get",
//			url: "testdata/wcsb_jsyy.json",
			type: "post",
			url: fxyjBackUrl + "getWarningReasonList",
			contentType: 'application/json',
			dataType: 'json',
			success: function(result) {
				console.log("任务详情");
				console.log(result);
				var dataList = result.data;
				var listHTML = "";
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<li>' + dataObj.NAME + '</li>';
					listHTML += oneHTML;
				}
				$(".jsyy .fl-r").text(dataList[0].NAME);
				$(".optionSearch.jsyy .optioncont").html(listHTML);

				//呼出选择菜单-积水原因
				showSearchOption("jsyy")
			}
		});
	}

	//建议整改方案列表
	function getJYZGFA() {
		$.ajax({
//			type: "get",
//			url: "testdata/wcsb_jyzgfa.json",
			type: "post",
			url: fxyjBackUrl + "getRepairIdeaList",
			contentType: 'application/json',
			dataType: 'json',
			success: function(result) {
				console.log("任务详情");
				console.log(result);
				var dataList = result.data;
				var listHTML = "";
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<li>' + dataObj.NAME + '</li>';
					listHTML += oneHTML;
				}
				$(".jyzgfa .fl-r").text(dataList[0].NAME);
				$(".optionSearch.jyzgfa .optioncont").html(listHTML);

				//呼出选择菜单-建议整改方案
				showSearchOption("jyzgfa")
			}
		});
	}

});