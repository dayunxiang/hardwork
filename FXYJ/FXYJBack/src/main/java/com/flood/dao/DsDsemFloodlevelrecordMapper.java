package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemFloodlevelrecord;
@Mapper
public interface DsDsemFloodlevelrecordMapper {
    int insert(DsDsemFloodlevelrecord record);

    int insertSelective(DsDsemFloodlevelrecord record);
}