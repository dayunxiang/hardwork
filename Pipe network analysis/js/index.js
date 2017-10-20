$(function () {
//侧边栏切换
toggleSideBar()
//添加评估分析

})
//侧边栏切换
function toggleSideBar() {
    
  $(".open").on("click",function () {
     $(".sidebar-container").toggleClass('sidebarOpened')
  })

  $(".sidebarIcon li").on("click",function () {
     $(".sidebar-container").toggleClass('sidebarOpened')
})
}
