$(function() {
    height()
    //关闭仓库添加详情
    closerywuzCKaddDetaile()
    //关闭仓库添加
    closerywuzCKadd()
    //打开仓库添加
    openrywzCKadd()
    //打开仓库添加详情
    openrywuzCKaddDetaile()
    //关闭物资详情
    closerywzwzxq()
    //打开物资详情
    openrywzwzxq()
    //关闭物资领用记录
    closerywzwzlyjl()
    //打开物资领用记录
    openrywzwzlyjl()
    //关闭片区
    closerywzpq()
    //打开片区
    openrywzpq()
    //关闭人员 pannel
    closerypannel()
    //打开人员人员 pannel
    openrypannel()
    //关闭 添加队伍
    closeAdddw()
    //打开添加队伍
    openAdddw()
    //关闭删除队员
    closeremovedy()
    //打开删除队员
    openremovedy()
    //关闭添加人员
    closeAddry()
    //打开添加人员
    openAddry()
    //关闭编辑人员
    closeeditAddry()
    //打开编辑人员
    openeditAddry()
    //打开sidebar
    openrywzSideBar()
    //关闭sidebar
    closerywzSideBar()

    select(".wzmxselect", '.wzmxselecttOption')
    select(".cfddselect", '.cfddselecttOption')
    select(".lysjselect", '.lysjselecttOption')
    select('.rywuzCKaddDetaile .rywuzCKaddDetaileContainer .rywuzCKaddDetaileCont .chooseYear .selectContainer .select', '.rywuzCKaddDetaile .rywuzCKaddDetaileContainer .rywuzCKaddDetaileCont .chooseYear .selectContainer .selectOption')
    select('.dzselect', '.dzselectOption')
})

//关闭仓库添加详情
function closerywuzCKaddDetaile() {
    $(".rywuzCKaddDetaile .detailtitle img").on("click", function() {
        $(".rywuzCKaddDetaile").hide()
    })
    $(".rywuzCKaddDetaile .detailtitle img").on("click", function() {
        $(".rywuzCKaddDetaile").hide()
    })
}

//关闭仓库添加
function closerywuzCKadd() {
    $(".rywuzCKadd .detailtitle img").on("click", function() {
        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
    })
}

//打开仓库添加
function openrywzCKadd() {
    $(".openrywzCKadd").on("click", function() {
        $(".rywuzCKadd").show()

        $(".rywuzCKaddDetaile").hide()
        $(".rywzwzxq").hide()
        $(".rywzwzlyjl").hide()
        $(".rywzpq").hide()
        $(".rywzrypannel").hide()


    })
}

//打开仓库添加详情
function openrywuzCKaddDetaile() {
    $(".openrywuzCKaddDetaile").on("click", function() {
        $(".rywuzCKaddDetaile").show()

    })
}

//关闭物资详情
function closerywzwzxq() {
    $(".rywzwzxq .detailtitle img").on("click", function() {
        $(".rywzwzxq").hide()

    })
}

//打开物资详情
function openrywzwzxq() {
    $("#openrywzwzxq").on("click", function() {
        $(this).addClass('now').siblings('dd').removeClass('now')
        $(".rywzwzxq").show()

        $(".rywzwzlyjl").hide()
        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
        $(".rywzpq").hide()
        $(".rywzrypannel").hide()


    })
}

//关闭物资领用记录
function closerywzwzlyjl() {
    $(".rywzwzlyjl .detailtitle img").on("click", function() {
        $(".rywzwzlyjl").hide()
        $(".rywzrypannel").hide()


    })
}
//打开物资领用记录

function openrywzwzlyjl() {
    $("#openrywzwzlyjl").on("click", function() {
        $(this).addClass('now').siblings('dd').removeClass('now')
        $(".rywzwzlyjl").show()
        $(".rywzwzxq").hide()
        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
        $(".rywzpq").hide()
        $(".rywzrypannel").hide()

    })
}

//关闭片区
function closerywzpq() {
    $(".rywzpq .detailtitle img").on("click", function() {
        $(".rywzpq").hide()
    })
}
//打开片区
function openrywzpq() {
    $(".openrywzpq").on("click", function() {
        $(".rywzpq").show()

        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
        $(".rywzwzxq").hide()
        $(".rywzwzlyjl").hide()

        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
        $(".rywzrypannel").hide()
    })
}


//关闭人员 pannel
function closerypannel() {
    $(".rywzrypannel .detailtitle img").on("click", function() {
        $(".rywzrypannel").hide()
    })
}

//打开人员人员 pannel
function openrypannel() {
    $(".renypannerl dd:not('.duiwu')").on("click", function() {
        $(this).addClass('now').siblings('dd').removeClass('now')
        $(".rywzrypannel").show()
        $(".rywzrypannel .detailtitle h3").text($(this).text())

        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
        $(".rywzwzxq").hide()
        $(".rywzwzlyjl").hide()
        $(".rywzpq").hide()
        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()

    })
}

//关闭 添加队伍
function closeAdddw() {
    $(".addduiwu .adBox .top img").on('click', function() {
        $(".addduiwu").hide()
    })
    $(".cancleAdddw").on('click', function() {
        $(".addduiwu").hide()
    })

}

//打开添加队伍
function openAdddw() {
    $("#adddw").on('click', function() {
        $(".addduiwu").show()
    })
}

//关闭删除队员
function closeremovedy() {
    $(".removesy .adBox .top img").on('click', function() {
        $(".removesy").hide()
    })
    $(".cancleRmovedy").on('click', function() {
        $(".removesy").hide()
    })

}
//打开删除队员
function openremovedy() {
    $(".removedy").on('click', function() {
        $(".removesy").show()
    })
}

//关闭添加人员
function closeAddry() {
    $(".addperson .adBox .top img").on("click", function() {
        $(".addperson").hide()
    })
    $(".cancleAddry").on("click", function() {
        $(".addperson").hide()
    })
}
//打开添加人员
function openAddry() {
    $(".addRY").on("click", function() {
        $(".addperson").show()
    })
}
//
//关闭编辑人员
function closeeditAddry() {
    $(".addperson .adBox .top img").on("click", function() {
        $(".addperson").hide()
    })
    $(".cancleAddry").on("click", function() {
        $(".addperson").hide()
    })
}
//打开编辑人员
function openeditAddry() {
    $(".editdy").on("click", function() {
        $(".addperson").show()
    })
}

//打开sidebar
function openrywzSideBar() {
    $(".mainContainer .sideBarBrand .right").on("click", function() {
        $(".rywzSideBar").show()
        $(".sideBarBrand").hide()

         $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
        $(".rywzwzxq").hide()
        $(".rywzwzlyjl").hide()
        $(".rywzpq").hide()
        $(".rywuzCKadd").hide()
        $(".rywuzCKaddDetaile").hide()
        $(".rywzrypannel").hide()


    })
}
//关闭sidebar
function closerywzSideBar() {
    $(".rywzSideBar .rywztitle span").on("click", function() {
        $(".rywzSideBar").hide()
        $(".sideBarBrand").show()

    })
}
