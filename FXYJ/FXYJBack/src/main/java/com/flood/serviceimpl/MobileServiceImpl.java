package com.flood.serviceimpl;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.DynaBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.dao.MobileSearchMapper;
import com.flood.service.MobileService;
/**
 * @ClassName: MobileServiceImpl 
 * @Description: 手机端接口逻辑实现层
 * @author xiaolei
 * @date 2017年12月5日
 * @version V1.0
 */
@Service
public class MobileServiceImpl implements MobileService {

	@Autowired
	private MobileSearchMapper mobileSearchMapper;
	
	/**
	 * 获取当前预警状态
	 * @author xiaolei
	 * @date 2017年12月5日
	 */
	@Override
	public List<Map<String, String>> getFloodWarningStatus() throws Exception {
		List<Map<String, String>> list = mobileSearchMapper.getFloodWarningStatus();
		if (list==null || list.size()==0) {
			list = mobileSearchMapper.getNoFloodWarning();
		}
		Util.replaceNull(list);	
		return list;
	}
	
	/**
	 * 获取警情工单，根据防汛队编号，用于移动端
	 * @author xiaolei
	 * @date 2017年12月6日
	 */
	@Override
	public List<Map<String, String>> getWorksheetByTeamIDUseMobile(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String floodCode = Util.toString(bean.get("FloodCode"));
		String teamId = Util.toString(bean.get("TeamId"));
		List<Map<String, String>> list = mobileSearchMapper.getWorksheetByTeamIDUseMobile(floodCode, teamId);
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
			return list;
		}
		return list;
	}
	
	/**
	 * 获取警情工单详情，根据警情编号
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	@Override
	public List<Map<String, String>> getWorksheetDetailByWaringId(String json) throws Exception {
		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String WARNINGID = Util.toString(bean.get("WARNINGID"));
		//警情详细信息
		List<Map<String, String>> warningList = mobileSearchMapper.getWorksheetDetailByWaringId(WARNINGID);
		//警情积水原因
		List<Map<String, String>> reasonList = mobileSearchMapper.getWaringReasonByWaringId(WARNINGID);
		//拼接积水原因为字符串
		String reasonStr = "";
		if (reasonList!=null && reasonList.size()>0) {
			for(int i=0; i<reasonList.size(); i++){
				Map<String, String> reasonInfo = reasonList.get(i);
				Iterator<Map.Entry<String,String>> it = reasonInfo.entrySet().iterator();
		        it.hasNext();	//默认为1列
	        	Map.Entry<String,String> entry = it.next();
	        	reasonStr += ";" + entry.getValue();
			}
			reasonStr = reasonStr.substring(1);
		}
		//将积水原因放到警情详细信息中
		if (warningList!=null && warningList.size()>0) {
	        Map<String, String> waringInfo = warningList.get(0);
	        waringInfo.put("WARNINGREASON", reasonStr);
	      //去除无效字符
			Util.replaceNull(warningList);
		}
		return warningList;
	}
	
	/**
	 * 现场处理措施列表
	 * @author xiaolei
	 * @date 2017年12月5日
	 */
	@Override
	public List<Map<String, String>> getMethodList() throws Exception {
		List<Map<String, String>> list = mobileSearchMapper.getMethodList();
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
		}
		return list;
	}
	
	/**
	 * 积水原因列表
	 * @author xiaolei
	 * @date 2017年12月5日
	 */
	@Override
	public List<Map<String, String>> getWarningReasonList() throws Exception {
		List<Map<String, String>> list = mobileSearchMapper.getWarningReasonList();
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
		}
		return list;
	}
	
	/**
	 * 建议整改方案列表
	 * @author xiaolei
	 * @date 2017年12月5日
	 */
	@Override
	public List<Map<String, String>> getRepairIdeaList() throws Exception {
		List<Map<String, String>> list = mobileSearchMapper.getRepairIdeaList();
		if (list!=null && list.size()>0) {
			Util.replaceNull(list);
		}
		return list;
	}
	
	/**
	 * 新建警情点，用于移动端
	 * @author xiaolei
	 * @date 2017年12月8日
	 */
	@Override
	public void addWarningSpotUseMobile(String json) throws Exception {
		Map<String, Object> mapInfo = JsonPluginsUtil.json2Map(json);
		//添加数据
		String FLOODID = mapInfo.get("FLOODID").toString();
		mobileSearchMapper.addWarningSpotUseMobile(mapInfo, FLOODID);
		//神奇自己处理，直接派发工单
		int HandleByMyself = Integer.parseInt(mapInfo.get("HandleByMyself").toString());
	}
	
	
}
