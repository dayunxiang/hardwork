package com.flood.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.DynaBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.flood.common.result.Result;
import com.flood.common.utils.DynaBeanPluginsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.service.FloodReadyService;


/**
 * @ClassName: FloodReadyController 
 * @Description: 防汛准备业务类
 * @author weizl  
 * @date 2017年6月8日 上午11:08:42 
 * @version V1.0
 */
@RestController
@RequestMapping(value="/floodReadyController")
public class FloodReadyController {
	
	@Autowired
	private FloodReadyService floodReadyService;

	//-----------------------------------------气象信息部分------------------------------------------------
	
	
	
	//-----------------------------------------防汛预警部分------------------------------------------------
	

	@RequestMapping(value="/test")
	public Result test(@RequestBody String json) {
		return Result.success(json);
	}
	
	/**
	 * @Title: updateFloodInfo 
	 * @Description: 更新值班信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月27日 下午3:16:14 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateFloodInfo")
	public Result updateFloodInfo(@RequestBody String json) {
		try {
			int result = floodReadyService.updateFloodInfo(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新值班信息失败");
		}
	}
	
	/**
	 * @Title: updateRespondMethodByWarningType 
	 * @Description: 更新预警响应行动措施
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月27日 下午3:33:09 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateRespondMethodByWarningType")
	public Result updateRespondMethodByWarningType(@RequestBody String json) {
		try {
			int result = floodReadyService.updateRespondMethodByWarningType(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新值班信息失败");
		}
	}
	
	/**
	 * @Title: getAllPreFloodPlan 
	 * @Description: 读取预案列表
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月27日 下午3:33:09 
	 * @version V1.0
	 */
	@RequestMapping(value="/getAllPreFloodPlan")
	public Result getAllPreFloodPlan(@RequestBody String json) {
		try {
			String result = floodReadyService.getAllPreFloodPlan(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("读取预案列表失败");
		}
	}
	
	/**
	 * @Title: delPreFloodPlan 
	 * @Description: 删除预案
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月27日 下午4:01:44 
	 * @version V1.0
	 */
	@RequestMapping(value="/delPreFloodPlan")
	public Result delPreFloodPlan(@RequestBody String json) {
		try {
			int result = floodReadyService.delPreFloodPlan(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("删除预案失败");
		}
	}
	
	//-----------------------------------------人员物资部分------------------------------------------------
	
	/**
	 * @Title: getPersonsByType 
	 * @Description: 根据类型获取防汛责任岗人员
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/getPersonsByType")
	public Result getPersonsByType(@RequestBody String json) {
		try {
			String result = floodReadyService.getPersonsByType(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，根据类型获取人员数据失败");
		}
	}
	
	/**
	 * @Title: addPerson 
	 * @Description: 添加人员
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/addPerson")
	public Result addPerson(@RequestBody String json) {
		try {
			int result = floodReadyService.addPerson(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，添加人员数据失败");
		}
	}
	
	/**
	 * @Title: updatePerson 
	 * @Description: 更新人员
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/updatePerson")
	public Result updatePerson(@RequestBody String json) {
		try {
			int result = floodReadyService.updatePerson(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，更新人员数据失败");
		}
	}
	
	/**
	 * @Title: deletePerson 
	 * @Description: 删除人员
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/deletePerson")
	public Result deletePerson(@RequestBody String json) {
		try {
			int result = floodReadyService.deletePerson(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，删除人员失败");
		}
	}
	
	/**
	 * @Title: getAllPreFloodTeam 
	 * @Description: 获取所有防汛队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/getAllPreFloodTeam")
	public Result getAllPreFloodTeam(@RequestBody String json) {
		try {
			String result = floodReadyService.getAllPreFloodTeam(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，获取所有防汛队失败");
		}
	}
	
	/**
	 * @Title: getTeamStuffByStuffID 
	 * @Description: 根据物资id获取领用该物资的信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/getTeamStuffByStuffID")
	public Result getTeamStuffByStuffID(@RequestBody String json) {
		try {
			String result = floodReadyService.getTeamStuffByStuffID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误");
		}
	}
	
	/**
	 * @Title: addTeamStuff 
	 * @Description: 添加分配物资记录
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/addTeamStuff")
	public Result addTeamStuff(@RequestBody String json) {
		try {
			int result = floodReadyService.addTeamStuff(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，添加分配物资失败");
		}
	}
	
	/**
	 * @Title: getAllPreFloodStuff 
	 * @Description: 获取所有物资
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/getAllPreFloodStuff")
	public Result getAllPreFloodStuff(@RequestBody String json) {
		try {
			String result = floodReadyService.getAllPreFloodStuff(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，获取所有物资失败");
		}
	}
	
	/**
	 * @Title: getStuffByTeamID 
	 * @Description: 根据队伍id获取物资
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月13日 上午11:09:11 
	 * @version V1.0
	 */
	@RequestMapping(value="/getStuffByTeamID")
	public Result getStuffByTeamID(@RequestBody String json) {
		try {
			String result = floodReadyService.getStuffByTeamID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，根据队伍id获取物资失败");
		}
	}
	
	/**
	 * @Title: getGroupStuffByTeamID 
	 * @Description: 根据队伍id获取详情
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月13日 下午2:28:08 
	 * @version V1.0
	 */
	@RequestMapping(value="/getGroupStuffByTeamID")
	public Result getGroupStuffByTeamID(@RequestBody String json) {
		try {
			String result = floodReadyService.getGroupStuffByTeamID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，根据队伍id获取物资失败");
		}
	}
	/**
	 * @Title: deleteTeamStuff 
	 * @Description: 删除物资领用情况
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月13日 下午4:26:12 
	 * @version V1.0
	 */
	@RequestMapping(value="/deleteTeamStuff")
	public Result deleteTeamStuff(@RequestBody String json) {
		try {
			String result = floodReadyService.deleteTeamStuff(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，删除物资分配记录失败");
		}
	}
	/**
	 * @Title: addPreFloodTeam 
	 * @Description: 添加防讯队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午2:00:26 
	 * @version V1.0
	 */
	@RequestMapping(value="/addPreFloodTeam")
	public Result addPreFloodTeam(@RequestBody String json) {
		try {
			String result = floodReadyService.addPreFloodTeam(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，添加防汛队失败");
		}
	}
	/**
	 * @Title: updatePreFloodTeam 
	 * @Description: 更新防汛队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午2:00:26 
	 * @version V1.0
	 */
	@RequestMapping(value="/updatePreFloodTeam")
	public Result updatePreFloodTeam(@RequestBody String json) {
		try {
			int result = floodReadyService.updatePreFloodTeam(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，更新防汛队失败");
		}
	}
	/**
	 * @Title: delPreFloodTeam 
	 * @Description: 删除防讯队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午2:00:26 
	 * @version V1.0
	 */
	@RequestMapping(value="/delPreFloodTeam")
	public Result delPreFloodTeam(@RequestBody String json) {
		try {
			int result = floodReadyService.delPreFloodTeam(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，删除防汛队失败");
		}
	}
	/**
	 * @Title: addNewStuff 
	 * @Description: 添加防汛物资
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午4:11:18 
	 * @version V1.0
	 */
	@RequestMapping(value="/addNewStuff")
	public Result addNewStuff(@RequestBody String json) {
		try {
			int result = floodReadyService.addNewStuff(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，添加防汛物资失败");
		}
	}
	/**
	 * @Title: updateStuff 
	 * @Description: 更新防汛物资
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午4:11:18 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateStuff")
	public Result updateStuff(@RequestBody String json) {
		try {
			int result = floodReadyService.updateStuff(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，更新防汛物资失败");
		}
	}
	/**
	 * @Title: deleteStuff 
	 * @Description: 删除物资
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午5:18:53 
	 * @version V1.0
	 */
	@RequestMapping(value="/deleteStuff")
	public Result deleteStuff(@RequestBody String json) {
		try {
			int result = floodReadyService.deleteStuff(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("数据库错误，删除物资失败");
		}
	}
	
	//-----------------------------------------防汛设备部分------------------------------------------------
	
	/**
	 * @Title: getPumpDeviceListByYearAndPumpInfo 
	 * @Description: 查询防汛设备
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月20日 下午5:11:38 
	 * @version V1.0
	 */
	@RequestMapping(value="/getPumpDeviceListByYearAndPumpInfo")
	public Result getPumpDeviceListByYearAndPumpInfo(@RequestBody String json) {
		try {
			String result = floodReadyService.getPumpDeviceListByYearAndPumpInfo(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("查询防汛设备失败");
		}
	}
	
	/**
	 * @Title: addPumpDevice 
	 * @Description: 添加雨水泵站设备
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午9:44:35 
	 * @version V1.0
	 */
	@RequestMapping(value="/addPumpDevice")
	public Result addPumpDevice(@RequestBody String json) {
		try {
			int result = floodReadyService.addPumpDevice(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("添加雨水泵站设备失败");
		}
	}
	
	/**
	 * @Title: updatePumpDevice 
	 * @Description: 更新雨水泵站设备
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午10:26:36 
	 * @version V1.0
	 */
	@RequestMapping(value="/updatePumpDevice")
	public Result updatePumpDevice(@RequestBody String json) {
		try {
			int result = floodReadyService.updatePumpDevice(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新雨水泵站设备失败");
		}
	}
	
	/**
	 * @Title: deletePumpDevice 
	 * @Description: 删除雨水泵站设备
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午10:26:36 
	 * @version V1.0
	 */
	@RequestMapping(value="/deletePumpDevice")
	public Result deletePumpDevice(@RequestBody String json) {
		try {
			int result = floodReadyService.deletePumpDevice(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("删除雨水泵站设备失败");
		}
	}
	
	/**
	 * @Title: exportPumpDevice 
	 * @Description: 防汛设备模块的excel导出（根据选择的泵站和设备类型进行导出）
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午10:52:44 
	 * @version V1.0
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/exportPumpDevice/{year}/{pumpID}/{pumpType}") 
	public Result exportPumpDevice(@PathVariable String year, @PathVariable String pumpID, 
			@PathVariable String pumpType, HttpServletRequest request, HttpServletResponse response) { 	
		try {
			DynaBean bean = DynaBeanPluginsUtil.invoke();
			bean.set("year", year);
			bean.set("pumpID", pumpID);
			bean.set("pumpType", pumpType);
			String result = floodReadyService.exportPumpDevice(JsonPluginsUtil.bean2Json(bean), request, response);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("导出雨水泵站设备失败");
		}
	}
	
	//-----------------------------------------清淤及其他部分------------------------------------------------
	
	/**
	 * 
	 * @Title: GetPumpDesiltListByYear   
	 * @Description: 泵站清淤信息
	 * @param: @param json
	 * @param: @return
	 * @author: guxuebei      
	 * @return: Result
	 * @date: 2017年6月9日 下午3:35:12      
	 * @throws
	 * @version: V1.0
	 */
	@RequestMapping(value="/getPumpDesiltListByYear")
	public Result getPumpDesiltListByYear(@RequestBody String json) {
		try {
			String result = floodReadyService.getPumpDesiltListByYear(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取信息失败");
		}
	}
	
	/**
	 * 
	 * @Title: getSpotReformListByYear   
	 * @Description: 积水区(点)工程改造信息    
	 * @param: @param json
	 * @param: @return
	 * @author: guxuebei      
	 * @return: Result
	 * @date: 2017年6月9日 下午4:34:38      
	 * @throws
	 * @version: V1.0
	 */
	@RequestMapping(value="/getSpotReformListByYear")
	public Result getSpotReformListByYear(@RequestBody String json) {
		try {
			String result = floodReadyService.getSpotReformListByYear(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取信息失败");
		}
	}
	
	/**
	 * 
	 * @Title: getFacilityListByYear   
	 * @Description: 排水设施检查  
	 * @param: @param json
	 * @param: @return
	 * @author: guxuebei      
	 * @return: Result
	 * @date: 2017年6月9日 下午5:04:58      
	 * @throws
	 * @version: V1.0
	 */
	@RequestMapping(value="/getFacilityListByYear")
	public Result getFacilityListByYear(@RequestBody String json) {
		try {
			String result = floodReadyService.getFacilityListByYear(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取信息失败");
		}
	}
	
	/**
	 * @Title: addFacilityRecord 
	 * @Description: 添加排水设施检查记录
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 上午10:03:49 
	 * @version V1.0
	 */
	@RequestMapping(value="/addFacilityRecord")
	public Result addFacilityRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.addFacilityRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("添加排水设施检查记录失败");
		}
	}
	
	/**
	 * @Title: updateFacilityRecord 
	 * @Description: 更新排水设施检查记录
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 上午10:03:49 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateFacilityRecord")
	public Result updateFacilityRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.updateFacilityRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新排水设施检查记录失败");
		}
	}
	
	/**
	 * @Title: deleteFacilityRecord 
	 * @Description: 删除排水设施检查记录
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 上午10:03:49 
	 * @version V1.0
	 */
	@RequestMapping(value="/deleteFacilityRecord")
	public Result deleteFacilityRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.deleteFacilityRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("删除排水设施检查记录失败");
		}
	}
	
	/**
	 * @Title: addPumpDesiltRecord 
	 * @Description: 添加泵站清淤记录 
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午1:40:39 
	 * @version V1.0
	 */
	@RequestMapping(value="/addPumpDesiltRecord")
	public Result addPumpDesiltRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.addPumpDesiltRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("添加失败");
		}
	}
	/**
	 * @Title: updatePumpDesiltRecord 
	 * @Description: 更新泵站清淤记录 
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午1:40:39 
	 * @version V1.0
	 */
	@RequestMapping(value="/updatePumpDesiltRecord")
	public Result updatePumpDesiltRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.updatePumpDesiltRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新失败");
		}
	}
	/**
	 * @Title: deletePumpDesiltRecord 
	 * @Description: 删除泵站清淤记录 
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午1:40:39 
	 * @version V1.0
	 */
	@RequestMapping(value="/deletePumpDesiltRecord")
	public Result deletePumpDesiltRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.deletePumpDesiltRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("删除失败");
		}
	}
	/**
	 * @Title: getAllPump 
	 * @Description: 泵站列表
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午1:40:39 
	 * @version V1.0
	 */
	@RequestMapping(value="/getAllPump")
	public Result getAllPump(@RequestBody String json) {
		try {
			String result = floodReadyService.getAllPump(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取信息失败");
		}
	}
	
	/**
	 * @Title: addSpotReformRecord 
	 * @Description: 增加积水点改造信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午4:05:58 
	 * @version V1.0
	 */
	@RequestMapping(value="/addSpotReformRecord")
	public Result addSpotReformRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.addSpotReformRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("查询积水点改造信息失败");
		}
	}
	
	/**
	 * @Title: updateSpotReformRecord 
	 * @Description: 更新积水点改造信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午4:05:58 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateSpotReformRecord")
	public Result updateSpotReformRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.updateSpotReformRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新积水点改造信息失败");
		}
	}
	
	/**
	 * @Title: deleteSpotReformRecord 
	 * @Description: 删除积水点改造信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午4:05:58 
	 * @version V1.0
	 */
	@RequestMapping(value="/deleteSpotReformRecord")
	public Result deleteSpotReformRecord(@RequestBody String json) {
		try {
			int result = floodReadyService.deleteSpotReformRecord(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("删除积水点改造信息失败");
		}
	}
	
	/**
	 * @Title: getCompleteWaringSpotByReportDate 
	 * @Description: 获取警情点列表
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 上午11:25:50 
	 * @version V1.0
	 */
	@RequestMapping(value="/getCompleteWaringSpotByReportDate")
	public Result getCompleteWaringSpotByReportDate(@RequestBody String json) {
		try {
			String result = floodReadyService.getCompleteWaringSpotByReportDate(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取警情点列表失败");
		}
	}
	
	/**
	 * @Title: getRoadDesiltList 
	 * @Description: 
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 上午11:25:50 
	 * @version V1.0
	 */
	@RequestMapping(value="/getRoadDesiltList")
	public Result getRoadDesiltList(@RequestBody String json) {
		try {
			String result = floodReadyService.getRoadDesiltList(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * @Title: getAllFlood 
	 * @Description: 汛情list
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 上午11:25:50 
	 * @version V1.0
	 */
	@RequestMapping(value="/getAllFlood")
	public Result getAllFlood(@RequestBody String json) {
		try {
			String result = floodReadyService.getAllFlood(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * 
	 * @Title: exportDesiltList 
	 * @Description: 导出清淤数据列表
	 * @param @param year
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月20日 下午3:29:35 
	 * @version V1.0
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/exportDesiltList/{year}") 
	public Result exportDesiltList(@PathVariable String year, HttpServletRequest request, 
			HttpServletResponse response) { 	
		try {
			String result = floodReadyService.exportDesiltList(year, request, response);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("导出清淤数据列表失败");
		}
	}
	
	/**
	 * @Title: exportSpotReformList 
	 * @Description: 导出积水点工程改造数据
	 * @param @param year
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 下午4:40:36 
	 * @version V1.0
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/exportSpotReformList/{year}") 
	public Result exportSpotReformList(@PathVariable String year, HttpServletRequest request, 
			HttpServletResponse response) { 	
		try {
			String result = floodReadyService.exportSpotReformList(year, request, response);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("导出积水点工程改造数据失败");
		}
	}
	
	/**
	 * @Title: exportFacilityList 
	 * @Description: 排水设施检查导出
	 * @param @param year
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 下午5:02:00 
	 * @version V1.0
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/exportFacilityList/{year}") 
	public Result exportFacilityList(@PathVariable String year, HttpServletRequest request, 
			HttpServletResponse response) { 	
		try {
			String result = floodReadyService.exportFacilityList(year, request, response);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("排水设施检查导出失败");
		}
	}
	
	
	
	//-----------------------------------------内涝风险分析部分------------------------------------------------
	
	
	
}
