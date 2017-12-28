package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemWarningreason;
@Mapper
public interface DsDsemWarningreasonMapper {
	
    int insert(DsDsemWarningreason record);

    int insertSelective(DsDsemWarningreason record);
    
    List<Map<String, String>> getWarningReasonByID(
    		@Param("id") int id);
    
    /**
     * @Title: getMaxId 
     * @Description: 获取最大objectID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年7月3日 上午11:12:00 
     * @version V1.0
     */
    public int getMaxId();
}