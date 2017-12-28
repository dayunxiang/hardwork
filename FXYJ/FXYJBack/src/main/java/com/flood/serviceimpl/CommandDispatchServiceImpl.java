package com.flood.serviceimpl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.DynaBean;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.dao.DsDsemAnalysisMapper;
import com.flood.dao.DsDsemFloodMapper;
import com.flood.dao.DsDsemTaskMapper;
import com.flood.dao.DsDsemUsedfileMapper;
import com.flood.dao.DsDsemUsedteamMapper;
import com.flood.entity.DsDsemUsedteam;
import com.flood.service.CommandDispatchService;
/**
 * @ClassName: CommandDispatchServiceImpl 
 * @Description: 指挥调度业务逻辑实现层
 * @author weizl  
 * @date 2017年6月27日 下午5:41:21 
 * @version V1.0
 */
@Service
public class CommandDispatchServiceImpl implements CommandDispatchService {
	
	@Autowired
	private DsDsemTaskMapper dsDsemTaskMapper;
	@Autowired
	private DsDsemUsedteamMapper dsDsemUsedteamMapper;
	@Autowired
	private DsDsemUsedfileMapper dsDsemUsedfileMapper;
	@Autowired
	private DsDsemAnalysisMapper dsDsemAnalysisMapper;
	@Autowired
	private DsDsemFloodMapper dsDsemFloodMapper;

	@Override
	public String getWorksheetByWarningID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int warningID = Integer.parseInt(Util.toString(bean.get("warningID")));
		// 获取数据列表
		List<Map<String, String>> taskList = dsDsemTaskMapper.getWorksheetByWarningID(warningID);
		if (taskList!=null && taskList.size()>0) {
			for(Map<String, String> map : taskList) {
				// taskID
				int taskId = Integer.parseInt(Util.toString(map.get("TASKID")));
				// 根据工单ID获取执行小组列表
				List<Map<String, String>> usedTeams = dsDsemUsedteamMapper.getPreFloodTeamByWorksheetID(taskId);
				if (usedTeams!=null && usedTeams.size()>0) {
					for(Map<String, String> teamMap : usedTeams) {
						// taskID
						int RELATIONID = Integer.parseInt(Util.toString(teamMap.get("RELATIONID")));
						System.out.println(RELATIONID);
						// 此处去获取对象下的图片，不按.net的那种方式取，暂时跳过，对接数据的时候再处理
					}
					map.put("Teams", usedTeams.toString());
				}
				
			}
		}
		return JsonPluginsUtil.beanList2Json(taskList);
	}

	@Override
	public String getWorksheetByOrderTime(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		Date st = DateToolsUtil.strToDate(Util.toString(bean.get("st")));
		Date et = DateToolsUtil.strToDate(Util.toString(bean.get("et")));
		// 获取数据列表
		List<Map<String, String>> taskList = dsDsemTaskMapper.getWorksheetByOrderTime(st, et);
		if (taskList!=null && taskList.size()>0) {
			for(Map<String, String> map : taskList) {
				// taskID
				int taskId = Integer.parseInt(Util.toString(map.get("TASKID")));
				// 根据工单ID获取执行小组列表
				List<Map<String, String>> usedTeams = dsDsemUsedteamMapper.getPreFloodTeamByWorksheetID(taskId);
				if (usedTeams!=null && usedTeams.size()>0) {
					for(Map<String, String> teamMap : usedTeams) {
						// taskID
						int RELATIONID = Integer.parseInt(Util.toString(teamMap.get("RELATIONID")));
						System.out.println(RELATIONID);
						// 此处去获取对象下的图片，不按.net的那种方式取，暂时跳过，对接数据的时候再处理
					}
					map.put("Teams", usedTeams.toString());
				}
				
			}
		}
		return JsonPluginsUtil.beanList2Json(taskList);
	}

	@Override
	public int deleteWorksheetByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		int res = dsDsemTaskMapper.deleteWorksheetByID(id);
		return res;
	}

	@Override
	public int updateWorksheetStatusByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		int statusID = Integer.parseInt(Util.toString(bean.get("statusID")));
		Date nowDate = new Date();
		int res = dsDsemTaskMapper.updateWorksheetStatusByID(id, statusID, nowDate);
		return res;
	}

	@Override
	public String getWorksheetDetailByWorksheetID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		List<Map<String, String>> list = dsDsemUsedfileMapper.getWorksheetDetailByWorksheetID(id);
		return JsonPluginsUtil.beanList2Json(list);
	}

	@Override
	public int updateWarningSpotStatusByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		int statusID = Integer.parseInt(Util.toString(bean.get("statusID")));
		Date nowDate = null;
		if (statusID == 3 || statusID == 4 || statusID == 5) {
			nowDate = new Date();
		}
		int res = dsDsemAnalysisMapper.updateWarningSpotStatusByID(id, statusID, nowDate);
		return res;
	}

	@Override
	public String getFloodByTime(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		String startDStr = year + "-01" + "-01";
		String endDStr = year + "-12" + "-31";
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date startDate = format.parse(startDStr);
		Date endDate = format.parse(endDStr);
		List<Map<String, String>> list = dsDsemFloodMapper.getFloodByTime(startDate, endDate);
		return JsonPluginsUtil.beanList2Json(list);
	}

}
