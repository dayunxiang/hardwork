$(function () {
   var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //动态设置表格页加载数量
    page = Math.floor($(".unitTableContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".unitTableContainer").height() / 41) - 1;
    })
 //模拟title
    hovermn("#unitDetailTable")
     //初始化用户表格
    initunitDetailTable()

    
})
//初始化用户表格
function initunitDetailTable() {
    $('#unitDetailTable').DataTable({
        "bProcessing": true,
        "bLengthChange": false,
        "iDisplayLength": page, //默认显示的记录数  
        "bAutoWidth": false, //是否自适应宽度  
        "bScrollCollapse": false, //是否开启DataTables的高度自适应，当数据条数不够分页数据条数的时候，插件高度是否随数据条数而改变  
        "oLanguage": {
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "对不起，查询不到任何相关数据",
            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_条记录",
            "sInfoEmtpy": "找不到相关数据",
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
            "sProcessing": "正在加载中...",
            "sSearch": "",
            "oPaginate": {
                "sFirst": "第一页",
                "sPrevious": "<",
                "sNext": " > ",
                "sLast": " 最后一页 "
            },
        },
        ajax: './unitDetail.json',
        columns: [
            { data: "name" },
            { data: "wxnumber" },
            { data: "email" },
            { data: "unit" },
            { data: "department" },
            { data: "duty" },
            { data: "role" },
            { data: 'subpart' },
            { data: 'subpart1' },
            { data: 'subpart2' },
            { data: 'subpart3' },
            { data: 'subpart4' }

        ],
        columnDefs: [{
                targets: 0,
                render: function(data, type, row, meta) {
                    return '<td><i class="checkBox"><b class="fa fa-check"></b></i>' +
                        '<span>' + row.name + '</span></td>';
                }
            },
            {
                targets: 12,
                render: function(data, type, row, meta) {
                    return '<img src="./img/ico-edit.png" title="编辑" alt="" class="tooltip userEdit" />' +
                        '<img src="./img/ico-over copy 3.png" alt="" title="删除" class="tooltip userDel"  />';
                }
            }
        ],
        searching: false,
        ordering: false,
    });
}



