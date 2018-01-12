$(function() {
    var h = window.innerHeight
    var deviceInfoTop = $(".deviceInfoTop").height()
    var subdeviceInfoTabContent = h - deviceInfoTop + "px";
    $(".subdeviceInfoTabContent").css("height", subdeviceInfoTabContent)
    var jzshow = $(".jzshow").height()
    var subdeviceInfoTabContent = $(".subdeviceInfoTabContent").height()
    var zw = $('.zw').height() + 100
    var deviceInfoChart = subdeviceInfoTabContent - jzshow - zw + "px"
    $("#deviceInfoChart").css("height", deviceInfoChart)
    tabcount(".deviceInfoTab", '.subdeviceInfoTabContent', 'active')

    initChart()


 //跳转至详情
   hrefPage(".content",'deviceMapIntro')
    
})


//tab
function tabcount(eleid, subcontent, activeclass) {
    $(eleid + ' li').click(function() {
        var index = $(this).index();
        $(this).find('a').addClass(activeclass);
        $(this).siblings('li').find("a").removeClass(activeclass)
        $(subcontent).eq(index).show().siblings(subcontent).hide();
        myChart.resize(); //关键步骤
        myChart.setOption(option, true);
    })


}


//biao
function initChart() {
    myChart = echarts.init(document.getElementById('deviceInfoChart'))
    option = {
        color: ['rgba(20,170,255,.37)'],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '0%'
        },
        xAxis: [{
            axisLabel: {
                show: false,
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
            name: '',
            type: 'line',
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [10, 12, 21, 54, 60, 80, 71, 30, 40, 50, 60, 70]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
