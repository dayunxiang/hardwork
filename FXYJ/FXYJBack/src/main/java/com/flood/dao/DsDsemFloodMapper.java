package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.Util;
import com.flood.entity.DsDsemFlood;
@Mapper
public interface DsDsemFloodMapper {
	
    int insert(DsDsemFlood record);

    int insertSelective(DsDsemFlood record);
    
    DsDsemFlood getFloodInfoByID(@Param("FloodID") int FloodID);
    
    public List<Map<String, String>> getAllFlood();
    
    
    /**
     * @Title: updateFloodInfo 
     * @Description: 更新汛情信息
     * @param @param floodID
     * @param @param floodPerson
     * @param @param floodManager
     * @param @param floodWeatherInfo
     * @param @param floodSimulateInfo
     * @param @param floodDate
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午4:33:41 
     * @version V1.0
     */
    public int updateFloodInfo(
    		@Param("floodID") int floodID,
    		@Param("floodPerson") String floodPerson,
    		@Param("floodManager") String floodManager,
    		@Param("floodWeatherInfo") String floodWeatherInfo,
    		@Param("floodSimulateInfo") String floodSimulateInfo,
    		@Param("floodDate") Date floodDate);
    
    /**
     * @Title: getFloodByTime 
     * @Description: 根据年份获取汛情
     * @param @param st
     * @param @param et
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午4:21:40 
     * @version V1.0
     */
    public List<Map<String, String>> getFloodByTime(
    		@Param("st") Date st,
    		@Param("et") Date et
    		);
    
//----------------------------------------------------------------------
    

    
    
    
}