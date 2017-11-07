 $(function () {
   height()
   sideBarOpen()
   ReName()
   Copy()
   radiooption(".optionpz", ".radio")
   radiooption("#optionzpsp", ".radio1")
   radiooption("#optionzxztjsfsp", ".radio2")
   radiooption("#optiongdsfys", ".radio3")

   newWorkFlow()
   $(window).on("resize", function () {
     height()
   })
 })

 //清楚choosen value
 $(".search-field").find("input").val("")

 // 设置高度
 function height() {
   var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   $(".container-fluid").css("height", h + "px")
   $(".sideBarContent").css("height", (h - 63) + "px")
   $(".option").css("height", h)
   $(".optioncontent").css("height", (h - 83) + "px")
   $(".assignOption").css("height", (h - 103) + "px")
 }
 //侧边栏开关
 function sideBarOpen() {
   $(".opened").on("click", function () {
     $(".sideBar").toggleClass("openToggle")
     $(this).toggleClass('ToggleOpend')
   })
 }

 //重命名
 function ReName() {
   $(".edit").on("click", function () {
     var value = $(this).parent("li").find("input").val()
     $(this).parent("li").find("input").removeAttr("readonly")
     $(this).parent("li").find("input").focus().val(value)
       // $(this).parent("li").find("input").attr("readonly",'true')

   })
 }

 //复制
 function Copy() {
   $(".copy").on("click", function () {
     var sourceNode = $(this).parent("li")
     console.log(sourceNode)
     var clonedNode = sourceNode.clone(true);
     $(".sideBarContent").find("ul").append(clonedNode);
   })
 }



 //新建工作流
 function newWorkFlow() {
   $("#modalSure").on('click', function () {
     if ($("#flowName").val().length !== 0) {
       var str = ''
       str = '<li>' +
         '<input type="text" value=' + $("#flowName").val() + '>' +
         '<span class="fa fa-edit edit"></span>' +
         '<span class="fa fa-copy copy"></span>' +
         '</li>'
       $(".sideBarContent").find("ul").append(str);
       $('.newModal').modal('hide');
     }
     ReName()
     Copy()

   })
 }

 //保存退出
 $(".modalbc").on("click", function () {
     $('.tubjmodal').modal('hide');
   })
   //是否选项
 function radiooption(option, subop) {
   $(option).on("click", function () {
     $(".choose").css("display", "block")
   })
   $(subop).on("click", function () {
     $(this).find("b").css("display", 'block');
     $(this).siblings(subop).find("b").css("display", "none");
     $(".choose").css("display", "none")
     var text = "<span>" + $(this).find('span').text() + "</span>" + "<i class='fa fa-close faclear'></i>"
     $(option).html(text)

   })
   $(option).on("click", ".faclear", function (e) {
     $(option).html("")
     e.stopPropagation();
   })
 }


 var config = {

   '.chosen-select': {},

   '.chosen-select-deselect': {
     allow_single_deselect: true
   },

   '.chosen-select-no-single': {
     disable_search_threshold: 10
   },

   '.chosen-select-no-results': {
     no_results_text: 'Oops, nothing found!'
   },

   '.chosen-select-width': {
     width: "95%"
   }

 }

 for (var selector in config) {

   $(selector).chosen(config[selector]);

 }
