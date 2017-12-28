package com.flood.service;
/**
 * @ClassName: FloodAnalysisService 
 * @Description: 防汛评估模块业务接口
 * @author weizl  
 * @date 2017年6月30日 下午4:55:41 
 * @version V1.0
 */
public interface FloodAnalysisService {

	/**
	 * @Title: getCompleteWaringSpotByFloodID 
	 * @Description: TODO(这里用一句话描述这个方法的作用) 
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午5:12:11 
	 * @version V1.0
	 */
	public String getCompleteWaringSpotByFloodID(String json) throws Exception;

	/**
	 * @Title: addWarningReasonByWarningID 
	 * @Description: TODO(这里用一句话描述这个方法的作用) 
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 上午10:48:41 
	 * @version V1.0
	 */
	public int addWarningReasonByWarningID(String json) throws Exception;

	/**
	 * @Title: addStuffListByRelationID 
	 * @Description: 为指定relationID的警情添加物资
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 上午11:16:20 
	 * @version V1.0
	 */
	public int addStuffListByRelationID(String json) throws Exception;
	
	/**
	 * @Title: delStuffByStuffID 
	 * @Description: 删除分配物资
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午1:47:18 
	 * @version V1.0
	 */
	public int delStuffByStuffID(String json) throws Exception;

	/**
	 * @Title: updateWarningRepairInfoByID 
	 * @Description: 更新警情的后续整治信息
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午3:49:08 
	 * @version V1.0
	 */
	public int updateWarningRepairInfoByID(String json) throws Exception;

	/**
	 * @Title: updateWarningLocalInfoByID 
	 * @Description: 更新警情的现场的信息
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午4:16:00 
	 * @version V1.0
	 */
	public int updateWarningLocalInfoByID(String json) throws Exception;

	/**
	 * @Title: updateWarningSpotIDByID 
	 * @Description: 根据警情ID修改积水点ID
	 * @param @param json
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午4:34:06 
	 * @version V1.0
	 */
	public int updateWarningSpotIDByID(String json) throws Exception;

	/**
	 * @Title: getSpotListByYear 
	 * @Description: 
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午4:49:18 
	 * @version V1.0
	 */
	public String getSpotListByYear(String json) throws Exception;

	/**
	 * @Title: getFilesByRefIDandUploadTime 
	 * @Description: 根据模块ID及上传时间获取文件
	 * @param @param json
	 * @param @return
	 * @return String
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午5:09:06 
	 * @version V1.0
	 */
	public String getFilesByRefIDandUploadTime(String json) throws Exception;

}
