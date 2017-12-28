package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemPumpMaintence;
@Mapper
public interface DsDsemPumpMaintenceMapper {
    int insert(DsDsemPumpMaintence record);

    int insertSelective(DsDsemPumpMaintence record);
}