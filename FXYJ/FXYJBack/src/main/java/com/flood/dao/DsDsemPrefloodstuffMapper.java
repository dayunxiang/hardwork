package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemPrefloodstuff;
@Mapper
public interface DsDsemPrefloodstuffMapper {
	
    public int insert(DsDsemPrefloodstuff record);

    public int insertSelective(DsDsemPrefloodstuff record);
    
    public int getMaxId();
    
	/**
	 * @Title: findAllPreFloodStuff 
	 * @Description: 获取所有防汛队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
    public List<Map<String, String>> findAllPreFloodStuff();
    
    /**
     * @Title: UpdateStuffUseCount 
     * @Description: 
     * @param @param stuffId
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月9日 下午1:59:50 
     * @version V1.0
     */
    public int updateStuffUseCount(@Param("stuffId") int stuffId);
    /**
     * @Title: updateStuff 
     * @Description: 更新防汛物资
     * @param @param stuffID
     * @param @param name
     * @param @param count
     * @param @param warehouse
     * @param @param des
     * @param @param usedCount
     * @param @param unit
     * @param @param status
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月14日 下午5:06:39 
     * @version V1.0
     */
    public int updateStuff(@Param("stuffID") int stuffID, @Param("name") String name, @Param("count") double count, 
    		@Param("warehouse") String warehouse, @Param("des") String des, @Param("usedCount") double usedCount, 
    		@Param("unit") String unit, @Param("status") String status);
    /**
     * @Title: deleteStuff 
     * @Description: 删除物资
     * @param @param PFSID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月14日 下午5:21:02 
     * @version V1.0
     */
    public int deleteStuff(@Param("stuffID") int stuffID);
    
}