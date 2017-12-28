$(function() {
	
	var floodCode = getQueryString("floodCode");
	
	//关闭处理填报
	closecltb();
	//调用拍照上传图片
	clickAddPicture();

	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true //修改swiper的父元素时，自动初始化swiper
	})
	
	function closecltb() {
		$("#cltbTitle img").on("click", function() {
			window.open("myTask.html?floodCode="+escape(floodCode), "_self");
		})
	}
	
	//调用拍照上传图片
	function clickAddPicture(){
		$(".addpic-div .addpic").on("click", function(){
			getInfoFromWebView("getPic");//调用相机、图片库
		})
	}
})

