   $(function() {
       $.ajax({
           type: 'get',
           url: './usermanage.html',
           dataType: 'text',
           success: function(data) {
               $(".mainContainer .content").html(data)
           }
       })

       $(".sideBar .list a").on("click", function() {
           $(this).parent("li").addClass('now')
           $(this).parent("li").siblings().removeClass("now")
         
           $.ajax({
               type: 'get',
               url: './' + $(this).attr("page") + '.html',
               success: function(data) {
                   $(".mainContainer .content").empty().html(data)

               }
           })
       })

       $(".personalInfo").on("click",function () {
             $.ajax({
               type: 'get',
               url: './personalInfo.html',
               success: function(data) {
                   $(".mainContainer .content").empty().html(data)

               }
           })
       })

   })
