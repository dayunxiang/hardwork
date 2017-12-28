package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemSimulate;
@Mapper
public interface DsDsemSimulateMapper {
    int insert(DsDsemSimulate record);

    int insertSelective(DsDsemSimulate record);
}