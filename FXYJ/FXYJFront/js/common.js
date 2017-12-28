$(function() {
    height()
    $(window).on("resize", function() {
        height()
    })

})

// 设置高度
function height() {
    var whdef = 100 / 1618; // 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight; // 当前窗口的高度
    var wW = window.innerWidth; // 当前窗口的宽度
    var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


    //login
    $(".wrap").css({
        "height": (h) + "px",
        "width": (w) + "px"
    })
    //index
    $(".wuzitongji").css({
        "height": (h - 66 - 45) + "px",
        "width": (w - 30) + "px"
    })
    $(".wuzitongji .main").css({
        "height": (h - 66 - 75) + "px",
        "width": (w - 30) + "px"
    })
    $("#fxren").css({
        "height": (h - 66 - 75 - 80) + "px",
        "width": ((w - 30) / 2) + "px"
    })
    $("#fxwu").css({
        "height": (h - 66 - 75 - 80) + "px",
        "width": ((w - 30) / 2) + "px"
    })

    $(".xunjingqingtongji").css({
        "height": (h - 66 - 45) + "px",
        "width": (w - 30) + "px"
    })
    $(".xunjingqingtongji .main").css({
        "height": (h - 66 - 75) + "px",
        "width": (w - 30) + "px"
    })
    $("#xunqing").css({
        "height": (h - 66 - 75 - 80) + "px",
        "width": ((w - 30) / 2) + "px"
    })
    $("#jingqing").css({
        "height": (h - 66 - 75 - 80) + "px",
        "width": ((w - 30) / 2) + "px"
    })

    $(".xitongjianjie").css({
        "height": (h - 66 - 30) + "px",
        "width": (w - 30) + "px"
    })
    $(".xitongjianjie .intro").css({
        "height": (h - 66 - 30) + "px",
        "width": (w - 30 - 60) / 3 * 2 + "px"
    })
    $(".xitongjianjie .weather").css({
        "height": (h - 66 - 30) + "px",
        "width": (w - 30 - 60) / 3 + "px"
    })
    $(".xitongjianjie .intro .intromain").css({
        "height": (h - 66 - 30 - 40) + "px",
        "width": (w - 30 - 60) / 3 * 2 + "px"
    })
    $(".xitongjianjie .weather .weathermain").css({
        "height": (h - 66 - 30 - 40) + "px",
        "width": (w - 30 - 60) / 3 + "px"
    })

    //警情监控
    $(".mainContainer").css({
        "height": h + "px",
        "width": w + "px"
    })
    $(".photoyl").css({
        "height": h + "px",
        "width": w + "px"
    })
    $('.jqclpd').css({
        "height": h + "px",
        "width": w + "px"
    })
    $(".zbfx").css({
        "height": (h - 66 - 71 - 9 - 5) + "px"
    })
    $(".jqcl").css({
        "height": (h - 66 - 71 - 9 - 5) + "px"
    })
    $(".gdxq").css({
        "height": (h - 66 - 71 - 9) + "px"
    })
    $(".jqlr").css({
        "height": (h - 66 - 71 - 9 - 5) + "px"
    })
    $(".mainContainer .sideBar").css({ "height": (h - 66) + "px" })
    $(".mainContainer .sideBar .tabContContainer").css({
        "height": (h - 66 - 71 - 41 - 5) + "px"
    })
    $(".mainContainer .sideBar .tabContContainer .tabcontent").css({
        "height": (h - 66 - 71 - 41 - 9 - 5) + "px"
    })
    $(".mainContainer .sideBar .tabContContainer .tabcontent .shistatus").css({
        "height": (h - 66) + "px"
    })
    $(".mainContainer .sideBar .tabContContainer .tabcontent .shistatus .subcontent").css({
        "height": (h - 66 - 73 - 9 - 5) + "px"
    })

    $(".fxdDetail").css({
        "height": (h - 66) + "px",
        "width": (w - 300) + "px"
    })
    $(".fxdDetail .detailContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": (w - 300) + "px"
    })
    $(".header .nav").css({
        "height": (h - 66) + "px",
        "width": w + "px"
    })

    $(".tabContContainer .tabcontent .yewei").css({
        "height": (h - 66) + "px"
    })
    $(".yeweicontent").css({
        "height": (h - 66 - 73 - 9 - 5) + "px"
    })

    $(".yeweiDetail").css({
        "height": (h - 66) + "px",
        "width": (w - 300 - 300) + "px"
    })
    $(".yeweidetailCont").css({
        "height": (h - 66 - 73 - 9 - 5) + "px"
    })
    $(".tabContContainer .tabcontent  .video").css({
        "height": (h - 66) + "px"
    })
    $(".videoCont").css({
        "height": (h - 66 - 73 - 9 - 5) + "px"
    })
    $(".videoDetail").css({
        "height": (h - 66) + "px",
        "width": (w - 300 - 300) + "px"
    })
    $(".vediodetailCont").css({
        "height": (h - 66 - 73 - 9 - 5) + "px"
    })

    $(".tabContContainer .tabcontent  .bufang").css({
        "height": (h - 66) + "px"
    })
    $(".bufangCont").css({
        "height": (h - 66 - 73 - 9 - 5) + "px"
    })
    $(".bufangDetail").css({
        "height": (h - 66) + "px",
        "width": (w - 300 - 300) + "px"
    })
    $(".bufangdetailCont").css({
        "height": (h - 66 - 73 - 9 - 5) + "px"
    })




    //警情总结
    $(".jqzjsideBar").css({ "height": (h - 66) + "px" })
    $(".mainContainer .jqzjsideBar .jqzjtabContContainer").css({
        "height": (h - 66 - 66 - 60 - 37 - 5) + "px"
    })
    $(".mainContainer .jqzjsideBar .jqzjtabContContainer .jqzjtabcontent").css({
        "height": (h - 66 - 66 - 60 - 37 - 9 - 5) + "px"
    })
    $(".mainContainer .dclDetail").css({
        "height": (h - 66) + "px",
        "width": (w - 300) + "px"
    })
    $(".mainContainer  .dclDetail .detailContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": (w - 300) + "px"
    })

    $(".mainContainer  .dclfenlei").css({
        "height": (h - 66) + "px"
    })
    $(".mainContainer  .dclfenlei .subcontent").css({
        "height": (h - 66 - 71 - 9 - 5) + "px"
    })
    $(".addjqzjreport").css({
        "height": (h - 66) + "px",
        "width": (w - 300) + "px"
    })
    $(".addjqzjcont").css({
        "height": (h - 66 - 71 - 9 - 5) + "px",
        "width": (w - 300) + "px"
    })

    //防汛预警
    $(".fxyjmain").css({
        "height": h + "px",
        "width": w + "px"
    })
    $(".fxyjCont").css({
        "height": (h - 66 - 50) + "px",
        "width": w + "px"
    })
    $(".fxyjCont .swiper-slide").css({
        "height": (h - 66 - 50) + "px",
        "width": (w) + "px"
    })
    $(".fxbs").css({
        "height": (h - 66 - 50) + "px",
        "width": (w) + "px"
    })
    $(".fxbscontainer").css({
        "height": (h - 66 - 50) + "px",
        "width": (w) + "px"
    })

    //讯后评估
    $(".xhpgsidebar").css({
        "height": (h - 66) + "px",

    })
    $(".xqhgContainer").css({
        "height": (h - 66) + "px",
        "width": (w - 300) + "px"
    })
    $(".xqhgContainer .xqhgContWrap").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": (w - 300) + "px"
    })
    $(".xqhgyld").css({
        "height": (h - 66) + "px"
    })
    $(".yldscrollcontainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px"
    })
    $(".shuaixuanset").css({
        "height": (h) + "px",
        "width": (w) + "px"
    })
    $(".optionBox").css({
        "width": (w - 20) + "px"
    })
    $(".xqhgylddetail").css({
        "height": (h - 66) + "px",
        "width": (w - 300 - 300) + "px"
    })
    $(".xqhgylddetailContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": (w - 300 - 300) + "px"
    })

    $(".xqhgfjsjq").css({
        "height": (h - 66) + "px"
    })
    $(".xqhgfjsjqContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",

    })
    $(".xqhgfjsjqdetail").css({
        "height": (h - 66) + "px",
        "width": (w - 300 - 300) + "px"
    })
    $(".xqhgfjsjqdetailContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": (w - 300 - 300) + "px"
    })
    $("#addbq").css({
        "height": (h) + "px",
        "width": (w) + "px"
    })

    //人员物资
    $(".rywzSideBar").css({
        "height": (h - 66) + "px"

    })
    $(".rywzContaner").css({
        "height": (h - 66 - 72 - 9) + "px"
    })
    $(".cknumberContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": 300 + "px"
    })
    $(".rywuzCKadd").css({
        "height": (h - 66) + "px",
        "width": 300 + "px"
    })

    $(".rywuzCKaddDetaile").css({
        "height": (h - 66) + "px",
        "width": (w - 300 - 300) + "px"
    })
    $(".rywuzCKaddDetaileContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px"
    })

    $(".rywzwzxq").css({
        "height": (h - 66) + "px",
        "width": (w - 300) + "px"
    })

    $(".rywzwzxqcontainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px"
    })

    $(".rywzwzlyjl").css({
        "height": (h - 66) + "px",
        "width": (w - 300) + "px"
    })
    $(".rywzwzlyjlContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px"
    })
    $(".rywzpq").css({
        "height": (h - 66) + "px",
        "width": 300 + "px"
    })
    $(".rywzpqContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": 300 + "px"
    })
    $(".rywzrypannel").css({
        "height": (h - 66) + "px",
        "width": (w - 300) + "px"
    })

    $(".rywzrypannelContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": (w - 300) + "px"
    })
    $(".addduiwu").css({
        "height": (h) + "px",
        "width": (w) + "px"
    })
    $(".addperson").css({
        "height": (h) + "px",
        "width": (w) + "px"
    })
    $('.removesy').css({
        "height": (h) + "px",
        "width": (w) + "px"
    })

    //内涝风险分析
    $(".nlfxfxSideBar").css({
        "height": (h - 66) + "px"

    })
    $(".nlfxfxtabContContainer").css({
        "height": (h - 66 - 66 - 41 - 5) + "px"

    })
    $(".nlfxfxtabContContainer .nlfxfxtabcontent").css({
        "height": (h - 66 - 66 - 41 - 9 - 5) + "px"
    })

    //清淤整改
    $(".qyzgSideBar").css({
        "height": (h - 66) + "px"
    })
    $(".qyzgContaner").css({
        "height": (h - 66 - 72 - 9) + "px"
    })

    $(".qyzgContainer").css({
        "height": (h - 66 - 72 - 9 - 5) + "px",
        "width": 300 + "px"
    })
    $(".qyzgbzwxbyqy").css({
        "height": (h - 66) + "px",
        "width": 300 + "px"
    })
}

