$(function() {
	//关闭周边分析
	closezbfx();
	tabcount(".jqbottomTabBar", 'now', '.jqbottomTabContent');
	select('.mainContainer .sideBar .zbfx .select', '.mainContainer .sideBar .zbfx  .selectOption');
	//选择半径
	selectRadius();
	//缓冲
	buffer(50);
	//周边分析关闭
	function closezbfx() {
		$('.zbfx .title img').on("click", function() {
			$('.zbfx').hide();
			rmap.removeBuffer();//移除缓冲结果
		})
	}
	//选择半径
	function selectRadius() {
		$('.mainContainer .sideBar .zbfx .selectOption').find('li').on("click", function() {
			var radius = $(this).text();
			buffer(radius.split("m")[0]);
		})
	}

	//缓冲
	function buffer(radius) {
		rmap.bufferPoint($('.zbfx').attr("data-lng"), $('.zbfx').attr("data-lat"), radius, {
			callback: bufferResult,
			color: '#FF0000'
		});
	}
	//缓冲结果
	function bufferResult(e) {
		console.log(e);
		var radius = Math.round(e.radius); //取整
		$(".mainContainer .sideBar .zbfx .select").find("span").text(radius + "m");
	}
})