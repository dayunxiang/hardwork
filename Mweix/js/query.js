   $(function() {
       filterEvent("#queryEvent");
       filterTime("#queryTime");
       $.ajax({
           type: 'get',
           url: "http://47.95.1.140/wx/wechat/GetXJProblemByDateAndTypeID?startDate=2017-8-10&endDate=2017-9-20&typeId=-1&isAllDate=true&companyName=" + getpas().companyName + "&isManager=" + getpas().isManager,
           dataType: 'json',
           headers: {
               "Authorization": localStorage.getItem('tk')
           },
           success: function(data) {

               var str = '';
               var queryLists = JSON.parse(data)
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
               })
               $("#queryLists").append(str)
               console.log($("img.lazy").length);
                   $("img.lazy").lazyload({
                     effect : "fadeIn"
                   });
               // jQuery(function($) {
               //     console.log($("img.lazy").length);
               //     $("img.lazy").lazyload({
               //       effect : "fadeIn"
               //     });
               // });


           }
       })

       $(".zs_querytab").find('li').each(function(index, item) {
           $(item).on("DOMNodeInserted", function() {
               $.ajax({
                   type: 'get',
                   url: "http://47.95.1.140/wx/wechat/GetXJProblemByDateAndTypeID?startDate=" + getpas().endDate + "&endDate=" + getpas().startDate + "&typeId=" + getpas().typeId + "&isAllDate=" + getpas().isAllDate + "&companyName=" + getpas().companyName + "&isManager=" + getpas().isManager,
                   dataType: 'json',
                   headers: {
                       "Authorization": localStorage.getItem('tk')
                   },
                   success: function(data) {
                   
                       var str = '';
                       var queryLists = JSON.parse(data)
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
                       })
                       $("#queryLists").empty()
                       $("#queryLists").append(str)
                           console.log($("img.lazy").length);
                           $("img.lazy").lazyload({
                             effect : "fadeIn"
                           });
                      

                   },
                   error: function(err) {
                       console.log(err)
                   }
               })
           })
       })


   })
