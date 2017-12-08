var editor;
setCodeMirror();

// 设置代码编辑器高度
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
$("#coderesource").css("height", h - 200 + "px");
$(".CodeMirror").css("height", h - 200 + "px");

var treeData = {
	data: InterfaceDetails,
};

var treeHtml = template('treeTpl', treeData);
$("#tree").html(treeHtml);

var indexHtml = template('indexTpl', treeData);
$("#interfaceIndexTB").html(indexHtml);
$(".hov").on("click", function() {
	$(this).addClass('nowact').siblings('li').removeClass('nowact');
	$(this).parent().parent().siblings('li').find("li").removeClass("nowact");
})
setNiceScroll("index_contenview", "index_content");

var obj = GetRequest()
var interfaceUrl = "./RMap/Interface/RMap." + obj.name + "." + obj.child + ".html";
if(obj.name == "helloWorld" || obj.name === undefined) {
	interfaceUrl = "./RMap/Interface/RMap.html";
}
var exampleUrl = "./RMap/Examples/" + obj.child + ".html";
if(obj.name == "helloWorld" || obj.name === undefined) {
	exampleUrl = "./RMap/Examples/helloWorld.html";
}

var ta = document.getElementById('coderesource');
var ifrCodeDoc = document.getElementById('ifrCode');

//初始化时加载helloworld
getInterfaceData();
getExampleData();
//接口说明切换按钮点击
$("#Explain").on("click", function() {
	setTimeout(function(){
		if(document.getElementById(thisLable)){
			setNiceScroll("contenta", "contentzhan");
//			console.log(document.getElementById(thisLable).offsetTop);
			$(".contenta").getNiceScroll(0).doScrollTop(document.getElementById(thisLable).offsetTop, 0);//添加锚点
		}
	},200)
})
var isFirstClick=false;
//调用示例切换按钮点击
$("#Example").on("click", function() {
	if(!isFirstClick){
		isFirstClick=true;
		setTimeout(function(){
			getExampleData();
		},200)
	}
})

//$(document).ready(function() {
//	setCodeMirror();
//})

function getInterfaceData() {
	$.ajax({
		async: false,
		url: interfaceUrl,
		success: function(data) {
			$(".contentzhan").html(data);
			setTimeout(function(){
				if(document.getElementById(thisLable)){
					setNiceScroll("contenta", "contentzhan");
//					console.log(document.getElementById(thisLable).offsetTop);
					$(".contenta").getNiceScroll(0).doScrollTop(document.getElementById(thisLable).offsetTop, 0);//添加锚点
				}
			},1)
		},
		error: function(err) {
			console.log(err)
		}
	});
}

function getExampleData() {
	$.ajax({
		async: false,
		url: exampleUrl,
		success: function(data) {
			var newURL = window.location.origin + "/mapapi/rmap.js";
			data = data.replace("../../mapapi/rmap.js", newURL)
			$("#coderesource").text(data);
//			$("#coderesource").val(data);
//			setCodeMirror();
			editor.setValue(data);
			run();
		},
		error: function(err) {
			console.log(err)
		}
	});
}

function setCodeMirror() {
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
	editor = CodeMirror.fromTextArea(document.getElementById("coderesource"), {
		mode: mixedMode,
		selectionPointer: true,
		lineNumbers:true,
		scrollbarStyle:"overlay"
	});
}

function run() {
	ifrCodeDoc.contentWindow.document.open();
//	ifrCodeDoc.contentWindow.document.write(ta.value);
	ifrCodeDoc.contentWindow.document.write(editor.getValue());
	ifrCodeDoc.contentWindow.document.close();
}

$(".refresh").each(function(index, item) {
	$(this).on("click", function() {
		$.ajax({
			async: false,
			url: exampleUrl,
			success: function(data) {
				var newURL = window.location.origin + "/mapapi/rmap.js";
				data = data.replace("../../mapapi/rmap.js", newURL);
//				$("#coderesource").text(data);
//				$("#coderesource").val(data);
//				setCodeMirror();
				editor.setValue(data);
				run();
			},
			error: function(err) {
				console.log(err)
			}
		});
	})
})

$(".copy").each(function(index, item) {
	$(this).on("click", function() {
		$("#coderesource111").val(editor.getValue());
//		var currentTA = $("#coderesource");
		var currentTA = $("#coderesource111");
		currentTA.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
//		alert("复制完毕，可粘贴");
		$(".zs_info").fadeIn(500);
		setTimeout(function(){
			$(".zs_info").fadeOut(500);
		},1000);
		
	})
})

//$("#tree li:first-child .hov").addClass('nowact'); //初始化时给第一个选中样式
//$("#tree li:nth-child(2) .hov").addClass('nowact'); //初始化时给第一个选中样式

var thisLable = "";
$(".hov").on("click", function() {
	if($(this).attr("id")=="index_li_id"){
		$(".hov").removeClass('nowact');
		$("#index_li_id").addClass('nowact');
		$("#interfaceIndex").css("display","block");
		$("#interfaceDetail").css("display","none");
		
		setNiceScroll("index_contenview", "index_content");
	}else{
		$("#index_li_id").removeClass('nowact');
		$("#interfaceIndex").css("display","none");
		$("#interfaceDetail").css("display","block");
		
		$(this).addClass('nowact').siblings('li').removeClass('nowact');
		$(this).parent().parent().siblings('li').find("li").removeClass("nowact");
		thisLable = $(this).find('a').attr("data-label");
		var name = $(this).find('a').attr("data-name");
		var child = $(this).find('a').attr("data-child");
	
		interfaceUrl = "./RMap/Interface/RMap." + name + "." + child + ".html";
		if(name == "helloWorld" || name === undefined) {
			interfaceUrl = "./RMap/Interface/RMap.html";
		}
		exampleUrl = "./RMap/Examples/" + child + ".html";
		if(name == "helloWorld" || name === undefined) {
			exampleUrl = "./RMap/Examples/helloWorld.html";
		}
	
		getInterfaceData();
		getExampleData();
	}

})

$(".indexLink").on("click", function() {
	$("#interfaceIndex").css("display","none");
	$("#interfaceDetail").css("display","block");
	
	var name = $(this).find('a').attr("data-name");
	var child = $(this).find('a').attr("data-child");
	var label = $(this).find('a').attr("data-label");
	thisLable = label;
	$(".hov").removeClass('nowact');
	$(".hov").each(function(index, item) {
		if(label == $(item).find('a').html()){
			$(item).addClass('nowact');
//			document.getElementById(label).scrollIntoView();
		}
	})
//	console.log(document.getElementById("tree_"+thisLable).offsetTop);
	$(".tree").getNiceScroll(0).doScrollTop(document.getElementById("tree_"+thisLable).offsetTop-100, 0);//添加锚点
	interfaceUrl = "./RMap/Interface/RMap." + name + "." + child + ".html";
	if(name == "helloWorld" || name === undefined) {
		interfaceUrl = "./RMap/Interface/RMap.html";
	}
	exampleUrl = "./RMap/Examples/" + child + ".html";
	if(name == "helloWorld" || name === undefined) {
		exampleUrl = "./RMap/Examples/helloWorld.html";
	}
	getInterfaceData();
	getExampleData();
})
