package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemPumpReconstruct;
@Mapper
public interface DsDsemPumpReconstructMapper {
    int insert(DsDsemPumpReconstruct record);

    int insertSelective(DsDsemPumpReconstruct record);
}