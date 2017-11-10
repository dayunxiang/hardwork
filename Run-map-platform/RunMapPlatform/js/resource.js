
/*resource*/
// resourcce tab栏

/*底层渲染*/
var dcData = {
  list: ResourceListConfig.baseLayer
}
var dcHtml = template('dcTpl', dcData);
$("#contenta").html(dcHtml);
/*图层渲染*/
var tcData = {
  list: ResourceListConfig.thematicLayer
}
var tcHtml = template('tcTpl', tcData);
$("#contentb").html(tcHtml);




