$(function() {
	
	//设置高度
	height();
	//关闭其他
	closeOthers();
	$(".mainContainer .sideBar .tabContContainer .tabcontent .video").show();
	//获取视频监控列表
	getSPJKList();
	initBar();//初始化滚动条


	//获取视频监控列表
	function getSPJKList() {
		$.ajax({
			type: "get",
			url: "testdata/tcsj-spjkList.json",
			dataType: 'json',
			success: function(data) {
				console.log("视频监控列表");
				console.log(data);
				var dataList = data.data;
				var listHTML = '<tr><th>点位名称</th><th>状态</th><th>操作</th></tr>';
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<tr>';
					oneHTML += '<td>' + dataObj.dwmc + '</td>';
					oneHTML += '<td>' + dataObj.zt + '</td>';
					oneHTML += '<td><a href="#"><img src="img/ico-detail.png" alt=""></a></td>';
					oneHTML += '</tr>';
					listHTML += oneHTML;
				}
				$(".video .videoCont table").empty();
				$(".video .videoCont table").append(listHTML);
				
				//设置视频监控相关按钮点击事件
				setSPJKEvent()
			}
		});
	}
	
	//设置视频监控相关按钮点击事件
	function setSPJKEvent(){
		//打开视频
		$(".mainContainer .sideBar .tabContContainer .tabcontent .videoCont table tr img").on("click", function() {
			$(".tabContContainer .tabcontent .videoDetail").show()
			initBar();//初始化滚动条
		})
		//关闭视频
		$('.tabContContainer .tabcontent .videoDetail .videodetailtitle img').on("click", function() {
			$(".tabContContainer .tabcontent .videoDetail").hide()
		})
		//视频关闭所有
		$(" .mainContainer .sideBar .tabContContainer .tabcontent .video .videotitle img").on("click",function () {
	        $(".mainContainer .sideBar .tabContContainer .tabcontent .video").hide()
	        $(".tabContContainer .tabcontent .videoDetail").hide()
	    })
	}
	
})