package com.flood.serviceimpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

import org.apache.commons.beanutils.DynaBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flood.common.entity.PoiDataBean;
import com.flood.common.entity.PoiTitleBean;
import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.DynaBeanPluginsUtil;
import com.flood.common.utils.ExcelPoiPluginsUtil;
import com.flood.common.utils.FileToolsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.dao.DsDsemAnalysisMapper;
import com.flood.dao.DsDsemDrainageFacilityMapper;
import com.flood.dao.DsDsemFloodMapper;
import com.flood.dao.DsDsemPersonsMapper;
import com.flood.dao.DsDsemPrefloodplanMapper;
import com.flood.dao.DsDsemPrefloodstuffMapper;
import com.flood.dao.DsDsemPrefloodteamMapper;
import com.flood.dao.DsDsemPumpDesiltMapper;
import com.flood.dao.DsDsemPumpDeviceMapper;
import com.flood.dao.DsDsemPumpGenMapper;
import com.flood.dao.DsDsemPumpMapper;
import com.flood.dao.DsDsemRoadDesiltMapper;
import com.flood.dao.DsDsemSpotreformMapper;
import com.flood.dao.DsDsemTeamstuffMapper;
import com.flood.dao.DsDsemUsedstuffMapper;
import com.flood.dao.DsDsemWarningReporterMapper;
import com.flood.dao.DsDsemWarningRespondmethodMapper;
import com.flood.dao.DsDsemWarningreasonMapper;
import com.flood.entity.DsDsemDrainageFacility;
import com.flood.entity.DsDsemPrefloodstuff;
import com.flood.entity.DsDsemPrefloodteam;
import com.flood.entity.DsDsemPump;
import com.flood.entity.DsDsemPumpDesilt;
import com.flood.entity.DsDsemPumpDevice;
import com.flood.entity.DsDsemSpotreform;
import com.flood.service.FloodReadyService;
/**
 * @ClassName: FloodReadyServiceImpl 
 * @Description: 防汛准备业务实现类
 * @author weizl  
 * @date 2017年6月8日 下午12:34:52 
 * @version V1.0
 */
@Service
public class FloodReadyServiceImpl implements FloodReadyService {

	@Autowired
	private DsDsemPersonsMapper dsDsemPersonsMapper;
	@Autowired
	private DsDsemPrefloodteamMapper dsDsemPrefloodteamMapper;
	@Autowired
	private DsDsemPrefloodstuffMapper dsDsemPrefloodstuffMapper;
	@Autowired
	private DsDsemTeamstuffMapper dsDsemTeamstuffMapper;
	@Autowired
	private DsDsemPumpDesiltMapper dsDsemPumpDesiltMapper;
	@Autowired
	private DsDsemSpotreformMapper dsDsemSpotreformMapper;
	@Autowired
	private DsDsemDrainageFacilityMapper dsDsemDrainageFacilityMapper;
	@Autowired
	private DsDsemUsedstuffMapper dsDsemUsedstuffMapper;
	@Autowired
	private DsDsemPumpMapper dsDsemPumpMapper;
	@Autowired
	private DsDsemPumpGenMapper dsDsemPumpGenMapper;
	@Autowired
	private DsDsemPumpDeviceMapper dsDsemPumpDeviceMapper;
	@Autowired
	private DsDsemAnalysisMapper dsDsemAnalysisMapper;
	@Autowired
	private DsDsemWarningreasonMapper dsDsemWarningreasonMapper;
	@Autowired
	private DsDsemFloodMapper dsDsemFloodMapper;
	@Autowired
	private DsDsemWarningReporterMapper dsDsemWarningReporterMapper;
	@Autowired
	private DsDsemRoadDesiltMapper dsDsemRoadDesiltMapper;
	@Autowired
	private DsDsemWarningRespondmethodMapper dsDsemWarningRespondmethodMapper;
	@Autowired
	private DsDsemPrefloodplanMapper dsDsemPrefloodplanMapper;
	

	//-----------------------------------------气象信息部分------------------------------------------------
	
	
	
	//-----------------------------------------防汛预警部分------------------------------------------------
	
	@Override
	public int updateFloodInfo(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int floodID = Integer.parseInt(Util.toString(bean.get("floodID")));
		String floodPerson = Util.toString(bean.get("floodPerson"));
		String floodManager = Util.toString(bean.get("floodManager"));
		String floodWeatherInfo = Util.toString(bean.get("floodWeatherInfo"));
		String floodSimulateInfo = Util.toString(bean.get("floodSimulateInfo"));
		Date floodDate = DateToolsUtil.strToDate(Util.toString(bean.get("floodDate")));
		int result = dsDsemFloodMapper.updateFloodInfo(floodID, floodPerson, floodManager, 
				floodWeatherInfo, floodSimulateInfo, floodDate);
		return result;
	}

