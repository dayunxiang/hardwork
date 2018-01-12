$(function() {

    setNiceScroll(".optionSearch")
    initCountMap()
    initChart()
    tabcount("#countTabChange", 'active')
    showSearchOption('.countoption li')
})


function initCountMap() {
    //初始化地图，默认地图为在线高德地图
    var rmap = new RMap.Map('countMap');
    //以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
    rmap.centerZoom(116.390985, 39.906358, 12);
}


//biao
function initChart() {
    myChart = echarts.init(document.getElementById('countChart'))
    option = {
        color: ['rgba(20,170,255,.37)', 'rgba(81,226,193,.37)'],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '10%',
            top: '5%'
        },
        xAxis: [{
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: '#8BA1B8'
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#E7F3F5', //左边线的颜色
                    width: '2' //坐标线的宽度
                }
            },
            type: 'category',
            boundaryGap: false,
            show: true,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            show: false,
            type: 'value'
        }],
        series: [{
                name: '堵塞漫溢',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [10, 12, 21, 54, 260, 830, 710, 30, 40, 50, 60, 70]
            },
            {
                name: '井盖丢失破损',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [30, 182, 434, 791, 390, 30, 10, 80, 90, 120, 200, 30]
            },
            {
                name: '违规事件',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [1320, 1132, 801, 234, 120, 90, 20, 80, 90, 50, 80, 100]
            },
            {
                name: '其他',
                type: 'line',
                smooth: true,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [1320, 1132, 601, 234, 120, 90, 20, 60, 150, 350, 900, 20]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//滚动条
function setNiceScroll(containerClass1) {
    $(containerClass1).niceScroll({
        cursorcolor: "#dfdfdf",
        autohidemode: false,
        // cursorborderradius: 4,
        background: '#f8f8f8',
        cursorminheight: 32,
        // disableoutline: true,
    }).show();
    $(containerClass1).niceScroll({
        cursorcolor: "#dfdfdf",
        autohidemode: false,
        // cursorborderradius: 4,
        background: '#f8f8f8',
        cursorminheight: 32,
        // disableoutline: true,
    }).resize();
}

//tab
function tabcount(eleid, activeclass) {
    $(eleid + ' li').click(function() {
        var index = $(this).index();
        $(this).find('a').addClass(activeclass);
        $(this).siblings('li').find("a").removeClass(activeclass)
        $('.tabcontent').eq(index).show().siblings('.tabcontent').hide();
        myChart.resize(); //关键步骤
        myChart.setOption(option, true);
    })

    if($("#zs_tabMap").css("display") == 'block') {
        $('.cazResult').show()
    }else if($("#zs_tabMap").css("display") == 'none') {
 $('.cazResult').hide()
    }
}

