package com.flood.serviceimpl;

import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.DynaBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.dao.DsDsemAnalysisMapper;
import com.flood.dao.DsDsemFloodMapper;
import com.flood.dao.DsDsemPrefloodteamMapper;
import com.flood.dao.DsDsemTaskMapper;
import com.flood.dao.EmergencyCommandSearchMapper;
import com.flood.service.EmergencyCommandService;
/**
 * 应急指挥逻辑实现层
 * @author xiaolei
 * @date 2017年11月23日
 */
@Service
public class EmergencyCommandServiceImpl implements EmergencyCommandService {

	@Autowired
	private EmergencyCommandSearchMapper emergencyCommandSearchMapper;
	
	@Override
	public List<Map<String, String>> getFloodNameList() throws Exception {
		List<Map<String, String>> list = emergencyCommandSearchMapper.getFloodNameList();
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
			return list;
		}
		return null;
	}
	
	@Override
	public List<Map<String, String>> getWaringSpotByFloodCode(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String floodCode = Util.toString(bean.get("FloodCode"));
		List<Map<String, String>> list = emergencyCommandSearchMapper.getWaringSpotByFloodCode(floodCode);
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
			return list;
		}
		return null;
	}
	
	@Override
	public List<Map<String, String>> getAllPreFloodTeam() throws Exception {
		List<Map<String, String>> list = emergencyCommandSearchMapper.findAllPreFloodTeam();
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
			return list;
		}
		return null;
	}
	
	@Override
	public List<Map<String, String>> getWorksheetByPreFloodTeamID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String PFTID = Util.toString(bean.get("PFTID"));
		String FLOODID = Util.toString(bean.get("FLOODID"));
		List<Map<String, String>> list = emergencyCommandSearchMapper.getWorksheetByPreFloodTeamID(PFTID,FLOODID);
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
			return list;
		}
		return null;
	}
	
	@Override
	public List<Map<String, String>> getWorksheetPictureByTaskId(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String TASKID = Util.toString(bean.get("TASKID"));
		String PICTURETYPE = Util.toString(bean.get("PICTURETYPE"));
		List<Map<String, String>> list = emergencyCommandSearchMapper.getWorksheetPictureByTaskId(TASKID, PICTURETYPE);
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
			return list;
		}
		return null;
	}
	
}
