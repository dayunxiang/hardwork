package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemUsedstuff;
@Mapper
public interface DsDsemUsedstuffMapper {
	
	public int insert(DsDsemUsedstuff record);

    public int insertSelective(DsDsemUsedstuff record);
	/**
	 * @Title: getStuffUsedCountByID 
	 * @Description: 根据队伍id和物资id获取物资使用数量
	 * @param @param teamID
	 * @param @param stuffID
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月13日 下午3:19:37 
	 * @version V1.0
	 */
    public int getStuffUsedCountByID(
    		@Param("teamID") int teamID, 
    		@Param("stuffID") int stuffID);
    
    /**
     * @Title: delStuffByStuffID 
     * @Description: 删除分配物资
     * @param @param stuffID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午1:45:20 
     * @version V1.0
     */
    public int delStuffByStuffID(
    		@Param("stuffID") int stuffID);
    
    /**
     * @Title: getMaxId 
     * @Description: 获取最大id
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午1:24:27 
     * @version V1.0
     */
    public int getMaxId();
    
    /**
     * @Title: delStuffByRelationID 
     * @Description: 删除分配物资
     * @param @param relationID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午1:32:34 
     * @version V1.0
     */
    public int delStuffByRelationID(
    		@Param("relationID") int relationID);
}