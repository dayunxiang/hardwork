$(function() {
    //select
    select(".wtlxselect", '.wtlxselectOption')
    select(".ssqyselect", '.ssqyselectOption')
    select(".rwztselect", '.rwztselectOption')

    //初始化用户表格
    initjqTable()
    //动态设置表格页加载数量
    page = Math.floor($(".jqmanaContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".jqmanaContainer").height() / 41) - 1;
    })
    //模拟title
    hovermn("#jqTable")

    $('#demo-1').fdatepicker({
        format: 'yyyy-mm-dd'
    });
    $('#demo-2').fdatepicker({
        format: 'yyyy-mm-dd'
    });

})


//初始化用户表格
function initjqTable() {
    $.ajax({
        type: 'get',
        url: './lib/YhhDataTable/jq.json',
        dataType: 'json',
        success: function(data) {
            var data = data.data
        
            drawTable(data)

        },
        error: function(error) {
            console.log(error)
        }
    })



}
/*写表格*/
function drawTable(data) {
    $('#jqTable').yhhDataTable({
        'paginate': {
            'type': 'updown',
            'displayLen': page,
        },
        'tbodyRow': {
            'zebra': true,
            'write': function(d) {
                return '<tr><td>' + d.name + '</td><td>' + d.wxnumber + '</td><td>' + d.email + '</td><td>' + d.unit + '</td><td>' + d.department + '</td><td>' + d.duty + '</td><td>' + d.role + '</td><td>' + d.subpart + '</td><td>' + d.phone + '</td><td>' + d.regisDate + '</td><td>' + d.photoNum + '</td><td><img src="./img/ico-detail.png" alt="" title="详情" class="jqDetail tooltip" /><img src="./img/ico-push.png" alt=""  title="分配任务"   class="jqfp tooltip" style="display:'+d.isFp+'"/><img src="./img/Slice 2.png" alt="" title="结束任务"  class="jqend tooltip" /></td></tr>';
            }
        },
        'tbodyData': {
            'enabled': true,
            /*是否传入表格数据*/
            'source': data /*传入的表格数据*/
        },
        // 'backDataHandle': function(d) {
        //     if (d.code == '000') {
        //         return d.data;
        //     } else {
        //         alert('出错信息');
        //         return [];
        //     }
        // }
    });
    /*更新表格*/
    var refreshTable = function(data, page) {

        if ($.isEmptyObject(data)) data = {};
        var toData = {
            'ajaxParam': { 'data': data }
        }
        if (!$.isEmptyObject(page)) {

            toData.paginate = {};
            toData.paginate.currentPage = page;
        }
        var $table = $page.find('.result-list');

        $table.yhhDataTable('refresh', toData);


    }





}
