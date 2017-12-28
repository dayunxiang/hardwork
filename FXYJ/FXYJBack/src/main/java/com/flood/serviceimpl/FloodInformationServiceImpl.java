package com.flood.serviceimpl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.apache.commons.beanutils.DynaBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.DynaBeanPluginsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.dao.DsDsemAnalysisMapper;
import com.flood.dao.DsDsemTaskMapper;
import com.flood.dao.DsDsemWarningReporterMapper;
import com.flood.dao.DsDsemWarningRespondmethodMapper;
import com.flood.dao.DsDsemWaterspotMapper;
import com.flood.entity.DsDsemAnalysis;
import com.flood.entity.DsDsemWarningReporter;
import com.flood.service.FloodInformationService;
/**
 * @ClassName: FloodInformationServiceImpl 
 * @Description: 防汛信息业务逻辑实现层
 * @author weizl  
 * @date 2017年6月27日 下午5:38:09 
 * @version V1.0
 */
@Service
public class FloodInformationServiceImpl implements FloodInformationService {
	
	@Autowired
	private DsDsemAnalysisMapper dsDsemAnalysisMapper;
	@Autowired
	private DsDsemTaskMapper dsDsemTaskMapper;
	@Autowired
	private DsDsemWarningReporterMapper dsDsemWarningReporterMapper;
	@Autowired
	private DsDsemWarningRespondmethodMapper dsDsemWarningRespondmethodMapper;
	@Autowired
	private DsDsemWaterspotMapper dsDsemWaterspotMapper;

	@Override
	public String getWaringSpotByReportDate2(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		Date startDate = DateToolsUtil.strToDate(Util.toString(bean.get("startDate")));
		Date endDate = DateToolsUtil.strToDate(Util.toString(bean.get("endDate")));
		List<Map<String, String>> list = dsDsemAnalysisMapper.getWaringSpotByReportDate2(startDate, endDate);
		return JsonPluginsUtil.beanList2Json(list);
	}

	@Override
	public int deleteWaringSpotByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		// 根据警情ID假删除警情
		int res = dsDsemAnalysisMapper.deleteWaringSpotByID(id);
		// 删除该警情下的工单
		if (res>0) {
			dsDsemTaskMapper.deleteWorksheetByWarningID(id);
		}
		return res;
	}

	@Override
	public int addWarningReporter(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int warningID = Integer.parseInt(Util.toString(bean.get("warningID")));
		String reporter = Util.toString(bean.get("reporter"));
		String reporterTel = Util.toString(bean.get("reporterTel"));
		int sourceID = Integer.parseInt(Util.toString(bean.get("sourceID")));
		
		DsDsemWarningReporter dsReporter = new DsDsemWarningReporter();
		int maxId = dsDsemWarningReporterMapper.getMaxId() + 1;
		dsReporter.setRecordid(maxId);
		dsReporter.setWarningid(warningID);
		dsReporter.setReporter(reporter);
		dsReporter.setReportertel(reporterTel);
		dsReporter.setSourceid(sourceID);
		
		int result = dsDsemWarningReporterMapper.insertSelective(dsReporter);
		return result;
	}

	@Override
	@Transactional
	public int addSimpleWarningSpot(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String location = Util.toString(bean.get("location"));
		String warningDes = Util.toString(bean.get("warningDes"));
		String reporter = Util.toString(bean.get("reporter"));
		String reporterTel = Util.toString(bean.get("reporterTel"));
		Date reportTime = DateToolsUtil.strToDate(Util.toString(bean.get("reportTime")));
		int sourceID = Integer.parseInt(Util.toString(bean.get("sourceID")));
		double x = Double.parseDouble(Util.toString(bean.get("x")));
		double y = Double.parseDouble(Util.toString(bean.get("y")));
		
		int maxId = dsDsemAnalysisMapper.getMaxId() + 1;
		// 获取警情编码最大值(警情名称变为警情编码)
		String maxWarningName = getMaxWarningCode();
		// 获取最大的汛情级别ID
		int maxFloodLevelID = dsDsemWarningRespondmethodMapper.getMaxFloodLevelID();
		// 添加数据
		int res = dsDsemAnalysisMapper.addSimpleWarningSpot(maxId, maxWarningName, sourceID, reporter, reporterTel, 
				reportTime, warningDes, location, x, y, maxFloodLevelID);
		// 添加报警人员记录
		if (res>0) {
			int warningID = dsDsemAnalysisMapper.getMaxId();
			DynaBean bean2 = DynaBeanPluginsUtil.invoke();
			bean2.set("warningID", warningID);
			bean2.set("reporter", reporter);
			bean2.set("reporterTel", reporterTel);
			bean2.set("sourceID", sourceID);
			addWarningReporter(JsonPluginsUtil.bean2Json(bean2));
		}
		return res;
	}
	
	/**
	 * @Title: getMaxWarningCode 
	 * @Description: 获取警情编码最大值
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月29日 下午1:49:30 
	 * @version V1.0
	 */
	public String getMaxWarningCode() {
		String result = "";
		Date now = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		String nowDate = format.format(now);
		String maxWarningName = dsDsemAnalysisMapper.getMaxWarningCode(nowDate);
		if (!Util.isNull(maxWarningName)) {
			// BigDecimal的加法操作
			BigDecimal one = new BigDecimal("1");
			BigDecimal bigDecimal = new BigDecimal(maxWarningName);
			BigDecimal sum = null;
			sum = bigDecimal.add(one);
			result = sum.toString();
		}else{
			result = nowDate + "000";
		}
		return result;
	}

	@Override
	public int updateWarningSpotByID(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int id = Integer.parseInt(Util.toString(bean.get("id")));
		String waringName = Util.toString(bean.get("waringName"));
		String warningDes = Util.toString(bean.get("warningDes"));
		String warningLocation = Util.toString(bean.get("warningLocation"));
		String warningSource = Util.toString(bean.get("warningSource"));
		String warningReporter = Util.toString(bean.get("warningReporter"));
		String warningReporterTel = Util.toString(bean.get("warningReporterTel"));
		String warningLevel = Util.toString(bean.get("warningLevel"));
		Date warningTime = DateToolsUtil.strToDate(Util.toString(bean.get("warningTime")));
		int warningPFPID = Integer.parseInt(Util.toString(bean.get("warningPFPID")));
		int warningIsCompleted = Integer.parseInt(Util.toString(bean.get("warningIsCompleted")));
		Date completedTime = DateToolsUtil.strToDate(Util.toString(bean.get("warningTime")));
		
		int res = dsDsemAnalysisMapper.updateWarningSpotByID(id, waringName, warningDes, warningLocation, warningSource, 
				warningReporter, warningReporterTel, warningTime, warningLevel, warningPFPID, warningIsCompleted, completedTime);
		return res;
	}

	@Override
	public String getSpotList(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		int type = Integer.parseInt(Util.toString(bean.get("type")));
		List<Map<String, String>> list = dsDsemWaterspotMapper.getSpotList(type);
		return JsonPluginsUtil.beanList2Json(list);
	}

}
