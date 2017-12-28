package com.flood.serviceimpl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.DynaBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.dao.DsDsemAnalysisMapper;
import com.flood.dao.DsDsemFileMapper;
import com.flood.dao.DsDsemUsedstuffMapper;
import com.flood.dao.DsDsemWarningreasonMapper;
import com.flood.dao.DsDsemWaterspotMapper;
import com.flood.entity.DsDsemUsedstuff;
import com.flood.entity.DsDsemWarningreason;
import com.flood.service.FloodAnalysisService;

/**
 * @ClassName: FloodAnalysisServiceImpl 
 * @Description: 防汛评估模块业务接口实现类
 * @author weizl  
 * @date 2017年6月30日 下午4:56:24 
 * @version V1.0
 */
@Service
public class FloodAnalysisServiceImpl implements FloodAnalysisService {
	
	@Autowired
	private DsDsemAnalysisMapper dsDsemAnalysisMapper;
	@Autowired
	private DsDsemWarningreasonMapper dsDsemWarningreasonMapper;
	@Autowired
	private DsDsemUsedstuffMapper dsDsemUsedstuffMapper;
	@Autowired
	private DsDsemWaterspotMapper dsDsemWaterspotMapper;
	@Autowired
	private DsDsemFileMapper dsDsemFileMapper;

	@Override
	public String getCompleteWaringSpotByFloodID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int floodId = Integer.parseInt(Util.toString(bean.get("floodId")));
		List<Map<String, String>> list = dsDsemAnalysisMapper.getCompleteWaringSpotByFloodID(floodId);
		return JsonPluginsUtil.beanList2Json(list);
	}

	@Override
	@Transactional
	public int addWarningReasonByWarningID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int warningID = Integer.parseInt(Util.toString(bean.get("warningID")));
		@SuppressWarnings("unchecked")
		List<DynaBean> reasonlist = (List<DynaBean>) bean.get("objectList");
		int result = 0;
		if (reasonlist!=null && reasonlist.size()>0) {
			// 添加原因
			for(DynaBean dynaBean : reasonlist) {
				int reasonID = Integer.parseInt(Util.toString(dynaBean.get("reasonID")));
				int maxId = dsDsemWarningreasonMapper.getMaxId() + 1;
				DsDsemWarningreason reasonObj = new DsDsemWarningreason();
				reasonObj.setObjectid(maxId);
				reasonObj.setReasonid(reasonID);
				reasonObj.setWarningid(warningID);
				dsDsemWarningreasonMapper.insertSelective(reasonObj);
				result++;
			}
		}
		return result;
	}

	@Override
	@Transactional
	public int addStuffListByRelationID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int relationID = Integer.parseInt(Util.toString(bean.get("relationID")));
		// 删除分配物资
		dsDsemUsedstuffMapper.delStuffByRelationID(relationID);
		int result = 0;
		@SuppressWarnings("unchecked")
		List<DynaBean> stuffList = (List<DynaBean>) bean.get("stuffList");
		if (stuffList!=null && stuffList.size()>0) {
			// 添加原因
			for(DynaBean dynaBean : stuffList) {
				int maxId = dsDsemUsedstuffMapper.getMaxId() + 1;
				int stuffID = Integer.parseInt(Util.toString(dynaBean.get("stuffID")));
				double useCount = Double.parseDouble(Util.toString(dynaBean.get("useCount")));
				double count = Double.parseDouble(Util.toString(dynaBean.get("count")));
				DsDsemUsedstuff usedStuff = new DsDsemUsedstuff();
				usedStuff.setObjectid(maxId);
				usedStuff.setPfsid(stuffID);
				usedStuff.setRelationid(relationID);
				usedStuff.setUsecount(useCount);
				usedStuff.setCount(count);
				dsDsemUsedstuffMapper.insertSelective(usedStuff);
				result++;
			}
		}
		return result;
	}

	@Override
	public int delStuffByStuffID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int stuffID = Integer.parseInt(Util.toString(bean.get("stuffID")));
		int result = dsDsemUsedstuffMapper.delStuffByStuffID(stuffID);
		return result;
	}

	@Override
	public int updateWarningRepairInfoByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		int status = Integer.parseInt(Util.toString(bean.get("status")));
		String detail = Util.toString(bean.get("detail"));
		String chargePerson = Util.toString(bean.get("chargePerson"));
		String exminPerson = Util.toString(bean.get("exminPerson"));
		Date et = DateToolsUtil.str2Date(Util.toString(bean.get("et")));
		int result = dsDsemAnalysisMapper.updateWarningRepairInfoByID(id, status, detail, 
				chargePerson, exminPerson, et);
		return result;
	}

	@Override
	public int updateWarningLocalInfoByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		String method = Util.toString(bean.get("method"));
		double depth = Double.parseDouble(Util.toString(bean.get("depth")));
		double area = Double.parseDouble(Util.toString(bean.get("area")));
		int result = dsDsemAnalysisMapper.updateWarningLocalInfoByID(id, method, depth, area);
		return result;
	}

	@Override
	public int updateWarningSpotIDByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		int spotID = Integer.parseInt(Util.toString(bean.get("spotID")));
		int result = dsDsemAnalysisMapper.updateWarningSpotIDByID(id, spotID);
		return result;
	}

	@Override
	public String getSpotListByYear(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String year = Util.toString(bean.get("year"));
		List<Map<String, String>> list = dsDsemWaterspotMapper.getSpotListByYear(year);
		return JsonPluginsUtil.beanList2Json(list);
	}

	@Override
	public String getFilesByRefIDandUploadTime(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int refID = Integer.parseInt(Util.toString(bean.get("refID")));
		Date st = DateToolsUtil.str2Date(Util.toString(bean.get("st")));
		Date et = DateToolsUtil.str2Date(Util.toString(bean.get("et")));
		List<Map<String, String>> list = dsDsemFileMapper.getFilesByRefIDandUploadTime(refID, st, et);
		return JsonPluginsUtil.beanList2Json(list);
	}
	
}
