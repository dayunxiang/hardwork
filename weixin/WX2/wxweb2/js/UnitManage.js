$(function() {
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    //动态设置表格页加载数量
    page = Math.floor($(".unitmanaContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".unitmanaContainer").height() / 41) - 1;
        // $("#jqTable").yhhDataTable('refreshTable')
    })

    select(".unitCityselect", '.unitCityselectOption')
    select(".unitNameselect", '.unitNameselectOption')

    $('#startTime').fdatepicker({
        format: 'yyyy-mm-dd'
    });
    $('#endTime').fdatepicker({
        format: 'yyyy-mm-dd'
    });
    //模拟title
    hovermn("#unitTable")

    //初始化用户表格
    initunitTable()
    //全选和全部选功能
    allORnot()
    //跳转详情
 hrefUnitDetail()
 //删除
 unitDel()
  //打开用户删除
    openUserDel()
    //取消或者 关闭 删除
    closeUserDel()

    
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
            { data: 'subpart' }

        ],
        columnDefs: [{
                targets: 0,
                render: function(data, type, row, meta) {
                    return '<td><i class="checkBox"><b class="fa fa-check"></b></i>' +
                        '<span>' + row.name + '</span></td>';
                }
            },
            {
                targets: 8,
                render: function(data, type, row, meta) {
                    return '<img src="./img/ico-detail.png" title="详情" alt="" class="tooltip unitDetail" />' +
                        '<img src="./img/ico-over copy 3.png" alt="" title="删除" class="tooltip unitDel"  />';
                }
            }
        ],
        searching: true,
        ordering: false,
    });
}


//点击checkBox 添加属性
$("#unitTable").on("click", ".checkBox", function() {
    if ($(this).attr('checked')) {
        $(this).find('b').css("display", 'none')
        $(this).removeAttr('checked')
    } else {
        $(this).find('b').css("display", 'block')
        $(this).attr('checked', 'checked')
    }
})

//全选和全部选功能
function allORnot() {
    var num = 0
    var b = 0
    
    $("#unitTable thead").on("click", ".checkBox", function() {
         num = $("#unitTable tbody .checkBox").length
        if ($(this).attr('checked')) {
            $("#unitTable tbody .checkBox").removeAttr("checked")
            $("#unitTable tbody .checkBox b").css("display", 'none')
            $(".del").hide();
        } else {

            $("#unitTable tbody .checkBox").attr("checked", "checked")
            $("#unitTable tbody .checkBox b").css("display", 'block')

            $(".del").show();
            //点击删除
            $(".del").on("click", function() {
                alert("删除事件")
            })
        }
    })

    $("#unitTable tbody").on("click", ".checkBox", function() {
        num = $("#unitTable tbody .checkBox").length
        if (!($(this).attr("checked"))) {
            b++;
        } else {
            b--
        }
        console.log(b)
        if (num == b) {
            $("#unitTable thead .checkBox").attr("checked", 'checked')
            $("#unitTable thead .checkBox b").css("display", 'block')
        } else {
            $("#unitTable thead .checkBox").removeAttr("checked")
            $("#unitTable thead .checkBox b").css("display", 'none')
        }

        //删除按钮的显示与隐藏
        if (b > 1) {
            $(".del").show();
            //点击删除
            $(".del").on("click", function() {
                alert("删除事件")
            })
        } else {
            $(".del").hide();
        }

    })
}

//跳转详情
function hrefUnitDetail() {
    $("#unitTable").on("click",".unitDetail",function () {
        window.location.href = './unitDetail.html'
    })
}
//删除
function unitDel() {
     $("#unitTable").on("click",".unitDel",function () {
       $(".deleteContainer").show()
     })
}
