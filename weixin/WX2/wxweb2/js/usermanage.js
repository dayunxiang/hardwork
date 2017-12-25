$(function() {
    //初始化用户表格
    initUserTable()
    //动态设置表格页加载数量
    page = Math.floor($(".usermanaContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".usermanaContainer").height() / 41) - 1;
    })

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



}
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
                return '<tr><td><i class="checkBox"><b class="fa fa-check"></b></i>' + d.name + '</td><td>' + d.wxnumber + '</td><td>' + d.email + '</td><td>' + d.unit + '</td><td>' + d.department + '</td><td>' + d.duty + '</td><td>' + d.role + '</td><td>' + d.subpart + '</td><td>' + d.phone + '</td><td>' + d.regisDate + '</td><td><img src="./img/ico-edit.png" alt="" title="编辑" class="userEdit" /><img src="./img/ico-over copy 3.png" alt="" title="删除"  class="userDel" /></td></tr>';
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
    // console.log($(""))
    //chongzhiquanxuan
    $(".paginate-box>a").on("click", function() {
        console.log(111)

        $("#userTable thead .checkBox").removeAttr('checked')
        $("#userTable thead .checkBox b").css("display", 'none')
        num = 0;
        b = 0;
    })
    $(".paginate-num-btn-group").on("click", 'a', function() {
        console.log(222)

        $("#userTable thead .checkBox").removeAttr('checked')
        $("#userTable thead .checkBox b").css("display", 'none')
        num = 0;
        b = 0;

    })
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
var num = 0
var b = 0

function allORnot() {
    $("#userTable thead").on("click", ".checkBox", function() {
        if ($(this).attr('checked')) {
            $("#userTable tbody .checkBox").removeAttr("checked")
            $("#userTable tbody .checkBox b").css("display", 'none')
        } else {
            $("#userTable tbody .checkBox").attr("checked", "checked")
            $("#userTable tbody .checkBox b").css("display", 'block')
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
    })
}
