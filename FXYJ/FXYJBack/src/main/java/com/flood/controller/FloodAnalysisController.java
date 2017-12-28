package com.flood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flood.common.result.Result;
import com.flood.service.FloodAnalysisService;

/**
 * @ClassName: FloodAnalysisController 
 * @Description: 防汛评估模块控制层
 * @author weizl  
 * @date 2017年6月30日 下午4:54:53 
 * @version V1.0
 */
@RestController
@RequestMapping(value="/floodAnalysisController")
public class FloodAnalysisController {

	@Autowired
	private FloodAnalysisService floodAnalysisService;
	
	//-------------------------雨后评估--------------------------
	
	/**
	 * @Title: getCompleteWaringSpotByFloodID 
	 * @Description: 获取已处理或者已反馈的警情点
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午5:11:20 
	 * @version V1.0
	 */
	@RequestMapping(value="/getCompleteWaringSpotByFloodID")
	public Result getCompleteWaringSpotByFloodID(@RequestBody String json) {
		try {
			String result = floodAnalysisService.getCompleteWaringSpotByFloodID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取警情点列表失败");
		}
	}
	
	/**
	 * @Title: addWarningReasonByWarningID 
	 * @Description: 为某个警情点添加原因
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 上午10:48:26 
	 * @version V1.0
	 */
	@RequestMapping(value="/addWarningReasonByWarningID")
	public Result addWarningReasonByWarningID(@RequestBody String json) {
		try {
			int result = floodAnalysisService.addWarningReasonByWarningID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("为某个警情点添加原因失败");
		}
	}
	
	/**
	 * @Title: addStuffListByRelationID 
	 * @Description: 为指定relationID的警情添加物资
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 上午11:16:01 
	 * @version V1.0
	 */
	@RequestMapping(value="/addStuffListByRelationID")
	public Result addStuffListByRelationID(@RequestBody String json) {
		try {
			int result = floodAnalysisService.addStuffListByRelationID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("为指定relationID的警情添加物资失败");
		}
	}
	
	/**
	 * @Title: delStuffByStuffID 
	 * @Description: 删除分配物资
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午1:46:58 
	 * @version V1.0
	 */
	@RequestMapping(value="/delStuffByStuffID")
	public Result delStuffByStuffID(@RequestBody String json) {
		try {
			int result = floodAnalysisService.delStuffByStuffID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("删除分配物资失败");
		}
	}
	
	/**
	 * @Title: updateWarningRepairInfoByID 
	 * @Description: 更新警情的后续整治信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午3:48:49 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateWarningRepairInfoByID")
	public Result updateWarningRepairInfoByID(@RequestBody String json) {
		try {
			int result = floodAnalysisService.updateWarningRepairInfoByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新警情的后续整治信息失败");
		}
	}
	
	/**
	 * @Title: updateWarningLocalInfoByID 
	 * @Description: 更新警情的现场的信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午4:15:38 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateWarningLocalInfoByID")
	public Result updateWarningLocalInfoByID(@RequestBody String json) {
		try {
			int result = floodAnalysisService.updateWarningLocalInfoByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("更新警情的现场的信息失败");
		}
	}
	
	/**
	 * @Title: updateWarningSpotIDByID 
	 * @Description: 根据警情ID修改积水点ID
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午4:33:54 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateWarningSpotIDByID")
	public Result updateWarningSpotIDByID(@RequestBody String json) {
		try {
			int result = floodAnalysisService.updateWarningSpotIDByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据警情ID修改积水点ID失败");
		}
	}
	
	/**
	 * @Title: getSpotListByYear 
	 * @Description: 根据年份获取积水点
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午4:46:59 
	 * @version V1.0
	 */
	@RequestMapping(value="/getSpotListByYear")
	public Result getSpotListByYear(@RequestBody String json) {
		try {
			String result = floodAnalysisService.getSpotListByYear(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据警情ID修改积水点ID失败");
		}
	}
	
	/**
	 * @Title: getFilesByRefIDandUploadTime 
	 * @Description: 根据模块ID及上传时间获取文件
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年7月3日 下午5:08:27 
	 * @version V1.0
	 */
	@RequestMapping(value="/getFilesByRefIDandUploadTime")
	public Result getFilesByRefIDandUploadTime(@RequestBody String json) {
		try {
			String result = floodAnalysisService.getFilesByRefIDandUploadTime(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据模块ID及上传时间获取文件失败");
		}
	}
}
