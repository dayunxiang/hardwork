package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.entity.DsDsemSummary;
@Mapper
public interface DsDsemSummaryMapper {
    int insert(DsDsemSummary record);

    int insertSelective(DsDsemSummary record);
}