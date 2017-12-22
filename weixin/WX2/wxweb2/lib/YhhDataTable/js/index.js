$(document).ready(function() {

    $.ajax({
        type: 'get',
        url: './lib/YhhDataTable/test.text',
        dataType: 'json',
        success: function(data) {
            var data = data.data
            console.log(data)
            $('#testtable4').yhhDataTable({
                'paginate': {
                    // 'changeDisplayLen': true,
                    'type': 'updown',
                    // 'visibleGo': true
                },
                'tbodyRow': {
                    'zebra': true,
                    'write': function(d) {
                        return '<tr><td><i class="checkBox"></i>' + d.name + '</td><td>' + d.wxnumber + '</td><td>' + d.email+ '</td><td>' + d.unit + '</td><td>' + d.department + '</td><td>' + d.duty + '</td><td>' + d.role + '</td><td>' + d.subpart + '</td><td>' + d.phone + '</td><td>' + d.regisDate + '</td><td><i class="val">1</i><i>2</i></td></tr>';
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
        },
        error: function(error) {
            console.log(error)
        }
    })
   
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

    $("#testtable4").on('click','.val',function () {
    	console.log(111)
    })
});
