package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemWarningReporter;
@Mapper
public interface DsDsemWarningReporterMapper {
	
    int insert(DsDsemWarningReporter record);

    int insertSelective(DsDsemWarningReporter record);
    
    public List<Map<String, String>> getWarningReporterByWarningID(@Param("WarningID") int WarningID);
    
    public int getMaxId();
}