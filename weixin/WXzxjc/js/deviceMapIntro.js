  $(function() {
      // var option = $(".deviceMapOption").height()
      var h = window.innerHeight 
      $(".deviceMapIntroContainer").css("height", h + 'px')
      $("#deviceMapIntro").css("height", h + 'px')

      initdeviceMapIntro()


  })
  //初始化地图
  function initdeviceMapIntro() {
      //初始化地图，默认地图为在线高德地图
      var rmap = new RMap.Map('deviceMapIntro');
      //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
      rmap.centerZoom(116.390985, 39.906358, 12);
  }
