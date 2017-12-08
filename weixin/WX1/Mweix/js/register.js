$(function() {
    chooseRole("#role");

    $("#login").find("input").on("input propertychange", function() {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var Phone = /^[1][3,4,5,7,8][0-9]{9}$/;
        var name = /^[\u4e00-\u9fa5]+$/;;
        if (GetParams().RealName == '') {
            $("#RealName").parent().parent().addClass('error').siblings().removeClass('error')
            $("#RealName").parent().parent().find('i').css('display', 'block')
            $("#RealName").parent().parent().siblings().find('i').css('display', 'none')
        } else if (!name.test(GetParams().RealName)) {
            $("#RealName").parent().parent().addClass('error').siblings().removeClass('error')
            $("#RealName").parent().parent().find('i').text('请输入正确的名字')
            $("#RealName").parent().parent().find('i').css('display', 'block')
            $("#RealName").parent().parent().siblings().find('i').css('display', 'none')
        } else if (GetParams().CompanyName == '') {
            $("#CompanyName").parent().parent().addClass('error').siblings().removeClass('error')
            $("#CompanyName").parent().parent().find('i').css('display', 'block')
            $("#CompanyName").parent().parent().siblings().find('i').css('display', 'none')
        } else if (GetParams().Department == '') {
            $("#Department").parent().parent().addClass('error').siblings().removeClass('error')
            $("#Department").parent().parent().find('i').css('display', 'block')
            $("#Department").parent().parent().siblings().find('i').css('display', 'none')
        } else if (GetParams().position == '') {
            $("#position").parent().parent().addClass('error').siblings().removeClass('error')
            $("#position").parent().parent().find('i').css('display', 'block')
            $("#position").parent().parent().siblings().find('i').css('display', 'none')
        } else if (GetParams().Role == '') {
            $("#Role").parent().parent().addClass('error').siblings().removeClass('error')
            $("#Role").parent().parent().find('i').css('display', 'block')
            $("#Role").parent().parent().siblings().find('i').css('display', 'none')
        } else if (GetParams().Email == '') {
            $("#Email").parent().parent().addClass('error').siblings().removeClass('error')
            $("#Email").parent().parent().find('i').text('请输入邮箱地址')
            $("#Email").parent().parent().find('i').css('display', 'block')
            $("#Email").parent().parent().siblings().find('i').css('display', 'none')
        } else if (!myreg.test(GetParams().Email)) {
            $("#Email").parent().parent().addClass('error').siblings().removeClass('error')
            $("#Email").parent().parent().find('i').css('display', 'block')
            $("#Email").parent().parent().siblings().find('i').css('display', 'none')
        } else if (!Phone.test(GetParams().Phone)) {
            $("#Phone").parent().parent().addClass('error').siblings().removeClass('error')
            $("#Phone").parent().parent().find('i').css('display', 'block')
            $("#Phone").parent().parent().siblings().find('i').css('display', 'none')
        } else if (GetParams().Phone == '') {
            $("#Phone").parent().parent().addClass('error').siblings().removeClass('error')
            $("#Phone").parent().parent().find('i').text('请输入手机号')
            $("#Phone").parent().parent().find('i').css('display', 'block')
            $("#Phone").parent().parent().siblings().find('i').css('display', 'none')
        }else {
            $("#Phone").parent().parent().find('i').css('display', 'none')
            $("#Phone").parent().parent().removeClass('error')
            $("#sub").on("click", function() {
                console.log(22)
                $.ajax({
                    type: 'post',
                    url: "http://47.95.1.140/wx/wechat/api/Account/UpdateUserRegister?id_usserid=" + GetParams().ID_USERID + "&realName=" + GetParams().RealName + "&companyName=" + GetParams().CompanyName + "&department=" + GetParams().Department + "&position=" + GetParams().position + "&role=" + GetParams().Role + "&email=" + GetParams().Email + "&phoneNum=" + GetParams().Phone,
                    dataType: 'json',
                    headers: {
                        "Authorization": localStorage.getItem('tk')
                    },
                    success: function(data) {
                        localStorage.removeItem('userInfo');
                        localStorage.removeItem('IsRegister');
                        localStorage.removeItem('Role');
                        data = JSON.parse(data)[0]
                        localStorage.setItem("IsRegister", data.IsRegister)
                        localStorage.setItem("Role", data.Role)
                        localStorage.setItem("userInfo", JSON.stringify(data))
                        window.location.href = "http://zhmai.com/wx/web/query.html"
                    },
                    error: function(err) {
                        console.log(err)
                    }
                })
            })

        }
    })

    // 获取表单内容
    function GetParams() {
        var params = JSON.parse(localStorage.getItem("userInfo"));
        var theParams = new Object();

        $(".register").find("input").each(function(index, item) {

            theParams[$(item).attr("name")] = $(item).val()
            delete theParams[undefined]
        })
        if (theParams.Role === "公司管理员") {
            theParams.Role = '1'
        } else if (theParams.Role === "巡检员") {
            theParams.Role = '2'
        } else {
            theParams.Role = ''
        }
        theParams.IsRegister = 1

        params.Subscribe_time = new Date().format("yyyy-MM-dd hh:mm:ss");
        var param = $.extend({}, params, theParams);
        return param
    }

    //过滤匹配公司名称
    $.ajax({
        type: 'get',
        url: 'http://47.95.1.140/wx/wechat/api/Account/GetCompanyList',
        headers: {
            "Authorization": localStorage.getItem('tk')
        },
        success: function(data) {
            var companyList = JSON.parse(data);
            $('#CompanyName').on('input propertychange', function() {

                //判断文本框中的内容在companyList中是否存在 如果存在的话放在一个临时数组中
                var temp = [];
                $.each(companyList, function(index, value) {
                    if (value.indexOf($("#CompanyName").val()) == 0) {
                        temp.push(value);
                        console.log(temp)
                    }
                })
                //如果文本框为空或者临时数组中美与内容 则童谣也要删除div
                if (($("#CompanyName").val()).length == 0 || temp.length == 0) {
                    if ($("#searchBox")) {
                        // $("#box").remove($("#searchBox"));
                        $("#searchBox").css('display', 'none')

                    }
                    return;
                }


                //临时数组中与内容 创建元素

                $("#searchBox").css('display', 'block')
                //循环比那里临时数组
                $.each(temp, function(index, item) {
                    var pObj = $('<p></p>')
                    pObj.text(item)
                    pObj.appendTo($("#searchBox"))

                    pObj.on('click', function() {
                        $("#CompanyName").val($(this).text());
                        $("#searchBox").css('display', 'none')

                    })

                })


            })
        }

    })

})
