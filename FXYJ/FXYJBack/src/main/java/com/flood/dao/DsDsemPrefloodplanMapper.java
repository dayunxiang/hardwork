package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemPrefloodplan;
@Mapper
public interface DsDsemPrefloodplanMapper {
	
    int insert(DsDsemPrefloodplan record);

    int insertSelective(DsDsemPrefloodplan record);
    
    public List<Map<String, String>> getAllPreFloodPlan();
    
    public int delPreFloodPlan(@Param("planID") int planID);
}