/**
 * 获取图片LIst
 * @param {Object} time
 */
function getImgList(relationNumKey) {
	var picList = "";
	if (picList != null && picList != "") {
		picList = localStorage.getItem(relationNumKey);
	} else {
		//获取图片信息
		JQueryUtil.sendAsyncRCP(pathUrl + '/file/getPhotoPictureList', {
				relationNum: relationNumKey
			},
			function success(result) {
				if (result.data) {
					picList = JSON.parse(result.data);

				}
			},
			function error(error) {
				console.log(error.msg);
			});
	}

	return picList;
}
/**
 * 根据区域ID获取区域名称
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function getRegionNameById(modularId, id){
	var value = localStorage.getItem(modularId+'_regionjson');
	if(value){
		var regionList = JSON.parse(value);
	    // var regionList = JSON.parse(objVal.dataJson);
	    for (var i=0;i<regionList.length;i++) {
	        if (regionList[i].value == id) {
	            return regionList[i].text;
	        }
	    }
    }else{
		return '';
    }
}
/**
 * 时间转换 毫秒数转换成时间格式
 * @param {Object} time
 * @param {boolean} hour
 */
function formatTime(time, hour) {
	if (time<=0) {
		return '';
	}
	var date = new Date(time);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var min = date.getMinutes();
	min = min < 10 ? ('0' + min) : min;
	var sec = date.getSeconds();
	sec = sec < 10 ? ('0' + sec) : sec;
	if (hour) {
		return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + sec;
		// return y + '-' + m + '-' + d + ' ' + h + ':' + min;
	} else {
		return y + '-' + m + '-' + d;
	}

}

/**
 * 日期转字符串
 * @param  {[type]} value 时间对象
 * @return {[type]}       [description]
 */
function date2Str(value){
	var y = value.getFullYear();  
	var m = value.getMonth() + 1;  
	m = m < 10 ? ('0' + m) : m;  
	var d = value.getDate();  
	d = d < 10 ? ('0' + d) : d;
	var h = value.getHours();
	h = h < 10 ? ('0' + h) : h;
	var min = value.getMinutes();
	min = min < 10 ? ('0' + min) : min;
	var sec = value.getSeconds();
	sec = sec < 10 ? ('0' + sec) : sec;
	return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + sec;
}
/**
 * 字符串转日期
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function str2Date(str) {
	var timeStr = str.replace(/-/g,"/");
	var date = new Date(timeStr);
	return date;
}
/**
 * 两个时间差，参数：毫秒
 * @param  {[type]} start [description]
 * @param  {[type]} end   [description]
 * @return {[type]}       [description]
 */