//tab
function tabcount(eleid, activeclass, subareatabcontent) {
    $(eleid + ' li').click(function() {
        var index = $(this).index();
        $(this).addClass(activeclass);
        $(this).siblings('li').removeClass(activeclass)
        $(subareatabcontent).eq(index).show().siblings(subareatabcontent).hide();
        initBar(); //初始化滚动条


    })
}
//select
function select(select, selectOption) {
    $(select).on("click", function() {
        $(selectOption).css("display", 'block')
        stopBubble("e")
    })
    $(selectOption).find('li').on("click", function() {
        $(select).find('span').text($(this).text())
        $(selectOption).css("display", 'none')
        stopBubble("e")
    })
}
//阻止事件冒泡的通用函数
function stopBubble(e) {
    // 如果传入了事件对象，那么就是非ie浏览器
    if (e && e.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        //否则我们使用ie的方法来取消事件冒泡
        window.event.cancelBubble = true;
    }
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

//初始化滚动条
function initBar() {
    setNiceScroll(".tabcontent")
    setNiceScroll(".subcontent")
    setNiceScroll(".detailContainer")
    setNiceScroll(".yeweicontent")
    setNiceScroll(".yeweidetailCont")
    setNiceScroll(".videoCont")
    setNiceScroll(".bufangCont")
    setNiceScroll(".jqzjtabcontent")
    setNiceScroll(".jqzjtabcontent .dclDetail .detailContainer")
    setNiceScroll(".tabcontent .dclfenlei .subcontent")
    setNiceScroll(".zbfx")
    setNiceScroll(".jqcl")
    setNiceScroll(".gdxq")
    setNiceScroll(".addjqzjcont")
    setNiceScroll(".fxbs")
    setNiceScroll(".tree")
    setNiceScroll(".dxcont")
    setNiceScroll(".xqhgContainer")
    setNiceScroll(".yldscrollcontainer")
    setNiceScroll(".xqhgylddetailContainer")
    setNiceScroll(".xqhgfjsjqContainer")
    setNiceScroll(".xqhgfjsjqdetailContainer")
    setNiceScroll(".rywzContaner")
    setNiceScroll(".cknumberContainer")
    setNiceScroll(".rywuzCKaddDetaileContainer")
    setNiceScroll(".rywzwzxqcontainer")
    setNiceScroll(".rywzwzlyjlContainer")
    setNiceScroll(".rywzpqContainer")
    setNiceScroll(".rywzrypannelContainer")
    setNiceScroll(".nlfxfxtabContContainer")
    setNiceScroll(".qyzgContaner")
    setNiceScroll(".qyzgContainer")


}

//关闭其他内容
function closeOthers() {
    $(".mainContainer .sideBar .tabContContainer .tabcontent .yewei").hide()
    $(".mainContainer .sideBar .tabContContainer .tabcontent .video").hide()
    $(".mainContainer .sideBar .tabContContainer .tabcontent .bufang").hide()
    $(".mainContainer .sideBar .tabContContainer .tabcontent .yeweiDetail").hide()
    $(".mainContainer .sideBar .tabContContainer .tabcontent .videoDetail").hide()
    $(".mainContainer .sideBar .tabContContainer .tabcontent .bufangDetail").hide()
}

/**
 * 将对象转换成字符串
 */
function json2str(it, prettyPrint) {
    return stringify(it, function(key, value) {
        if (value) {
            var tf = value.__json__ || value.json;
            if (typeof tf == "function") {
                return tf.call(value);
            }
        }
        return value;
    }, prettyPrint && this.toJsonIndentStr)
}

function stringify(value, replacer, spacer) {

    var undef;
    if (typeof replacer == "string") {
        spacer = replacer;
        replacer = null;
    }

    function stringify(it, indent, key) {
        if (replacer) {
            it = replacer(key, it);
        }
        var val, objtype = typeof it;
        if (objtype == "number") {
            return isFinite(it) ? it + "" : "null";
        }
        if (objtype == "boolean") {
            return it + "";
        }
        if (it === null) {
            return "null";
        }
        if (typeof it == "string") {
            return escapeString(it);
        }
        if (objtype == "function" || objtype == "undefined") {
            return undef;
        }

        if (typeof it.toJSON == "function") {
            return stringify(it.toJSON(key), indent, key);
        }
        if (it instanceof Date) {
            return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(t, prop, plus) {
                var num = it["getUTC" + prop]() + (plus ? 1 : 0);
                return num < 10 ? "0" + num : num;
            });
        }
        if (it.valueOf() !== it) {

            return stringify(it.valueOf(), indent, key);
        }
        var nextIndent = spacer ? (indent + spacer) : "";

        var sep = spacer ? " " : "";
        var newLine = spacer ? "\n" : "";

        if (it instanceof Array) {
            var itl = it.length,
                res = [];
            for (key = 0; key < itl; key++) {
                var obj = it[key];
                val = stringify(obj, nextIndent, key);
                if (typeof val != "string") {
                    val = "null";
                }
                res.push(newLine + nextIndent + val);
            }
            return "[" + res.join(",") + newLine + indent + "]";
        }

        var output = [];
        for (key in it) {
            var keyStr;
            if (typeof key == "number") {
                keyStr = '"' + key + '"';
            } else if (typeof key == "string") {
                keyStr = escapeString(key);
            } else {

                continue;
            }
            val = stringify(it[key], nextIndent, key);
            if (typeof val != "string") {

                continue;
            }

            output.push(newLine + nextIndent + keyStr + ":" + sep + val);
        }
        return "{" + output.join(",") + newLine + indent + "}";
    }
    return stringify(value, "", "");

};

function escapeString( /*String*/ str) {

    return ('"' + str.replace(/(["\\])/g, '\\$1') + '"').
    replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").
    replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
}
