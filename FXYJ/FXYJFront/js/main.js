var rmap;

$(function() {
    //初始化地图
    mapInit();

    //打开导航面板
    openNav();
    //关闭导航面板
    closeNav();

    //初始化进入页面
    loadPage("yjzh/jqjk", "operationPanal");


    //导航菜单点击
    $(".nav a").on("click", function() {
        clearMap(); //清空地图
        $(".operationPanal").empty(); //清空页面
        //		$(".operationPanal").html("");
        // inithzt()
        // hzt.resize(); //关键步骤
        // hzt.setOption(option, true);

        var htmlUrl;
        var name = $(this).find('span').text();
        switch (name) {
            case name = "人员物资":
                htmlUrl = "fxzb/rywz";
                break;

            case name = "清淤整改":
                htmlUrl = "fxzb/qyzg";
                break;

            case name = "内涝风险分析":
                htmlUrl = "fxzb/nlfxfx";
                break;

            case name = "防汛预警":
                break;

            case name = "警情监控":
                htmlUrl = "yjzh/jqjk";
                break;

            case name = "警情总结":
                htmlUrl = "yjzh/jqzj";
                break;

            case name = "汛情回顾":
                htmlUrl = "xhpg/xqhg";
                break;

            case name = "易涝点":
                htmlUrl = "xhpg/yld";
                break;

            case name = "非积水警情":
                htmlUrl = "xhpg/fjsjq";
                break;

            case name = "设置":
                break;

        }
        //关闭导航面板
        $(".nav").hide(200);

        if (name == "设置") {
            window.open("html/setup.html", "_self");
        } else if (name == "防汛预警") {
            window.open("html/yjzh/fxyj.html", "_self");
        } else {
            loadPage(htmlUrl, "operationPanal");
        }
    })
})

// 初始化地图
function mapInit() {
    rmap = new RMap.Map('map');
    //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
    rmap.centerZoom(116.390985, 39.906358, 12);
    rmap.showZoomControl({
        bottom: 20,
        right: 20
    });
}
//清空地图
function clearMap() {
    //	rmap.removePoint();
    //	rmap.hidePopWindow();
    rmap.clearMap();
}

//打开导航面板
function openNav() {
    $(".opennav").on("click", function() {
        $(".nav").show(200)
    })
}
//关闭导航面板
function closeNav() {
    $(".header .nav>img").on("click", function() {
        $(".nav").hide(200)
    })
}

//页面拼接
function loadPage(url, divClass) {
    $.ajax({
        type: "get",
        url: "html/" + url + ".html",
        dataType: 'text',
        success: function(data) {
            $("." + divClass).append(data);
        }
    });
}


//环形图
// function inithzt() {
//      hzt = echarts.init(document.getElementById('hzt'));
//      option = {
//         color: ['#B23332', '#F6CE49', '#43966A', '#5BBDBF'],
//         tooltip: {
//             trigger: 'item',
//             formatter: "{a} <br/>{b}: {c} ({d}%)"
//         },
//         legend: {
//             orient: 'vertical',
//             x: 'left',
//             data: ['>0.5', '0.3-0.5', '0.1-0.3', '<0.1']
//         },
//         series: [{
//             name: '访问来源',
//             type: 'pie',
//             radius: ['50%', '70%'],
//             avoidLabelOverlap: false,
//             label: {
//                 normal: {
//                     show: false,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     show: true,
//                     textStyle: {
//                         fontSize: '30',
//                         fontWeight: 'bold'
//                     }
//                 }
//             },
//             labelLine: {
//                 normal: {
//                     show: false
//                 }
//             },
//             data: [
//                 { value: 335, name: '>0.5' },
//                 { value: 310, name: '0.3-0.5' },
//                 { value: 234, name: '0.1-0.3' },
//                 { value: 135, name: '<0.1' }
//             ]
//         }]
//     };
//     // 使用刚指定的配置项和数据显示图表。
//     hzt.setOption(option);
// }