function timeDiff(start, end) {
	var diff = end - start;
    var years = Math.floor(diff / (12 * 30 * 24 * 3600 * 1000));
    //计算相差的月数
    var leave = diff % (12 * 30 * 24 * 3600 * 1000);
    var months = Math.floor(leave / (30 * 24 * 3600 * 1000));
    //计算出相差天数
    var leave0 = leave % (30 * 24 * 3600 * 1000);
    var days = Math.floor(leave0 / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = leave0 % (24 * 3600 * 1000);     //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);         //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);       //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);

    if (years>0) {
    	return years + "年" + months + "月" + days + "天 " + hours + "小时 " + minutes + "分钟" + seconds + "秒";
    }else if(months>0) {
    	return months + "月" + days + "天 " + hours + "小时" + minutes + "分钟" + seconds + "秒";
    }else if(days>0) {
    	return days + "天 " + hours + "小时 " + minutes + "分钟" + seconds + "秒";
    }else if(hours>0) {
    	return hours + "小时 " + minutes + "分钟" + seconds + "秒";
    }else if(minutes>0) {
    	return minutes + "分钟" + seconds + "秒";
    }else if (seconds>0) {
    	return seconds + "秒";
    }else {
    	return "";
    }
}

/**
 * 保留两位小数
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
function roundingTwo(value) {
	if (value==''||value=='null'||value==null) {
		return '0';
	}else {
		var two = value * 100;
		var two2 = two.toFixed(0);
		return two2 + '%';
	}
}

/**
 * 工单状态
 * @param {Object} imgSrc
 * @param {Object} status
 * @param {Object} color
 */
function statusNum(status) {
	var imgsrc = '',
		colorName = '',
		statusText = '',
		linkStatus = '';
	switch (status) {
		case 0:
			imgsrc = "pause_icon.png";
			colorName = "pause_color";
			linkStatus = 'hangUp';
			statusText = '新建';
			break;
		case 1:
			imgsrc = "success_icon.png";
			colorName = 'success_color';
			linkStatus = 'assigned';
			statusText = '已派发';
			break;
		case 2:
			imgsrc = "going_icon.png";
			colorName = 'going_color';
			linkStatus = 'executing';
			statusText = '执行中';
			break;
		case 3:
			imgsrc = "examine_icon.png";
			colorName = "examine_color";
			statusText = '延期审批';
			break;
		case 4:
			imgsrc = "delay_icon.png";
			colorName = "delay_color";
			linkStatus = 'delay';
			statusText = '已延期';
			break;
		case 5:
			imgsrc = "pause_icon.png";
			colorName = "pause_color";
			linkStatus = 'hangUp';
			statusText = '已挂单';
			break;
		case 6:
			imgsrc = "back_icon.png";
			colorName = "back_color";
			statusText = '已退单';
			break;
		case 7:
			imgsrc = "wait_icon.png";
			colorName = 'wait_color';
			statusText = '待审核';
			break;
		case 8:
			imgsrc = "check_icon.png";
			colorName = "check_color";
			statusText = '待验收';
			break;
		case 9:
			imgsrc = "complate_icon.png";
			colorName = 'complate_color';
			statusText = '已完成';
			break;
		case 10:
			imgsrc = "error_icon.png";
			colorName = 'error_color';
			linkStatus = 'fail';
			statusText = '审核不通过';
		case 11:
			statusText = '验收不通过';
			imgsrc = "error_icon.png";
			colorName = 'error_color';
			linkStatus = 'fail';
			statusText = '验收不通过';
			break;
	}
	return [imgsrc, colorName, statusText, linkStatus];
}

/**
 * 获取维修工单来源文本
 * @param  {[type]} sourId [description]
 * @return {[type]}        [description]
 */
function getSourceText(sourId) {
	var sourceList = [{
        sourceId: 1.1,
        sourceName: '维修-故障上报'
    }, {
        sourceId: 1.2,
        sourceName: '维修-故障自修'
    }, {
        sourceId: 2.1,
        sourceName: '巡检-故障上报'
    }, {
        sourceId: 2.2,
        sourceName: '巡检-故障自修'
    }]
    for (var i = 0; i < sourceList.length; i++) {
        if (sourceList[i].sourceId == sourId) {
            return sourceList[i].sourceName;
        }
    }
}

/**
 * 依据url的参数名 获取参数值
 * object  name
 **/
// 获取参数的方法
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURI(r[2]);
	return null;
}

// 根据执行ID获取执行组名称
function getGroupNameById(id) {
	var value = localStorage.getItem('executionGroup');
	if (value == '' || value == null) {
		alert('获取不到参数，请重新登录！');
	}
	var groupList = JSON.parse(value);
	for (var i in groupList) {
		if (groupList[i].groupId == id) {
			return groupList[i].groupName;
		}
	}
}

/**
 * 巡检模块的获取对象和工作流信息方法
 * @param  {[type]} businessId        [description]
 * @param  {[type]} orderId           [description]
 * @param  {[type]} processInstanceId [description]
 * @param  {[type]} userId            [description]
 * @param  {[type]} callbackFunction  [description]
 * @return {[type]}                   [description]
 */
