 $(function() {

     tabcount("#countTabChange", 'active')
     filterTime1("#mapqueryYear");
     filterEvent("#mapqueryEvent");
     var rmapb = new RMap.Map('map');

     var url = encodeURIComponent(window.location.href.split('#')[0])

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
                 ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
             });
             wx.ready(function() {
                 //判断当前客户端版本是否支持指定JS接口  
                 wx.checkJsApi({
                     jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,  
                     success: function(res) {
                         console.log(res)

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
                         // rmapb.centerZoom(longitude, latitude, 12);


                     },
                     cancel: function(res) {
                         console.log('用户拒绝授权获取地理位置');
                     }
                 });


             });
             wx.error(function(res) {
                 // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
             });
         }
     })

     var myChart = echarts.init(document.getElementById('main'))
     option = {
         color: ['#bb6bc9', '#4aedc4', '#108bff', '#ffcc00', '#fe7130'],
         label: {
             normal: {
                 show: true,
                 position: 'top',
                 color: '#7b8085',
             }
         },

         borderColor: ['#fff'],
         tooltip: {
             trigger: 'axis',
             backgroundColor: 'rgba(255,255,255,0.7)',
             axisPointer: {
                 type: 'shadow'
             },

         },
         legend: {
             x: 'left',
             data: ['堵塞漫溢', '井盖丢失破损', '违规事件', '水质异常', '其他'],
             textStyle: {
                 color: '#B5C334',
                 fontStyle: 'normal',
                 fontWeight: 'normal',
                 fontFamily: 'sans-serif',
                 fontSize: 6
             },
             left: 20
         },
         grid: {
             x: 30,
             y: 30,
             y2: 30,
             x2: 20
         },
         xAxis: [{
             type: 'category',
             data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
             axisLine: {
                 lineStyle: {
                     type: 'solid',
                     color: '#7b8085', //左边线的颜色
                     width: '2' //坐标线的宽度
                 }
             },
             axisLabel: {
                 textStyle: {
                     color: '#7b8085', //坐标值得具体的颜色

                 }
             }
         }],
         yAxis: [{
             type: 'value',
             min: 0,
             axisLine: {
                 lineStyle: {
                     type: 'solid',
                     color: '#7b8085', //左边线的颜色
                     width: '2' //坐标线的宽度
                 }
             },
             axisLabel: {
                 textStyle: {
                     color: '#7b8085', //坐标值得具体的颜色

                 }
             }

         }],
         series: [

         ]
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
     init()

     $("#filterinfo").find('li').each(function(index, item) {
         $(item).on("DOMNodeInserted", function() {
             $.ajax({
                 type: 'get',
                 url: "http://47.95.1.140/wx/wechat/GetXJProblemByYearAndTypeID?year=" + getpases('mapqueryEvent', 'mapqueryYear').Year + "&typeId=" + getpases('mapqueryEvent', 'mapqueryYear').typeId + "&companyName=" + getpases('mapqueryEvent', 'mapqueryYear').companyName + "&isManager=" + getpases('mapqueryEvent', 'mapqueryYear').isManager,
                 dataType: 'json',
                 headers: {
                     "Authorization": localStorage.getItem('tk')
                 },
                 success: function(data) {
                     var str = '';
                     var queryLists = JSON.parse(data);
                     var num = 0;
                     var point = [];
                     var onePoint = [];
                     var qLists = [];
                     var monthData = {};
                     var cdate, myDate;
                     var all = [];
                     var data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                     var arr5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                     var arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                     var arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                     var arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                     var arr4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                     var array1 = [1, 2, 3, 4, 5];
                     var array2 = [];
                     queryLists.sort(function(a, b) {
                         return Date.parse(b.Date) - Date.parse(a.Date);
                     })
                     $.each(queryLists, function(index, item) {

                         var imgUrl
                         if (item.FileList[0]) {
                             imgUrl = (item.FileList[0]).ImgUrl
                             imgUrl = 'http://47.95.1.140/wx/wechat/Upload/' + imgUrl.replace(/\\/, "")
                         } else {
                             imgUrl = './images/bg.png'
                         }
                         num++;
                         cdate = item.Date;
                         myDate = new Date(cdate).getMonth() + 1;
                         item.Date = (item.Date).replace('T', " ")
                         str += "<li dataId = " + item.Id + " class='zs_eventInfo'>" +
                             "<a href='./Event-details.html?id=" + item.Id + "'>" +
                             "<div class='zs_imgleft'>" +
                              "<img class='lazy' data-original=" + imgUrl + " style='width:100%;height:100%;'>" +
                             "</div>" +
                             "<div class='zs_info'>" +
                             "<dl>" +
                             "<dt class='zs_name'>" + item.Name + "</dt>" +
                             "<dd>" + item.Date + "</dd>" +
                             "<dd>" + item.Location + "</dd>" +
                             "</dl>" +
                             "</div>" +
                             "<i class='fa fa-angle-right zs_arow'></i>"
                         "</a>" +
                         "</li>";

                         if (getpases('mapqueryEvent', 'mapqueryYear').typeId == 1) {
                             picUrl = './images/yishui@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr1[i]++
                                         monthData[item.Type] = arr1
                                 }
                             }
                         } else if (getpases('mapqueryEvent', 'mapqueryYear').typeId == 2) {
                             picUrl = './images/jingg@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr2[i]++
                                         monthData[item.Type] = arr2
                                 }
                             }
                         } else if (getpases('mapqueryEvent', 'mapqueryYear').typeId == 3) {
                             picUrl = './images/weigui@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr3[i]++
                                         monthData[item.Type] = arr3
                                 }
                             }
                         } else if (getpases('mapqueryEvent', 'mapqueryYear').typeId == 4) {
                             picUrl = './images/shuizhiyichang@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr4[i]++
                                         monthData[item.Type] = arr4
                                 }
                             }
                         } else if (getpases('mapqueryEvent', 'mapqueryYear').typeId == 5) {
                             picUrl = './images/qita@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr5[i]++
                                         monthData[item.Type] = arr5
                                 }
                             }
                         } else if (getpases('mapqueryEvent', 'mapqueryYear').typeId == -1) {
                             if (item.Type == 1) {
                                 picUrl = './images/yishui@1x.png'
                                 for (var i = 0; i < 12; i++) {
                                     if (myDate === (i + 1)) {
                                         arr1[i]++
                                             monthData[item.Type] = arr1
                                     }
                                 }
                             } else if (item.Type == 2) {
                                 picUrl = './images/jingg@1x.png'
                                 for (var i = 0; i < 12; i++) {
                                     if (myDate === (i + 1)) {
                                         arr2[i]++
                                             monthData[item.Type] = arr2
                                     }
                                 }
                             } else if (item.Type == 3) {
                                 picUrl = './images/weigui@1x.png'
                                 for (var i = 0; i < 12; i++) {
                                     if (myDate === (i + 1)) {
                                         arr3[i]++
                                             monthData[item.Type] = arr3
                                     }
                                 }
                             } else if (item.Type == 4) {
                                 picUrl = './images/shuizhiyichang@1x.png'
                                 for (var i = 0; i < 12; i++) {
                                     if (myDate === (i + 1)) {
                                         arr4[i]++
                                             monthData[item.Type] = arr4
                                     }
                                 }
                             } else if (item.Type == 5) {
                                 picUrl = './images/qita@1x.png'
                                 for (var i = 0; i < 12; i++) {
                                     if (myDate === (i + 1)) {
                                         arr5[i]++
                                             monthData[item.Type] = arr5
                                     }
                                 }
                             }

                         }

                         point.push({ X: item.X, Y: item.Y, picUrl: picUrl })
                         qLists.push({ name: item.Name, type: 'bar', barGap: '0%', data: monthData[item.Type], eventType: item.Type, barMinHeight: 3 });
                     });
                     $("#countNum").text("总共条" + num + "信息");
                     $("#ListsInfo").empty();
                     $("#ListsInfo").append(str);
                        
                         $("img.lazy").lazyload({
                             effect: "fadeIn"
                         });
                     
                     //地图加图片
                     if (!(point == [])) {
                         rmapb.removePoint();
                         $.each(point, function(index, item) {
                             onePoint.push([item.X, item.Y])
                             rmapb.addPoint(item.X, item.Y, {
                                 id: item.id,
                                 pic: item.picUrl,
                                 anchor: [23, 47],
                                 data: item.data

                             })

                         })
                         rmapb.extentByData(onePoint);
                     }

                     //设置图表
                     qLists = uniqeByKeys(qLists, ['eventType']);
                     for (key in monthData) {
                         array2.push(key)
                     }
                     var arr = contains(array1, array2)
                     // if (getpases('mapqueryEvent', 'mapqueryYear').typeId == -1) {
                     //     $.each(arr, function(index, value) {
                     //         $.ajax({
                     //             type: 'get',
                     //             url: 'http://47.95.1.140/wx/wechat/api/XJProblemTypes/' + value,
                     //             dataType: 'json',
                     //             headers: {
                     //                 "Authorization": localStorage.getItem('tk')
                     //             },
                     //             success: function(data) {
                     //                console.log(data)
                     //              var   arrtype = [{ name: data.Name, type: 'bar', barGap: '0%', data: data1, eventType: data.Type }]
                     //              qLists =qLists.concat(arrtype[index])
                     //                 // qLists.push({ name: data.Name, type: 'bar', barGap: '0%', data: data1, eventType: data.Type })
                     //                 //设置图表
                     //                 // option.series = qLists;
                     //                 // myChart.setOption(option, true);
                     //                 console.log(qLists)
                     //             }
                     //         })
                     //     })
                     //     option.series = qLists;
                     //     console.log(option.series)
                     //     myChart.setOption(option, true);
                     // } else {
                     //     option.series = qLists;
                     //     console.log(option.series);
                     //     myChart.setOption(option, true);
                     // }

                     option.series = qLists;
                     console.log(option.series);
                     myChart.setOption(option, true);
                 },
                 error: function(err) {
                     console.log(err)
                 }
             })
         })
     })

     function init() {
         $.ajax({
             type: 'get',
             url: "http://47.95.1.140/wx/wechat/GetXJProblemByYearAndTypeID?year=" + getpases('mapqueryEvent', 'mapqueryYear').Year + "&typeId=-1&companyName=" + getpases('mapqueryEvent', 'mapqueryYear').companyName + "&isManager=" + getpases('mapqueryEvent', 'mapqueryYear').isManager,
             dataType: 'json',
             headers: {
                 "Authorization": localStorage.getItem('tk')
             },
             success: function(data) {
                 var str = '';
                 var queryLists = JSON.parse(data);
                 var num = 0;
                 var point = []
                 var onePoint = []
                 let qLists = []
                 let monthData = {}
                 let cdate, myDate;
                 var data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                 var arr5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                 var arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                 var arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                 var arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                 var arr4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                 var array1 = [1, 2, 3, 4, 5]
                 var array2 = []
                 queryLists.sort(function(a, b) {
                     return Date.parse(b.Date) - Date.parse(a.Date);
                 })
                 $.each(queryLists, function(index, item) {
                     num++;
                     var imgUrl
                     if (item.FileList[0]) {
                         imgUrl = (item.FileList[0]).ImgUrl
                         imgUrl = 'http://47.95.1.140/wx/wechat/Upload/' + imgUrl.replace(/\\/, "")
                     } else {
                         imgUrl = './images/bg.png'
                     }
                     cdate = item.Date;
                     myDate = new Date(cdate).getMonth() + 1;
                     item.Date = (item.Date).replace('T', " ")
                     str += "<li dataId = " + item.Id + " class='zs_eventInfo'>" +
                         "<a href='./Event-details.html?id=" + item.Id + "'>" +
                         "<div class='zs_imgleft'>" +
                         "<img class='lazy' data-original=" + imgUrl + " style='width:100%;height:100%;'>" +
                         "</div>" +
                         "<div class='zs_info'>" +
                         "<dl>" +
                         "<dt class='zs_name'>" + item.Name + "</dt>" +
                         "<dd>" + item.Date + "</dd>" +
                         "<dd>" + item.Location + "</dd>" +
                         "</dl>" +
                         "</div>" +
                         "<i class='fa fa-angle-right zs_arow'></i>"
                     "</a>" +
                     "</li>";


                     if (getpases('mapqueryEvent', 'mapqueryYear').typeId == -1) {
                         if (item.Type == 1) {
                             picUrl = './images/yishui@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr1[i]++
                                         monthData[item.Type] = arr1
                                 }
                             }
                         } else if (item.Type == 2) {
                             picUrl = './images/jingg@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr2[i]++
                                         monthData[item.Type] = arr2
                                 }
                             }
                         } else if (item.Type == 3) {
                             picUrl = './images/weigui@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr3[i]++
                                         monthData[item.Type] = arr3
                                 }
                             }
                         } else if (item.Type == 4) {
                             picUrl = './images/shuizhiyichang@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr4[i]++
                                         monthData[item.Type] = arr4
                                 }
                             }
                         } else if (item.Type == 5) {
                             picUrl = './images/qita@1x.png'
                             for (var i = 0; i < 12; i++) {
                                 if (myDate === (i + 1)) {
                                     arr5[i]++
                                         monthData[item.Type] = arr5
                                 }
                             }
                         }

                     }

                     point.push({ X: item.X, Y: item.Y, picUrl: picUrl, id: index, data: { code: "TESTPOINT_" + index } })
                     qLists.push({ name: item.Name, type: 'bar', barGap: '0%', data: monthData[item.Type], eventType: item.Type, barMinHeight: 3 })
                 });
                 rmapb.removePoint();
                 $.each(point, function(index, item) {
                     onePoint.push([item.X, item.Y])
                     rmapb.addPoint(item.X, item.Y, {
                         id: item.id,
                         pic: item.picUrl,
                         anchor: [23, 47],
                         data: item.data

                     })

                 })
                 rmapb.extentByData(onePoint);
                 $("#countNum").text("总共条" + num + "信息")
                 $("#ListsInfo").empty();
                 $("#ListsInfo").append(str);

                
                   
                     $("img.lazy").lazyload({
                         effect: "fadeIn"
                     });
                
                 //设置图表
                 qLists = uniqeByKeys(qLists, ['eventType'])
                 option.series = qLists;

                 myChart.setOption(option, true);
             },
             error: function(err) {
                 console.log(err)
             }
         })
     }
     //tab
     function tabcount(eleid, activeclass) {
         $(eleid + ' li').click(function() {
             var index = $(this).index();
             $(this).find('a').addClass(activeclass);
             $(this).siblings('li').find("a").removeClass(activeclass)
             $('.tabcontent').eq(index).show().siblings('.tabcontent').hide();
             myChart.resize(); //关键步骤
             myChart.setOption(option, true);
         })
     }
 })
