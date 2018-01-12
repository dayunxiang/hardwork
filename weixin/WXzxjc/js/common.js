
/**
 * [changeOptionInfo 修改筛选设备]
 * @param  {[type]} changeOption [设备]
 * @param  {[type]} data         [传递的数据]
 * @param  {[type]} optionSearch [选项弹框]
 * @return {[type]}              [description]
 */
function changeOptionInfo(changeOption, data, optionSearch) {
    $(changeOption).on("click", function() {
        str = ''
        $.each(data, function(index, value) {
            str += '<li>' + value.name + '(' + value.num + ')' + '</li>'
        })
        $(optionSearch).find('ul').html(str)
        $(optionSearch).show();
        var that = this
        $(optionSearch).on("click", "li", function() {
            $(that).find('span').text($(this).text())
            $(optionSearch).hide()
        })
    })
    $(optionSearch).find("img").on("click", function() {
        $(optionSearch).hide()
    })
}

/**
 * [hrefPage 点击跳转页面]
 * @param  {[type]} ele  [点击对象]
 * @param  {[type]} page [要跳转的页面]
 * @return {[type]}      [description]
 */
function hrefPage(ele,page) {
     $(ele).on("click",function () {
      window.location.href = './'+page+'.html'
    })
}

/**
 * [获取url中的字符串]
 */
 function GetRequest() {
     var url = location.search; //获取url中"?"符后的字串  
     var theRequest = new Object();
     if (url.indexOf("?") != -1) {
         var str = url.substr(1);
         strs = str.split("&");
         for (var i = 0; i < strs.length; i++) {
             theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
         }
     }
     return theRequest;
 }

/**
 * 改变s背景颜色
 * @param  {[type]} color [description]
 * @return {[type]}       [description]
 */
function changeColor(ele,color) {
    $(ele).css("fill",color)
    $(ele).css("background",color)
}