function findObjectListAndWfInforByOrderId(businessId,orderId,processInstanceId,userId,dataOrSize,callbackFunction) {

	// 根据工单id获取该工单下的对象和工作流信息，然后放到localstorage中，传递到下个页面进一步处理
	JQueryUtil.sendAsyncRCP(pathUrl + '/onSiteInspectionManage/findObjectListAndWfInforByOrderId', {
			// 参数
			businessId: businessId,
			orderId: orderId,
			processInstanceId: processInstanceId,
			userId: userId, //当前登录人id
			// 获取对象还是获取对象的数量？不为空且为size则为查数量，反之查数据
			dataOrSize: dataOrSize
		},
		function success(result) {
			callbackFunction(result);
		},
		function error(error) {
			console.log(error.msg);
		});

}


// 根据资产id获取基本信息
function findAssetInforById(objectId, zichanNum, callbacnFunction) {
	JQueryUtil.sendAsyncRCP(pathUrl + '/communal/findAssetInforById', {
		// 参数
		objectId: objectId,
		zichanNum: zichanNum
	},
	function success(result) {
		callbacnFunction(result);
	},
	function error(error) {
		console.log('error');
		console.log(error.msg);
	});
}

//根据工单id和对象id获取对象信息
function getObjInfByOrderIdAndObjId(businessId, orderId, objId, zichannum, objCallbacnFunction) {
	JQueryUtil.sendAsyncRCP(pathUrl + '/onSiteInspectionManage/getObjInfByOrderIdAndObjId', {
			// 参数
			businessId: businessId,
			orderId: orderId,
			objectid: objId,
			zichannum: zichannum
		},
		function success(result) {
			console.log(zichannum)
			objCallbacnFunction(result);

		},
		function error(error) {
			console.log('error');
			console.log(error.msg);
		});
}

//根据工单id和mainId获取对象信息
function getObjInfByOrderIdAndMainId(businessId, orderId, mainId, objCallbacnFunction) {
	JQueryUtil.sendAsyncRCP(pathUrl + '/onSiteInspectionManage/getObjInfByOrderIdAndMainId', {
			// 参数
			businessId: businessId,
			orderId: orderId,
			mainId: mainId
		},
		function success(result) {
			objCallbacnFunction(result);

		},
		function error(error) {
			console.log('error');
			console.log(error.msg);
		});
}


// 获取区域和组信息
function findDoGroupRegionByBi() {
	var modularId = localStorage.getItem('modularId');
	JQueryUtil.sendAsyncRCP(pathUrl + '/onSiteInspectionManage/findDoGroupRegionObjectByBi', {
			businessId:modularId
		},
		function success(result) {
			if (result.data) {
				var workRegion = JSON.parse(result.data).workRegion;
				if (workRegion) {
					// console.log(workRegion)
					// 将区域组集合放到localStorage中
					localStorage.removeItem("workRegion");
					localStorage.setItem('workRegion', workRegion);
				}
			}
		},
		function error(error) {
			console.log(error.msg);
		});
}

// 获取用户信息
function findAllUsersAndRolesOfUser() {
	var allUsersInfoCons = localStorage.getItem('allUsersInfo');
	if (!allUsersInfoCons) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/omsAndSso/findAllUsersAndRolesOfUser',
			// 参数
			{},
			function success(res) {
				if (res.data) {
					localStorage.removeItem('allUsersInfo');
					localStorage.setItem('allUsersInfo', res.data);
				}
			},
			function error(res) {
				console.log('error')
			}
		);
	}
}

function getUserNameById(userId) {
	if (userId==''||userId==null||userId=='null') {
		return '';
	}
	if (!localStorage.getItem('allUsersInfo')) {
		findAllUsersAndRolesOfUser();
	}
	var list = JSON.parse(localStorage.getItem('allUsersInfo'));
	for (var i = 0; i < list.length; i++) {
		if (list[i].user_id == userId) {
			return list[i].user_real_name;
		}
	}
}

