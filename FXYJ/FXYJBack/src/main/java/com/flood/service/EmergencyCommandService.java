package com.flood.service;

import java.util.List;
import java.util.Map;

/**
 * @ClassName: EmergencyCommandService 
 * @Description: 应急指挥业务逻辑层
 * @author xiaolei  
 * @date 2017年11月23日
 * @version V1.0
 */
public interface EmergencyCommandService {

	/**
	 * @Title: getFloodNameList 
	 * @Description: 汛情名称列表
	 * @return String
	 * @author xiaolei
	 * @throws
	 * @date 2017年6月16日 下午4:20:55 
	 * @version V1.0
	 */
	public List<Map<String, String>> getFloodNameList() throws Exception;

	/**
	 * @Title: getWaringSpotByFloodCode 
	 * @Description: 获取警情点列表,根据汛情编号条件
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return String
	 * @author xiaolei
	 * @throws
	 * @date 2017年11月24日
	 * @version V1.0
	 */
	public List<Map<String, String>> getWaringSpotByFloodCode(String json) throws Exception;
	
	/**
	 * @Title: getAllPreFloodTeam 
	 * @Description: 获取所有防汛队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author xiaolei
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
	public List<Map<String, String>> getAllPreFloodTeam() throws Exception;

	/**
	 * @Title: getWorksheetByPreFloodTeamID 
	 * @Description: 根据防汛队ID获取相关工单
	 * @param  json
	 * @return String
	 * @author xiaolei
	 * @throws Exception
	 * @date 2017年11月29日
	 * @version V1.0
	 */
	public List<Map<String, String>> getWorksheetByPreFloodTeamID(String json) throws Exception;

	/**
	 * @Title: getWorksheetPictureByTaskId
	 * @Description: 获取警情工单中的图片地址，根据工单编号
	 * @param  json
	 * @return Result
	 * @author xiaolei
	 * @throws Exception
	 * @date 2017年11月29日
	 * @version V1.0
	 */
	public List<Map<String, String>> getWorksheetPictureByTaskId(String json) throws Exception;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
