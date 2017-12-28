$(function() {
    height()
    //关闭汛情回顾
    clisexqhg()
    //打开汛情回顾
    openxqhg()
    //关闭条件筛选设置
    closetjsxsz()
    //关闭条件筛选设置
    opentjsxsz()
    initSwiper()
    dxtjsx()
    //关闭易涝点详情
    closeyldDetail()
    //关闭易涝点
    closeyld()
    //打开易涝点
    openyld()
    //打开易涝点详情
    openyldDetail()
    //非积水警情 警情级别
    jqjbandbq()
    //关闭或者取消添加
    closeOrcancleAdd()
    //显示添加
    showAdd()
    //关闭非积水警情详情
    closefjsjqxq()
    //关闭非积水警情
    closefjsjq()
    //打开非积水警情
    openfjsjq()
    //打开非积水警情详情
    openfjsjqDetail()
    //打开侧边栏
    openXhpgSidebar()
    //关闭侧边栏
    closeXhpgSidebar()
    select('.xqhgContainer .xqhgContWrap .xqhgCont .chooseYear .selectContainer .select', '.xqhgContainer .xqhgContWrap .xqhgCont .chooseYear .selectContainer .selectOption')
})

//关闭汛情回顾
function clisexqhg() {
    $(".xqhgContainer .detailtitle img").on("click", function() {
        $('.xqhgContainer').hide()
    })
}
//打开汛情回顾
function openxqhg() {
    $("#openxqhg").on("click", function() {
        $(this).addClass("now").siblings("li").removeClass('now')
        $('.xqhgContainer').show()



        $(".xqhgfjsjq").hide()

        $(".xqhgyld").hide()
        $(".xqhgylddetail").hide()
        $(".shuaixuanset").hide()

        $(".xqhgfjsjqdetail").hide()
        $("#addbq").hide()
    })
}

//关闭条件筛选设置
function closetjsxsz() {
    $('.shuaixuanset .optionBox .top img').on("click", function() {
        $(".shuaixuanset").hide()
    })
}
//关闭条件筛选设置
function opentjsxsz() {
    $('.opentjsxsz').on("click", function() {
        $(".shuaixuanset").show()
    })
}

//选择条件筛选 多选
function dxtjsx() {
    $(".cont dd").on("click", function() {
        if (typeof($(this).attr("checked")) == "undefined") {
            $(this).find("i").css("background", '#4A90E2')
            $(this).attr("checked", 'true')
        } else if ($(this).attr("checked") == "checked") {
            $(this).find("i").css("background", '#fff')
            $(this).removeAttr("checked")
        }
    })
}


//init swiper
function initSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 11,
        spaceBetween: 20,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
    })

    var mySwiper1 = new Swiper('#bq', {
        slidesPerView: 3,
        spaceBetween: 5,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
    })
    var mySwiper2 = new Swiper('#xczp', {
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
    })


}

//关闭易涝点详情
function closeyldDetail() {
    $(".xqhgylddetail .detailtitle img").on("click", function() {
        $(".xqhgylddetail").hide()
    })
}
//关闭易涝点
function closeyld() {
    $('.xqhgyld .detailtitle img').on("click", function() {
        $(".xqhgyld").hide()
        $(".xqhgylddetail").hide()

    })
}

//打开易涝点
function openyld() {
    $("#openyld").on("click", function() {
        $(this).addClass("now").siblings("li").removeClass('now')
        $(".xqhgyld").show()
        $(".xqhgylddetail").hide()
        $(".shuaixuanset").hide()
        $('.xqhgContainer').hide()
        $(".xqhgfjsjq").hide()
        $(".xqhgfjsjqdetail").hide()
    })
}

//打开易涝点详情
function openyldDetail() {
    $(".openyldDetail").on("click", function() {
        $(".xqhgylddetail").show()
    })
}

//非积水警情 警情级别
function jqjbandbq() {
    $(".jqjbandbq dd").on("click", function() {
        if (typeof($(this).attr("checked")) == "undefined") {
            $(this).find("i").css("background", '#4A90E2')
            $(this).attr("checked", 'true')
        } else if ($(this).attr("checked") == "checked") {
            $(this).find("i").css("background", '#fff')
            $(this).removeAttr("checked")
        }
    })
}

//关闭或者取消添加
function closeOrcancleAdd() {
    $(".cancleAdd").on("click", function() {
        $("#addbq").hide()
    })
    $("#addbq .adBox .top img").on("click", function() {
        $("#addbq").hide()
    })
}

//显示添加
function showAdd() {
    $('.xqhgfjsjq .xqhgfjsjqContainer .xqhgfjsjqCont .jqjbandbq>ul>li .swiper-container .swiper-wrapper .swiper-slide:last-child>img').on("click", function() {
        $("#addbq").show()
    })
}

//关闭非积水警情详情
function closefjsjqxq() {
    $(".xqhgfjsjqdetail .detailtitle img").on("click", function() {
        $(".xqhgfjsjqdetail").hide()
    })
}

//关闭非积水警情
function closefjsjq() {
    $(".xqhgfjsjq .detailtitle img").on("click", function() {
        $(".xqhgfjsjq").hide()
        $(".xqhgfjsjqdetail").hide()

    })
}

//打开非积水警情
function openfjsjq() {
    $('#openfjsjq').on("click", function() {
        $(this).addClass("now").siblings("li").removeClass('now')
        $(".xqhgfjsjq").show()

        $(".xqhgyld").hide()
        $(".xqhgylddetail").hide()
        $(".shuaixuanset").hide()
        $('.xqhgContainer').hide()

        $(".xqhgfjsjqdetail").hide()
        $("#addbq").hide()
    })
}

//打开非积水警情详情
function openfjsjqDetail() {
    $(".openfjsjqDetail").on("click", function() {
        $(".xqhgfjsjqdetail").show()
    })
}

//打开侧边栏
function openXhpgSidebar() {
    $(".mainContainer .sideBarBrand .right").on("click", function() {
        $(".xhpgsidebar").show()
        $(".mainContainer .sideBarBrand").hide()
    })
}

//关闭侧边栏
function closeXhpgSidebar() {
    $(".xhpgsidebar .xhpgtitle span").on("click", function() {
        $(".xhpgsidebar").hide()
        $(".mainContainer .sideBarBrand").show()
    })
}