/**
 * [getRepairInforCfgListByParentId 获取所有的故障信息表数据，然后根据parentid来筛选下级数据]
 * @return {[type]} [description]
 */
function getRepairInforCfgListByParentId(parentId) {
	var AllRepairInforCfgList = localStorage.getItem('AllRepairInforCfgList');
	// 如果不在的话访问数据库
	if (!AllRepairInforCfgList) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/configManage/repairCfg/findRepairInforCfgList', {
			parentId: '-1'
		},
		function success(result) {
			if (result.resCode==1) {
				var data = result.data;
				// 放入缓存
				localStorage.removeItem('AllRepairInforCfgList');
				localStorage.setItem('AllRepairInforCfgList', data);
				AllRepairInforCfgList = localStorage.getItem('AllRepairInforCfgList');
			}
		},
		function error(error) {
			console.log(error);
		});
	}
	var resultList = [];
	// 如果在的话直接循环获取
	if (AllRepairInforCfgList!='') {
		var cfgList = JSON.parse(AllRepairInforCfgList);
		if (cfgList.length>0) {
			for(var i=0;i<cfgList.length;i++) {
				var cfg = cfgList[i];
				if (cfg.parentid==parentId) {
					resultList.push(cfg);
				}
			}
		}
	}
	return resultList;
}

// 根据故障ID获取故障名称
function getFaultInfoNameById(id) {
	var dataJson = localStorage.getItem('AllRepairInforCfgList');
	if (dataJson==''||dataJson==null||dataJson=='null') {
		getRepairInforCfgListByParentId('-1');
		dataJson = localStorage.getItem('AllRepairInforCfgList');
	}
	if (dataJson!='') {
		var data = JSON.parse(dataJson);
		if (data.length>0) {
			for (var i = 0; i < data.length; i++) {
				if (id == data[i].id) {
					return data[i].gzname;
				}
			}
		}
		return '';
	}else{
		alert('没有匹配到数据，请检查配置数据！');
	}
}

