package com.flood.service;

import java.util.List;
import java.util.Map;

/**
 * 手机端接口业务逻辑层 
 * @author xiaolei  
 * @date 2017年12月5日
 */
public interface MobileService {

	/**
	 * 获取当前预警状态
	 * @author xiaolei
	 * @date 2017年12月5日
	 */
	public List<Map<String, String>> getFloodWarningStatus() throws Exception;

	/**
	 * 获取警情工单，根据防汛队编号，用于移动端
	 * @author xiaolei
	 * @date 2017年12月6日
	 */
	public List<Map<String, String>> getWorksheetByTeamIDUseMobile(String json) throws Exception;

	/**
	 * 获取警情工单详情，根据警情编号
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	public List<Map<String, String>> getWorksheetDetailByWaringId(String json) throws Exception;

	/**
	 * 现场处理措施列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	public List<Map<String, String>> getMethodList() throws Exception;

	/**
	 * 积水原因列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	public List<Map<String, String>> getWarningReasonList() throws Exception;

	/**
	 * 建议整改方案列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	public List<Map<String, String>> getRepairIdeaList() throws Exception;

	/**
	 * 新建警情点，用于移动端
	 * @author xiaolei
	 * @date 2017年12月8日
	 */
	public void addWarningSpotUseMobile(String json) throws Exception;

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
