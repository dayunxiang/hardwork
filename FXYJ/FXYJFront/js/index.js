$(function() {
		//初始化地图，默认地图为在线高德地图
		initMap()
			//select
		select('.swiper-container .swiper-slide .qingyucard .main .timeOption .select', '.swiper-container .swiper-slide .qingyucard .main .timeOption .selectOption')
			//swiper
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			mousewheelControl: true,
			direction: 'vertical',
			// loop: true,
			onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
				swiperAnimateCache(swiper); //隐藏动画元素 
				swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd: function(swiper) {
				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			}
		});
		//防汛人员环状图
		fxren()
			//防汛物资环状图
		fxwu()
			//xunqing
		xunqing()
			//jingqing
		jingqing()
			//tab
		tabcount(".changeBar", 'active', '.changeContentSub')

	})
	//初始化地图，默认地图为在线高德地图
function initMap() {
	//初始化地图，默认地图为在线高德地图
	var qingyumap = new RMap.Map('qingyumap');
	var zhihuimap = new RMap.Map('zhihuimap');
	var yilaomap = new RMap.Map('yilaomap');
	var zhenggaimap = new RMap.Map('zhenggaimap');
	var fengxianmap = new RMap.Map('fengxianmap');
	//以116.390985, 39.906358（天安门广场）为中心点坐标，地图缩放到12级
	qingyumap.centerZoom(116.390985, 39.906358, 12);
	zhihuimap.centerZoom(116.390985, 39.906358, 12);
	yilaomap.centerZoom(116.390985, 39.906358, 12);
	zhenggaimap.centerZoom(116.390985, 39.906358, 12);
	fengxianmap.centerZoom(116.390985, 39.906358, 12);
}

//防汛人员环状图
function fxren() {
	var myChart = echarts.init(document.getElementById('fxren'));
	var option = {
		color: ['rgba(67,136,236,1)', 'rgba(181,83,217,1)', 'rgba(255,192,41,1)', 'rgba(255,143,0,1)', 'rgba(0,211,116,1)'],

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},

		series: [{
			name: '防汛人员统计',
			type: 'pie',
			radius: ['35%', '65%'],
			itemStyle: {
				normal: {
					label: {
						show: true,
						textStyle: {
							fontSize: "0.18rem"
						},
						formatter: function(val) { //让series 中的文字进行换行
							return val.name + ": " + val.value;
						}
					},
					title: {
						text: '防汛人员统计'
					},
					labelLine: {
						show: true,

					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,

				}
			},
			data: [

				{
					value: 48,
					name: '定点定片人员'
				}, {
					value: 3,
					name: '系统操作人员'
				}, {
					value: 42,
					name: '泵站工作人员'
				}, {
					value: 11,
					name: '指挥调度人员'
				},

				{
					value: 162,
					name: '抢险队伍'
				},

			]
		}],
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
//防汛物资环状图
function fxwu() {
	var myChart = echarts.init(document.getElementById('fxwu'));
	var option = {
		color: ['rgba(105,125,201,1)', 'rgba(249,179,72,1)', 'rgba(176,224,126,1)', 'rgba(225,108,77,1)', 'rgba(30,195,146,1)'],

		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},

		series: [{
			name: '防汛人员统计',
			type: 'pie',
			radius: ['35%', '65%'],
			itemStyle: {
				normal: {
					label: {
						show: true,
						textStyle: {
							fontSize: ".18rem"
						},
						formatter: function(val) { //让series 中的文字进行换行
							return val.name + ": " + val.value;
						}
					},
					title: {
						text: '防汛人员统计'
					},
					labelLine: {
						show: true,

					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,

				}
			},
			data: [

				{
					value: 2,
					name: '运输车'
				}, {
					value: 3,
					name: '工具车'
				}, {
					value: 2,
					name: '挖掘机'
				}, {
					value: 2,
					name: '30kw发电机'
				},

				{
					value: 5,
					name: '防汛抢险车'
				},

			]
		}],
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}

function xunqing() {
	var myChart = echarts.init(document.getElementById('xunqing'));
	var option = {
		color: ['rgba(255,79,45,1)', 'rgba(245,166,35,1)', 'rgba(245,209,35,1)', 'rgba(30,144,228,1)'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['红色预警', '橙色预警', '黄色预警', '蓝色预警']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value'
		},
		yAxis: {
			type: 'category',
			data: ['2013', '2014', '2015', '2016', '2017']
		},
		series: [{
			name: '红色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight',
					textStyle: {
						fontSize: "0.18rem"
					},
				}
			},
			data: [320, 302, 301, 334, 390]
		}, {
			name: '橙色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [120, 132, 101, 134, 90]
		}, {
			name: '黄色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [220, 182, 191, 234, 290]
		}, {
			name: '蓝色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [150, 212, 201, 154, 190]
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}

function jingqing() {
	var myChart = echarts.init(document.getElementById('jingqing'));
	var option = {
		color: ['rgba(255,79,45,1)', 'rgba(245,166,35,1)', 'rgba(245,209,35,1)', 'rgba(30,144,228,1)'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['红色预警', '橙色预警', '黄色预警', '蓝色预警']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value'
		},
		yAxis: {
			type: 'category',
			data: ['2013', '2014', '2015', '2016', '2017']
		},
		series: [{
			name: '红色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [320, 302, 301, 334, 390]
		}, {
			name: '橙色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [120, 132, 101, 134, 90]
		}, {
			name: '黄色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [220, 182, 191, 234, 290]
		}, {
			name: '蓝色预警',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [150, 212, 201, 154, 190]
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}