function getGroupIdByUserId(userId, userIdInfMap) {
	debugger
	var userGroups = "";
	if (userIdInfMap != null) {
		for (var userKey in userIdInfMap) {
			if (userId == userKey) {
				var userObj = JSON.parse(userIdInfMap[userKey]);
				var r = userObj.roles.split('|');
				if (r != null && r.length > 0) {
					for (var i = 0; i < r.length; i++) {
						var str = r[i];
						userGroups += str.substring(0, str.indexOf(',')) + ',';
					}
					return userGroups.substring(0, (userGroups.length - 2));
				}
			}
		}
	}
}


	//---------------------------------------------- 维修管理模块公共方法-----------------------------------------------

	/**
	 * [findRepairObjectAndWfInfByOrderId 维修模块的获取工单详情和工作信息的公共方法]
	 * @param  {[type]} businessId        [description]
	 * @param  {[type]} orderId           [description]
	 * @param  {[type]} processInstanceId [description]
	 * @param  {[type]} userId            [description]
	 * @param  {[type]} callbackFunction  [description]
	 * @return {[type]}                   [description]
	 */
	function findRepairObjectAndWfInfByOrderId(businessId,orderId,processInstanceId,userId,callbackFunction) {
		// 根据工单id获取该工单下的对象和工作流信息，然后放到localstorage中，传递到下个页面进一步处理
		JQueryUtil.sendAsyncRCP(pathUrl + '/repairManage/findObjectAndWfInforByOrderId', {
			// 参数
			businessId: businessId,
			orderId: orderId,
			processInstanceId: processInstanceId,
			userId: userId //当前登录人id
		},
		function success(result) {
			callbackFunction(result);
		},
		function error(error) {
			console.log(error.msg);
		});
	}
	/**
	 * 根据工单id获取维修工单的详情数据，包括工单，工单下对象和对象基本信息
	 * @param  {[type]} businessId                   [模块id]
	 * @param  {[type]} orderId                      [工单id]
	 * @param  {[type]} findObjectDetailByIdCallBack [回调函数]
	 * @return {[type]}                              [description]
	 */
	function findRepairObjectDetailById(businessId, orderId, findObjectDetailByIdCallBack) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/repairManage/findObjectDetailById', {
			// 参数
			businessId: businessId,
			orderId: orderId
		},
		function success(res) {
			findObjectDetailByIdCallBack(res);
		},
		function error(error) {
			console.log(error.msg);
		});
	};
	// 现场确认公共方法
	function faultSceneConfirm(businessId, orderId, confirmResult, callBackFunction) {

		JQueryUtil.sendAsyncRCP(pathUrl +  '/repairManage/fieldConfirmationByOrderId',
        //参数
        {
            businessId: businessId, // 模块id
            orderId: orderId, // 工单id
            confirmResult: confirmResult //确认结果：属实或不属实
        },function success(result) {
        	callBackFunction(result);
        }, function error(error) {
            alert(error);
        });
	};
	// 维修上报公共方法
	function repairReportData(businessId,orderId,damageReason,waterLeakage,solveMode,
		repairResult,repairDes,repairImgList,textureText,zichansize,callBackFunction) {
		JQueryUtil.sendAsyncRCP(pathUrl +  '/repairManage/repairReportData',
        //参数
        {
            businessId: businessId, // 模块id
            orderId: orderId,
            // repairStartTime: workStartTime,
            // repairCompleteTime: workEndTime,
            // waterCutoffTime: waterCutoffTime,
            // watercutOntime: watercutOnTime,
            damageReason: damageReason,
            waterLeakage: waterLeakage,
            solveMode: solveMode,
            repairResult: repairResult,
            repairDes: repairDes,
            repairImgList: repairImgList,
            texTure: textureText, // 材质
            caliBer: zichansize // 口径
        },function success(result) {
        	callBackFunction(result);
        }, function error(error) {
            alert(error);
        });
	};
	/**
	 * 根据工单更新传递的参数的值，就是那个四个时间字段
	 * @param  {[type]} businessId [description]
	 * @param  {[type]} orderId    [description]
	 * @param  {[type]} paramObj   [description]
	 * @return {[type]}            [description]
	 */
	function updateParamByOrderId(businessId, orderId, paramObj, callBackFunction) {
		if (businessId==''||orderId==''||paramObj==null) {
			alert('参数确实，请纠正！');
			return;
		}
		JQueryUtil.sendAsyncRCP(pathUrl + '/repairManage/updateParamByOrderId', {
			// 参数
			businessId: businessId,
			orderId: orderId,
			repairStartTime: paramObj.repairStartTime,
			repairCompleteTime: paramObj.repairCompleteTime,
			waterCutonTime: paramObj.waterCutonTime,
			waterCutoffTime: paramObj.waterCutoffTime
		},
		function success(res) {
			callBackFunction(res);
		},
		function error(error) {
			console.log(error);
		});
	};

	//根据区域id获取区域信息
	function findRegionById(regionalId, callBackFunction) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/communal/findRegionById', {
			// 参数
			regionId: regionalId
		},
		function success(res) {
			callBackFunction(res);
		},			
		function error(error) {
			console.log(error);
		});
	};

	/**
	 * [findObjectsByOrderId 根据工单查询工作對象，對象id不為空]
	 * @param  {[type]} orderId       [工单id]
	 * @param  {[type]} objectState [巡检对象状态（1：工作记录，2：报修，3：自修）]
	 * @param  {[type]} callBackFunction [description]
	 * @return {[type]}                  [description]
	 */
	function findObjectsByOrderId(businessId, orderId, objectState, callBackFunction) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/onSiteInspectionManage/findObjectsByOrderId', {
			// 参数
			businessId: businessId,
			orderId: orderId,
			objectState: objectState
		},
		function success(res) {
			callBackFunction(res);
		},			
		function error(error) {
			console.log(error);
		});
	};
	/**
	 * [findWorkOrderById 获取工单信息]
	 * @return {[type]} [description]
	 */
	function findWorkOrderById(orderId, callbacnFunction) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/communal/findWorkOrderById',
		// 参数
		{
			orderId : orderId
		},
		function success(result) {
			callbacnFunction(result);
		}, function error(error) {
			console.log(error);
		});
	};
	/**
	 * [findApproveFalseByOrderId 获取审核人和批注]
	 * @return {[type]} [description]
	 */
	function findApproveFalseByOrderId(callbacnFunction) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/communal/findApproveFalseByOrderId',
		// 参数
		{
          	orderId : orderId
		},
		function success(result) {
			callbacnFunction(result);
		}, function error(error) {
			console.log(error);
		});
	};
	// 巡检模块下，根据工单id查询巡检记录数据
	function findOsiRecordByOrderId(businessId,orderId,reportTime,objectState,callBackFunction) {
		JQueryUtil.sendAsyncRCP(pathUrl + '/onSiteInspectionManage/findOsiRecordByOrderId',
		// 参数
		{
          	businessId: businessId,
          	orderId: orderId,
          	reportTime: reportTime,
          	objectState: objectState
		},
		function success(result) {
			callBackFunction(result);
		}, function error(error) {
			console.log(error);
		});
	};
	// 去除null
	function removeNull(val) {
		if (val==null||val==''||val=='null') {
			return '';
		}else{
			return val;
		}
	};
	// 空转为0
	function null2Zero(value) {
		if (value==null || value=='' || value=='null') {
			return '0';
		}else{
			return value;
		}
	}


	// ****************************************************************************************************************
	/**
	 * 根据任务类型获取其工作区域集合
	 * @param  {[type]} modularId [description]
	 * @return {[type]}           [description]
	 */
	function getReionDataByModularId(modularId) {
		var resultData = '';
		var key = modularId + '_regionjson';
		var dataJson = localStorage.getItem(key)
		if (dataJson!=''&&dataJson!=null&&dataJson!='null') {
			resultData = dataJson;
		}else{
			// 从数据库获取数据返回
			JQueryUtil.sendAsyncRCP(pathUrl + '/onSiteInspectionManage/findTaskSpaceByModularId',
			// 参数
			{
	          	businessId: modularId
			},
			function success(result) {
				if (result.resCode==1&&result.data!='') {
					localStorage.setItem(key, result.data);
					resultData = result.data;
				}
			}, function error(error) {
				console.log(error);
			});
		}
		return resultData;
	}


    /**
     * [findIndivFieldNameById 根据个性化字段id获取字段中文名称]
     * @param  {[type]} fieldId [description]
     * @return {[type]}         [description]
     */
    function findIndivFieldNameById(businessId, fieldId) {
    	// debugger
    	var fieldCfgJson = localStorage.getItem(businessId+'_feildCfg');
    	// 从数据库获取
    	if (fieldCfgJson==null||fieldCfgJson==''||fieldCfgJson=='null') {
			JQueryUtil.sendAsyncRCP(pathUrl + '/configManage/taskCfg/findIndividualityFieldList',
			// 参数
			{
	          	modularId: businessId
			},
			function success(result) {
				if (result.resCode==1&&result.data!='') {
					fieldCfgJson = result.data;
					// 缓存起来
					localStorage.setItem(businessId+'_feildCfg',result.data);
				}
			}, function error(error) {
				console.log(error);
			});
    	}
        var fieldCfgList = JSON.parse(fieldCfgJson);
        if (fieldCfgList!=null&&fieldCfgList.length>0) {
            for(var i=0; i<fieldCfgList.length; i++) {
                var fieldCfg = fieldCfgList[i];
                if (fieldCfg.id==fieldId) {
                    // 存在就返回名称
                    return fieldCfg.fieldname;
                }
            }
        }
        // 不存在就返回-1
        return '-1';
    };