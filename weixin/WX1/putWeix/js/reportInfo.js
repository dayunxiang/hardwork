  $(function() {
      //图表
      var myChart = echarts.init(document.getElementById('main'))
      option = {
          color: ['#4caf50', '#2196f3', '#f44336', '#9dc781', '#7383e5'],
          label: {
              normal: {
                  show: true,
                  position: 'top',
                  color: '#000',
              }
          },
          tooltip: {
              trigger: 'axis',
              backgroundColor: 'rgba(255,255,255,0.7)',
              axisPointer: {
                  type: 'shadow'
              },
              textStyle: {
                  color: '#000'
              },

          },
          legend: {
              x: 'center',
              data: ['堵塞漫溢', '井盖丢失破损', '违规事件', '水质异常', '其他'],
              selected: {
                  '堵塞漫溢': true,
                  '井盖破损丢失': true,
                  '违规事件': true,
                  '水质异常': true,
                  '其他': true
              }
          },
          calculable: true,
          grid: {
              y: 80,
              y2: 40,
              x2: 40
          },
          xAxis: [{
              type: 'category',
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }],
          yAxis: [{
              type: 'value',
              min: 0

          }],
          series: [

          ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      //设置查询时间的默认值
      var rmap
      var date = new Date().format("yyyy-MM-dd")
      $("#datetimeEnd").val(date)
      $("#datetimeEnd1").val(date)
      $("#datetimeEnd2").val(date)
      //个人中心
      $(".role").on("click", function() {
          $(".userInfo").toggle()
      })
      //tab栏切换
      tab()
      // init()
      //获取所有问题类型
      getAllType()
      //根据iD获取用户
      // getUserInfoById()
      //获取查询参数
      getSearchParams()
      //点击查询
      biaogesearch()
      tubiaosearch()
      mapsearch()
      //日期
      datePic()
      //地图 
      // function drawMap() {
      //     var rmap = new RMap.Map('map');
      //     rmap.centerZoom(116.390985, 39.906358, 12);
      // }




      //tab切换
      function tab() {
          var $tab_li = $(".tabHeader ul li")
          $tab_li.click(function() {
              var index = $tab_li.index(this);
              var curr = $tab_li.filter(".active");
              var currIndex = $tab_li.index(curr);
              console.log(index)
              console.log(currIndex)
              if (index != currIndex) {
                  curr.removeClass('active');
                  $(".tabCon").eq(currIndex).hide();

                  $(this).addClass("active")
                  $(".tabCon").eq(index).show()

                  if (index == 2) {
                      $("#mapBox").html('<div style="overflow:hidden; position:fixed; top:260px; left:300px; right:10px; bottom:40px; " id="map"></div>')
                      rmap = new RMap.Map('map');
                      mapsearch()
                  } else if (index == 1) {
                       $('#mapBox').empty();
                      myChart.resize(); //关键步骤
                      myChart.setOption(option, true);
                      
                  } else {
                      $('#mapBox').empty();
                  }

              }
          })
      }


      //设置查询参数
      function getSearchParams() {
          var userInfo = JSON.parse(JSON.parse(localStorage.getItem('userInfo')))[0]
          var datetimeStart, datetimeEnd;
          datetimeStart = $("#datetimeStart").val()
          datetimeEnd = $("#datetimeEnd").val()
          $.ajax({
              type: 'get',
              url: 'http://47.95.1.140/wx/webapi/GetXJProblemByDateAndTypeIDandCompanyName?startDate=' + datetimeStart + '&endDate=' + datetimeEnd + '&typeId=-1&companyName=' + userInfo.CompanyName + '&userId=' + userInfo.Id,
              dataType: 'json',
              success: function(data) {
                  data = JSON.parse(data)
                  var str = ''
                  $.each(data, function(index, value) {
                    console.log(value)
                      str += '<tr>' +
                          '<td>' + (index + 1) + '</td>' +
                          '<td>' + value.Name + '</td>' +
                          '<td>' + value.RealName + '</td>' +
                          '<td>' + value.Subscribe_time + '</td>' +
                          '<td>' + value.Location + '</td>' +
                          '<td>' + value.Description + '</td>' +
                          '<td>'+value.FileList.length+'</td>' +
                          '<td>' +
                          '<a href=' + "../reportManage.html?id=" + value.Id + ' style="background: url(' + "../images/ico-cha.png" + ');"></a>' +
                          '</td>' +
                          '</tr>'
                  })
                  $("#j_tb").html(str)
              }
          })
      }

      //表格点击查询
      function biaogesearch() {
          var userInfo = JSON.parse(JSON.parse(localStorage.getItem('userInfo')))[0]
          var tyle = '';
          $("#biaogesearch").on('click', function() {
              tyle = $(".typeList").find('option:selected').val()
              datetimeStart = $("#datetimeStart").val()
              datetimeEnd = $("#datetimeEnd").val()
              $.ajax({
                  type: 'get',
                  url: 'http://47.95.1.140/wx/webapi/GetXJProblemByDateAndTypeIDandCompanyName?startDate=' + datetimeStart + '&endDate=' + datetimeEnd + '&typeId=' + tyle + '&companyName=' + userInfo.CompanyName + '&userId=' + userInfo.Id,
                  dataType: 'json',
                  success: function(data) {
                      data = JSON.parse(data)
                      var str = ''
                      $.each(data, function(index, value) {
                          str += '<tr>' +
                              '<td>' + (index + 1) + '</td>' +
                              '<td>' + value.Name + '</td>' +
                              '<td>' + value.RealName + '</td>' +
                              '<td>' + value.Subscribe_time + '</td>' +
                              '<td>' + value.Location + '</td>' +
                              '<td>' + value.Description + '</td>' +
                              '<td>4</td>' +
                              '<td>' +
                              '<a href="..\/reportManage.html" style="background: url(' + "../images/ico-cha.png" + ');"></a>' +
                              '</td>' +
                              '</tr>'
                      })
                      $("#j_tb").html(str)
                  }

              })
          })
      }
      //图表点击查询
      function tubiaosearch() {
          var userInfo = JSON.parse(JSON.parse(localStorage.getItem('userInfo')))[0]
          var tyle = '';
          $("#tubiaosearch").on('click', function() {
              tyle = $("#typeList1").find('option:selected').val()
              datetimeStart = $("#datetimeStart1").val()
              datetimeEnd = $("#datetimeEnd1").val()
              $.ajax({
                  type: 'get',
                  url: 'http://47.95.1.140/wx/webapi/GetXJProblemByDateAndTypeIDandCompanyName?startDate=' + datetimeStart + '&endDate=' + datetimeEnd + '&typeId=' + tyle + '&companyName=' + userInfo.CompanyName + '&userId=' + userInfo.Id,
                  dataType: 'json',
                  success: function(data) {
                      let queryLists = JSON.parse(data)
                      let qLists = []
                      let monthData = {}
                      let cdate, myDate;
                      var data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                      let arr5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                      var arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                      var arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                      var arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                      var arr4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                      var array1 = [1, 2, 3, 4, 5]
                      var array2 = []
                      $.each(queryLists, function(index, item) {
                          //获取月份
                          cdate = item.Date;
                          myDate = new Date(cdate).getMonth() + 1;

                          if (item.Type === 1) {
                              for (var i = 0; i < 12; i++) {
                                  if (myDate === (i + 1)) {
                                      arr1[i]++
                                          monthData[item.Type] = arr1
                                  } else {
                                      arr1[i] = 0
                                  }
                              }
                          } else if (item.Type === 2) {
                              for (var i = 0; i < 12; i++) {
                                  if (myDate === (i + 1)) {
                                      arr2[i]++

                                          monthData[item.Type] = arr2
                                  } else {
                                      arr1[i] = 0
                                  }
                              }
                          } else if (item.Type === 3) {
                              for (var i = 0; i < 12; i++) {
                                  if (myDate === (i + 1)) {
                                      arr3[i]++

                                          monthData[item.Type] = arr3
                                  } else {
                                      arr1[i] = 0
                                  }
                              }
                          } else if (item.Type === 4) {
                              for (var i = 0; i < 12; i++) {
                                  if (myDate === (i + 1)) {
                                      arr4[i]++

                                          monthData[item.Type] = arr4
                                  } else {
                                      arr1[i] = 0
                                  }
                              }
                          } else if (item.Type === 5) {
                              for (var i = 0; i < 12; i++) {
                                  if (myDate === (i + 1)) {
                                      arr5[i]++

                                          monthData[item.Type] = arr5
                                  } else {
                                      arr1[i] = 0
                                  }
                              }
                          }
                          qLists.push({ name: item.Name, type: 'bar', barGap: '0%', data: monthData[item.Type], eventType: item.Type })

                      })
                      qLists = uniqeByKeys(qLists, ['eventType'])
                      for (key in monthData) {
                          array2.push(key)
                      }
                      var arr = contains(array1, array2)
                      $.each(arr, function(index, value) {
                          $.ajax({
                              type: 'get',
                              url: 'http://47.95.1.140/wx/webapi/api/XJProblemTypes/' + value,
                              dataType: 'json',
                              success: function(data) {
                                  qLists.push({ name: data.Name, type: 'bar', barGap: '0%', data: data1, eventType: data.Type })
                                  //设置图表
                                  option.series = qLists;
                                  myChart.setOption(option, true);
                              }
                          })
                      })

                  }

              })
          })
      }
      //地图点击查询
      function mapsearch() {
          var userInfo = JSON.parse(JSON.parse(localStorage.getItem('userInfo')))[0]
          var tyle = '';
          $("#mapsearch").on('click', function() {
              tyle = $("#typeList2").find('option:selected').val()
              datetimeStart = $("#datetimeStart2").val()
              datetimeEnd = $("#datetimeEnd2").val()
              $.ajax({
                  type: 'get',
                  url: 'http://47.95.1.140/wx/webapi/GetXJProblemByDateAndTypeIDandCompanyName?startDate=' + datetimeStart + '&endDate=' + datetimeEnd + '&typeId=' + tyle + '&companyName=' + userInfo.CompanyName + '&userId=' + userInfo.Id,
                  dataType: 'json',
                  success: function(data) {
                      data = JSON.parse(data)
                      var picUrl = ''
                      $.each(data, function(index, value) {

                          if (value.Type === 1) {
                              picUrl = './images/yishui.png'
                          } else if (value.Type === 2) {
                              picUrl = './images/jingg.png'

                          } else if (value.Type === 3) {
                              picUrl = './images/weigui.png'

                          } else if (value.Type === 4) {
                              picUrl = './images/shuizhi.png'

                          } else if (value.Type === 5) {
                              picUrl = './images/qita.png'
                          }

                          rmap.centerZoom(value.X, value.Y, 12);
                          rmap.addPoint(value.X, value.Y, {
                              pic: picUrl,
                              anchor: [12, 24],
                          })

                      })

                  }

              })
          })
      }
  //加载图表
  function init() {
      var userInfo = JSON.parse(JSON.parse(localStorage.getItem('userInfo')))[0]
      var tyle = '';
      tyle = $("#typeList1").find('option:selected').val()
      datetimeStart = $("#datetimeStart1").val()
      datetimeEnd = $("#datetimeEnd1").val()
      $.ajax({
          type: 'get',
          url: 'http://47.95.1.140/wx/webapi/GetXJProblemByDateAndTypeIDandCompanyName?startDate=' + datetimeStart + '&endDate=' + datetimeEnd + '&typeId=-1&companyName=' + userInfo.CompanyName + '&userId=' + userInfo.Id,
          dataType: 'json',
          success: function(data) {
              let queryLists = JSON.parse(data)
              let qLists = []
              let monthData = {}
              let cdate, myDate;
              var data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              let arr5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              var arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              var arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              var arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              var arr4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              var array1 = [1, 2, 3, 4, 5]
              var array2 = []
              $.each(queryLists, function(index, item) {
                  //获取月份
                  cdate = item.Date;
                  myDate = new Date(cdate).getMonth() + 1;
                  if (GetRequest().typeId === -1) {
                      if (item.Type == 1) {
                          for (var i = 0; i < 12; i++) {
                              if (myDate === (i + 1)) {
                                  arr1[i]++
                                      monthData[item.Type] = arr1
                              }
                          }
                      } else if (item.Type == 2) {
                          for (var i = 0; i < 12; i++) {
                              if (myDate === (i + 1)) {
                                  arr2[i]++
                                      monthData[item.Type] = arr2
                              }
                          }
                      } else if (item.Type == 3) {
                          for (var i = 0; i < 12; i++) {
                              if (myDate === (i + 1)) {
                                  arr3[i]++
                                      monthData[item.Type] = arr3
                              }
                          }
                      } else if (item.Type == 4) {
                          for (var i = 0; i < 12; i++) {
                              if (myDate === (i + 1)) {
                                  arr4[i]++
                                      monthData[item.Type] = arr4
                              }
                          }
                      } else if (item.Type == 5) {
                          for (var i = 0; i < 12; i++) {
                              if (myDate === (i + 1)) {
                                  arr5[i]++
                                      monthData[item.Type] = arr5
                              }
                          }
                      }

                  }

                  qLists.push({ name: item.Name, type: 'bar', barGap: '0%', data: monthData[item.Type], eventType: item.Type })

              })
              qLists = uniqeByKeys(qLists, ['eventType'])
              //设置图表
              option.series = qLists;
              myChart.setOption(option, true);
              // for (key in monthData) {
              //     array2.push(key)
              // }
              // var arr = contains(array1, array2)
              // $.each(arr, function(index, value) {
              //     $.ajax({
              //         type: 'get',
              //         url: 'http://47.95.1.140/wx/webapi/api/XJProblemTypes/' + value,
              //         dataType: 'json',
              //         success: function(data) {
              //             qLists.push({ name: data.Name, type: 'bar', barGap: '0%', data: data1, eventType: data.Type })
              //             //设置图表
              //             option.series = qLists;
              //             myChart.setOption(option, true);
              //         }
              //     })
              // })

          }

      })
  }
  })
