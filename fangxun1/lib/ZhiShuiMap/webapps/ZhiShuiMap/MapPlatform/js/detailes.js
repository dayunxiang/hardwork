
/*detailes*/
//tc
var obj = GetRequest();
// console.log(obj.name)
var tcDetail = {
    data:ResourceListConfig.thematicLayer,

};

var tcDetailHtml = template('tcDetailTpl', tcDetail);
$("#tcdetail").html(tcDetailHtml);

$(".tcbian span").each(function (index,item) {
  var url = GetRequest().name;
  var layerName = $(item).text()
  if(layerName === url ){
    $(this).parent().parent().parent().css('display','block')
    $("#tcifra").attr("src","rmap.html?name="+layerName+"&type=thematicLayer")

  }
})


//dc

var dcDetail = {
    data:ResourceListConfig.baseLayer,
};

var dcDetailHtml = template('dcDetailTpl', dcDetail);
$("#dcdetail").html(dcDetailHtml);

$(".dcbian span").each(function (index,item) {
  var url = GetRequest().name;
  var centerLat = GetRequest().centerLat;
  var centerLng = GetRequest().centerLng;
  var zoom = GetRequest().zoom;
  var name = $(item).text()
  if(name === url ){
    $(this).parent().parent().parent().css('display','block')
    $("#dcifra").attr("src","rmap.html?name="+name+"&type=baseLayer&centerLng="+centerLng+"&centerLat="+centerLat+"&zoom="+zoom)

  }
})


