$(function() {
    height()
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //动态设置表格页加载数量
    page = Math.floor($(".unitTableContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".unitTableContainer").height() / 41) - 1;
    })
    //初始化用户表格
    initunitDetailTable()
    hovermn(".unitEdit", "tooltip1");
    hovermn(".unitDel", "tooltip1");
    //全返 反选
    allORnot()
    //刷新表头状态
    freshStatus()
    //模拟title
    hovermn("#unitDetailTable", ".tooltip1")
    //打开删除
    openunitDetailDel() 
    //取消或者关闭删除
    closeUserDel()
    //确认删除单条
 sureDelOne() 
    $(".returnUnitManage").on("click", function() {
        $.ajax({
            type: 'get',
            url: './UnitManage.html',
            success: function(data) {
                $(".mainContainer .content").empty().html(data)

            }
        })
    })

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
            "sSearchPlaceholder": '搜索',
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
                    return '<td><input type="checkBox" class="checkBox" />' +
                        '<span>' + row.name + '</span></td>';
                }
            },
            {
                targets: 12,
                render: function(data, type, row, meta) {
                    return '<img src="./img/ico-over copy 3.png" alt="" title="删除" class="tooltip1 unitDel"  />';
                }
            }
        ],
        searching: false,
        ordering: false,
    });
}



//全返 反选
function allORnot() {
    $("#unitDetailTable thead").on("click", ".checkBox", function() {
        if ($(this).is(":checked")) {
            $("#unitDetailTable tbody .checkBox").prop("checked", true);
            $(".del").show()
        } else {
            $("#unitDetailTable tbody .checkBox").prop("checked", false);
            $(".del").hide()

        }
    })
    //给tbody的复选框绑定单击事件
    $("#unitDetailTable tbody").on("click", ".checkBox", function() {
        //获取选中复选框长度
        var length = $("#unitDetailTable tbody  input[type=checkBox]:checked").length;
        //未选中的长度
        var len = $("#unitDetailTable tbody input[type=checkBox]").length;

        if (length == len) {
            $("#unitDetailTable thead .checkBox").prop("checked", true);
        } else {
            $("#unitDetailTable thead .checkBox").prop("checked", false);
        }
        if (length >= 2) {
            $(".del").show()
        } else {
            $(".del").hide()
        }
    });
}


//刷新表头状态
function freshStatus() {
    $('#unitDetailTable').on('page.dt', function() {
        $("#unitDetailTable .checkBox").prop("checked", false);
    });
}
//打开删除
function openunitDetailDel() {
    $("#unitDetailTable tbody").on("click", ".unitDel", function() {
        $(".deleteContainer").show()
    })
}
//确认删除单条
function sureDelOne() {
    $("#unitDetailTable").on("click", ".unitDel", function() {
        $(".deleteContainer").show()
        that = $(this)
    })
    $(".sureDel").on("click", function() {
        var data = $('#unitDetailTable').DataTable().row(that.parents('tr')).data();
        console.log(data)
        //执行删除
        //成功
        $('#unitDetailTable').DataTable().ajax.reload();
    })
}
