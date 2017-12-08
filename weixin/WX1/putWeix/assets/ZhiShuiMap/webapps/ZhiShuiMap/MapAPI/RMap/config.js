var ResourceListConfig = {


	/**
	 * 多个底图,用于地图切换，开发时使用、
	 * @name {String}	图层名称，在使用图层时用到该参数
	 * @name_CN {String}	中文图层名称
	 * @describe {String}	图层描述，描述图层
	 * @name {String}	地图名称，在有多个底图，需要进行底图切换时用到,相同名称的图层会视同为一类
	 * @url	{String}	地图服务地址
	 * @layer	{String}	地图图层名称，@type类型为"TDT_WMS"时需要用到，用来指定调用图层的名称。
	 * @visible	{bool}	地图是否可见，默认是true
	 */
	baseLayer: [{
		name_CN: "高德矢量——在线",
		describe: "在线高德矢量图层数据",
		name: "GDSL_OL",
		visible: true,
		type: "OnLineMap",
		center: [110, 33],
		zoom: 4,
	}, {
		name_CN: "高德影像——在线",
		describe: "在线高德影像图层数据",
		name: "GDYX_OL",
		visible: false,
		type: "OnLineMap",
		center: [110, 33],
		zoom: 4,
	}, {
		name_CN: "QEOQ——在线",
		describe: "在线QEOQ图层数据",
		name: "GEOQ_OL",
		visible: false,
		type: "OnLineMap",
		center: [110, 33],
		zoom: 4,
	}, {
		name_CN: "ArcGIS在线中国地图",
		describe: "ArcGIS在线中国地图",
		name: "ChinaOnline_ArcGIS",
		visible: false,
		type: "ArcGISTiledMapLayer",
		EPSG: "3857",//根据“EPSG”参数，从“https://epsg.io/”或者“http://spatialreference.org/”上面获取proj4参数
		proj4:'+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs',
		url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer",
		center: [110, 33],
		zoom: 4,
	}, {
		name_CN: "南宁地图",
		describe: "南宁地图",
		name: "NNMap_DX",
		visible: false,
		type: "ArcGISTiledMapLayer",
		EPSG: "2433",//根据“EPSG”参数，从“https://epsg.io/”或者“http://spatialreference.org/”上面获取proj4参数
		proj4:'+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
		resolutions: [158.75031750063502,79.37515875031751,26.458386250105836,19.08786487579346,9.54393243789673,4.771966218948365,
		2.3859831094741826,1.1929915547370913,0.5964957773685456,0.2982478886842728,0.1491239443421364],
		origin: [-5123300.0,1.00023E7],
		url: "http://192.168.200.12:6080/arcgis/rest/services/NanNing/NNMap_DX/MapServer",
		center: [108.37, 22.83],
		zoom:1
	}],

	center: [110, 33],
	zoom: 4,
	maxZoom: 18,
	minZoom: 3,
	
	/**
	 * 专题图层，用于查询，图层叠加等
	 * @layerName {String}	图层名称，在使用图层时用到该参数
	 * @layerName_CN {String}	中文图层名称
	 * @describe {String}	图层描述，描述图层
	 * @layerType {String}	图层类型，WFS_GeoServer(geoserver发布的WFS服务)、ArcGISRest(ArcGIS发布的rest服务)
	 */
	thematicLayer:[{
		layerName_CN: "地级市",
		describe: "中国地级市",
		layerName: "china_dijishi",
		url:"http://192.168.200.30:7000/geoserver/china/ows",
		layerType: "WFS_GeoServer",
		typeName: "china:dijishi",
		extent:[73.441276999634,18.159828999808667,135.08692999971987,53.561770999732005],
		srsName: "EPSG:4326",
//		fieldList: "CITY(String)、DISTRICT(String)、NAME(String)、PROVINCE(String)、OBJECTID(Number)",
		fieldList: [{
			fieldName:"CITY",
			fieldType:"String",
			fieldDescribe:"城市名称"
		},{
			fieldName:"DISTRICT",
			fieldType:"String",
			fieldDescribe:"所属区"
		},{
			fieldName:"NAME",
			fieldType:"String",
			fieldDescribe:"名称"
		},{
			fieldName:"PROVINCE",
			fieldType:"String",
			fieldDescribe:"所属省"
		},{
			fieldName:"OBJECTID",
			fieldType:"Number",
			fieldDescribe:"编码"
		}],
		isQueryLayer:true
	},{
		layerName_CN: "医疗保健",
		describe: "南宁_医疗保健",
		layerName: "NNMap_DX_YLBJ",
		url:"http://192.168.200.12:6080/arcgis/rest/services/NanNing/NNMap_DX/MapServer/1",
		layerType: "ArcGISRest",
		extent:[107.72140255900653,22.492368648883275,109.02228670905504,23.16520304818412],
//		fieldList: "OBJNAME(String)、OBJADDRESS(String)、OBJTYPE(String)、SUBTYPE(String)、OBJECTID(Number)",
		fieldList: [{
			fieldName:"OBJNAME",
			fieldType:"String",
			fieldDescribe:"名称"
		},{
			fieldName:"OBJADDRESS",
			fieldType:"String",
			fieldDescribe:"地址"
		},{
			fieldName:"OBJTYPE",
			fieldType:"String",
			fieldDescribe:"类型"
		},{
			fieldName:"SUBTYPE",
			fieldType:"String",
			fieldDescribe:"子类型"
		},{
			fieldName:"OBJECTID",
			fieldType:"Number",
			fieldDescribe:"编码"
		}],
		isQueryLayer:true
	},{
		layerName_CN: "双线铁路",
		describe: "南宁_双线铁路",
		layerName: "NNMap_DX_SXTL",
		url:"http://192.168.200.12:6080/arcgis/rest/services/NanNing/NNMap_DX/MapServer/10",
		layerType: "ArcGISRest",
		extent:[107.72140255900653,22.492368648883275,109.02228670905504,23.16520304818412],
//		fieldList: "NAME(String)、SHAPE_LENG(Number)、TYPE(String)、OBJECTID(Number)",
		fieldList: [{
			fieldName:"NAME",
			fieldType:"String",
			fieldDescribe:"名称"
		},{
			fieldName:"TYPE",
			fieldType:"String",
			fieldDescribe:"类型"
		},{
			fieldName:"SHAPE_LENG",
			fieldType:"Number",
			fieldDescribe:"长度"
		},{
			fieldName:"OBJECTID",
			fieldType:"Number",
			fieldDescribe:"编码"
		}],
		isQueryLayer:true
	},{
		layerName_CN: "城市区划",
		describe: "南宁_城市区划",
		layerName: "NNMap_DX_XZQH",
		url:"http://192.168.200.12:6080/arcgis/rest/services/NanNing/NNMap_DX/MapServer/29",
		layerType: "ArcGISRest",
		extent:[107.72140255900653,22.492368648883275,109.02228670905504,23.16520304818412],
//		fieldList: "NAME(String)、POPULATION(Number)",
		fieldList: [{
			fieldName:"NAME",
			fieldType:"String",
			fieldDescribe:"名称"
		},{
			fieldName:"POPULATION",
			fieldType:"Number",
			fieldDescribe:"人数"
		}],
		isQueryLayer:true
	},{
		layerName_CN: "中国地图",
		describe: "中国地图",
		layerName: "china",
		url:"http://192.168.200.30:6080/arcgis/rest/services/china/MapServer",
		layerType: "ArcGISRest",
		extent:[73.441276999634,18.159828999808667,135.08692999971987,53.561770999732005],
		isQueryLayer:false
	},{
		layerName_CN: "中国地图_地级市",
		describe: "中国地图_地级市",
		layerName: "china_dijishi_arcgis",
		url:"http://192.168.200.30:6080/arcgis/rest/services/china/MapServer/2",
		layerType: "ArcGISRest",
		extent:[73.441276999634,18.159828999808667,135.08692999971987,53.561770999732005],
		isQueryLayer:true
	}]
}
