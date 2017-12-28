$(function() {
    height()
    //关闭清淤整改第一菜单
    closeqyzg()
    //打开清淤整改第一菜单
    openqyzg()
    //关闭侧边栏
    closeqyzgsidebar()
    //打开侧边栏
    openqyzgsidebar()
})

//关闭清淤整改第一菜单
function closeqyzg() {
    $(".qyzgbzwxbyqy .qyzgdetailtitle img").on("click", function() {
        $(".qyzgbzwxbyqy").hide()
    })
}
//打开清淤整改第一菜单
function openqyzg() {
    $(".qyby dd").each(function(index, item) {
        $(item).on("click", function() {
            $(this).attr("index", index)
            $(this).addClass("now").siblings('dd').removeClass('now');
            $(".qyzgbzwxbyqy").show()
            $(".qyzgbzwxbyqy .qyzgdetailtitle h3").text($(this).text())
            if ($(this).attr("index") == '0') {
                $(".qyzgbzwxbyqy .qyzgContainer .qyzgCont .qyzgContTop span:last-child").text("添加泵站")
                $(".qyzgbzwxbyqy .qyzgContainer .qyzgCont .qyzgContTop span:last-child").attr('id', "addbz")
                $('.qyzgbzwxbyqy .qyzgContainer .qyzgCont table tr th:first-child').text("泵站名称")
                $('.qyzgbzwxbyqy .qyzgContainer .qyzgCont table tr td a').attr('id', "bzcz")
            } else if ($(this).attr("index") == '1') {
                $(".qyzgbzwxbyqy .qyzgContainer .qyzgCont .qyzgContTop span:last-child").text("添加片区")
                $(".qyzgbzwxbyqy .qyzgContainer .qyzgCont .qyzgContTop span:last-child").attr('id', "addpq")

                $('.qyzgbzwxbyqy .qyzgContainer .qyzgCont table tr th:first-child').text("片区名称")
                $('.qyzgbzwxbyqy .qyzgContainer .qyzgCont table tr td a').attr('id', "pqcz")


            } else if ($(this).attr("index") == '2') {
                $(".qyzgbzwxbyqy .qyzgContainer .qyzgCont .qyzgContTop span:last-child").text("添加设施")
                $(".qyzgbzwxbyqy .qyzgContainer .qyzgCont .qyzgContTop span:last-child").attr('id', "addss")

                $('.qyzgbzwxbyqy .qyzgContainer .qyzgCont table tr th:first-child').text("设施名称")
                $('.qyzgbzwxbyqy .qyzgContainer .qyzgCont table tr td a').attr('id', "sscz")


            }
        })
    })

}

//关闭侧边栏
function closeqyzgsidebar() {
    $(".qyzgSideBar .qyzgtitle span").on("click", function() {
        $(".qyzgSideBar").hide()
        $(".sideBarBrand").show()
    })
}
//打开侧边栏
function openqyzgsidebar() {
    $(".mainContainer .sideBarBrand .right").on("click", function() {
        $(".qyzgSideBar").show()
        $(".sideBarBrand").hide()

    })
}
