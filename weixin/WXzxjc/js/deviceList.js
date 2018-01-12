$(function() {
  // 获取url的字符串
    var type = GetRequest().type;
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

    //点击地图跳转
    hrefPage(".hrefDeviceMap", 'deviceMap')

    //点击跳转详情
    hrefPage(".deviceListContent li", 'deviceInfo')
    
})
