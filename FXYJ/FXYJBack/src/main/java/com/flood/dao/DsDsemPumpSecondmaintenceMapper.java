package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemPumpSecondmaintence;
@Mapper
public interface DsDsemPumpSecondmaintenceMapper {
    int insert(DsDsemPumpSecondmaintence record);

    int insertSelective(DsDsemPumpSecondmaintence record);
}