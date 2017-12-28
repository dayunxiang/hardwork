package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemPumpGen;
@Mapper
public interface DsDsemPumpGenMapper {
	
    int insert(DsDsemPumpGen record);

    int insertSelective(DsDsemPumpGen record);
    
    int getPumpGenStatusCountByPumpID(@Param("pumpID") int pumpID, @Param("year") String year);
}