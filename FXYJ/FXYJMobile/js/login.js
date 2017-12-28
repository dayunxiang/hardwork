$(function() {
	$(".loginBtn").on("click",function(){
		var username = $(".username").val();
		var password = $(".password").val();
//		if(username=="admin" && password=="123"){
//			window.open("main.html","_self");
//		}else{
//			alert("用户名或密码错误！")
//		}
		window.open("index.html","_self");
	})
})