	@Override
	public int updateRespondMethodByWarningType(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int typeID = Integer.parseInt(Util.toString(bean.get("typeID")));
		String respondMetho = Util.toString(bean.get("respondMetho"));
		int result = dsDsemWarningRespondmethodMapper.updateRespondMethodByWarningType(typeID, respondMetho);
		return result;
	}

	@Override
	public String getAllPreFloodPlan(String json) {
		List<Map<String, String>> result = dsDsemPrefloodplanMapper.getAllPreFloodPlan();
		return JsonPluginsUtil.beanList2Json(result);
	}
	
	@Override
	public int delPreFloodPlan(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int planID = Integer.parseInt(Util.toString(bean.get("planID")));
		int result = dsDsemPrefloodplanMapper.delPreFloodPlan(planID);
		return result;
	}
	
	//-----------------------------------------人员物资部分------------------------------------------------
	
	@Override
	public String getPersonsByType(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String type = Util.toString(bean.get("type"));
		List<Map<String, String>> list = dsDsemPersonsMapper.findPersonsByType(type);
		return JsonPluginsUtil.beanList2Json(list);
	}

	@Override
	public String getAllPreFloodTeam(String json) throws Exception {
		List<Map<String, String>> list = dsDsemPrefloodteamMapper.findAllPreFloodTeam();
		if (list!=null && list.size()>0) {
			return JsonPluginsUtil.beanList2Json(list);
		}
		return "";
	}

	@Override
	public String getAllPreFloodStuff(String json) throws Exception {
		List<Map<String, String>> list = dsDsemPrefloodstuffMapper.findAllPreFloodStuff();
		if (list!=null && list.size()>0) {
			return JsonPluginsUtil.beanList2Json(list);
		}
		return "";
	}

	@Override
	public int deletePerson(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String personId = Util.toString(bean.get("personId"));
		int result = dsDsemPersonsMapper.deletePerson(personId);
		return result;
	}

