package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemWarningRespondmethod;
@Mapper
public interface DsDsemWarningRespondmethodMapper {
	
    int insert(DsDsemWarningRespondmethod record);

    int insertSelective(DsDsemWarningRespondmethod record);
    
    public int updateRespondMethodByWarningType(
    		@Param("typeID") int typeID,
    		@Param("respondMetho") String respondMetho);
    
    /**
     * @Title: getMaxFloodLevelID 
     * @Description: 获取最大的汛情级别ID : .net的逻辑，判断DS_DSEM_WARNING_RESPONDMETHOD表中ISSELECTED=1是否有数据，
     * 				   有的话去DS_DSEM_FLOODLEVELRECORD表中获取最大的FLOODLEVELID，，，否则直接为-1
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月29日 下午2:01:26 
     * @version V1.0
     */
    public int getMaxFloodLevelID();
}