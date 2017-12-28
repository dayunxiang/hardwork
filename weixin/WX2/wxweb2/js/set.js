$(function () {
  tabcount('.setoption','now','.settabsubcontent')
  //初始化地图
 initMap()
})
//初始化地图
function initMap() {
  //初始化地图，默认地图为在线高德地图
       var rmap = new RMap.Map('areaMap');
       //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
       rmap.centerZoom(116.390985, 39.906358, 12);
}
