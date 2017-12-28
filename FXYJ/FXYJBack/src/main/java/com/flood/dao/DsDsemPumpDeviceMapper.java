package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.Util;
import com.flood.entity.DsDsemPumpDevice;
@Mapper
public interface DsDsemPumpDeviceMapper {
	
    int insert(DsDsemPumpDevice record);

    int insertSelective(DsDsemPumpDevice record);
    
    public int getMaxId();
    
    public int getPumpStatusCountByPumpID(@Param("pumpID") int pumpID, @Param("year") String year);
    
    /**
     * @Title: getPumpDeviceListByYearAndPumpInfo 
     * @Description: 获取泵站列表数据
     * @param @param year
     * @param @param pumpID
     * @param @param pumpType
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月20日 下午5:24:28 
     * @version V1.0
     */
    public List<Map<String, String>> getPumpDeviceListByYearAndPumpInfo(@Param("year") String year, 
    		@Param("pumpID") int pumpID, @Param("pumpType") int pumpType);
    /**
     * @Title: updatePumpDevice 
     * @Description: 更新雨水泵站设备
     * @param @param deviceID
     * @param @param name
     * @param @param year
     * @param @param size
     * @param @param detail
     * @param @param des
     * @param @param completetime
     * @param @param status
     * @param @param pumpID
     * @param @param pumpType
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月21日 上午10:32:37 
     * @version V1.0
     */
    public int updatePumpDevice(@Param("deviceID") int deviceID,@Param("name") String name,@Param("year") String year,@Param("size") String size,
    		@Param("detail") String detail,@Param("des") String des,@Param("completetime") Date completetime,
    		@Param("status") int status,@Param("pumpID") int pumpID,@Param("pumpType") int pumpType);
    
    /**
     * @Title: deletePumpDevice 
     * @Description: 删除雨水泵站设备
     * @param @param deviceID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月21日 上午10:46:29 
     * @version V1.0
     */
    public int deletePumpDevice(@Param("deviceID") int deviceID);
}