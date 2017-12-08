
$(".link").text(window.location.origin + "/mapapi/rmap.js");

$(".copy").click(function(){
	var currentTA = $(".link");
	currentTA.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
	alert("复制完毕，可粘贴");
})
