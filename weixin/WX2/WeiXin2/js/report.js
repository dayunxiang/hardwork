$(function() {
    initMap()
    setNiceScroll(".optionSearch")

})


function initMap() {
    //初始化地图，默认地图为在线高德地图
    var rmap = new RMap.Map('map');
    //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
    rmap.centerZoom(116.390985, 39.906358, 12);
}


 //滚动条
  function setNiceScroll(containerClass1) {
    $(containerClass1).niceScroll({
      cursorcolor: "#dfdfdf",
      autohidemode: false,
      // cursorborderradius: 4,
      background: '#f8f8f8',
      cursorminheight: 32,
      // disableoutline: true,
    }).show();
    $(containerClass1).niceScroll({
      cursorcolor: "#dfdfdf",
      autohidemode: false,
      // cursorborderradius: 4,
      background: '#f8f8f8',
      cursorminheight: 32,
      // disableoutline: true,
    }).resize();
  }
