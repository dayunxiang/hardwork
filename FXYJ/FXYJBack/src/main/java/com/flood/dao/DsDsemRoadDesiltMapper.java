package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemRoadDesilt;
@Mapper
public interface DsDsemRoadDesiltMapper {
	
    int insert(DsDsemRoadDesilt record);

    int insertSelective(DsDsemRoadDesilt record);
    
    List<Map<String, String>> getRoadDesiltList(@Param("year") String year);
    
    
}