package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemMessagerecord;
@Mapper
public interface DsDsemMessagerecordMapper {
    int insert(DsDsemMessagerecord record);

    int insertSelective(DsDsemMessagerecord record);
}