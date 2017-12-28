package com.flood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.flood.common.result.Result;
import com.flood.service.FloodInformationService;
/**
 * @ClassName: FloodInformationController 
 * @Description: 汛情信息模块控制层
 * @author weizl  
 * @date 2017年6月27日 下午5:36:16 
 * @version V1.0
 */
@RestController
@RequestMapping(value="/floodInformationController")
public class FloodInformationController {
	
	@Autowired
	private FloodInformationService floodInformationService;

	/**
	 * @Title: getWaringSpotByReportDate2 
	 * @Description: 获取警情点列表  
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午10:17:50 
	 * @version V1.0
	 */
	@RequestMapping(value="/getWaringSpotByReportDate2")
	public Result getWaringSpotByReportDate2(@RequestBody String json) {
		try {
			String result = floodInformationService.getWaringSpotByReportDate2(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取警情点列表失败");
		}
	}
	
	/**
	 * @Title: addSimpleWarningSpot 
	 * @Description: 新建警情点，与积水点无关联
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午11:15:02 
	 * @version V1.0
	 */
	@RequestMapping(value="/addSimpleWarningSpot")
	public Result addSimpleWarningSpot(@RequestBody String json) {
		try {
			int result = floodInformationService.addSimpleWarningSpot(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("新建警情点失败");
		}
	}
	
	/**
	 * @Title: addWarningReporter 
	 * @Description: 添加报警人员记录
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午11:03:56 
	 * @version V1.0
	 */
	@RequestMapping(value="/addWarningReporter")
	public Result addWarningReporter(@RequestBody String json) {
		try {
			int result = floodInformationService.addWarningReporter(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("添加报警人员记录失败");
		}
	}
	
	/**
	 * @Title: deleteWaringSpotByID 
	 * @Description: 根据警情ID删除警情连同其下的工单
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月28日 上午10:45:14 
	 * @version V1.0
	 */
	@RequestMapping(value="/deleteWaringSpotByID")
	public Result deleteWaringSpotByID(@RequestBody String json) {
		try {
			int result = floodInformationService.deleteWaringSpotByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("删除警情连同其下的工单失败");
		}
	}
	
	/**
	 * @Title: updateWarningSpotByID 
	 * @Description:根据警情ID修改状态
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月29日 下午2:46:04 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateWarningSpotByID")
	public Result updateWarningSpotByID(@RequestBody String json) {
		try {
			int result = floodInformationService.updateWarningSpotByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据警情ID修改状态失败");
		}
	}
	
	/**
	 * @Title: getSpotList 
	 * @Description: 获取积水点列表
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月29日 下午3:40:55 
	 * @version V1.0
	 */
	@RequestMapping(value="/getSpotList")
	public Result getSpotList(@RequestBody String json) {
		try {
			String result = floodInformationService.getSpotList(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取积水点列表失败");
		}
	}
}
