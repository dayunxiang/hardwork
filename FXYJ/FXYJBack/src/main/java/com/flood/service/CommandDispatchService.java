package com.flood.service;
/**
 * @ClassName: CommandDispatchService 
 * @Description: 指挥调度业务逻辑层
 * @author weizl  
 * @date 2017年6月27日 下午5:40:41 
 * @version V1.0
 */
public interface CommandDispatchService {

	/**
	 * @Title: getWorksheetByWarningID 
	 * @Description: 根据警情ID获取对应工单
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 上午11:29:21 
	 * @version V1.0
	 */
	public String getWorksheetByWarningID(String json) throws Exception;

	/**
	 * @Title: getWorksheetByOrderTime 
	 * @Description: 根据派单时间获取所有的工单及工单小组
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午2:38:11 
	 * @version V1.0
	 */
	public String getWorksheetByOrderTime(String json) throws Exception;

	/**
	 * @Title: deleteWorksheetByID 
	 * @Description: 根据工单ID删除工单
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午2:59:52 
	 * @version V1.0
	 */
	public int deleteWorksheetByID(String json) throws Exception;

	/**
	 * @Title: updateWorksheetStatusByID 
	 * @Description: 根据工单ID修改工单状态
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午3:06:55 
	 * @version V1.0
	 */
	public int updateWorksheetStatusByID(String json) throws Exception;

	/**
	 * @Title: getWorksheetDetailByWorksheetID 
	 * @Description: 根据工单ID获取工单的图片、水深信息
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午3:16:15 
	 * @version V1.0
	 */
	public String getWorksheetDetailByWorksheetID(String json) throws Exception;

	/**
	 * @Title: updateWarningSpotStatusByID 
	 * @Description: 修改警情状态
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午3:27:50 
	 * @version V1.0
	 */
	public int updateWarningSpotStatusByID(String json) throws Exception;

	/**
	 * @Title: getFloodByTime 
	 * @Description: 根据年份获取汛情
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午4:04:42 
	 * @version V1.0
	 */
	public String getFloodByTime(String json) throws Exception;

}