	@Override
	public String getTeamStuffByStuffID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String PFSID = Util.toString(bean.get("PFSID"));
		List<Map<String, String>> list = dsDsemTeamstuffMapper.findTeamStuffByStuffID(PFSID);
		if (list!=null && list.size()>0) {
			return JsonPluginsUtil.beanList2Json(list);
		}
		return "";
	}

	@Override
	public int addPerson(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String personName = Util.toString(bean.get("personName"));
		String chargeArea = Util.toString(bean.get("chargeArea"));
		String phone = Util.toString(bean.get("phone"));
		String email = Util.toString(bean.get("email"));
		String tel = Util.toString(bean.get("tel"));
		String personType = Util.toString(bean.get("personType"));
		double x = Double.parseDouble(Util.toString(bean.get("x")));
		double y = Double.parseDouble(Util.toString(bean.get("y")));
		int result = dsDsemPersonsMapper.addPerson(personName, chargeArea, phone, email, tel, personType, x, y);
		return result;
	}

	@Override
	public int updatePerson(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String personId = Util.toString(bean.get("personId"));
		String personName = Util.toString(bean.get("personName"));
		String chargeArea = Util.toString(bean.get("chargeArea"));
		String phone = Util.toString(bean.get("phone"));
		String email = Util.toString(bean.get("email"));
		String tel = Util.toString(bean.get("tel"));
		String personType = Util.toString(bean.get("personType"));
		double x = Double.parseDouble(Util.toString(bean.get("x")));
		double y = Double.parseDouble(Util.toString(bean.get("y")));
		int result = dsDsemPersonsMapper.updatePerson(personId, personName, chargeArea, phone, email, tel, personType, x, y);
		return result;
	}

	@Override
	@Transactional
	public int addTeamStuff(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		@SuppressWarnings("unchecked")
		List<DynaBean> dataList = (List<DynaBean>) bean.get("dataList");
		/**
		 * 这里要在原来的基础上做一下改动，原来是在后台判断selected是否为true，
		 * 改为获取的list都是校验好的数据，直接插入
		 */
		if (dataList!=null && dataList.size()>0) {
			int result = 0;
			for(DynaBean dynaBean : dataList) {
				int pfsId = Integer.parseInt(Util.toString(dynaBean.get("stuffId"))); // 这里前台就是StuffID为key
				int teamId = Integer.parseInt(Util.toString(dynaBean.get("teamId"))); 
				double stuffCount = Double.parseDouble(Util.toString(dynaBean.get("count"))); 
				double stuffUsedCount = 0; 
				String reason = Util.toString(dynaBean.get("reason")); 
				String distributePerson = Util.toString(dynaBean.get("distributePerson")); 
				Date distributeTime = new Date(); 
				String usedPerson = Util.toString(dynaBean.get("usedPerson"));
				// 插入（此处将原来的3个方法合并为两个方法）
				dsDsemTeamstuffMapper.addTeamStuff(pfsId, teamId, stuffCount, stuffUsedCount, reason, 
						distributePerson, distributeTime, usedPerson);
				// 更新物资使用数量
				dsDsemPrefloodstuffMapper.updateStuffUseCount(pfsId);
				result++;
			}
			return result;
		}
		return 0;
	}

	@Override
	public String getStuffByTeamID(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int teamID = Integer.parseInt(Util.toString(bean.get("teamID")));
		List<Map<String, String>> list = dsDsemTeamstuffMapper.getStuffByTeamID(teamID);
		if (list!=null && list.size()>0) {
			return JsonPluginsUtil.beanList2Json(list);
		}
		return "";
	}

	@Override
	public String getGroupStuffByTeamID(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int teamID = Integer.parseInt(Util.toString(bean.get("teamID")));
		List<Map<String, String>> result = dsDsemTeamstuffMapper.findCountByTeamId(teamID);
		// 组装数据list
		if (result!=null && result.size()>0) {
			List<DynaBean> list = new ArrayList<DynaBean>();
			for(Map<String, String> map : result) {
				DynaBean dynaBean = DynaBeanPluginsUtil.invoke();
				String StuffID = Util.toString(map.get("PFSID"));
				dynaBean.set("StuffID", StuffID);
				dynaBean.set("StuffCount", Util.toString(map.get("COUNT")));
				dynaBean.set("StuffName", Util.toString(map.get("PFSNAME")));
				// 使用的数量
				int usedCount = dsDsemUsedstuffMapper.getStuffUsedCountByID(teamID, Integer.parseInt(StuffID));
				dynaBean.set("UsedCount", usedCount);
				dynaBean.set("Unit", Util.toString(map.get("UNIT")));
				list.add(dynaBean);
			}
			return JsonPluginsUtil.beanList2Json(list);
		}
		return "";
	}

	@Override
	@Transactional
	public String deleteTeamStuff(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int stuffID = Integer.parseInt(Util.toString(bean.get("stuffID")));
		int objID = Integer.parseInt(Util.toString(bean.get("objID")));
		int result = dsDsemTeamstuffMapper.deleteTeamStuff(objID);
		if (result>0) {
			// 更新物资使用数量
			int update = dsDsemPrefloodstuffMapper.updateStuffUseCount(stuffID);
			if (update>0) {
				return "success";
			}
		}
		return "";
	}

	@Override
	public String addPreFloodTeam(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String teamName = Util.toString(bean.get("teamName"));
		String manager = Util.toString(bean.get("manager"));
		String persons = Util.toString(bean.get("persons"));
		int personsCount = Integer.parseInt(Util.toString(bean.get("personsCount")));
		String firm = Util.toString(bean.get("firm"));
		String description = Util.toString(bean.get("description"));
		String tel = Util.toString(bean.get("tel"));
		String email = Util.toString(bean.get("email"));
		String password = Util.toString(bean.get("password"));
		
		DsDsemPrefloodteam floodTeam = new DsDsemPrefloodteam();
		int maxId = dsDsemPrefloodteamMapper.getMaxId()+1;
		floodTeam.setPftid(maxId);
		floodTeam.setPftname(teamName);
		floodTeam.setPersonscount(personsCount);
		floodTeam.setPersons(persons);
		floodTeam.setChargeperson(manager);
		floodTeam.setChargepersontel(tel);
		floodTeam.setChargepersonemail(email);
		floodTeam.setFirm(firm);
		floodTeam.setDescription(description);
		floodTeam.setExaminestatus(0);
		floodTeam.setPassword(password);
		
		dsDsemPrefloodteamMapper.insertSelective(floodTeam);
		
		return "success";
	}

	@Override
	public int updatePreFloodTeam(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int teamId = Integer.parseInt(Util.toString(bean.get("teamId")));
		String teamName = Util.toString(bean.get("teamName"));
		String manager = Util.toString(bean.get("manager"));
		String persons = Util.toString(bean.get("persons"));
		int personsCount = Integer.parseInt(Util.toString(bean.get("personsCount")));
		String firm = Util.toString(bean.get("firm"));
		String description = Util.toString(bean.get("description"));
		String tel = Util.toString(bean.get("tel"));
		String email = Util.toString(bean.get("email"));
		String password = Util.toString(bean.get("password"));
		
		int result = dsDsemPrefloodteamMapper.updatePreFloodTeam(teamId, teamName, manager, persons, 
				personsCount, firm, description, tel, email, password);
		return result;
	}

	@Override
	public int delPreFloodTeam(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int teamId = Integer.parseInt(Util.toString(bean.get("teamId")));
		int result = dsDsemPrefloodteamMapper.delPreFloodTeam(teamId);
		return result;
	}

	@Override
	public int addNewStuff(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String name = Util.toString(bean.get("name"));
		double count = Double.parseDouble(Util.toString(bean.get("count")));
		String warehouse = Util.toString(bean.get("warehouse"));
		String des = Util.toString(bean.get("des"));
		String unit = Util.toString(bean.get("unit"));
		String status = Util.toString(bean.get("status"));
		
		DsDsemPrefloodstuff floodStuff = new DsDsemPrefloodstuff();
		int maxId = dsDsemPrefloodstuffMapper.getMaxId()+1;
		floodStuff.setPfsid(maxId);
		floodStuff.setPfsname(name);
		floodStuff.setGrosscount(count);
		floodStuff.setCanprovidedcount(count);
		floodStuff.setUsedcount(0.0);
		floodStuff.setWarehouse(warehouse);
		floodStuff.setDescription(des);
		floodStuff.setUnit(unit);
		floodStuff.setPfsstatus(status);
		
		int result = dsDsemPrefloodstuffMapper.insertSelective(floodStuff);
		return result;
	}

	@Override
	public int updateStuff(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int stuffID = Integer.parseInt(Util.toString(bean.get("stuffID")));
		String name = Util.toString(bean.get("name"));
		double count = Double.parseDouble(Util.toString(bean.get("count")));
		double usedCount = Double.parseDouble(Util.toString(bean.get("usedCount")));
		String warehouse = Util.toString(bean.get("warehouse"));
		String des = Util.toString(bean.get("des"));
		String unit = Util.toString(bean.get("unit"));
		String status = Util.toString(bean.get("status"));
		
		int result = dsDsemPrefloodstuffMapper.updateStuff(stuffID, name, count, warehouse, des, usedCount, unit, status);
		return result;
	}

	@Override
	@Transactional
	public int deleteStuff(String json) {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int stuffID = Integer.parseInt(Util.toString(bean.get("stuffID")));
		int result = dsDsemPrefloodstuffMapper.deleteStuff(stuffID);
		if (result>0) {
			dsDsemUsedstuffMapper.delStuffByStuffID(stuffID);
			dsDsemTeamstuffMapper.delTeamStuffByStuffID(stuffID);
			return 1;
		}
		return 0;
	}

	
	//-----------------------------------------防汛设备部分------------------------------------------------
	
	@Override
	public String getPumpDeviceListByYearAndPumpInfo(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		int pumpID = Integer.parseInt(Util.toString(bean.get("pumpID")));
		int pumpType = Integer.parseInt(Util.toString(bean.get("pumpType")));
		List<Map<String, String>> list = dsDsemPumpDeviceMapper.getPumpDeviceListByYearAndPumpInfo(year, pumpID, pumpType);
		if (list!=null && list.size()>0) {
			return JsonPluginsUtil.list2Json(list);
		}
		return "";
	}
	

	@Override
	public int addPumpDevice(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String name = Util.toString(bean.get("name"));
		String year = Util.toString(bean.get("year"));
		String size = Util.toString(bean.get("size"));
		String detail = Util.toString(bean.get("detail"));
		String des = Util.toString(bean.get("des"));
		Date completetime = DateToolsUtil.strToDate(Util.toString(bean.get("completetime")));
		int status = Integer.parseInt(Util.toString(bean.get("status")));
		int pumpID = Integer.parseInt(Util.toString(bean.get("pumpID")));
		int pumpType = Integer.parseInt(Util.toString(bean.get("pumpType")));
		
		DsDsemPumpDevice device = new DsDsemPumpDevice();
		int maxId = dsDsemPumpDeviceMapper.getMaxId() + 1;
		device.setDeviceid(maxId);
		device.setDevicename(name);
		device.setDevicesize(size);
		device.setCompletetime(completetime);
		device.setStatus(status);
		device.setDescription(des);
		device.setPumpid(pumpID);
		device.setPumptype(pumpType);
		device.setDetail(detail);
		device.setYear(year);
		int result = dsDsemPumpDeviceMapper.insertSelective(device);
		return result;
	}
	
	@Override
	public int updatePumpDevice(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int deviceID = Integer.parseInt(Util.toString(bean.get("deviceID")));
		String name = Util.toString(bean.get("name"));
		String year = Util.toString(bean.get("year"));
		String size = Util.toString(bean.get("size"));
		String detail = Util.toString(bean.get("detail"));
		String des = Util.toString(bean.get("des"));
		Date completetime = DateToolsUtil.strToDate(Util.toString(bean.get("completetime")));
		int status = Integer.parseInt(Util.toString(bean.get("status")));
		int pumpID = Integer.parseInt(Util.toString(bean.get("pumpID")));
		int pumpType = Integer.parseInt(Util.toString(bean.get("pumpType")));
		// 更新
		int result = dsDsemPumpDeviceMapper.updatePumpDevice(deviceID, name, year, size, detail, des, 
				completetime, status, pumpID, pumpType);
		return result;
	}
	
	@Override
	public int deletePumpDevice(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int deviceID = Integer.parseInt(Util.toString(bean.get("deviceID")));
		int result = dsDsemPumpDeviceMapper.deletePumpDevice(deviceID);
		return result;
	}

	@Override
	public String exportPumpDevice(String json, HttpServletRequest request, 
			HttpServletResponse response) throws Exception {
		// TODO 泵站设备导出数据，待完善
		String result = getPumpDeviceListByYearAndPumpInfo(json);
		List<DynaBean> dataList = JsonPluginsUtil.json2arrayBean(result);
		if (dataList!=null && dataList.size()>0) {
			
			String frompath = FileToolsUtil.ROOT + "resource/excel/防汛设备.xlsx";
			// 文件名称
			String filename = "泵站设备数据";
			// 数据Data
			 PoiDataBean dataBean = new PoiDataBean(0, 3, dataList, new String[] {
				//DEVICEID,DEVICENAME,DEVICESIZE,COMPLETETIME,STATUS,DESCRIPTION,PUMPID,PUMPTYPE,YEAR,DETAIL 
				"DEVICENAME",
				"DEVICESIZE",
				"STATUS",
				"DETAIL",
				"COMPLETETIME",
				"DESCRIPTION"
			});
			List<PoiTitleBean> selectsBeans = new ArrayList<PoiTitleBean>();
			String title = "我是一个副标题：日期2017-06-21";
			PoiTitleBean selectBean = new PoiTitleBean(1, Util.toString(title));
			selectsBeans.add(selectBean);
			
			ExcelPoiPluginsUtil.wirte(frompath, filename, dataBean, selectsBeans, request, response);
		}
		return "";
	}
	
	//-----------------------------------------清淤及其他部分------------------------------------------------
	
	@Override
	public String getPumpDesiltListByYear(String json)  throws Exception{
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		List<Map<String, String>> list = dsDsemPumpDesiltMapper.getPumpDesiltListByYear(year);
		return JsonPluginsUtil.beanList2Json(list);
	}
	@Override
	public String getSpotReformListByYear(String json)  throws Exception{
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		List<Map<String, String>> list = dsDsemSpotreformMapper.getSpotReformListByYear(year);
		return JsonPluginsUtil.beanList2Json(list);
	}
	@Override
	public String getFacilityListByYear(String json)  throws Exception{
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		List<Map<String, String>> list = dsDsemDrainageFacilityMapper.getFacilityListByYear(year);
		return JsonPluginsUtil.beanList2Json(list);
	}

	@Override
	public int addPumpDesiltRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int pumpID = Integer.parseInt(Util.toString(bean.get("pumpID")));
		String detail = Util.toString(bean.get("detail"));
		double workload = Double.parseDouble(Util.toString(bean.get("workload")));
		Date completeTime = DateToolsUtil.strToDate(Util.toString(bean.get("completeTime")));
		int status = Integer.parseInt(Util.toString(bean.get("status")));
		String year = Util.toString(bean.get("year"));
		String des = Util.toString(bean.get("des"));
		
		DsDsemPumpDesilt pumpDesilt = new DsDsemPumpDesilt();
		int maxId = dsDsemPumpDesiltMapper.getMaxId()+1;
		pumpDesilt.setObjectid(maxId);
		pumpDesilt.setPumpid(pumpID);
		pumpDesilt.setDetail(detail);
		pumpDesilt.setWorkload(workload);
		if (status==1) {
			pumpDesilt.setCompletetime(completeTime);
		}
		pumpDesilt.setYear(year);
		pumpDesilt.setCompletestatus(status);
		pumpDesilt.setDescription(des);
		
		int result = dsDsemPumpDesiltMapper.insertSelective(pumpDesilt);
		return result;
	}

	@Override
	public int updatePumpDesiltRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int objectID = Integer.parseInt(Util.toString(bean.get("objectID")));
		int pumpID = Integer.parseInt(Util.toString(bean.get("pumpID")));
		String detail = Util.toString(bean.get("detail"));
		double workload = Double.parseDouble(Util.toString(bean.get("workload")));
		Date completeTime = DateToolsUtil.strToDate(Util.toString(bean.get("completeTime")));
		int status = Integer.parseInt(Util.toString(bean.get("status")));
		String year = Util.toString(bean.get("year"));
		String des = Util.toString(bean.get("des"));
		
		int result = dsDsemPumpDesiltMapper.updatePumpDesiltRecord(objectID, pumpID, detail, workload, completeTime, 
				status, des, year);
		return result;
	}

	@Override
	public String getAllPump(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		List<DsDsemPump> list = dsDsemPumpMapper.findDsDsemPumpList();
		if (list!=null && list.size()>0) {
			List<DynaBean> resultList = new ArrayList<DynaBean>();
			for(DsDsemPump pump : list) {
				DynaBean dynaBean = DynaBeanPluginsUtil.invoke();
				dynaBean.set("PUMPID", pump.getPumpid());
				dynaBean.set("PUMPNAME", pump.getPumpname());
				int pumpid = pump.getPumpid();
				int pumpCount = dsDsemPumpDeviceMapper.getPumpStatusCountByPumpID(pumpid, year);
				int genCount = dsDsemPumpGenMapper.getPumpGenStatusCountByPumpID(pumpid, year);
				if (pumpCount>0 || genCount>0) {
					dynaBean.set("STATUS", 0);
				}else{
					dynaBean.set("STATUS", 1);
				}
				resultList.add(dynaBean);
			}
			return JsonPluginsUtil.beanList2Json(resultList);
		}
		return "";
	}

	@Override
	public int deletePumpDesiltRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int objectID = Integer.parseInt(Util.toString(bean.get("objectID")));
		int result = dsDsemPumpDesiltMapper.deletePumpDesiltRecord(objectID);
		return result;
	}

	@Override
	public int addSpotReformRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String spotName = Util.toString(bean.get("spotName"));
		String reason = Util.toString(bean.get("reason"));
		String method = Util.toString(bean.get("method"));
		// 现有的数据库中无此字段
		String responsibility = Util.toString(bean.get("responsibility"));
		String year = Util.toString(bean.get("year"));
		String des = Util.toString(bean.get("des"));
		int status = Integer.parseInt(Util.toString(bean.get("status")));
		// 现有的数据库中无此字段
		Date planCompleteTime = DateToolsUtil.strToDate(Util.toString(bean.get("planCompleteTime")));
		Date completeTime = DateToolsUtil.strToDate(Util.toString(bean.get("completeTime")));
		
		DsDsemSpotreform spotreForm = new DsDsemSpotreform();
		int maxId = dsDsemSpotreformMapper.getMaxId()+1;
		spotreForm.setObjectid(maxId);
		spotreForm.setSpotname(spotName);
		spotreForm.setReason(reason);
		spotreForm.setMethod(method);
		if (status==1) {
			spotreForm.setCompletetime(completeTime);
		}
		spotreForm.setYear(year);
		spotreForm.setCompletestatus(status);
		spotreForm.setDescription(des);
		int result = dsDsemSpotreformMapper.insertSelective(spotreForm);
		return result;
	}

	@Override
	public int updateSpotReformRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int objectID = Integer.parseInt(Util.toString(bean.get("objectID")));
		String spotName = Util.toString(bean.get("spotName"));
		String reason = Util.toString(bean.get("reason"));
		String method = Util.toString(bean.get("method"));
		// 现有的数据库中无此字段
		String responsibility = Util.toString(bean.get("responsibility"));
		String year = Util.toString(bean.get("year"));
		String des = Util.toString(bean.get("des"));
		// 现有的数据库中无此字段
		String x = Util.toString(bean.get("x"));
		// 现有的数据库中无此字段
		String y = Util.toString(bean.get("y"));
		int status = Integer.parseInt(Util.toString(bean.get("status")));
		// 现有的数据库中无此字段
		Date planCompleteTime = DateToolsUtil.strToDate(Util.toString(bean.get("planCompleteTime")));
		Date completeTime = DateToolsUtil.strToDate(Util.toString(bean.get("completeTime")));
		int result = dsDsemSpotreformMapper.updateSpotReformRecord(objectID, spotName, reason, method, status, 
				des, year, completeTime);
		return result;
	}

	@Override
	public int deleteSpotReformRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int objectID = Integer.parseInt(Util.toString(bean.get("objectID")));
		int result = dsDsemSpotreformMapper.deleteSpotReformRecord(objectID);
		return result;
	}

	@Override
	public int addFacilityRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String address = Util.toString(bean.get("address"));
		String department = Util.toString(bean.get("department"));
		String manage = Util.toString(bean.get("manage"));
		String problem = Util.toString(bean.get("problem"));
		String year = Util.toString(bean.get("year"));
		String des = Util.toString(bean.get("des"));
		Date time = DateToolsUtil.strToDate(Util.toString(bean.get("time")));
		
		DsDsemDrainageFacility facility = new DsDsemDrainageFacility();
		int maxId = dsDsemDrainageFacilityMapper.getMaxId() + 1;
		facility.setObjectid(maxId);
		facility.setAddress(address);
		facility.setDepartment(department);
		facility.setManager(manage);
		facility.setProblem(problem);
		facility.setYear(year);
		facility.setDescription(des);
		facility.setCompletetime(time);
		int result = dsDsemDrainageFacilityMapper.insertSelective(facility);
		return result;
	}

	@Override
	public int updateFacilityRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int objectID = Integer.parseInt(Util.toString(bean.get("objectID")));
		String address = Util.toString(bean.get("address"));
		String department = Util.toString(bean.get("department"));
		String manage = Util.toString(bean.get("manage"));
		String problem = Util.toString(bean.get("problem"));
		String year = Util.toString(bean.get("year"));
		String des = Util.toString(bean.get("des"));
		Date time = DateToolsUtil.strToDate(Util.toString(bean.get("time")));
		int result = dsDsemDrainageFacilityMapper.updateFacilityRecord(objectID, address, department, 
				manage, problem, year, des, time);
		return result;
	}

	@Override
	public int deleteFacilityRecord(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int objectID = Integer.parseInt(Util.toString(bean.get("objectID")));
		int result = dsDsemDrainageFacilityMapper.deleteFacilityRecord(objectID);
		return result;
	}

	@Override
	public String getCompleteWaringSpotByReportDate(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		Date st = DateToolsUtil.strToDate(Util.toString(bean.get("st")));
		Date et = DateToolsUtil.strToDate(Util.toString(bean.get("et")));
		List<Map<String, String>> list = dsDsemAnalysisMapper.getCompleteWaringSpotByReportDate(st, et);
		if (list!=null && list.size()>0) {
			List<DynaBean> resultList = new ArrayList<DynaBean>();
			for(Map<String, String> map : list) {
				DynaBean dynaBean = DynaBeanPluginsUtil.invoke();
				int warningId = Integer.parseInt(Util.toString(map.get("WARNINGID")));
				dynaBean.set("WarningID", warningId);
				dynaBean.set("SpotID", Integer.parseInt(Util.toString(map.get("SPOTID"))));
				if (!Util.isNull(Util.toString(map.get("WARNING_UPLOADTIME")))) {
					dynaBean.set("ReportTime", DateToolsUtil.strToDate(Util.toString(map.get("WARNING_UPLOADTIME"))));
				}
				dynaBean.set("CompleteTime", DateToolsUtil.strToDate(Util.toString(map.get("CompleteTime"))));
				if (!Util.isNull(Util.toString(map.get("WATERDEPTH")))) {
					dynaBean.set("Depth", Util.toString(map.get("WATERDEPTH")));
				}
				dynaBean.set("Location", Util.toString(map.get("WARNING_LOCATION")));
				if (!Util.isNull(Util.toString(map.get("EFFECTAREA")))) {
					dynaBean.set("EffectArea", Float.parseFloat(Util.toString(map.get("EFFECTAREA"))));
				}
				dynaBean.set("Method", Util.toString(map.get("Method")));
				dynaBean.set("ReasonList", getWarningReasonByID(warningId));
				dynaBean.set("WarningDes", Util.toString(map.get("WARNING_DESCRIPTION")));
				dynaBean.set("WarningLevel", Util.toString(map.get("WARNING_LEVEL")));
				dynaBean.set("WarningName", Util.toString(map.get("WARNING_NAME")));
				dynaBean.set("WarningSource", Util.toString(map.get("WARNING_SOURCE")));
				dynaBean.set("WarningComplete", Integer.parseInt(Util.toString(map.get("WARNING_ISCOMPLETE"))));
				if (!Util.isNull(Util.toString(map.get("X")))) {
					dynaBean.set("X", Float.parseFloat(Util.toString(map.get("X"))));
				}
				if (!Util.isNull(Util.toString(map.get("Y")))) {
					dynaBean.set("Y", Float.parseFloat(Util.toString(map.get("Y"))));
				}
				if (!Util.isNull(Util.toString(map.get("FLOODID")))) {
					int floodId = Integer.parseInt((Util.toString(map.get("FLOODID"))));
					dynaBean.set("FLOODID", floodId);
					dynaBean.set("FloodInfo", dsDsemFloodMapper.getFloodInfoByID(floodId));
				}
				if (!Util.isNull(Util.toString(map.get("REPAIR_ENDDATE")))) {
					dynaBean.set("RepairEndDate", DateToolsUtil.strToDate(Util.toString(map.get("REPAIR_ENDDATE"))));
				}
				dynaBean.set("RepairDetail", Util.toString(map.get("REPAIR_DETAIL")));
				dynaBean.set("RepairChargePerson", Util.toString(map.get("REPAIR_CHARGEPERSON")));
				dynaBean.set("RepairExaminPerson", Util.toString(map.get("REPAIR_EXAMINPERSON")));
				if (!Util.isNull(Util.toString(map.get("REPAIR_STATUS")))) {
					dynaBean.set("RepairStatus", Util.toString(map.get("REPAIR_STATUS")));
				}
				List<Map<String, String>> reporterList = dsDsemWarningReporterMapper.getWarningReporterByWarningID(warningId);
				dynaBean.set("Reporter", reporterList);
				dynaBean.set("ReportCount", reporterList.size());
				
				resultList.add(dynaBean);
			}
			return JsonPluginsUtil.beanList2Json(resultList);
		}
		return "";
	}
	
	/**
	 * @Title: getWarningReasonByID 
	 * @Description: 通过警情ID获取警情原因
	 * @param @param id
	 * @param @return
	 * @return List<DynaBean>
	 * @author weizl
	 * @throws
	 * @date 2017年6月16日 下午2:50:01 
	 * @version V1.0
	 */
	public List<DynaBean> getWarningReasonByID(int id) {
		List<Map<String, String>> list = dsDsemWarningreasonMapper.getWarningReasonByID(id);
		if (list!=null && list.size()>0) {
			List<DynaBean> resultList = new ArrayList<DynaBean>();
			for(Map<String, String> map : list) {
				DynaBean dynaBean = DynaBeanPluginsUtil.invoke();
				dynaBean.set("FACTORID", map.get("REASONID"));
				dynaBean.set("FACTORNAME", map.get("FACTORNAME"));
				resultList.add(dynaBean);
			}
			return resultList;
		}
		return null;
	}

	@Override
	public String getRoadDesiltList(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		List<Map<String, String>> list = dsDsemRoadDesiltMapper.getRoadDesiltList(year);
		if (list!=null && list.size()>0) {
			return JsonPluginsUtil.beanList2Json(list);
		}
		return "";
	}

	@Override
	public String getAllFlood(String json) throws Exception {
		List<Map<String, String>> list = dsDsemFloodMapper.getAllFlood();
		if (list!=null && list.size()>0) {
			return JsonPluginsUtil.beanList2Json(list);
		}
		return "";
	}

	@Override
	public String exportDesiltList(String year, HttpServletRequest request, 
			HttpServletResponse response) throws Exception {
		
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("year", year);	
		String result = getPumpDesiltListByYear(JsonPluginsUtil.bean2Json(bean));
		List<DynaBean> data = JsonPluginsUtil.json2arrayBean(result);
		
		if (data!=null && data.size()>0) {
			
			String frompath = FileToolsUtil.ROOT + "resource/excel/泵站清淤.xlsx";
			// 文件名称
			String filename = "泵站清淤";
			// 数据Data
			 PoiDataBean dataBean = new PoiDataBean(0, 3, data, new String[] {
					"PUMPNAME",
					"DETAIL",
					"WORKLOAD",
					"COMPLETETIME",
					"COMPLETESTATUS",
					"DESCRIPTION"
			});
			List<PoiTitleBean> selectsBeans = new ArrayList<PoiTitleBean>();
			String title = "";
			PoiTitleBean selectBean = new PoiTitleBean(1, Util.toString(title));
			selectsBeans.add(selectBean);
			
			ExcelPoiPluginsUtil.wirte(frompath, filename, dataBean, selectsBeans, request, response);
		}
		return "";
	}

	@Override
	public String exportSpotReformList(String year, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("year", year);	
		String result = getSpotReformListByYear(JsonPluginsUtil.bean2Json(bean));
		List<DynaBean> data = JsonPluginsUtil.json2arrayBean(result);
		
		int i = 0;
		if (data!=null && data.size()>0) {
			for(DynaBean bean2 : data) {
				bean2.set("No", i+=1);
				bean2.set("PLANCOMPLETETIME", "越早越好");
			}
			
			String frompath = FileToolsUtil.ROOT + "resource/excel/积水点改造.xlsx";
			// 文件名称
			String filename = "积水点改造";
			// 数据Data
			 PoiDataBean dataBean = new PoiDataBean(0, 3, data, new String[] {
					"No",
					"SPOTNAME",
					"REASON",
					"METHOD",
					"RESPONSIBILITY",
					"PLANCOMPLETETIME",
					"COMPLETETIME",
					"COMPLETESTATUS",
					"DESCRIPTION"
			});
			List<PoiTitleBean> selectsBeans = new ArrayList<PoiTitleBean>();
			String title = "";
			PoiTitleBean selectBean = new PoiTitleBean(1, Util.toString(title));
			selectsBeans.add(selectBean);
			
			ExcelPoiPluginsUtil.wirte(frompath, filename, dataBean, selectsBeans, request, response);
		}
		return "";
	}

	@Override
	public String exportFacilityList(String year, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("year", year);	
		String result = getFacilityListByYear(JsonPluginsUtil.bean2Json(bean));
		List<DynaBean> data = JsonPluginsUtil.json2arrayBean(result);
		
		int i = 0;
		if (data!=null && data.size()>0) {
			for(DynaBean bean2 : data) {
				bean2.set("No", i+=1);
			}
			
			String frompath = FileToolsUtil.ROOT + "resource/excel/排水设施检查.xlsx";
			// 文件名称
			String filename = "积水点改造";
			// 数据Data
			PoiDataBean dataBean = new PoiDataBean(0, 3, data, new String[] {
				"No",
				"ADDRESS",
				"DEPARTMENT",
				"MANAGER",
				"PROBLEM",
				"COMPLETETIME",
				"DESCRIPTION"
			});
			List<PoiTitleBean> selectsBeans = new ArrayList<PoiTitleBean>();
			String title = "";
			PoiTitleBean selectBean = new PoiTitleBean(1, Util.toString(title));
			selectsBeans.add(selectBean);
			
			ExcelPoiPluginsUtil.wirte(frompath, filename, dataBean, selectsBeans, request, response);
		}
		return "";
	}

	
	//-----------------------------------------内涝风险分析部分------------------------------------------------
	
	
	
}
