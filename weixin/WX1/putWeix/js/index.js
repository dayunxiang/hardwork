$(function() {
    $(".role").on("click", function() {
        $(".userInfo").toggle()
    });

    tab();
    
    userSearch()


})
//tab切换
function tab() {
    var $tab_li = $(".tabHeader ul li")
    $tab_li.click(function() {
        var index = $tab_li.index(this);
        var curr = $tab_li.filter(".active");
        var currIndex = $tab_li.index(curr);

        if (index != currIndex) {
            curr.removeClass('active');
            $(".tabCon").eq(currIndex).hide();

            $(this).addClass("active")
            $(".tabCon").eq(index).show()

            if (index == 1) {
                myChart.resize(); //关键步骤
                myChart.setOption(option, true);
            }

        }
    })
}

//图表
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '人数',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 52, 200, 334, 390, 330]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



//图表点击查询
function userSearch() {
    
    $("#userSearch").find('button').on('click', function() {
        var cities = []
    var registerTime = $("#registerTime").find('option:selected').text()
    if(registerTime == '全部') {
        registerTime = -1
    }
    var company = $("#companyListUser").find('option:selected').text()
    $("#userCityPicker").find('select').each(function(index, item) {
        cities.push($(item).val())
    })
        $.ajax({
            type:'get',
            // url:'http://47.95.1.140/wx/webapi/GetUserByCityAndCompanyAndYear?city='+cities[2]+'&province='+cities[0]+'&companyName=清控人居&year='+registerTime,
            url:'http://47.95.1.140/wx/webapi/GetUserByCityAndCompanyAndYear?city=%E6%9C%9D%E9%98%B3&province=%E5%8C%97%E4%BA%AC&companyName=%E6%B8%85%E6%8E%A7%E4%BA%BA%E5%B1%85&year=-1',
            dataType:'json',
            success:function (data) {
                data = JSON.parse(data)
                 var cdate, myDate;
                 $.each(data,function (index,item) {
                console.log(item)

                      cdate = item.Date;
                        myDate = new Date(cdate).getMonth() + 1;
                        console.log(cdate)
                 })
            }
        })

    })
}
