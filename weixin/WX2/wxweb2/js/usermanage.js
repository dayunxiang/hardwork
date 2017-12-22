$(function() {
    //初始化用户表格
    initUserTable()
    page = Math.floor($(".usermanaContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".usermanaContainer").height() / 41) - 1;
    })
})


//初始化用户表格
function initUserTable() {
    $.ajax({
        type: 'get',
        url: './lib/YhhDataTable/test.text',
        dataType: 'json',
        success: function(data) {
            var data = data.data
            drawTable(data)
        },
        error: function(error) {
            console.log(error)
        }
    })

    /*写表格*/
    function drawTable(data) {
        $('#userTable').yhhDataTable({
            'paginate': {
                'type': 'updown',
                'displayLen': page,
            },
            'tbodyRow': {
                'zebra': true,
                'write': function(d) {
                    return '<tr><td><i class="checkBox"></i>' + d.name + '</td><td>' + d.wxnumber + '</td><td>' + d.email + '</td><td>' + d.unit + '</td><td>' + d.department + '</td><td>' + d.duty + '</td><td>' + d.role + '</td><td>' + d.subpart + '</td><td>' + d.phone + '</td><td>' + d.regisDate + '</td><td><img src="./img/ico-edit.png" alt="" title="编辑" class="userEdit" /><img src="./img/ico-over copy 3.png" alt="" title="删除"  class="userDel" /></td></tr>';
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
    }
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
