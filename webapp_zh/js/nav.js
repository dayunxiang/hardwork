$(function() {
    data = [{
            "one": "巡检管理",
            "sub": [{
                    "title": "任务面板",
                    "href": "../task/taskPanel.html"
                },
                {
                    "title": "巡检统计",
                    "href": "../task/taskStats.html"
                }

            ]
        },
        {
            "one": "维修任务管理",
            "sub": [{
                    "title": "维修管理",
                    "href": "../repair/repairManage.html"
                },
                {
                    "title": "维修统计",
                    "href": "../repair/repairStats.html"
                }
            ]
        },
        {
            "one": "配置管理",
            "sub": [
            {
                    "title": "区域配置",
                    "href": "../config/regionalConfig.html"
                },
                 {
                    "title": "故障信息配置",
                    "href": "../config/faultInforConfig.html"
                },
                
                
            ]
        }
    ]

    // nav收缩展开
    $('.sideBar').on('click', ".sideBar-item>a", function() {
        if (!$('.sideBar').hasClass('sideBar-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.sideBar-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('sideBar-show').siblings('li').removeClass('sideBar-show');
            } else {
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.sideBar-item.sideBar-show').removeClass('sideBar-show');
            }
        }
    });
    //nav-mini切换
    $('.topBanner').on('click', ".opennav", function() {
        $(this).toggleClass('opennavToggle')

        if (!$('.sideBar').hasClass('sideBar-mini')) {
            $('.sideBar-item.sideBar-show').removeClass('sideBar-show');
            $('.sideBar-item').children('ul').removeAttr('style');
            $('.sideBar').addClass('sideBar-mini');
            $(".contentMain").css("margin-left", '60px')
        } else {
            $('.sideBar').removeClass('sideBar-mini');
            $(".contentMain").css("margin-left", '250px')

        }
    });
    navpj()
    topBannerpj()

})
//topBannerpj
function topBannerpj() {
    var topBannerStr = '<a href="" class="logo">' +
        '<img src="../img/logo.png" alt="">' +
        '</a>' +
        '<h1>巡查养护管理系统</h1>' +
        '<img src="../img/ico-menu.png" alt="" class="opennav">'
    $(".topBanner").html(topBannerStr)
}
//navpj
function navpj() {
    var str = ''
    $.each(data, function(index, item) {
        str += ' <li class="sideBar-item">' +
            '<a href="javascript:;"> <img src="../img/repair.png" alt="" ><span>' + item.one + '</span><i class="fa fa-angle-right sideBar-more"></i></a>' +
            '<ul>' +
            '<li><a href="'+item.sub[0].href+'"><span>' + item.sub[0].title + '</span></a></li>' +
            '<li><a href="'+item.sub[1].href+'"><span>' + item.sub[1].title + '</span></a></li>' +
            '</ul>' +
            '</li>'
    })
    $(".sideBar").html(str)
}
