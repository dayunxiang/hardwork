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
     // setNiceScroll('optioncontentContainer','optioncontent');
   })
 })


  //阻止事件冒泡的通用函数
  function stopBubble(e){
    // 如果传入了事件对象，那么就是非ie浏览器
    if(e&&e.stopPropagation){
      //因此它支持W3C的stopPropagation()方法
      e.stopPropagation();
    }else{
      //否则我们使用ie的方法来取消事件冒泡
      window.event.cancelBubble = true;
    }
  }



 //清楚choosen value
 $(".search-field").find("input").val("")

 // 设置高度
 function height() {
   var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   $(".container-fluid").css("height", h + "px")
   $(".sideBarContent").css("height", (h - 63) + "px")
   $(".option").css("height", h + "px")
   $(".optioncontent").css("height", (h+500) + "px")
   $(".optioncontentContainer").css("height", (h - 83) + "px")
   $(".assignOption").css("height", (h - 103) + "px")
   $(".start").css("height",h+"px")
   $(".designate").css("height",h+"px")
   $(".designateS").css("height",h+"px")
   $(".appointApproval").css("height",h+"px")
   $(".zxORgp").css("height",h+"px")
   $(".zxz").css("height",h+"px")
   $(".yqsp").css("height",h+"px")
   $(".zxztjsfsp").css("height",h+"px")
   $(".gdsfys").css("height",h+"px")
   $("svg").css({"height":(h-50)+"px","width": (w- $(".option").width() - $(".sideBar").width()) + "px"})

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
    console.log(111)
     var value = $(this).parent("li").find("input").val()
     $(this).parent("li").find("input").removeAttr("readonly")
     $(this).parent("li").find("input").focus().val(value)

     stopBubble('e')
     
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

$(".sideBarContent li").on("click",function () {
 var width =  $(".option").width()
  console.log(width)
  $(this).css("background",'green')
  $(this).siblings("li").css("background",'#fff')
  $(this).find('input').css("background",'green')
  $(this).siblings('li').find('input').css("background",'#fff')
   

})


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

//滚动条
  // function setNiceScroll(containerClass1) {
  //     $(containerClass1).niceScroll({
  //         cursorcolor: "#dfdfdf",
  //         autohidemode: false,
  //         // cursorborderradius: 4,
  //         background: '#f8f8f8',
  //         cursorminheight: 32,
  //         // disableoutline: true,
  //     }).show();
  //     $(containerClass1).niceScroll({
  //         cursorcolor: "#dfdfdf",
  //         autohidemode: false,
  //         // cursorborderradius: 4,
  //         background: '#f8f8f8',
  //         cursorminheight: 32,
  //         // disableoutline: true,
  //     }).resize();
  // }

function setNiceScroll(containerClass1,containerClass2) {
  $("."+containerClass1).niceScroll("."+containerClass2, {
    cursorcolor: "#646660",
    autohidemode: false,
    cursorborderradius: 4,
    background: '#e8e5df',
    cursorminheight: 32,
    disableoutline: true,
    zindex: 200
  }).show();
  $("."+containerClass1).niceScroll("."+containerClass2, {
    cursorcolor: "#646660",
    autohidemode: false,
    cursorborderradius: 4,
    background: '#e8e5df',
    cursorminheight: 32,
    disableoutline: true,
    zindex: 200
  }).resize();
}
