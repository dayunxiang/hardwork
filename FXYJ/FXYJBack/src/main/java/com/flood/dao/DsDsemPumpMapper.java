package com.flood.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemPump;
@Mapper
public interface DsDsemPumpMapper {
	
    int insert(DsDsemPump record);

    int insertSelective(DsDsemPump record);
    
    public List<DsDsemPump> findDsDsemPumpList();
}