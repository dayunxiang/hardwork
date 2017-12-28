$(function() {
	$('#demo-1').fdatepicker({
		format: 'yyyy-mm-dd'
	});
	$('#demo-2').fdatepicker({
		format: 'yyyy-mm-dd'
	});
	
	//设置高度
	height();
	//关闭其他
	closeOthers();
	$(".mainContainer .sideBar .tabContContainer .tabcontent .yewei").show();
	//获取管道液位列表
	getGDYWList();
	initBar();//初始化滚动条
	
	//获取管道液位列表
	function getGDYWList() {
		$.ajax({
			type: "get",
			url: "testdata/tcsj-gdywList.json",
			dataType: 'json',
			success: function(data) {
				console.log("管道液位列表");
				console.log(data);
				var dataList = data.data;
				var listHTML = '';
				for(var i = 0; i < dataList.length; i++) {
					var dataObj = dataList[i];
					var oneHTML = '<li>';
					oneHTML += '<h4>' + dataObj.ywjmc + '</h4>';
					oneHTML += '<p>' + dataObj.ywjwz + '</p>';
					oneHTML += '<img src="img/item-list-more.png" alt=""><ul class="downCont"><i class="fa  fa-caret-up"></i><li class="xiangq">详情</li><li>编辑</li><li>删除</li></ul></li>';
					listHTML += oneHTML;
				}
				listHTML += '</table>';
				$(".mainContainer .sideBar .tabContContainer .tabcontent .yewei .yeweicontent").empty();
				$(".mainContainer .sideBar .tabContContainer .tabcontent .yewei .yeweicontent").append(listHTML);
				
				//设置管道液位相关按钮点击事件
				setGDYWEvent()
			}
		});
	}
	
	//设置管道液位相关按钮点击事件
	function setGDYWEvent(){
		//显示详情/删除/编辑 详情
		$('.mainContainer .sideBar .tabContContainer .tabcontent .yewei .yeweicontent>li img').on("click", function() {
			$(this).siblings(".mainContainer .sideBar .tabContContainer .tabcontent .yewei .yeweicontent .downCont").toggle(300)
		})
		//显示详情
		$(".downCont .xiangq").on("click", function() {
			$(".mainContainer .sideBar .tabContContainer .tabcontent .yeweiDetail").show()
			$(".mainContainer .sideBar .tabContContainer .tabcontent .yewei .yeweicontent .downCont").hide(300)
			initBar();//初始化滚动条
		})
		//关闭详情
		$(".mainContainer .sideBar .tabContContainer .tabcontent .yeweiDetail .yeweidetailtitle img").on("click", function() {
			$(".mainContainer .sideBar .tabContContainer .tabcontent .yeweiDetail").hide()
		})
		//关闭所有
		$('.mainContainer .sideBar .tabContContainer .tabcontent .yewei .yeweititle img').on("click",function () {
	        $(".mainContainer .sideBar .tabContContainer .tabcontent .yewei").hide()
	        $(".mainContainer .sideBar .tabContContainer .tabcontent .yeweiDetail").hide()
	    })
	}
	
	
})