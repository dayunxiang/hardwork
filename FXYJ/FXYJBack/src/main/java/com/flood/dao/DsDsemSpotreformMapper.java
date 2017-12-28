package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemSpotreform;
@Mapper
public interface DsDsemSpotreformMapper {
    int insert(DsDsemSpotreform record);

    int insertSelective(DsDsemSpotreform record);
    
    List<Map<String, String>> getSpotReformListByYear(@Param("YEAR") String year);
    
    public int getMaxId();
    
    /**
     * @Title: updateSpotReformRecord 
     * @Description: 更新积水点改造信息
     * @param @param OBJECTID
     * @param @param SPOTNAME
     * @param @param REASON
     * @param @param METHOD
     * @param @param COMPLETESTATUS
     * @param @param DESCRIPTION
     * @param @param YEAR
     * @param @param COMPLETETIME
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月15日 下午4:35:18 
     * @version V1.0
     */
    public int updateSpotReformRecord(@Param("OBJECTID") int OBJECTID,@Param("SPOTNAME") String SPOTNAME,
    		@Param("REASON") String REASON,@Param("METHOD") String METHOD,@Param("COMPLETESTATUS") int COMPLETESTATUS,
    		@Param("DESCRIPTION") String DESCRIPTION,@Param("YEAR") String YEAR,@Param("COMPLETETIME") Date COMPLETETIME);
    
    /**
     * @Title: deleteSpotReformRecord 
     * @Description: 删除积水点改造信息
     * @param @param OBJECTID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月15日 下午4:43:52 
     * @version V1.0
     */
    public int deleteSpotReformRecord(@Param("OBJECTID") int OBJECTID);
    
}