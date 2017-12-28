package com.flood.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @ClassName: FloodReadyService 
 * @Description: 防汛准备业务类
 * @author weizl  
 * @date 2017年6月8日 下午12:36:01 
 * @version V1.0
 */
public interface FloodReadyService {


	//-----------------------------------------气象信息部分------------------------------------------------
	
	
	
	//-----------------------------------------防汛预警部分------------------------------------------------
	
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
	public int updateFloodInfo(String json) throws Exception;
	
	/**
	 * @Title: updateRespondMethodByWarningType 
	 * @Description: 更新预警响应行动措施
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月27日 下午3:33:39 
	 * @version V1.0
	 */
	public int updateRespondMethodByWarningType(String json);
	
	/**
	 * @Title: getAllPreFloodPlan 
	 * @Description: 读取预案列表
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月27日 下午3:42:44 
	 * @version V1.0
	 */
	public String getAllPreFloodPlan(String json);
	
	/**
	 * @Title: delPreFloodPlan 
	 * @Description: 删除预案
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月27日 下午4:01:57 
	 * @version V1.0
	 */
	public int delPreFloodPlan(String json);
	
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
	public String getPersonsByType(String json) throws Exception;

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
	public String getAllPreFloodTeam(String json) throws Exception;

	/**
	 * @Title: getAllPreFloodStuff 
	 * @Description: 获取所有防汛队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	public String getAllPreFloodStuff(String json) throws Exception;

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
	public int deletePerson(String json) throws Exception;

	/**
	 * @Title: getTeamStuffByStuffID 
	 * @Description: 
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	public String getTeamStuffByStuffID(String json) throws Exception;

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
	public int addPerson(String json) throws Exception;

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
	public int updatePerson(String json) throws Exception;

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
	public int addTeamStuff(String json) throws Exception;

	/**
	 * @Title: getStuffByTeamID 
	 * @Description: 根据队伍id获取物资
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月13日 上午11:12:29 
	 * @version V1.0
	 */
	public String getStuffByTeamID(String json) throws Exception;

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
	public String getGroupStuffByTeamID(String json) throws Exception;
	
	/**
	 * @Title: deleteTeamStuff 
	 * @Description: 
	 * @param @return
	 * @param @throws Exception
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月13日 下午4:26:45 
	 * @version V1.0
	 */
	public String deleteTeamStuff(String json) throws Exception;

	/**
	 * @Title: addPreFloodTeam 
	 * @Description: 添加防讯队
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午2:01:23 
	 * @version V1.0
	 */
	public String addPreFloodTeam(String json) throws Exception;
	/**
	 * @Title: updatePreFloodTeam 
	 * @Description: 更新防讯队信息
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午2:49:40 
	 * @version V1.0
	 */
	public int updatePreFloodTeam(String json) throws Exception;
	/**
	 * @Title: delPreFloodTeam 
	 * @Description: 删除防讯队信息
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午3:48:20 
	 * @version V1.0
	 */
	public int delPreFloodTeam(String json) throws Exception;

	/**
	 * @Title: addNewStuff 
	 * @Description: 添加防汛物资
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午4:11:43 
	 * @version V1.0
	 */
	public int addNewStuff(String json) throws Exception;

	/**
	 * @Title: updateStuff 
	 * @Description: 更新防汛物资
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午4:45:12 
	 * @version V1.0
	 */
	public int updateStuff(String json) throws Exception;

	/**
	 * @Title: deleteStuff 
	 * @Description: 删除物资
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午5:19:15 
	 * @version V1.0
	 */
	public int deleteStuff(String json) throws Exception;
	
	//-----------------------------------------防汛设备部分------------------------------------------------
	
	/**
	 * @Title: getPumpDeviceListByYearAndPumpInfo 
	 * @Description: 获取雨水泵站设备
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月20日 下午5:12:15 
	 * @version V1.0
	 */
	public String getPumpDeviceListByYearAndPumpInfo(String json) throws Exception;
	

	/**
	 * @Title: addPumpDevice 
	 * @Description: 添加雨水泵站设备
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午9:52:59 
	 * @version V1.0
	 */
	public int addPumpDevice(String json) throws Exception;

	/**
	 * @Title: updatePumpDevice 
	 * @Description: 更新雨水泵站设备
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午10:27:30 
	 * @version V1.0
	 */
	public int updatePumpDevice(String json) throws Exception;

