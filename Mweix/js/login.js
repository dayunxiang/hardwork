$(function() {
    var code = ''
    var apiUrl = 'http://47.95.1.140/wx/webapi/'
    var localStorage = window.localStorage
    getOpenid()



})
// 根据code 获取openid 存储到本地缓存中
function getOpenid() {

    code = GetRequest().code;
    if (code) {
        $.ajax({
            type: 'get',
            url: "http://47.95.1.140/wx/wechat/api/Account/GetUserByCode?code=" + code,
            dataType: "json",
            success: function(data) {
                var data = JSON.parse(data);
                var user = JSON.parse(data.user)[0]
                console.log(data)
                console.log(user)
                localStorage.setItem("Openid", user.Openid)
                localStorage.setItem("Id", user.ID_USERID)
                localStorage.setItem("IsRegister", user.IsRegister)
                localStorage.setItem("Role", user.Role)
                localStorage.setItem("userInfo", JSON.stringify(user))
                localStorage.setItem('tk', 'Bearer ' + data.tk)
                if (localStorage.getItem("IsRegister") === '0') {
                    window.location.href = "http://zhmai.com/wx/web/register.html"
                } else if (localStorage.getItem("IsRegister") === '1') {
                    window.location.href = "http://zhmai.com/wx/web/query.html"
                }

            }
        })
    } else {
        // 根据openid 永久回去用户信息 
        $.ajax({
            type: 'get',
            url: "http://47.95.1.140/wx/wechat/api/Account?openId=" + localStorage.getItem("Openid"),
            dataType: "json",
            headers: {
                "Authorization": localStorage.getItem('tk')
            },
            success: function(info) {
                info = JSON.parse(info)[0]
                //根据用户id获取注册状态
                $.ajax({
                    type: 'get',
                    url: "http://47.95.1.140/wx/wechat/api/Account/GetUserById?id=" + info.ID_USERID,
                    dataType: "json",
                    headers: {
                        "Authorization": localStorage.getItem('tk')
                    },
                    success: function(data) {
                        localStorage.setItem("Id", data.Id)
                        localStorage.setItem("IsRegister", data.IsRegister)
                        localStorage.setItem("Role", data.Role)
                        localStorage.setItem("userInfo", JSON.stringify(data))
                        
                        if (localStorage.getItem("IsRegister") === '0') {
                            console.log(111)
                            window.location.href = "http://zhmai.com/wx/web/register.html"
                        } else if (localStorage.getItem("IsRegister") === '1') {
                            // console.log(222)
                            window.location.href = (window.location.href).split('?')[0] + "query.html"
                        }
                    }
                })
            }
        })
    }
}


//获取url中的字符串
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
