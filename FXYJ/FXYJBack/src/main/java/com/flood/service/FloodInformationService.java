package com.flood.service;
/**
 * @ClassName: FloodInformationService 
 * @Description: 防汛信息模块业务逻辑层
 * @author weizl  
 * @date 2017年6月27日 下午5:37:05 
 * @version V1.0
 */
public interface FloodInformationService {

	/**
	 * @Title: getWaringSpotByReportDate2 
	 * @Description: 获取警情点列表  
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午10:18:37 
	 * @version V1.0
	 */
	public String getWaringSpotByReportDate2(String json) throws Exception;

	/**
	 * @Title: deleteWaringSpotByID 
	 * @Description: 删除警情连同其下的工单
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午10:46:32 
	 * @version V1.0
	 */
	public int deleteWaringSpotByID(String json) throws Exception;

	/**
	 * @Title: addWarningReporter 
	 * @Description: 添加报警人员记录
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午11:04:17 
	 * @version V1.0
	 */
	public int addWarningReporter(String json) throws Exception;

	/**
	 * @Title: addSimpleWarningSpot 
	 * @Description: 新建警情点，与积水点无关联
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午11:15:47 
	 * @version V1.0
	 */
	public int addSimpleWarningSpot(String json) throws Exception;

	/**
	 * @Title: updateWarningSpotByID 
	 * @Description: 根据警情ID修改状态
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月29日 下午2:46:33 
	 * @version V1.0
	 */
	public int updateWarningSpotByID(String json) throws Exception;

	/**
	 * @Title: getSpotList 
	 * @Description: 获取积水点列表
	 * @param @param json
	 * @param @return
	 * @param @throws Exception
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月29日 下午3:41:25 
	 * @version V1.0
	 */
	public String getSpotList(String json) throws Exception;

}
