package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemPersontel;
@Mapper
public interface DsDsemPersontelMapper {
    int insert(DsDsemPersontel record);

    int insertSelective(DsDsemPersontel record);
}