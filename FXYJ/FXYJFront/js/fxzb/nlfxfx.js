$(function() {
    inithzt()
    height()
    //关闭侧边栏
    closenlfxfxsidebar()
    //打开侧边栏
    opennlfxfxsidebar()
    tabcount('.nlfxfxtabBar', 'now', '.nlfxfxtabcontent')
    select('.nlfxselect', '.nlfxselectOption')
})

//环形图
function inithzt() {
    var hzt = echarts.init(document.getElementById('hzt'));
    var option = {
        color: ['#B23332', '#F6CE49', '#43966A', '#5BBDBF'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['>0.5', '0.3-0.5', '0.1-0.3', '<0.1>']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '>0.5' },
                { value: 310, name: '0.3-0.5' },
                { value: 234, name: '0.1-0.3' },
                { value: 135, name: '<0.1>' }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    hzt.setOption(option);
}


//tab
function tabcount(eleid, activeclass, subareatabcontent) {
    $(eleid + ' li').click(function() {
        var index = $(this).index();
        $(this).addClass(activeclass);
        $(this).siblings('li').removeClass(activeclass)
        $(subareatabcontent).eq(index).show().siblings(subareatabcontent).hide();
        initBar(); //初始化滚动条

        hzt.resize(); //关键步骤
        hzt.setOption(option, true);
    })
}


//关闭侧边栏
function closenlfxfxsidebar() {
    $(".nlfxfxSideBar .nlfxfxtitle span").on("click", function() {
        $(".nlfxfxSideBar").hide()
        $(".sideBarBrand").show()

    })
}
//打开侧边栏
function opennlfxfxsidebar() {
    $(".mainContainer .sideBarBrand .right").on("click", function() {
        $(".nlfxfxSideBar").show()
        $(".sideBarBrand").hide()
    })
}
