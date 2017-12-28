package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface EmergencyCommandSearchMapper {
	

    /**
     * 查询汛情名称列表,倒序
     * @author xiaolei
     * @date 2017年12月5日
     */
    public List<Map<String, String>> getFloodNameList();
    
    /**
     * 获取警情点列表,根据汛情编号条件
     * @param floodCode 汛情编码
     * @author xiaolei
     * @date 2017年12月5日
     */
    public List<Map<String, String>> getWaringSpotByFloodCode(
    		@Param("floodCode") String floodCode
    		);
    
	/**
	 * 获取所有防汛队
     * @author xiaolei
     * @date 2017年12月5日
	 */
    public List<Map<String, String>> findAllPreFloodTeam();

	/**
	 * 根据防汛队ID获取相关工单
	 * @param PFTID	防汛队编码
	 * @param FLOODID 汛情编码
	 * @author xiaolei
	 * @date 2017年11月29日
	 */
	public List<Map<String, String>> getWorksheetByPreFloodTeamID(
			@Param("PFTID") String PFTID,
			@Param("FLOODID") String FLOODID
			);

	/**
	 * 获取警情工单中的图片地址，根据工单编号
	 * @param TASKID 任务编码
	 * @param PICTURETYPE 图片分类，1：警情上报图片，2：警情处理图片，0：所有图片
	 * @author xiaolei
	 * @date 2017年11月29日
	 */
	public List<Map<String, String>> getWorksheetPictureByTaskId(
			@Param("TASKID") String TASKID,
			@Param("PICTURETYPE") String PICTURETYPE
			);
}