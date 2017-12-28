$(function() {
    //initswiper
    initSwiper()
    ssjyl()
    load()
    selected()
    treeview('.treeview-checkable1')
    treeview('.treeview-checkable2')
    select('.fxyjmain .fxyjCont .swiper-container .yjfb .tzyjjb>li .select', '.fxyjmain .fxyjCont .swiper-container .yjfb .tzyjjb>li .selectOption')

})

//initswiper
function initSwiper() {
    mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        el: '.swiper-scrollbar',
        // mousewheelControl: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        onSlideChangeStart: function() {
            $("#contrast li").removeClass('now');
            $("#contrast li").eq(mySwiper.activeIndex).addClass('now');
            mySwiper.scrollbar.updateSize();
        }
    })

    $("#contrast li").on("click", function() {
        $(this).addClass('now').siblings('li').removeClass('now');
        mySwiper.slideTo($(this).index(), 1000, false);
    })
    initBar()
}

//降雨量柱状图
function ssjyl() {
    var myChart = echarts.init(document.getElementById('ssjyl'));
    var option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['降雨量'],
            x: 'left',
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            top: '10%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['二摆渡泵站', '滨江泵站', '头摆渡泵站', '平政桥泵站', '雨水桥泵站', '谷阳路泵站', '丹徒污水厂'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '降雨量',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function selected() {
    $(".jyIfoList li").on("click", function() {
        $(this).find('img').last().show()
        $(this).siblings('li').find('img:last').hide()

    })
}



//跳转
function load() {
    $(".load").on("click", function() {
        window.location.href = 'http://www.weather.com.cn/weather1dn/101010100.shtml'
    })
}

//treeview 
function treeview(tree) {
    function getTvStateData() {
        var defaultData = [{
                text: '智慧调度人员',
                href: '#parent1',
                tags: ['4'],
                state: {
                    checked: false
                },
                nodes: [{
                        text: '胡建',
                        href: '#child1',
                        tags: ['2'],
                    },
                    {
                        text: '曹德胜',
                        href: '#child2',
                        tags: ['0']
                    },
                    {
                        text: '赵宝康',
                        href: '#child3',
                        tags: ['0']
                    }
                ]
            },
            {
                text: '定点定片人员',
                href: '#parent2',
                tags: ['0'],
                nodes: [{
                        text: '胡建',
                        href: '#child1',
                        tags: ['2'],

                    },
                    {
                        text: '赵宝康',
                        href: '#child2',
                        tags: ['0']
                    }
                ]
            },
            {
                text: '泵站工作人员',
                href: '#parent3',
                nodes: [{
                        text: '胡建',
                        href: '#child1',
                        tags: ['2'],

                    },
                    {
                        text: '赵宝康',
                        href: '#child2',
                        tags: ['0']
                    }
                ]
            },
            {
                text: '系统操作人员',
                href: '#parent4',
                tags: ['0']
            },
            {
                text: '抢险队伍',
                href: '#parent5',
                tags: ['0']
            }
        ];

        return defaultData;
    }
    $(function() {
        var $checkableTree = $(tree)
            .treeview({
                data: getTvStateData(), //数据
                showIcon: false,
                showCheckbox: true,
                levels: 1,
                expandIcon: "glyphicon glyphicon-triangle-right",
                collapseIcon: "glyphicon glyphicon-triangle-bottom",
                onNodeChecked: function(event, node) {
                    initBar()

                    //选中节点
                    var selectNodes = getChildNodeIdArr(node); //获取所有子节点
                    if (selectNodes) { //子节点不为空，则选中所有子节点
                        $(tree).treeview('checkNode', [selectNodes, { silent: true }]);
                    }
                    var parentNode = $(tree).treeview("getNode", node.parentId);
                    setParentNodeCheck(node);
                },
                onNodeUnchecked: function(event, node) {
                    initBar()

                    //取消选中节点
                    var selectNodes = getChildNodeIdArr(node); //获取所有子节点
                    if (selectNodes) { //子节点不为空，则取消选中所有子节点
                        $(tree).treeview('uncheckNode', [selectNodes, { silent: true }]);
                    }
                },
                onNodeExpanded: function(event, data) {
                    initBar()
                    // if (data.nodes === undefined || data.nodes === null) {

                    // } else if (data.tags[0] === "2") {
                    //     alert("Tags 2");
                    // } else {
                    //     alert("1111");
                    // }
                }
            });
    });

    function getChildNodeIdArr(node) {
        var ts = [];
        if (node.nodes) {
            for (x in node.nodes) {
                ts.push(node.nodes[x].nodeId);
                if (node.nodes[x].nodes) {
                    var getNodeDieDai = getChildNodeIdArr(node.nodes[x]);
                    for (j in getNodeDieDai) {
                        ts.push(getNodeDieDai[j]);
                    }
                }
            }
        } else {
            ts.push(node.nodeId);
        }
        return ts;
    }

    function setParentNodeCheck(node) {
        var parentNode = $(tree).treeview("getNode", node.parentId);
        if (parentNode.nodes) {
            var checkedCount = 0;
            for (x in parentNode.nodes) {
                if (parentNode.nodes[x].state.checked) {
                    checkedCount++;
                } else {
                    break;
                }
            }
            if (checkedCount === parentNode.nodes.length) {
                $(tree).treeview("checkNode", parentNode.nodeId);
                setParentNodeCheck(parentNode);
            }
        }
    }
}
