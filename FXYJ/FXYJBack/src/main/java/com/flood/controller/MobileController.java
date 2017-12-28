package com.flood.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.flood.common.result.Result;
import com.flood.service.MobileService;
/**
 * 手机端接口
 * @author xiaolei
 * @date 2017年12月5日
 */
@RestController
@RequestMapping(value="/")
public class MobileController {
	
	@Autowired
	private MobileService MobileService;
	
	/**
	 * 获取当前预警状态
	 * @author xiaolei
	 * @date 2017年12月5日
	 */
	@RequestMapping(value="/getFloodWarningStatus")
	public Result getFloodWarningStatus() {
		try {
			List<Map<String, String>> result = MobileService.getFloodWarningStatus();
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * 获取警情工单，根据防汛队编号，用于移动端
	 * @author xiaolei
	 * @date 2017年12月5日
	 */
	@RequestMapping(value="/getWorksheetByTeamIDUseMobile")
	public Result getWorksheetByTeamIDUseMobile(@RequestBody String json) {
		try {
			List<Map<String, String>> result = MobileService.getWorksheetByTeamIDUseMobile(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * 获取警情工单详情，根据警情编号
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	@RequestMapping(value="/getWorksheetDetailByWaringId")
	public Result getWorksheetDetailByWaringId(@RequestBody String json) {
		try {
			List<Map<String, String>> result = MobileService.getWorksheetDetailByWaringId(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * 现场处理措施列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	@RequestMapping(value="/getMethodList")
	public Result getMethodList() {
		try {
			List<Map<String, String>> result = MobileService.getMethodList();
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * 积水原因列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	@RequestMapping(value="/getWarningReasonList")
	public Result getWarningReasonList() {
		try {
			List<Map<String, String>> result = MobileService.getWarningReasonList();
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * 建议整改方案列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
	@RequestMapping(value="/getRepairIdeaList")
	public Result getRepairIdeaList() {
		try {
			List<Map<String, String>> result = MobileService.getRepairIdeaList();
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * 新建警情点，用于移动端
	 * @author xiaolei
	 * @date 2017年12月8日
	 */
	@RequestMapping(value="/addWarningSpotUseMobile")
	public Result addWarningSpotUseMobile(@RequestBody String json) {
		try {
			MobileService.addWarningSpotUseMobile(json);
			return Result.success();
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("failed");
		}
	}
	
	
	
}
