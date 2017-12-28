package com.flood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * @ClassName: CommandDispatchController 
 * @Description: 指挥调度控制层
 * @author weizl  
 * @date 2017年6月27日 下午5:40:03 
 * @version V1.0
 */

import com.flood.common.result.Result;
import com.flood.service.CommandDispatchService;
/**
 * @ClassName: CommandDispatchController 
 * @Description: 指挥调度模块控制层
 * @author weizl  
 * @date 2017年6月30日 下午4:54:53 
 * @version V1.0
 */
@RestController
@RequestMapping(value="/commandDispatchController")
public class CommandDispatchController {
	
	@Autowired
	private CommandDispatchService commandDispatchService;

	//------------------------------------抢险应急处理-------------------------------
	
	/**
	 * @Title: getWorksheetByWarningID 
	 * @Description: 根据警情ID获取对应工单
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 上午11:28:47 
	 * @version V1.0
	 */
	@RequestMapping(value="/getWorksheetByWarningID")
	public Result getWorksheetByWarningID(@RequestBody String json) {
		try {
			String result = commandDispatchService.getWorksheetByWarningID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据警情ID获取对应工单失败");
		}
	}
	
	/**
	 * @Title: getWorksheetByOrderTime 
	 * @Description: 根据派单时间获取所有的工单及工单小组
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午2:37:45 
	 * @version V1.0
	 */
	@RequestMapping(value="/getWorksheetByOrderTime")
	public Result getWorksheetByOrderTime(@RequestBody String json) {
		try {
			String result = commandDispatchService.getWorksheetByOrderTime(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据派单时间获取所有的工单及工单小组失败");
		}
	}
	
	/**
	 * @Title: deleteWorksheetByID 
	 * @Description: 根据工单ID删除工单
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午2:59:35 
	 * @version V1.0
	 */
	@RequestMapping(value="/deleteWorksheetByID")
	public Result deleteWorksheetByID(@RequestBody String json) {
		try {
			int result = commandDispatchService.deleteWorksheetByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据工单ID删除工单失败");
		}
	}
	
	/**
	 * @Title: updateWorksheetStatusByID 
	 * @Description: 根据工单ID修改工单状态
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午3:06:31 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateWorksheetStatusByID")
	public Result updateWorksheetStatusByID(@RequestBody String json) {
		try {
			int result = commandDispatchService.updateWorksheetStatusByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据工单ID修改工单状态失败");
		}
	}
	
	/**
	 * @Title: updateWarningSpotStatusByID 
	 * @Description: 修改警情状态
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午3:27:18 
	 * @version V1.0
	 */
	@RequestMapping(value="/updateWarningSpotStatusByID")
	public Result updateWarningSpotStatusByID(@RequestBody String json) {
		try {
			int result = commandDispatchService.updateWarningSpotStatusByID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("修改警情状态失败");
		}
	}
	
	/**
	 * @Title: getWorksheetDetailByWorksheetID 
	 * @Description: 根据工单ID获取工单的图片、水深信息
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午3:15:50 
	 * @version V1.0
	 */
	@RequestMapping(value="/getWorksheetDetailByWorksheetID")
	public Result getWorksheetDetailByWorksheetID(@RequestBody String json) {
		try {
			String result = commandDispatchService.getWorksheetDetailByWorksheetID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据工单ID获取工单的图片、水深信息失败");
		}
	}
	
	//------------------------------------历史轨迹管理-------------------------------
	
	/**
	 * @Title: getFloodByTime 
	 * @Description: 根据年份获取汛情
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午4:03:23 
	 * @version V1.0
	 */
	@RequestMapping(value="/getFloodByTime")
	public Result getFloodByTime(@RequestBody String json) {
		try {
			String result = commandDispatchService.getFloodByTime(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("根据工单ID获取工单的图片、水深信息失败");
		}
	}
	
	
}
