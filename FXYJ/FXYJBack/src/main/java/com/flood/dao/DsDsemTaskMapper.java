package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemTask;
@Mapper
public interface DsDsemTaskMapper {
	
    int insert(DsDsemTask record);

    int insertSelective(DsDsemTask record);
    /**
     * @Title: deleteWorksheetByWarningID 
     * @Description: 根据警情ID删除对应的工单
     * @param @param id
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月28日 上午10:52:16 
     * @version V1.0
     */
    public int deleteWorksheetByWarningID(@Param("id") int id);
    
    public List<Map<String, String>> getWorksheetByWarningID(
    		@Param("warningID") int warningID);

    /**
     * @Title: getWorksheetByOrderTime 
     * @Description: TODO(这里用一句话描述这个方法的作用) 
     * @param @param st
     * @param @param et
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午2:40:35 
     * @version V1.0
     */
    public List<Map<String, String>> getWorksheetByOrderTime(
			@Param("st") Date st, 
			@Param("et") Date et);

    /**
     * @Title: deleteWorksheetByID 
     * @Description:根据工单ID删除工单
     * @param @param id
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午3:02:53 
     * @version V1.0
     */
	public int deleteWorksheetByID(
			@Param("taskId") int taskId);
	
	/**
	 * @Title: updateWorksheetStatusByID 
	 * @Description: 根据工单ID修改工单状态
	 * @param @param taskId
	 * @param @param statusID
	 * @param @param checkTime
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月30日 下午3:10:24 
	 * @version V1.0
	 */
	public int updateWorksheetStatusByID(
			@Param("taskId") int taskId,
			@Param("statusID") int statusID,
			@Param("checkTime") Date checkTime);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}