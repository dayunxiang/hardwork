package com.flood.common.dao;

import org.apache.ibatis.annotations.Mapper;

import com.flood.common.entity.FileData;
@Mapper
public interface FileDataMapper {
    int deleteByPrimaryKey(String id);

    int insert(FileData record);

    int insertSelective(FileData record);

    FileData selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(FileData record);

    int updateByPrimaryKey(FileData record);
}