	/**
	 * @Title: deletePumpDevice 
	 * @Description: 删除雨水泵站设备
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午10:43:31 
	 * @version V1.0
	 */
	public int deletePumpDevice(String json) throws Exception;

	/**
	 * @Title: exportPumpDevice 
	 * @Description: 导出雨水泵站设备
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 上午10:53:20 
	 * @version V1.0
	 */
	public String exportPumpDevice(String json, HttpServletRequest request, HttpServletResponse response) throws Exception;
	
	
	
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
	public String getPumpDesiltListByYear(String json) throws Exception;
	
	/**
	 * 
	 * @Title: getSpotReformListByYear   
	 * @Description: 积水区(点)工程改造信息   
	 * @param: @param json
	 * @param: @return
	 * @param: @throws Exception
	 * @author: guxuebei      
	 * @return: String
	 * @date: 2017年6月9日 下午4:27:43      
	 * @throws
	 * @version: V1.0
	 */
	public String getSpotReformListByYear(String json) throws Exception;
	/**
	 * 
	 * @Title: getSpotReformListByYear   
	 * @Description: 排水设施检查
	 * @param: @param json
	 * @param: @return
	 * @param: @throws Exception
	 * @author: guxuebei      
	 * @return: String
	 * @date: 2017年6月9日 下午4:27:43      
	 * @throws
	 * @version: V1.0
	 */
	public String getFacilityListByYear(String json) throws Exception;

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
	public int addPumpDesiltRecord(String json) throws Exception;

	/**
	 * @Title: updatePumpDesiltRecord 
	 * @Description: 添加泵站清淤记录 
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午1:40:39 
	 * @version V1.0
	 */
	public int updatePumpDesiltRecord(String json) throws Exception;
	
	/**
	 * @Title: getAllPump 
	 * @Description: 
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午1:40:39 
	 * @version V1.0
	 */
	public String getAllPump(String json) throws Exception;

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
	public int deletePumpDesiltRecord(String json) throws Exception;

	/**
	 * @Title: addSpotReformRecord 
	 * @Description: 查询积水点改造信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午4:05:58 
	 * @version V1.0
	 */
	public int addSpotReformRecord(String json) throws Exception;

	/**
	 * @Title: updateSpotReformRecord 
	 * @Description: 查询积水点改造信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月15日 下午4:05:58 
	 * @version V1.0
	 */
	public int updateSpotReformRecord(String json) throws Exception;

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
	public int deleteSpotReformRecord(String json) throws Exception;

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
	public int addFacilityRecord(String json) throws Exception;

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
	public int updateFacilityRecord(String json) throws Exception;

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
	public int deleteFacilityRecord(String json) throws Exception;

	/**
	 * @Title: getCompleteWaringSpotByReportDate 
	 * @Description: 获取警情点列表
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 上午11:26:30 
	 * @version V1.0
	 */
	public String getCompleteWaringSpotByReportDate(String json) throws Exception;

	/**
	 * @Title: getRoadDesiltList 
	 * @Description: 
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 下午3:49:32 
	 * @version V1.0
	 */
	public String getRoadDesiltList(String json) throws Exception;

	/**
	 * @Title: getAllFlood 
	 * @Description: 汛情list
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 下午4:20:55 
	 * @version V1.0
	 */
	public String getAllFlood(String json) throws Exception;

	/**
	 * @Title: exportDesiltList 
	 * @Description: 导出清淤数据列表
	 * @param @param json
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月19日 下午5:15:30 
	 * @version V1.0
	 */
	public String exportDesiltList(String year, HttpServletRequest request, 
			HttpServletResponse response) throws Exception;

	/**
	 * @Title: exportSpotReformList 
	 * @Description: 导出积水点工程改造数据
	 * @param @param year
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 下午4:41:08 
	 * @version V1.0
	 */
	public String exportSpotReformList(String year, HttpServletRequest request, 
			HttpServletResponse response) throws Exception;

	/**
	 * @Title: exportFacilityList 
	 * @Description: 排水设置检查导出
	 * @param @param year
	 * @param @param request
	 * @param @param response
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月21日 下午5:02:33 
	 * @version V1.0
	 */
	public String exportFacilityList(String year, HttpServletRequest request, 
			HttpServletResponse response) throws Exception;


	
	//-----------------------------------------内涝风险分析部分------------------------------------------------
	
	
	
}
