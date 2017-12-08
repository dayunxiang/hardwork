var exampleData = {
	data: ApplicationCase,
};

var exampleHtml = template('exampleTpl', exampleData);
$("#exampleid").html(exampleHtml);

var editorArr=[];
var editor;
$(document).ready(function() {
	for(var i=0;i<exampleData.data.length;i++){
		editorArr[i] = setCodeMirror(i);
	}
	getData(0);
})

function setCodeMirror(index) {
	var mixedMode = {
		name: "htmlmixed",
		scriptTypes: [{
			matches: /\/x-handlebars-template|\/x-mustache/i,
			mode: null
		}, {
			matches: /(text|application)\/(x-)?vb(a|script)/i,
			mode: "vbscript"
		}]
	};
//	var editor = CodeMirror.fromTextArea(document.getElementById("myresource"+index), {
	editor = CodeMirror.fromTextArea(document.getElementById("myresource"), {
		mode: mixedMode,
		selectionPointer: true,
		lineNumbers:true,
		scrollbarStyle:"overlay"
	});
	return editor;
}

var currentHeadingId;
$("#accordion .panel-heading").each(function(index, item) {
	$(item).on("click", function() {
		getData(index);
		currentHeadingId = "heading"+index;
		// 设置代码编辑器高度
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		$(".myresource").css("height", h - 240 + "px");
		$(".CodeMirror").css("height", h - 240 + "px");
		
		$("#codeTitle_h4").html(exampleData.data[index].label);
		$("#exampleid").css("display","none");
		$("#exampleCode").css("display","block");
		setNiceScroll("zs_examples", "zs_scroll");
	})
})

$("#panel-title-code").on("click", function() {
	$("#exampleid").css("display","block");
	$("#exampleCode").css("display","none");
	setNiceScroll("zs_examples", "zs_scroll");
	$(".zs_examples").getNiceScroll(0).doScrollTop(document.getElementById(currentHeadingId).offsetTop, 0);//添加锚点
})

$(".refresh").each(function(index, item) {
	$(this).on("click", function() {
		getData(index);
	})
})

$(".run").each(function(index, item) {
	$(this).on("click", function() {
//		run(editorArr[index].getValue());
		run(editor.getValue());
	})
})

$(".copy").each(function(index, item) {
	$(this).on("click", function() {
//		$("#coderesource111").val(editorArr[index].getValue());
		$("#coderesource111").val(editor.getValue());
		var currentTA = $("#coderesource111");
		currentTA.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		$(".zs_info").fadeIn(500);
		setTimeout(function(){
			$(".zs_info").fadeOut(500);
		},1000);
		
	})
})

function getData(index){
	$.ajax({
		async: false,
		url: "./RMap/Examples/Case/case" + (index + 1) + ".html",
		success: function(data) {
			var newURL = window.location.origin+"/mapapi/rmap.js";
			data = data.replace("../../mapapi/rmap.js",newURL)
			$(".myresource").val(data);
			setTimeout(function(){
//				editorArr[index].setValue(data);
				editor.setValue(data);
			},200)
			run(data);
		},
		error: function(err) {
			console.log(err)
		}
	});
}

function run(value) {
	var ifrCodeDoc = document.getElementById('ifrCode');
	ifrCodeDoc.contentWindow.document.open();
	ifrCodeDoc.contentWindow.document.write(value);
	ifrCodeDoc.contentWindow.document.close();
}

$(".drag").on("click", function() {
	if($(this).hasClass("drag_close")) {
		$(this).removeClass("drag_close");
		$(this).addClass("drag_open");
	} else {
		$(this).removeClass("drag_open");
		$(this).addClass("drag_close");
	}
	$('.zs_examples').toggle('normal');
	if($(".map").hasClass('col-xs-6')) {
		$('.map').removeClass('col-xs-6').addClass('col-xs-12')
	} else {
		$('.map').removeClass('col-xs-12').addClass('col-xs-6')
	}
})

