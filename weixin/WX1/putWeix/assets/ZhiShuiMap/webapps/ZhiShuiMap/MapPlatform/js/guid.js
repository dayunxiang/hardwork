var obj = GetRequest()
var Url = "./RMap/Guide/" + obj.name + ".htm";
if(obj.name === undefined) {
	Url = "./RMap/Guide/guide.htm";
}

$(".list li").on("click", function(e) {
	$(this).addClass('nowact').siblings('li').removeClass('nowact');
	Url = "./RMap/Guide/" + $(this).attr("data-value") + ".htm";
	$.ajax({
		async: false,
		url: Url,
		success: function(data) {
			$(".contentzhan").html(data);
			setNiceScroll("contenview","contentzhan");
		},
		error: function(err) {
			console.log(err)
		}
	});
})

$(document).ready(function() {
	$.ajax({
		async: false,
		url: Url,
		success: function(data) {
			$(".contentzhan").html(data);
			setNiceScroll("contenview","contentzhan");
		},
		error: function(err) {
			console.log(err)
		}
	});
})