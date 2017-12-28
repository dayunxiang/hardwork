package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemFile;
@Mapper
public interface DsDsemFileMapper {
	
    int insert(DsDsemFile record);

    int insertSelective(DsDsemFile record);
    
    /**
     * @Title: getFilesByRefIDandUploadTime 
     * @Description: 根据模块ID及上传时间获取文件
     * @param @param refID
     * @param @param st
     * @param @param et
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午5:15:07 
     * @version V1.0
     */
    public List<Map<String, String>> getFilesByRefIDandUploadTime(
    		@Param("refID") int refID,
    		@Param("st") Date st,
    		@Param("et") Date et);
}