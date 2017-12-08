 $(function() {
     var rmap = new RMap.Map('map');
     //根据问题id获取信息
     $.ajax({
         type: 'get',
         url: 'http://47.95.1.140/wx/webapi/api/GetXJProblemById?id=' + GetRequest().id,
         dataType: 'json',
         success: function(data) {
             var picUrl
             data = JSON.parse(data)[0]
             var X = parseFloat(data.X)
             var Y = parseFloat(data.Y)
             if (data.Type == 1) {
                 picUrl = './images/yishui.png'
             } else if (data.Type == 2) {
                 picUrl = './images/jingg.png'
             } else if (data.Type == 3) {
                 picUrl = './images/weigui.png'
             } else if (data.Type == 4) {
                 picUrl = './images/shuizhi.png'
             } else if (data.Type == 5) {
                 picUrl = './images/bg.png'
             }
             rmap.centerZoom(X, Y, 18);
             rmap.addPoint(X, Y, {
                 pic: picUrl
             })
             $("#location").text(data.Location)
             $("#type").text(data.Name)
             $("#reportTime").text(data.Date)
             $("#reportUser").text(data.RealName)
             $("#describe").text(data.Description)
         }
     })
 })
