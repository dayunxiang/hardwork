    var start = document.getElementById("kspd")
    var iszhipai = document.getElementById("iszhipai")
    var kspdsfzp = document.getElementById("kspdsfzp")
    var kspdfzppzline = document.getElementById("kspdfzppzline")
    var kspdfzppzrect = document.getElementById("kspdfzppzrect")
    var zppd = document.getElementById("zppd")
    var zppds = document.getElementById("zppds")
    var zppdszxgppz = document.getElementById("zppdszxgppz")
    var zppdszxgppzf = document.getElementById("zppdszxgppzf")
    var zxzpz = document.getElementById("zxzpz")
    var zxzguadan = document.getElementById("zxzguadan")
    var zxgpzx = document.getElementById("zxgpzx")
    var zxzjd = document.getElementById("zxzjd")
    var zxztuidan = document.getElementById("zxztuidan")
    var yqsppz = document.getElementById("yqsppz")
    var zxztjpd = document.getElementById("zxztjpd")
    var zxgppzhl = document.getElementById("zxgppzhl")
    var zxgppzf = document.getElementById("zxgppzf")
    var zxgppzs = document.getElementById("zxgppzs")
    var zxztjpdxyjpdf = document.getElementById("zxztjpdxyjpdf")
    var zxztjpdxyjpds = document.getElementById("zxztjpdxyjpds")
    var end = document.getElementById("end")

    iszhipai.style.display = 'none'
    kspdsfzp.style.display = 'none'
    zppd.style.display = 'none'
    zppds.style.display = 'none'
    zppdszxgppz.style.display = 'none'
    zppdszxgppzf.style.display = 'none'
    zxzpz.style.display = 'none'
    yqsppz.style.display = 'none'
    zxztjpd.style.display = 'none'
    zxztjpdxyjpds.style.display = 'none'
    zxgppzhl.style.display = 'none'
    zxgppzf.style.display = 'none'
    zxgppzs.style.display = 'none'
    zxztjpdxyjpdf.style.display = 'none'
    end.style.display = 'none'

    start.style.display = 'block'

    //清空
    clear()
    //添加颜色
    function addcolor(next) {
        $(next).css({
            "background-color": '#3D8BFB',
            "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
        })
    }
    //删除颜色
    function removeColor(next) {
        $(next).css({
            "background-color": '#D7D7D7',
            "box-shadow": "0 0px 0px 0 rgba(215, 215, 215 0.50)",
        })
    }
    //执行改派 非空验证
    function zxhgp() {
        if ($("#zxORgp0").attr('feik') == "feik" && $("#zxORgp1").attr('feik') == "feik" && $("#qyzjdgn").find("input").is(':checked') == false) {

            addcolor("#nextd")
            if (iszhipai.style.display == 'block') {


                //执行或改派 下一步
                $("#nextd").off('click').on("click", function() {
                    zxzpz.style.display = 'block';
                    zxzguadan.style.display = 'block';
                    zxztuidan.style.display = 'block';
                    kspdsfzp.style.display = 'block';
                    kspdfzppzline.style.display = 'none';
                    kspdfzppzrect.style.display = 'none';
                    yqsppz.style.display = 'block';

                    zxgppzhl.style.display = 'block';
                    end.style.display = 'block';
                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')
                    // 回调函数
                    // var callBackFunD = function() {
                        
                    // }
                    // // 获取各个下拉框的值
                    // var 
                    // implementAndReassignmentSetting(currentWfKey,)
                })




            } else if (iszhipai.style.display == "none") {


                //执行或改派 下一步
                $("#nextd").on("click", function() {
                    zxzpz.style.display = 'block';
                    yqsppz.style.display = 'block';
                    zxgppzhl.style.display = 'block';
                    end.style.display = 'block';
                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')

                })
            }


        } else if (($("#zxORgp0").attr('feik') == "feik") && ($("#zxORgp1").attr('feik') == "feik") && ($("#zxORgp2").attr('feik') == "feik") && ($("#zxORgp3").attr('feik') == "feik") && ($("#qyzjdgn").find("input").is(':checked') == true)) {
            addcolor("#nextd")

            if (iszhipai.style.display == 'block') {


                //执行或改派 下一步
                $("#nextd").on("click", function() {
                    zxzpz.style.display = 'block';
                    kspdsfzp.style.display = 'block';
                    kspdfzppzline.style.display = 'none';
                    kspdfzppzrect.style.display = 'none';
                    yqsppz.style.display = 'block';


                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')

                })

            } else if (iszhipai.style.display == "none") {


                //执行或改派 下一步
                $("#nextd").on("click", function() {
                    zxzpz.style.display = 'block';
                    yqsppz.style.display = 'block';

                    //option
                    $(".start").css("display", 'none')
                    $(".appointApproval").css("display", 'none')
                    $(".designate").css("display", 'none')
                    $(".zxORgp").css("display", 'none')
                    $(".zxz").css("display", 'block')

                })
            }

        } else {

            removeColor("#nextd")

            //解除绑定事件
            // $("#pred").off("click")
            $("#nextd").off("click")
        }
    }
    //所有的都清空
    function clear() {
    $("#dl_chose2").val("")
    $("#dl_chose2").trigger("chosen:updated");
     $("#dl_chose3").val("")
    $("#dl_chose3").trigger("chosen:updated");
     $("#dl_chose14").val("")
    $("#dl_chose14").trigger("chosen:updated");
    $("#dl_chose15").val("")
    $("#dl_chose15").trigger("chosen:updated");
      $(".optionzpsp").empty()
      $("#optionzxztjsfsp").empty()
      $("#optiongdsfys").empty()
      $(".zxztisp").css("display",'none')
      $(".gdsfyssho").css("display",'none')

      
    }
    //点击开始判断 
    function stratShow() {
        //所有的都清空
      clear()
        start.style.display = 'block'
        //option 控制
        // $(".option").toggleClass("optionClosed")
        $(".option").css('transform','translateX(0px)')
        //控制option
        $(".start").css("display", 'block')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')
    }

    //指派 否
    function zp() {
        //控制option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'block')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')
    }
    //指派 是
    function zps() {
        //控制option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".designateS").css("display", 'block')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')
    }
    //是否指派审批
    function sfzpsp() {
        //控制option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'block')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')
    }

    //执行或改派
    function zxORgp() {
        //控制option
        // console.log("aaa")
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'block')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')
    }

    //执行中
    function zxz() {
        //控制option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'block')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')
    }

    //延期审批
    function yqsp() {
        //控制option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'block')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')
    }

    //执行中判断
    function zxzpd() {
        alert('执行中。。')
        //控制option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'block')
        $(".gdsfys").css("display", 'none')
    }

    function xyjpd() {
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'block')
    }

    //判断是否指派
    $(".optionpz").on("DOMSubtreeModified", function() {
        if ($(this).find("span").text() == '是') {
            iszhipai.style.display = 'block';
            zppds.style.display = 'block';

            kspdsfzp.style.display = 'none'
            zppd.style.display = 'none'
            zppdszxgppz.style.display = 'none'
            zppdszxgppzf.style.display = 'none'
            zxzpz.style.display = 'none'
            yqsppz.style.display = 'none'
            zxztjpd.style.display = 'none'
            zxztjpdxyjpds.style.display = 'none'
            zxgppzhl.style.display = 'none'
            zxgppzf.style.display = 'none'
            zxgppzs.style.display = 'none'
            zxztjpdxyjpdf.style.display = 'none'
            end.style.display = 'none'

            $("#nexta").css({
                "background-color": '#3D8BFB',
                "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
            })


            //点击下一步到 执行或改派
            $("#nexta").off('click').on("click", function() {
                var callBackFunA = function(res) {
                    if (res.resCode==1) {
                        // 更新成功后跳往下一步
                        $(".start").css("display", 'none')
                        $(".designate").css("display", 'none')
                        $(".appointApproval").css("display", 'none')
                        $(".zxORgp").css("display", 'block')
                        $(".zxz").css("display", 'none')
                        $(".yqsp").css("display", 'none')
                        $(".zxztjsfsp").css("display", 'none')
                        $(".gdsfys").css("display", 'none')
                    }else{
                        alert(res.msg);
                    }
                }
                if (currentWfKey=='') {
                    alert('currentWfKey不得为空！');
                    return;
                }
                // 更新是否已指派
                updateNodeSwitchByNodeId(currentWfKey,'isAssigned','true',callBackFunA);
            })



        } else if ($(this).find("span").text() == '否') {
            iszhipai.style.display = 'none';
            kspdsfzp.style.display = 'block'
            zppd.style.display = 'none'
            zppds.style.display = 'none'
            zppdszxgppz.style.display = 'none'
            zppdszxgppzf.style.display = 'none'
            zxzpz.style.display = 'none'
            yqsppz.style.display = 'none'
            zxztjpd.style.display = 'none'
            zxztjpdxyjpds.style.display = 'none'
            zxgppzhl.style.display = 'none'
            zxgppzf.style.display = 'none'
            zxgppzs.style.display = 'none'
            zxztjpdxyjpdf.style.display = 'none'
            end.style.display = 'none'

            $("#nexta").css({
                "background-color": '#3D8BFB',
                "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
            })

            //点击下一步到 指派人
            $("#nexta").off('click').on("click", function() {
                var callBackFunA = function(res) {
                    if (res.resCode==1) {
                        // 更新成功后跳往下一步
                        $(".start").css("display", 'none')
                        $(".designate").css("display", 'block')
                        $(".appointApproval").css("display", 'none')
                    }else{
                        alert(res.msg);
                    }
                }
                if (currentWfKey=='') {
                    alert('currentWfKey不得为空！');
                    return;
                }
                // 更新是否已指派
                updateNodeSwitchByNodeId(currentWfKey,'isAssigned','false',callBackFunA);
            })

        } else if ($(this).text() == " ") {
            kspdsfzp.style.display = 'none';
            iszhipai.style.display = 'none';
            $("#nexta").css({
                "background-color": '#d7d7d7',
                "box-shadow": "0 0px 0px 0 rgba(215, 215, 215, 0.50)"
            })
            $("#nexta").off("click")
        }
    })

    // 配置指派人否 的上下步
    //配置指派人 上一步
    $("#preb").on("click", function() {
        $(".start").css("display", 'block')
        $(".designate").css("display", 'none')
    })

    $("#dl_chose2").change(function() {
        // console.log($("#dl_chose2").val() == "")
        if (!($("#dl_chose2").val() == "")) {
            addcolor("#nextb")
            //配置指派人 下一步
            $("#nextb").off('click').on("click", function() {
                // 回调
                var callBackFunB = function(res) {
                    if (res.resCode==1) {
                        alert('指派人设置成功！');
                        zppd.style.display = 'block';
                        $(".designate").css("display", 'none')
                        $(".appointApproval").css("display", 'block')
                    }else{
                        alert(res.msg);
                        return;
                    }
                }
                // 获取指派人
                var zhiPaiPerson = $('#dl_chose2').val();
                if (zhiPaiPerson) {
                    zhiPaiPerson = getJsonFromArray(zhiPaiPerson);
                }
                updateNodeRoleByNodeId(currentWfKey,'assigned',zhiPaiPerson,callBackFunB);


            })
        } else {
            removeColor("#nextb")
            //解除绑定事件
            $("#nextb").off("click")
        }
    })

    //开始判断-是-执行中配置挂单 配置人
      $("#dl_chose16").change(function () {
         if (!($("#dl_chose16").val() == "")) {
         $("#nextbf").css({
                "background-color": '#3D8BFB',
                "box-shadow": "0 6px 8px 0 rgba(61, 139, 251, 0.50)"
            })
            //配置指派人 下一步
            $("#nextbf").on("click", function() {
                zppd.style.display = 'block';
                $(".designateS").css("display", 'none')
                $(".appointApproval").css("display", 'block')
            })
        } else {
            $("#nextbf").css({
                "background-color": '#D7D7D7',
                "box-shadow": "0 0px 0px 0 rgba(215, 215, 215 0.50)"
            })
            //解除绑定事件
            $("#nextbf").off("click")
        }
      })
           

    //判断是否指派审批
    
    //点击上一步到 配置指派人
    $("#prec").on("click", function() {
        //控制svg
        kspdsfzp.style.display = 'block'
        //option
        $(".designate").css("display", 'block')
        $(".appointApproval").css("display", 'none')
    })

    $("#optionzpsp").on("DOMSubtreeModified", function() {
        if ($(this).find("span").text() == '是') {
            $(".zpspr").css("display", 'block')
            //控制svg
            kspdsfzp.style.display = 'block'
            zppdszxgppz.style.display = 'block'
            zppdszxgppzf.style.display = 'none'
            $("#dl_chose3").change(function() {
                if (!($("#dl_chose3").val() == "")) {
                    addcolor("#nextc")
                    //点击下一步到 指派人
                    $("#nextc").on("click", function() {
                        $(".appointApproval").css("display", 'none')
                        $(".designate").css("display", 'none')
                        $(".zxORgp").css("display", 'block')

                    })
                } else {
                    removeColor("#nextc")
                    $("#nextc").off("click")
                }
            })

        } else if ($(this).find("span").text() == '否') {
            $(".zpspr").css("display", 'none')
            addcolor("#nextc")
            //控制svg
            kspdsfzp.style.display = 'block'
            zppd.style.display = 'block'
            zppdszxgppz.style.display = 'none'
            zppdszxgppzf.style.display = 'block'
            //点击下一步到 指派人
            $("#nextc").on("click", function() {
                $(".appointApproval").css("display", 'none')
                $(".designate").css("display", 'none')
                $(".zxORgp").css("display", 'block')
            })
        } else {
            removeColor("#nextc")
            $("#nextc").off("click")
        }
    })

    //执行或改派
    $("#qyzjdgn").find("input").on("change", function() {
        zxhgp()

        if ($("#qyzjdgn").find("input").is(':checked')) {
            $(".zd").css("display", "block")
            $(".zwzd").css("display", "block")
        } else {
            $(".zd").css("display", "none")
            $(".zwzd").css("display", "none")
            $("#zxORgp2").val("")
            $("#zxORgp3").val("")
            $("#zxORgp2").trigger("chosen:updated");
            $("#zxORgp3").trigger("chosen:updated");

        }
    })
    //执行或改派的上一步
    if (iszhipai.style.display == 'block') {
        //执行或改派上一步
        $("#pred").on("click", function() {
            //svg
            //option
            $(".start").css("display", 'block')
            $(".designate").css("display", 'none')
            $(".appointApproval").css("display", 'none')
            $(".zxORgp").css("display", 'none')
            $(".zxz").css("display", 'none')
        })

    } else if (iszhipai.style.display == 'none') {
        $("#pred").on("click", function() {
            //svg
            //option
            $(".start").css("display", 'none')
            $(".designate").css("display", 'none')
            $(".appointApproval").css("display", 'block')
            $(".zxORgp").css("display", 'none')
            $(".zxz").css("display", 'none')
        })
    }
    $(".zxORgp [id^='dl_chose']").each(function(index, value) {
      $(value).change(function () {
        if(!($(this).val() == "")){
           $(this).attr("feik", "feik")
                $(this).attr("id", "zxORgp" + index)
            } else {
                $(this).removeAttr("feik")
            }
           
            zxhgp()
      })
        
    })


    //执行中 option 非空 上下步
    //上一步
    $("#pree").on("click", function() {
        // option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'block')
        $(".zxz").css("display", 'none')
    })
    $(".zxz [id^='dl_chose']").each(function(index, value) {
      // console.log($(this))
      $(value).change(function () {
         if(!($(this).val() == "")){
           $(this).attr("fnull", "fnull")
                $(this).attr("id", "zxz" + index)
            } else {
                $(this).removeAttr("fnull")
            }
            if ($("#zxz0").attr('fnull') == "fnull" && $("#zxz1").attr('fnull') == "fnull" && $("#zxz2").attr('fnull') == "fnull" && $("#zxz3").attr('fnull') == "fnull" && $("#zxz4").attr('fnull') == "fnull") {
                addcolor("#nexte")
                if (iszhipai.style.display == 'block') {
                    //下一步
                    $("#nexte").on("click", function() {
                        //svg
                        zxzpz.style.display = 'block';
                        zxzguadan.style.display = 'block';
                        zxztuidan.style.display = 'block';
                      
                        // option
                        $(".start").css("display", 'none')
                        $(".designate").css("display", 'none')
                        $(".appointApproval").css("display", 'none')
                        $(".zxORgp").css("display", 'none')
                        $(".zxz").css("display", 'none')
                        $(".yqsp").css("display", 'block')
                    })
                } else if (iszhipai.style.display == 'none') {
                    //下一步
                    $("#nexte").on("click", function() {
                        yqsppz.style.display = 'block'
                        $(".start").css("display", 'none')
                        $(".designate").css("display", 'none')
                        $(".appointApproval").css("display", 'none')
                        $(".zxORgp").css("display", 'none')
                        $(".zxz").css("display", 'none')
                        $(".yqsp").css("display", 'block')
                    })
                }
            } else {
                removeColor("#nexte")
                $("#nexte").off("click")
            }
      })
       

    })

    //延期审批非空 上下步
    //上一步
    $("#pref").on("click", function() {
        // option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'block')
        $(".yqsp").css("display", 'none')
    })
    $("#dl_chose13").change(function () {
       if (!($("#dl_chose13").val() == "")) {
        addcolor("#nextf")
            //上下步

            $("#nextf").on("click", function() {
                zxztjpd.style.display = "block"
                // option
                $(".start").css("display", 'none')
                $(".designate").css("display", 'none')
                $(".appointApproval").css("display", 'none')
                $(".zxORgp").css("display", 'none')
                $(".zxz").css("display", 'none')
                $(".yqsp").css("display", 'none')
                $(".zxztjsfsp").css("display", 'block')
            })
        } else {
            removeColor("#nextf")
            $("#nextf").off("click")
        }
    })
   


    //执行中提交是否审批
    //上一步
    $("#preg").on("click", function() {
        // option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'block')
        $(".zxztjsfsp").css("display", 'none')
        $(".gdsfys").css("display", 'none')

    })
    $("#optionzxztjsfsp").on("DOMSubtreeModified", function() {

        if ($(this).find("span").text() == '是') {
            $(".zxztisp").css("display", 'block')
            zxgppzf.style.display = 'none'
            zxgppzs.style.display = 'block'
            $("#dl_chose14").change(function () {
               if (!($("#dl_chose14").val() == "")){
                addcolor("#nextg")
                    //配置上下步
                    $("#nextg").on("click", function() {
                        // option
                        $(".start").css("display", 'none')
                        $(".designate").css("display", 'none')
                        $(".appointApproval").css("display", 'none')
                        $(".zxORgp").css("display", 'none')
                        $(".zxz").css("display", 'none')
                        $(".yqsp").css("display", 'none')
                        $(".zxztjsfsp").css("display", 'none')
                        $(".gdsfys").css("display", 'block')
                    })
                } else {
                    removeColor("#nextg")
                    $("#nextg").off("click")
                }
            })
           


        } else if ($(this).find("span").text() == '否') {
            addcolor("#nextg")
            $(".zxztisp").css("display", 'none')
            zxgppzf.style.display = 'block'
            zxgppzs.style.display = 'none'
            //配置上下步
            $("#nextg").on("click", function() {
                // option
                $(".start").css("display", 'none')
                $(".designate").css("display", 'none')
                $(".appointApproval").css("display", 'none')
                $(".zxORgp").css("display", 'none')
                $(".zxz").css("display", 'none')
                $(".yqsp").css("display", 'none')
                $(".zxztjsfsp").css("display", 'none')
                $(".gdsfys").css("display", 'block')
            })

        } else {
            removeColor("#nextg")
            $("#nextg").off("click")
        }
    })



    //是否验收
    //配置上下步
    $("#preh").on("click", function() {
        // option
        $(".start").css("display", 'none')
        $(".designate").css("display", 'none')
        $(".appointApproval").css("display", 'none')
        $(".zxORgp").css("display", 'none')
        $(".zxz").css("display", 'none')
        $(".yqsp").css("display", 'none')
        $(".zxztjsfsp").css("display", 'block')
        $(".gdsfys").css("display", 'none')
    })

    $("#optiongdsfys").on("DOMSubtreeModified", function() {

        if ($(this).find("span").text() == '是') {
            $(".gdsfyssho").css("display", 'block')
            zxztjpdxyjpds.style.display = "block"
            zxztjpdxyjpdf.style.display = "none"
            end.style.display = "block"
            $("#dl_chose15").change(function () {
              if (!($("#dl_chose15").val() == "")){
                addcolor("#nexth")

                } else {
                  removeColor("#nexth")
                  $("#nexth").off("click")
                }
            })

        } else if ($(this).find("span").text() == '否') {
            $(".gdsfyssho").css("display", 'none')
            addcolor("#nexth")
            zxztjpdxyjpds.style.display = "none"
            zxztjpdxyjpdf.style.display = "block"
            end.style.display = "block"

        } else {
            removeColor("#nexth")
            $("#nexth").off("click")
        }
    })
