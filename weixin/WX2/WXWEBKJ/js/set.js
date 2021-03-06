$(function () {
  height();
  initSelect();
  tabcount('.setoption','now','.settabsubcontent');
  //初始化地图
 initMap();
 //删除分区
 delFq();
 //取消或者 关闭 删除
 closeUserDel();
 hovermn(".delLstInfo");
 hovermn(".editLstInfo");
 hovermn(".newFq");
hovermn(".opentaskFp");
hovermn(".EditLx");
hovermn(".DelLx");


 //打开新建分区
 showNewFq()
 //取消或者关闭 新建分区
 closeNewFq()
 //打开新建类型
 showNewLX()
//取消或者关闭 新建分区
closeNewLX();
//编辑新建类型
showEditFq();
//编辑或者关闭 新建分区
 closeEditFq();
 //取消或关闭 任务分配设置
 closetaskFp();
//打开 任务分配设置
 opentaskFp();
select(".tsfsselect",".tsfsselectOption");

})
//初始化地图
function initMap() {
  //初始化地图，默认地图为在线高德地图
       var rmap = new RMap.Map('areaMap');
       //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
       rmap.centerZoom(116.390985, 39.906358, 12);
}

//删除分区
function delFq() {
  $(".delLstInfo").on("click",function () {
    $(".deleteContainer").show()
  })
  $(".DelLx").on("click",function () {
    $(".deleteContainer").show()
  })
}

//打开新建分区
function showNewFq() {
  $(".newFq").on("click",function () {
    $(".newFQContainer").show()
    //初始化宽度
      $(".chosen-container").css({
     'width': ($(".newFQContent").width()-40) + 'px'
  })
  })
}

//取消或者关闭 新建分区
function closeNewFq() {
  $(".newFQContainer .newFQContent .title>img").on("click",function () {
     $(".newFQContainer").hide()
  })
  $(".cancleNew").on("click",function () {
     $(".newFQContainer").hide()
  })
}


//打开新建类型
function showNewLX() {
  $(".newLX").on("click",function () {
    $(".newLxContainer").show()
  
  })
}

//取消或者关闭 新建分区
function closeNewLX() {
  $(".newLxContainer .newLxContent .title>img").on("click",function () {
     $(".newLxContainer").hide()
  })
  $(".cancleNewLx").on("click",function () {
     $(".newLxContainer").hide()
  })
}

//编辑新建类型
function showEditFq() {
  $(".EditLx").on("click",function () {
    $(".EditLxContainer").show()
  
  })
}

//编辑或者关闭 新建分区
function closeEditFq() {
  $(".EditLxContainer .EditLxContent .title>img").on("click",function () {
     $(".EditLxContainer").hide()
  });
  $(".cancleEditLx").on("click",function () {
     $(".EditLxContainer").hide()
  });
}

//取消或关闭 任务分配设置
function closetaskFp() {
  $(".EditLxContainer .settaskFpContent .title>img").on("click",function () {
     $(".settaskFpContainer").hide()
  });
  $(".cancletaskFp").on("click",function () {
     $(".settaskFpContainer").hide()
  });
}

//打开 任务分配设置
function opentaskFp() {
   $(".opentaskFp").on("click",function () {
     $(".settaskFpContainer").show()
       //初始化宽度
      $(".chosen-container").css({
     'width': ($(".newFQContent").width()-40) + 'px'
  })
  })
}
