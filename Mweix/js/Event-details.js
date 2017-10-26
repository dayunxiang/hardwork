  $(function() {
        tab("#tabchange","now");

      var rmapa = new RMap.Map('map');

      $.ajax({
          type: 'get',
          url: 'http://47.95.1.140/wx/wechat/api/GetXJProblemById?id=' + GetRequest().id,
          dataType: 'json',
          headers: {
              "Authorization": localStorage.getItem('tk')
          },
          success: function(data) {
              data = JSON.parse(data)[0]
              var picUrl = ''
              data.Date = (data.Date).replace('T'," ")
              var str = "<li>" +
                  "<span>上传时间</span>" +
                  "<span>" + data.Date + "</span>" +
                  "</li>" +
                  "<li>" +
                  "<span>上传人</span>" +
                  "<span>" + data.RealName + "</span>" +
                  "</li>" +
                  "<li>" +
                  "<span>事发位置</span>" +
                  "<span>" + data.Location + "</span>" +
                  "</li>" +
                  "<li class='clearfix'>" +
                  "<span>问题类型</span>" +
                  "<span>" + data.Name + "</span>" +
                  "</li>" +
                  "<li class='clearfix'>" +
                  "<span class='clearfix'>问题描述</span>" +
                  "<div class='clearfix'>" + data.Description + "</div>" +
                  '</li>'
              if (data.Type === 1) {
                  picUrl = './images/yishui.png'
              } else if (data.Type === 2) {
                  picUrl = './images/jingg.png'

              } else if (data.Type === 3) {
                  picUrl = './images/weigui.png'

              } else if (data.Type === 4) {
                  picUrl = './images/shuizhi.png'

              } else if (data.Type === 5) {
                  picUrl = './images/qita.png'

              }
              rmapa.centerZoom(data.X, data.Y, 18);
              rmapa.addPoint(data.X, data.Y, {
                  pic: picUrl,
                  anchor: [12, 24],
              })
              $("#evInfo").append(str)
          },
          error: function(err) {
              console.log(err)
          }

      })
      $.ajax({
          type: 'get',
          url: 'http://47.95.1.140/wx/wechat/GetFileByProblemID?problemId=' + GetRequest().id,
          dataType: 'json',
          headers: {
              "Authorization": localStorage.getItem('tk')
          },
          success: function(data) {
              data = JSON.parse(data)
              var str = '';
              if (data.length == 0) {
                  str += ' <img class="swiper-slide" src="./images/bg.png">'
              } else {
                  $.each(data, function(index, value) {
                      console.log((value.ImgUrl).replace(/\\/, ""));
                      str += ' <img class="swiper-slide" src=' + "http://47.95.1.140/wx/wechat/Upload/" + (value.ImgUrl).replace(/\\/, "") + '>'
                      // console.log( $(".swiper-slide").find("img"))
                      // $(".swiper-slide").attr("src","http://47.95.1.140/wx/webapi/Upload/"+(value.ImgUrl).replace(/\\/,""))
                  })
              }

              $("#swiperBox").append(str)
          }
      })
  })
