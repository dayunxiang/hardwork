$(function() {
    NProgress.start();

    NProgress.done();

    logout()
    //获取头像
    getAvatar()

    $('.navs ul').prev('a').on('click', function() {
        $(this).next().slideToggle();
    });
})


//退出
function logout() {
    $("#logout").on('click', function() {
        window.location.href = 'http://127.0.0.1:8080/login.html'
        localStorage.removeItem('userInfo');
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


//去重
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


//设置头像
//根据id获取用户信息 
function getAvatar() {
    var userInfo = JSON.parse(JSON.parse(localStorage.getItem('userInfo')))[0]
     var str = ''
    $.ajax({
        type: 'get',
        url: 'http://47.95.1.140/wx/webapi/api/Users/' + userInfo.Id,
        dataType: 'json',
        success: function(data) {
             $("#companyList").html('<option value="CompanyName" selected = "selected">'+data.CompanyName+'</option>')
            $("#companyListUser").html('<option value="CompanyName" selected = "selected">' + data.CompanyName + '</option>')
             
            str +=  '<tr>'+
                       
                        '<td>1</td>'+
                        '<td>'+data.RealName+'</td>'+
                        '<td>'+data.NickName+'</td>'+
                        '<td>'+data.Email+'</td>'+
                        '<td>'+data.City+'</td>'+
                        '<td>'+data.CompanyName+'</td>'+
                        '<td>'+data.Department+'</td>'+
                        '<td>'+data.Position+'</td>'+
                        '<td>'+data.Role+'</td>'+
                        '<td>'+data.Phone+'</td>'+
                        '<td>'+data.Subscribe_time+'</td>'+
                       
                    '</tr>'
            $("#j_tb1").html(str)
             $(".companyList").html('<option value="CompanyName" selected = "selected">' + data.CompanyName + '</option>')
            $(".userList").html('<option value="RealName" selected = "selected">' + data.RealName + '</option>')
            $(".navbar-right").find('img').attr('src', data.HeadImgUrl)
            if (data.Role === 1) {
                $(".role").find('span').text('管理员')
            } else if (data.Role === 2) {
                $(".role").find('span').text('巡检员')

            }
        }
    })
}


// Array.prototype.S = String.fromCharCode(2);
// Array.prototype.in_array = function(e) {
//   var r = new RegExp(this.S+e+this.S);
//   return (r.test(this.S+this.join(this.S)+this.S));
// }
// 
function contains(array1,array2) {
    var tempArray1 = [];//临时数组1
var tempArray2 = [];//临时数组2

for(var i=0;i<array2.length;i++){
    tempArray1[array2[i]]=true;//将数array2 中的元素值作为tempArray1 中的键，值为true；
}

for(var i=0;i<array1.length;i++){
    if(!tempArray1[array1[i]]){
        tempArray2.push(array1[i]);//过滤array1 中与array2 相同的元素；
    }
}
return tempArray2
}


     //日期插件
      function datePic() {
          $("#datetimeStart").datetimepicker({
              format: 'yyyy-mm-dd',
              minView: 'month',
              language: 'zh-CN',
              autoclose: true,
          }).on("click", function() {
              $("#datetimeStart").datetimepicker("setEndDate", $("#datetimeEnd").val())
          });
          $("#datetimeEnd").datetimepicker({
              format: 'yyyy-mm-dd',
              minView: 'month',
              language: 'zh-CN',
              autoclose: true,
              initialDate: new Date()
          }).on("click", function() {
              $("#datetimeEnd").datetimepicker("setStartDate", $("#datetimeStart").val())
          });
          $("#datetimeStart1").datetimepicker({
              format: 'yyyy-mm-dd',
              minView: 'month',
              language: 'zh-CN',
              autoclose: true,
          }).on("click", function() {
              $("#datetimeStart1").datetimepicker("setEndDate", $("#datetimeEnd1").val())
          });
          $("#datetimeEnd1").datetimepicker({
              format: 'yyyy-mm-dd',
              minView: 'month',
              language: 'zh-CN',
              autoclose: true,
              // startDate:new Date()
          }).on("click", function() {
              $("#datetimeEnd1").datetimepicker("setStartDate", $("#datetimeStart1").val())
          });

          $("#datetimeStart2").datetimepicker({
              format: 'yyyy-mm-dd',
              minView: 'month',
              language: 'zh-CN',
              autoclose: true,
          }).on("click", function() {
              $("#datetimeStart2").datetimepicker("setEndDate", $("#datetimeEnd2").val())
          });
          $("#datetimeEnd2").datetimepicker({
              format: 'yyyy-mm-dd',
              minView: 'month',
              language: 'zh-CN',
              autoclose: true,
              // startDate:new Date()
          }).on("click", function() {
              $("#datetimeEnd2").datetimepicker("setStartDate", $("#datetimeStart2").val())
          });
      }


 //获取所有的问题类型
      function getAllType() {
          $.ajax({
              type: 'get',
              url: 'http://47.95.1.140/wx/webapi/api/XJProblemTypes',
              dataType: 'json',
              success: function(data) {
                  var str = '<option value="-1">全部</option>'
                  $.each(data, function(index, value) {
                      str += '<option value=' + value.Type + '>' + value.Name + '</option>'
                  })
                  $(".typeList").html(str)
              }
          })
      }
