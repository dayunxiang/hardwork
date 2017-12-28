package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemUsedfile;
@Mapper
public interface DsDsemUsedfileMapper {
	
    int insert(DsDsemUsedfile record);

    int insertSelective(DsDsemUsedfile record);
    
    /**
     * @Title: getWorksheetDetailByWorksheetID 
     * @Description: 根据工单ID获取工单的图片、水深信息
     * @param @param taskId
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午3:24:06 
     * @version V1.0
     */
    public List<Map<String, String>> getWorksheetDetailByWorksheetID(
    		@Param("taskId") int taskId);
}