 //蒙版
 function maskshow() {
     $(".popmasker").css("display", "block");
     $(".layermaker").css("display", "block");
 }

 function maskhide() {
     $(".popmasker").css("display", "none");
     $(".layermaker").css("display", "none");
 }

 function maskshow1() {
     $(".popmasker").css("display", "block");
     $(".timemaker").css("display", "block");
 }

 function maskhide1() {
     $(".popmasker").css("display", "none");
     $(".timemaker").css("display", "none");
 }

 //角色选择 时间类型选择
 function chooseRole(ele) {
     $(ele).on("click", function() {
         maskshow();
     })
     $(".select").on("click", function() {
         $(this).css("color", "#117FF8").siblings("li").css("color", "")
         $(ele).find("input").val($(this).text())
         maskhide()
     })

 }


 //筛选 事件
 function filterEvent(ele) {
     $(ele).on("click", function() {
         maskshow();
     })
     $('.layermaker').find('.select').each(function(index, item) {
         $(item).on("click", function() {
             $(this).css("color", "#117FF8").siblings("li").css("color", "")
             $(ele).html($(this).text() + "<span></span>")
             maskhide();
         })
     })
 }
 // 筛选时间
 function filterTime(ele) {
     $(ele).on("click", function() {
         maskshow1();
     })

     $(".timemaker").find('.select').on("click", function() {

         $(this).css("color", "#117FF8").siblings("li").css("color", "")
         $(ele).html($(this).text() + "<span></span>")
         maskhide1();
     })

 }

 // 筛选时间
 function filterTime1(ele) {
     $(ele).on("click", function() {
         maskshow1();
     })

     $('.timemaker').find(".select").on("click", function() {
         $(this).css("color", "#117FF8").siblings("li").css("color", "")
         $(ele).html($(this).text() + "<span></span>")
         maskhide1();
     })
 }

 //tab
 function tab(eleid, activeclass) {
     $(eleid + ' li').click(function() {
         var index = $(this).index();
         $(this).find('a').addClass(activeclass);
         $(this).siblings('li').find("a").removeClass(activeclass)
         $('.tabcontent').eq(index).show().siblings('.tabcontent').hide();

     })
 }


 function aboutTab(eleid, activeclass) {
     $(eleid + ' li').click(function() {
         var index = $(this).index();
         $(this).addClass(activeclass);
         $(this).siblings('li').removeClass(activeclass)
         $('.tabcontent').eq(index).show().siblings('.tabcontent').hide();
     })
 }

 //日期格式化
 Date.prototype.format = function(fmt) {
     var o = {
         "M+": this.getMonth() + 1, //月份 
         "d+": this.getDate(), //日 
         "h+": this.getHours(), //小时 
         "m+": this.getMinutes(), //分 
         "s+": this.getSeconds(), //秒 
         "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
         "S": this.getMilliseconds() //毫秒 
     };
     if (/(y+)/.test(fmt)) {
         fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
     }
     for (var k in o) {
         if (new RegExp("(" + k + ")").test(fmt)) {
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
         }
     }
     return fmt;
 }

 //获取url中的字符串
 function GetRequest() {
     var url = location.search; //获取url中"?"符后的字串  
     var theRequest = new Object();
     if (url.indexOf("?") != -1) {
         var str = url.substr(1);
         strs = str.split("&");
         for (var i = 0; i < strs.length; i++) {
             theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
         }
     }
     return theRequest;
 }



 //count获取请求参数
 function getpases(eventId, timeId) {
     var paras = {}
     paras.typeId
     paras.Year
     paras.isManager
     paras.companyName

     //typeId
     if ($('#' + eventId).text() === "堵塞漫溢") {
         paras.typeId = '1'
     } else if ($('#' + eventId).text() === "井盖丢失破损") {
         paras.typeId = '2'
     } else if ($('#' + eventId).text() === "违规事件") {
         paras.typeId = '3'
     } else if ($('#' + eventId).text() === "水质异常") {
         paras.typeId = '4'
     } else if ($('#' + eventId).text() === "其他") {
         paras.typeId = '5'
     } else if ($('#' + eventId).text() === "全部") {
         paras.typeId = '-1'
     } else {
         paras.typeId = '-1'
     }

     //Year
     if ($("#" + timeId).text() === "2017") {
         paras.Year = 2017
     } else if ($("#" + timeId).text() === "2016") {
         paras.Year = 2016
     } else if ($("#" + timeId).text() === "2015") {
         paras.Year = 2015
     } else if ($("#" + timeId).text() === "2014") {
         paras.Year = 2014
     } else if ($("#" + timeId).text() === "2013") {
         paras.Year = 2013
     } else {
         paras.Year = 2017
     }

     //isManager companyName
     if (localStorage.getItem("Role") == 1) {
         paras.isManager = true
         paras.companyName = JSON.parse(localStorage.getItem("userInfo")).CompanyName
     } else if (localStorage.getItem("Role") == 2) {
         paras.isManager = false
         paras.companyName = JSON.parse(localStorage.getItem("Id"))
     }
     return paras
 }



 //获取请求参数
 function getpas() {
     var pas = {};
     var date = new Date();
     date.setDate(date.getDate() + 1);
     pas.startDate = date.format("yyyy-MM-dd");
     pas.typeId = '';
     pas.endDate = '2017-8-10';
     pas.isAllDate;
     pas.companyName;
     pas.isManager;
     if ($('#queryEvent').text() === "堵塞漫溢") {
         pas.typeId = '1'
     } else if ($('#queryEvent').text() === "井盖丢失破损") {
         pas.typeId = '2'
     } else if ($('#queryEvent').text() === "违规事件") {
         pas.typeId = '3'
     } else if ($('#queryEvent').text() === "水质异常") {
         pas.typeId = '4'
     } else if ($('#queryEvent').text() === "其他") {
         pas.typeId = '5'
     } else if ($('#queryEvent').text() === "全部") {
         pas.typeId = '-1'
     }else {
          pas.typeId = '-1'
     }

     if ($("#queryTime").text() === "最近一周") {
         date.setDate(date.getDate() - 7)
         pas.endDate = date.format("yyyy-MM-dd")

     } else if ($("#queryTime").text() === "最近一月") {
         date.setDate(date.getDate() - 30)
         pas.endDate = date.format("yyyy-MM-dd")
     } else if ($("#queryTime").text() === "最近三个月") {
         date.setDate(date.getDate() - 90)
         pas.endDate = date.format("yyyy-MM-dd")
     } else if ($("#queryTime").text() === "最近半年") {
         date.setDate(date.getDate() - 180)
         pas.endDate = date.format("yyyy-MM-dd")
     }
     if (pas.endDate === '2017-8-10') {
         pas.isAllDate = true
     } else {
         pas.isAllDate = false
     }

     if (localStorage.getItem("Role") == 1) {
       
         pas.companyName = JSON.parse(localStorage.getItem("userInfo")).CompanyName;
         pas.isManager = true;
     } else if (localStorage.getItem("Role") == 2) {
         pas.companyName = JSON.parse(localStorage.getItem("Id"));
         pas.isManager = false;
     }
     return pas
 }


 //将对象元素转换成字符串以作比较
 function obj2key(obj, keys) {
     var n = keys.length,
         key = [];
     while (n--) {
         key.push(obj[keys[n]]);
     }
     return key.join('|');
 }
 //去重操作
 function uniqeByKeys(array, keys) {
     var arr = [];
     var hash = {};
     for (var i = 0, j = array.length; i < j; i++) {
         var k = obj2key(array[i], keys);
         if (!(k in hash)) {
             hash[k] = true;
             arr.push(array[i]);
         }
     }
     return arr;
 }


 function contains(array1, array2) {
     var tempArray1 = []; //临时数组1
     var tempArray2 = []; //临时数组2

     for (var i = 0; i < array2.length; i++) {
         tempArray1[array2[i]] = true; //将数array2 中的元素值作为tempArray1 中的键，值为true；
     }

     for (var i = 0; i < array1.length; i++) {
         if (!tempArray1[array1[i]]) {
             tempArray2.push(array1[i]); //过滤array1 中与array2 相同的元素；
         }
     }
     return tempArray2
 }
