package com.flood.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.flood.common.result.Result;
import com.flood.service.EmergencyCommandService;
/**
 * @ClassName: EmergencyCommandController 
 * @Description: 应急指挥控制层
 * @author xiaolei
 * @date 2017年11月23日 
 * @version V1.0
 */
@RestController
@RequestMapping(value="/")
public class EmergencyCommandController {
	
	@Autowired
	private EmergencyCommandService EmergencyCommandService;
	
	/**
	 * @Title: getAllFlood 
	 * @Description: 汛情列表
	 * @param  json
	 * @return Result
	 * @author xiaolei
	 * @throws
	 * @date 2017年11月23日
	 * @version V1.0
	 */
	@RequestMapping(value="/getFloodNameList")
	public Result getAllFlood() {
		try {
			List<Map<String, String>> result = EmergencyCommandService.getFloodNameList();
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("失败");
		}
	}
	
	/**
	 * @Title: getWaringSpotByFloodCode 
	 * @Description: 获取警情点列表,根据汛情编号条件
	 * @param  json
	 * @return Result
	 * @author xiaolei
	 * @throws
	 * @date 2017年11月24日15:33:15
	 * @version V1.0
	 */
	@RequestMapping(value="/getWaringSpotByFloodCode")
	public Result getWaringSpotByFloodCode(@RequestBody String json) {	
		try {
			List<Map<String, String>> result = EmergencyCommandService.getWaringSpotByFloodCode(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取警情点列表失败");
		}
	}
	
	/**
	 * @Title: getAllPreFloodTeam 
	 * @Description: 获取所有防汛队
	 * @param  json
	 * @return Result
	 * @author xiaolei
	 * @throws
	 * @date 2017年11月27日
	 * @version V1.0
	 */
	@RequestMapping(value="/getAllPreFloodTeam")
	public Result getAllPreFloodTeam() {
		try {
			List<Map<String, String>> result = EmergencyCommandService.getAllPreFloodTeam();
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取所有防汛队失败");
		}
	}
	
	/**
	 * @Title: getWorksheetByPreFloodTeamID 
	 * @Description: 根据防汛队ID获取相关工单
	 * @param  json
	 * @return Result
	 * @author xiaolei
	 * @throws
	 * @date 2017年11月29日
	 * @version V1.0
	 */
	@RequestMapping(value="/getWorksheetByPreFloodTeamID")
	public Result getWorksheetByPreFloodTeamID(@RequestBody String json) {	
		try {
			List<Map<String, String>> result = EmergencyCommandService.getWorksheetByPreFloodTeamID(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取防汛队工单失败");
		}
	}
	
	/**
	 * @Title: getWorksheetPictureByTaskId
	 * @Description: 获取警情工单中的图片地址，根据工单编号
	 * @param  json
	 * @return Result
	 * @author xiaolei
	 * @throws
	 * @date 2017年11月29日
	 * @version V1.0
	 */
	@RequestMapping(value="/getWorksheetPictureByTaskId")
	public Result getWorksheetPictureByTaskId(@RequestBody String json) {	
		try {
			List<Map<String, String>> result = EmergencyCommandService.getWorksheetPictureByTaskId(json);
			return Result.success(result);
		} catch (Exception e) {
			e.printStackTrace();
			return Result.error("获取防汛队工单失败");
		}
	}
	
	
}
