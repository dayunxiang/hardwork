package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemPumpDesilt;
@Mapper
public interface DsDsemPumpDesiltMapper {
	
    public int insert(DsDsemPumpDesilt record);

    public int insertSelective(DsDsemPumpDesilt record);
    
    public int getMaxId();
    
    public List<Map<String, String>> getPumpDesiltListByYear(@Param("YEAR") String year);
    
    /**
     * @Title: updatePumpDesiltRecord 
     * @Description: 更新清淤记录
     * @param @param OBJECTID
     * @param @param PUMPID
     * @param @param DETAIL
     * @param @param WORKLOAD
     * @param @param COMPLETETIME
     * @param @param COMPLETESTATUS
     * @param @param DESCRIPTION
     * @param @param YEAR
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月15日 下午2:24:51 
     * @version V1.0
     */
    public int updatePumpDesiltRecord(@Param("OBJECTID") int OBJECTID,@Param("PUMPID") int PUMPID,@Param("DETAIL") String DETAIL,
    		@Param("WORKLOAD") double WORKLOAD,@Param("COMPLETETIME") Date COMPLETETIME,@Param("COMPLETESTATUS") int COMPLETESTATUS,
    		@Param("DESCRIPTION") String DESCRIPTION,@Param("YEAR") String YEAR);
    
    /**
     * @Title: deletePumpDesiltRecord 
     * @Description: 删除清淤记录
     * @param @param OBJECTID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月15日 下午3:39:32 
     * @version V1.0
     */
    public int deletePumpDesiltRecord(@Param("OBJECTID") int OBJECTID);
}