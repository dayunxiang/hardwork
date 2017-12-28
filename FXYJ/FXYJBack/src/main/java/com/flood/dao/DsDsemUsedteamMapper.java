package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemUsedteam;
@Mapper
public interface DsDsemUsedteamMapper {
	
    int insert(DsDsemUsedteam record);

    int insertSelective(DsDsemUsedteam record);
    
    /**
     * @Title: getPreFloodTeamByWorksheetID 
     * @Description: 根据工单ID获取执行小组列表
     * @param @param taskId
     * @param @return
     * @return List<DsDsemUsedteam>
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午1:46:39 
     * @version V1.0
     */
    public List<Map<String, String>> getPreFloodTeamByWorksheetID(@Param("taskId") int taskId);
}