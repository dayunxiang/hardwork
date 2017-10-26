   $(function() {
       chooseRole("#question");
       var url = encodeURIComponent(window.location.href.split('#')[0])
       //调用选择图片 图片上传 预览接口
       var images = {
           localId: [],
           serverId: []
       };
       $.ajax({
           type: 'get',
           url: 'http://47.95.1.140/wx/wechat/api/Account/GetSDKConfig?url=' + url,
           dataType: "json",
           headers: {
               "Authorization": localStorage.getItem('tk')
           },
           success: function(data) {
               var data = data
               wx.config({
                   //debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                   appId: data.appId, // 必填，公众号的唯一标识
                   timestamp: data.timestamp, // 必填，生成签名的时间戳
                   nonceStr: data.nonceStr, // 必填，生成签名的随机串
                   signature: data.signature, // 必填，签名，见附录1
                   jsApiList: [
                       'getLocation',
                       'chooseImage',
                       'previewImage',
                       'uploadImage',
                       'downloadImage',
                       'previewImage'
                   ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
               });
               wx.ready(function() {
                   //判断当前客户端版本是否支持指定JS接口  
                   wx.checkJsApi({
                       jsApiList: ['getLocation', 'chooseImage', 'previewImage', 'uploadImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,  
                       success: function(res) {
                           // 以键值对的形式返回，可用的api值true，不可用为false  
                           // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}  
                           // if (!res["checkResult"]["chooseImage"]) {
                           //     alert("当前客户端不支持上传图片");
                           // }
                       }
                   });
                   //调用位置接口
                   wx.getLocation({
                       type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                       success: function(res) {

                           var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                           var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                           var speed = res.speed; // 速度，以米/每秒计
                           var accuracy = res.accuracy; // 位置精度
                           $("#X").val(longitude)
                           $("#Y").val(latitude)
                           var rmap = new RMap.Map('map');
                          rmap.locationToAddress(longitude, latitude, onResult)
                           rmap.centerZoom(longitude, latitude, 12);
                           rmap.addPoint(longitude, latitude, {
                               pic: './images/map-label.png',
                               anchor:[14,0]
                               
                           })
                       },
                       cancel: function(res) {
                           console.log('用户拒绝授权获取地理位置');
                       },
                       fail:function (err) {
                        alert(err.errMSG)
                         // body...
                       }
                   });
                   // 选择图片
                   $(".images").on("click", function() {
                       images.localId = [];
                       wx.chooseImage({
                           count: 9, // 默认9
                           sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                           sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                           success: function(res) {
                               var str = '';
                               images.localId = res.localIds;
                               for (var i = 0; i < images.localId.length; i++) {
                                   var picurl = (images.localId)[i]
                                   str += '<li>' +
                                       '<img src=' + picurl + ' alt="" style="width:100%;height:100%;">' +
                                       '</li>'
                               }
                               $(".picList").append(str)

                               // 选择成功之后上传到微信服务器
                               var i = 0;
                               var length = images.localId.length;
                               upload()

                               function upload() {
                                   wx.uploadImage({
                                       localId: (images.localId[i]).toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                                       isShowProgressTips: 1, // 默认为1，显示进度提示
                                       success: function(res) {
                                           i++
                                           images.serverId.push(res.serverId)
                                           if (i < length) {
                                               upload()
                                           }
                                       },
                                       fail: function(errMsg) {}
                                   })
                               }
                           }
                       })
                   });
               })
           }
       })

       $(".Submit").on('click', function() {
           if (GetParams().Location === '') {
               $("#queLocation").fadeIn(300)
               setTimeout(function() {
                   $("#queLocation").fadeOut(300)
               }, 1000)
           } else if (GetParams().Type === "") {
               $("#queinfo").fadeIn(300)
               setTimeout(function() {
                   $("#queinfo").fadeOut(300)
               }, 1000)
           } else if (GetParams().Description == '详细述现场情况,最少输入10字,最多输入200字') {
               $("#queDes").fadeIn(300)
               setTimeout(function() {
                   $("#queDes").fadeOut(300)
               }, 1000)
           } else if ((GetParams().Description).length < 10) {
               $("#queDess").fadeIn(300)
               setTimeout(function() {
                   $("#queDess").fadeOut(300)
               }, 1000)
           } else if ((GetParams().Description).length > 200) {
               $("#queDesl").fadeIn(300)
               setTimeout(function() {
                   $("#queDesl").fadeOut(300)
               }, 1000)
           } else if (images.serverId.length == 0) {
               $("#quePic").fadeIn(300)
               setTimeout(function() {
                   $("#quePic").fadeOut(300)
               }, 1000)
           } else {
               $.ajax({
                   type: "post",
                   url: "http://47.95.1.140/wx/wechat/api/XJProblems",
                   dataType: "json",
                   headers: {
                       "Authorization": localStorage.getItem('tk')
                   },
                   data: GetParams(),
                   success: function(data) {
                       $.each(images.serverId, function(index, item) {
                           $.ajax({
                               type: "post",
                               url: "http://47.95.1.140/wx/wechat/AddFileByMediaID?mediaId=" + images.serverId[index] + "&problemId=" + data.Id,
                               dataType: "json",
                               headers: {
                                   "Authorization": localStorage.getItem('tk')
                               },
                               success: function(data) {
                                   $("#tinfo").fadeIn(300)
                                   setTimeout(function() {
                                       $("#tinfo").fadeOut(300)
                                       window.location.href = 'http://zhmai.com/wx/web/query.html'
                                   }, 1000)
                               },
                               error: function(XMLHttpRequest, textStatus, errorThrown) {

                               }
                           })
                       })
                   }
               })

           }
       })







       //获取表单提交内容
       function GetParams() {
           var theParams = new Object();
           $(".zs_report input").each(function(index, item) {
               theParams[$(item).attr("name")] = $(item).val()
           })
           if (theParams.Type === "堵塞漫溢") {
               theParams.Type = '1'
               theParams.Name = '堵塞漫溢'
           } else if (theParams.Type === "井盖丢失破损") {
               theParams.Type = '2'
               theParams.Name = '井盖丢失破损'

           } else if (theParams.Type === "违规事件") {
               theParams.Type = '3'
               theParams.Name = '违规事件'

           } else if (theParams.Type === "水质异常") {
               theParams.Type = '4'
               theParams.Name = '水质异常'

           } else if (theParams.Type === "其他") {
               theParams.Type = '5'
               theParams.Name = '其他'
           }
           theParams['Description'] = $("#des").val()
           theParams.Date = new Date().format("yyyy-MM-dd hh:mm:ss");
           console.log(theParams.Date)
           theParams.Year = new Date().getFullYear()
           theParams.UserId = localStorage.getItem("Id")
           console.log(theParams)
           return theParams
       }

       //转换位置回调
       function onResult(e) {
           $("#Location").val(e.district + e.township)
       }

   })
