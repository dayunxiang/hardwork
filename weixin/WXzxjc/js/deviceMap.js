  $(function() {
      var option = $(".deviceMapOption").height()
      var h = window.innerHeight -option
      $(".deviceMapContent").css("height", h + 'px')
      $("#deviceMap").css("height", h + 'px')

      initdeviceMap()

       //呼出菜单
    var data = [
        { "name": "全部设备", "num": "200" },
        { "name": "液位计", "num": "50" },
        { "name": "雨量计", "num": "200" },
        { "name": "流量计", "num": "200" }
    ]
    var str = '';
    //修改设备类型
    changeOptionInfo(".changeOption", data, '.optionSearch')

      //点击设备列表
   hrefPage(".hrefDeviceList",'deviceList')

   //跳转至详情
   hrefPage(".infoAlertContainer",'deviceInfo')
   
   


  })
  //初始化地图
  function initdeviceMap() {
      //初始化地图，默认地图为在线高德地图
      var rmap = new RMap.Map('deviceMap');
      //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
      rmap.centerZoom(116.390985, 39.906358, 12);
  }
