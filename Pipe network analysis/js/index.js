$(function () {
  //sidebar-list
  $(".open").on("click",function () {
    console.log(111)
    // $(".sidebar-list").css('left','0px')
    $(".sidebar-container").toggleClass('sidebarOpened')
  })
})
