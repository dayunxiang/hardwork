//应用案例
var ApplicationCase = [{
	name:"case1",
	label:"1、点位气泡",
	describe:"现有一组点数据，在地图上添加该组点，地图缩放居中到该组点，点击点弹出气泡窗口，气泡窗口显示该点位的属性值。该示例用到接口：addPoint、extentByData、showPopWindow",
	isHaveChildren:"false",
},{
	name:'case2',
	label:"2、表格气泡",
	describe:"地图上添加点，鼠标移入点时高亮显示，点击点位时显示气泡，气泡中以表格形式展示信息。该示例用到接口：addPoint、centerZoom、addLightPoint、showPopWindow",
	isHaveChildren:"false",
},{
	name:"case3",
	label:"3、JSON数据点",
	describe:"后台返回JSON数据，该数据为一组待经纬度的点数据，在地图上添加该组点，根据不同属性显示不同图标，并点在点击时弹出气泡窗口，气泡窗口显示该点位的属性值。该示例用到接口：pointList、showPopWindow",
	isHaveChildren:"false",
},{
	name:'case4',
	label:"4、轨迹线",
	describe:"添加轨迹线，附有轨迹方向箭头，有重复轨迹时以弧线展示，并展示重复次数。该示例用到接口：addPoint、extentByData、showPopWindow",
	isHaveChildren:"false",
},{
	name:'case5',
	label:"5、轨迹回放",
	describe:"已知一组轨迹点，在地图展示轨迹信息并有播放控制条操作轨迹回放展示。该示例用到接口：addTrackPlay、showPopWindow",
	isHaveChildren:"false",
},{
	name:'case6',
	label:"6、拉框查询",
	describe:"拉框查询图层信息，地图上展示查询结果，并在地图下方以表格形式展示结果，点击表格某一行，对应地图的点高亮居中显示。该示例用到接口：queryLayerByRect、showPopWindow、addLightPoint、center",
	isHaveChildren:"false",
},{
	name:'case7',
	label:"7、点缓冲查询",
	describe:"点缓冲查询图层信息，地图上展示查询结果，并在地图下方以表格形式展示结果，点击表格某一行，对应地图的点高亮居中显示。该示例用到接口：queryLayerByRect、showPopWindow、addLightPoint、center",
	isHaveChildren:"false",
},{
	name:'case8',
	label:"8、测量工具",
	describe:"将长度测量、面积测量、圆面积测量、矩形面积测量、清空地图以工具条形式显示在地图右上角。该示例用到接口：measureLength、measureArea、measureCircle、measureRect、clearMap",
	isHaveChildren:"false",
},{
	name:'case9',
	label:"9、图形绘制",
	describe:"将绘制折线、绘制矩形、绘制圆形、绘制多边形以工具条形式显示在地图右上角。该示例用到接口：drawLine、drawRect、drawCircle、drawPolygon",
	isHaveChildren:"false",
}]
