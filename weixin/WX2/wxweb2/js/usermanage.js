$(function() {


    //动态设置表格页加载数量
    page = Math.floor($(".usermanaContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".usermanaContainer").height() / 41) - 1;
        $("#userTable").yhhDataTable('refreshTable')
    })
    //初始化用户表格
    initUserTable()
    //打开编辑
    openuserEdit()
    //取消或者关闭编辑
    closeuserEdit()

    //打开用户删除
    openUserDel()
    //取消或者 关闭 删除
    closeUserDel()

    //全选和反选
    allORnot()

    //模拟title
    hovermn("#userTable")

    //select
    select(".cityselect", '.cityselectOption')
    select(".companyselect", '.companyselectOption')
    select(".startDateselect", '.startDateselectOption')
    select(".roleselect", '.roleselectOption')

})


//初始化用户表格
function initUserTable() {
    $('#userTable').DataTable({
        "bProcessing": true,
        "bLengthChange": false,
        "iDisplayLength": page, //默认显示的记录数  
        "bAutoWidth": false, //是否自适应宽度  
        "bScrollCollapse": true, //是否开启DataTables的高度自适应，当数据条数不够分页数据条数的时候，插件高度是否随数据条数而改变  
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
        ajax: './user.json',
        columns: [
            { data: "name" },
            { data: "wxnumber" },
            { data: "email" },
            { data: "unit" },
            { data: "department" },
            { data: "duty" },
            { data: "role" },
            { data: 'subpart' },
            { data: "phone" },
            { data: "regisDate" }
        ],
        columnDefs: [
        {
            targets: 0,
            render: function(data, type, row, meta) {
                return '<td><i class="checkBox"><b class="fa fa-check"></b></i>'+
                '<span>'+row.name+'</span></td>';
            }
        },
        {
            targets: 10,
            render: function(data, type, row, meta) {
                return '<img src="./img/ico-edit.png" title="编辑" alt="" class="tooltip userEdit" />' +
                    '<img src="./img/ico-over copy 3.png" alt="" title="删除" class="tooltip userDel"  />';
            }
        }
        ],
        searching: true,
        ordering: false,
    });
}

//打开编辑
function openuserEdit() {
    $("#userTable tbody").on("click", ".userEdit", function() {
        $(".editContainer").show()
    })
}

//取消或者关闭编辑
function closeuserEdit() {
    $(".editContainer .editContent .title>img").on("click", function() {
        $(".editContainer").hide()
    })
    $(".cancleEdit").on("click", function() {
        $(".editContainer").hide()
    })

}

//打开用户删除
function openUserDel() {
    $("#userTable tbody").on("click", ".userDel", function() {
        $(".deleteContainer").show()
    })
}

//取消或者 关闭 删除
function closeUserDel() {
    $('.deleteContainer .deleteContent .title>img').on("click", function() {
        $(".deleteContainer").hide()
    })
    $(".cancleDel").on("click", function() {
        $(".deleteContainer").hide()
    })

}

//点击checkBox 添加属性
$("#userTable").on("click", ".checkBox", function() {
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
    $("#userTable thead").on("click", ".checkBox", function() {
        if ($(this).attr('checked')) {
            $("#userTable tbody .checkBox").removeAttr("checked")
            $("#userTable tbody .checkBox b").css("display", 'none')
            $(".del").hide();
        } else {
            $("#userTable tbody .checkBox").attr("checked", "checked")
            $("#userTable tbody .checkBox b").css("display", 'block')

            $(".del").show();
            //点击删除
            $(".del").on("click", function() {
                alert("删除事件")
            })
        }
    })

    $("#userTable tbody").on("click", ".checkBox", function() {
        num = $("#userTable tbody .checkBox").length
        if (!($(this).attr("checked"))) {
            b++;
        } else {
            b--
        }
        if (num == b) {
            $("#userTable thead .checkBox").attr("checked", 'checked')
            $("#userTable thead .checkBox b").css("display", 'block')
        } else {
            $("#userTable thead .checkBox").removeAttr("checked")
            $("#userTable thead .checkBox b").css("display", 'none')
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
