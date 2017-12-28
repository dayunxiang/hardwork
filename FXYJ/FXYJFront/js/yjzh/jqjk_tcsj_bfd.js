$(function() {
	
	//设置高度
	height();
	//关闭其他
	closeOthers();
	$(".mainContainer .sideBar .tabContContainer .tabcontent .bufang").show()
	//获取布防点列表
	getBFDList();
	initBar();//初始化滚动条
	

	//获取布防点列表
	function getBFDList() {
		$.ajax({
			type: "get",
			url: "testdata/tcsj-bfdList.json",
			dataType: 'json',
			success: function(data) {
				console.log("布防点列表");
				console.log(data);
				var dataList = data.data;
				var listHTML = '<tr><th>点位名称</th><th>值班队伍</th><th>操作</th></tr>';
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<tr>';
					oneHTML += '<td>' + dataObj.bfdmc + '</td>';
					oneHTML += '<td>' + dataObj.zbdw + '</td>';
					oneHTML += '<td><a href="#"><img src="img/ico-detail.png" alt=""></a></td>';
					oneHTML += '</tr>';
					listHTML += oneHTML;
				}
				$(".bufang .bufangCont table").empty();
				$(".bufang .bufangCont table").append(listHTML);

				//设置布防点相关按钮点击事件
				setBFDEvent();
			}
		});
	}
	
	//设置布防点相关按钮点击事件
	function setBFDEvent(){
		//关闭bufangdetail
		$(".mainContainer .sideBar .tabContContainer .tabcontent .bufangDetail .bufangdetailtitle img").on("click", function() {
			$(".mainContainer .sideBar .tabContContainer .tabcontent .bufangDetail").hide()
		})
		//打开openbufangdetail
		$(".mainContainer .sideBar .tabContContainer .tabcontent .bufangCont table tr img").on("click", function() {
			$(".mainContainer .sideBar .tabContContainer .tabcontent .bufangDetail").show()
			initBar();//初始化滚动条
		})
		//关闭布防点所有
		$('.mainContainer .sideBar .tabContContainer .tabcontent .bufang .bufangtitle img').on("click",function () {
	        $(".mainContainer .sideBar .tabContContainer .tabcontent .bufang").hide()
	        $(".mainContainer .sideBar .tabContContainer .tabcontent .bufangDetail").hide()
	    })
	}
	
	
})