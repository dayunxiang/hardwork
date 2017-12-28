package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemWaterspot;
@Mapper
public interface DsDsemWaterspotMapper {
	
    int insert(DsDsemWaterspot record);

    int insertSelective(DsDsemWaterspot record);
    
    public List<Map<String, String>> getSpotList(
    		@Param("type") int type);
    
    /**
     * @Title: getSpotListByYear 
     * @Description: 
     * @param @param year
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午4:57:07 
     * @version V1.0
     */
    public List<Map<String, String>> getSpotListByYear(
    		@Param("year") String year);
}