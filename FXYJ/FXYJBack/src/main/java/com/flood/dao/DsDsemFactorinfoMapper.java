package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemFactorinfo;
@Mapper
public interface DsDsemFactorinfoMapper {
    int insert(DsDsemFactorinfo record);

    int insertSelective(DsDsemFactorinfo record);
}