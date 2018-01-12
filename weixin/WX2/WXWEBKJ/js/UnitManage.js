$(function() {
    height()
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    //动态设置表格页加载数量
    page = Math.floor($(".unitmanaContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".unitmanaContainer").height() / 41) - 1;
        // $("#jqTable").yhhDataTable('refreshTable')
    })

    select(".unitCityselect", '.unitCityselectOption')
    select(".unitNameselect", '.unitNameselectOption')
    select(".Xsselect", '.XsselectOption')

    $('#startTime').fdatepicker({
        format: 'yyyy-mm-dd'
    });
    $('#endTime').fdatepicker({
        format: 'yyyy-mm-dd'
    });
    //模拟title
    hovermn("#unitTable", ".tooltip1")
    //跳转详情
    hrefUnitDetail()
    //初始化用户表格
    initunitTable()
    //全返 反选
    allORnot()
    //刷新表头状态
    freshStatus()
    //打开用户删除
    openUserDel()
    //取消或者 关闭 删除
    closeUserDel()
    //确认删除单条
    sureDelOne()
    //删除多条
    sureDelMore()


})
//初始化用户表格
function initunitTable() {
    $('#unitTable').DataTable({
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
        ajax: './unit.json',
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
            { data: 'subpart4' },
            { data: 'subpart5' }

        ],
        columnDefs: [{
                targets: 0,
                render: function(data, type, row, meta) {
                    return '<td><input type="checkBox" class="checkBox" />' +
                        '<span>' + row.name + '</span></td>';
                }
            },
            {
                targets: 13,
                render: function(data, type, row, meta) {
                    return '<img src="./img/ico-detail.png" title="详情" alt="" class="tooltip1 unitDetail" />' +
                        '<img src="./img/ico-over copy 3.png" alt="" title="删除" class="tooltip1 unitDel"  />';
                }
            }
        ],
        searching: true,
        ordering: false,
    });
}


//跳转详情
function hrefUnitDetail() {
    $("#unitTable").on("click", ".unitDetail", function() {
        $.ajax({
            type: 'get',
            url: './unitDetail.html',
            success: function(data) {
                $(".mainContainer .content").empty().html(data)

            }
        })
    })
}

//确认删除单条
function sureDelOne() {
    $("#unitTable").on("click", ".unitDel", function() {
        $(".deleteContainer").show()
        that = $(this)
    })
    $(".sureDel").on("click", function() {
        var data = $('#unitTable').DataTable().row(that.parents('tr')).data();
        console.log(data)
        //执行删除
        //成功
        $('#unitTable').DataTable().ajax.reload();
    })
}
//删除多条
function sureDelMore() {
    $(".unitContainer").on("click", ".udel", function() {
        var select = $("#unitTable tbody  input[type=checkBox]:checked").parents('tr')
        var arr = [] //存储删除数据
        $.each(select, function(index, item) {
            arr.push($('#unitTable').DataTable().row($(item)).data())
        })
        console.log(arr)
    })
}
//全返 反选
function allORnot() {
    $("#unitTable thead").on("click", ".checkBox", function() {
        if ($(this).is(":checked")) {
            $("#unitTable tbody .checkBox").prop("checked", true);
            $(".udel").show()
        } else {
            $("#unitTable tbody .checkBox").prop("checked", false);
            $(".udel").hide()

        }
    })
    //给tbody的复选框绑定单击事件
    $("#unitTable tbody").on("click", ".checkBox", function() {
        //获取选中复选框长度
        var length = $("#unitTable tbody  input[type=checkBox]:checked").length;
        //未选中的长度
        var len = $("#unitTable tbody input[type=checkBox]").length;

        if (length == len) {
            $("#unitTable thead .checkBox").prop("checked", true);
        } else {
            $("#unitTable thead .checkBox").prop("checked", false);
        }
        if (length >= 2) {
            $(".udel").show()
        } else {
            $(".udel").hide()
        }
    });
}


//刷新表头状态
function freshStatus() {
    $('#unitTable').on('page.dt', function() {
        $(".udel").hide()
        $("#unitTable .checkBox").prop("checked", false);
    });
}
