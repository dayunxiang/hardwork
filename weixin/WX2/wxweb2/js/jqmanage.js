$(function() {
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    //select
    select(".wtlxselect", '.wtlxselectOption')
    select(".ssqyselect", '.ssqyselectOption')
    select(".rwztselect", '.rwztselectOption')


    //动态设置表格页加载数量
    page = Math.floor($(".jqmanaContainer").height() / 41) - 1;
    $(window).on("resize", function() {
        page = Math.floor($(".jqmanaContainer").height() / 41) - 1;
        // $("#jqTable").yhhDataTable('refreshTable')
    })

    //初始化用户表格
    initjqTable()
      $("#jqTable_wrapper").css({
        'min-height': (h - 64-24-30-70-10-120-60) + "px"
    });
    //模拟title
    hovermn("#jqTable")

    $('#demo-1').fdatepicker({
        format: 'yyyy-mm-dd'
    });
    $('#demo-2').fdatepicker({
        format: 'yyyy-mm-dd'
    });

    //打开详情
    openJqDetail()

    //关闭或取消分配
    closeFp()
    //打开任务分配
    openFpTask()
//关闭或取消结束任务
 closeTaskEnd()
//打开任务分配
 openTaskEnd()

 /*字数限制*/  
 textnumxz()

})


//初始化用户表格
function initjqTable() {
    $('#jqTable').DataTable({
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
        ajax: './jq.json',
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
            { data: "regisDate" },
            { data: "photoNum" }
        ],
        columnDefs: [{
            targets: 11,
            title: "操作",
            render: function(data, type, row, meta) {
                return '<img src="./img/ico-detail.png" title="详情" alt="" class="tooltip jqDetail" />' +
                    '<img src="./img/ico-push.png" alt="" title="分配任务" class="tooltip jqrwfp"  style="display:' + row.isFp + '"/>' +
                    '<img src="./img/Slice 2.png" alt="" title="结束任务" class="tooltip jqend"  />';
            }
        }],
        searching: true,
        ordering: false,
    });
}

//打开详情
function openJqDetail() {
    $("#jqTable").on("click", ".jqDetail", function() {
        window.location.href = './jqdclDetail.html'
    })
}

//关闭或取消分配
function closeFp() {
    $(".taskContainer .taskContent .title>img").on("click", function() {
        $(".taskContainer").hide()
    })
    $(".cancleFpTask").on("click", function() {
        $(".taskContainer").hide()
    })
}

//打开任务分配
function openFpTask() {
    $("#jqTable").on("click", ".jqrwfp", function() {
        $(".taskContainer").show()
    })
}

//关闭或取消结束任务
function closeTaskEnd() {
    $(".taskEndContainer .taskEndContent .title>img").on("click", function() {
        $(".taskEndContainer").hide()
    })
    $(".cancleEndTask").on("click", function() {
        $(".taskEndContainer").hide()
    })
}

//打开任务分配
function openTaskEnd() {
    $("#jqTable").on("click", ".jqend", function() {
        $(".taskEndContainer").show()
    })
}

 /*字数限制*/  
 function textnumxz() {
      $("#area").on("input propertychange", function() {  
        var $this = $(this),  
            _val = $this.val(),  
            count = "";  
        if (_val.length > 200) {  
            $this.val(_val.substring(0, 200));  
        }  
        count = $this.val().length +'/200';  
        $("#count").text(count);  
    });  
 }
//search 添加 按钮
$("#jqTable_filter").append("<img src='img/Slice.png' alt='' />")
