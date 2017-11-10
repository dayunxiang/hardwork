开发者开发修改时阅读：

1、网站调用示例和应用案例直接从“RunMapAPI/develop/Examples”中拷贝到“RunMapPlatform/RMap_Examples”下，然后修改对应的示例下的API引用地址为“../../mapapi/rmap.js”。
2、开发时，如果使用HBuilder开发，需要新建一个项目名称为“mapapi”的项目，然后把“RunMapAPI/develop/RMap”下面的内容拷贝过去，用于网站调用示例和应用案例的中的API引用使用，及“../../mapapi/rmap.js”。
3、关于接口详情生成工具，编辑RunMapJSDOC下的run.bat，通过dos命令分步实现，使用过程中注意修改run.bat下面对应的目录位置，目前的模块文件夹有“Control、Draw、Graphic、InfoWindow、Layer、Measure、Query、Tools、View”，当增加新的模块文件夹时，需要添加对应的文件夹位置。
4、使用“JSCompress”代码压缩工具，将“RunMapAPI/develop/RMap”下的js和css文件压缩，压缩得到“leaflet.min.css、leaflet.min.js、RMapStyle.min.css、RMapStyle.min.js”，放到压缩时注意代码选中顺序；另外压缩“RunMapAPI\build\RMap\rmap-zip.js”得到“rmap.min.js”，修改名称为“rmap.js”放到“ZhiShuiMap\webapps\ZhiShuiMap\MapAPI\RMap”下，config.js文件不需压缩。
5、将RunMapPlatform下的文件拷贝到对应的发布包“ZhiShuiMap\webapps\ZhiShuiMap\MapPlatform”下，将压缩好的文件放到“ZhiShuiMap\webapps\ZhiShuiMap\MapAPI\RMap”下对应目录，双击启动“ZhiShuiMap\bin\startup.bat”，完成网站部署。