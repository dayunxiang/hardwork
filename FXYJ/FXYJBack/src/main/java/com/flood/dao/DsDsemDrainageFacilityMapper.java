package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.Util;
import com.flood.entity.DsDsemDrainageFacility;
@Mapper
public interface DsDsemDrainageFacilityMapper {
	
	public int insert(DsDsemDrainageFacility record);

    public int insertSelective(DsDsemDrainageFacility record);
    
    public List<Map<String, String>> getFacilityListByYear(@Param("YEAR") String year);
    
    public int getMaxId();
    
    public int updateFacilityRecord(@Param("objectID") int objectID, @Param("address") String address, 
    		@Param("department") String department, @Param("manage") String manage, @Param("problem") String problem,
    		@Param("year") String year, @Param("des") String des, @Param("time") Date time);
    
    public int deleteFacilityRecord(@Param("objectID") int objectID);
}