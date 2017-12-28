package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.Util;
import com.flood.entity.DsDsemAnalysis;
@Mapper
public interface DsDsemAnalysisMapper {
	
	
    int insert(DsDsemAnalysis record);

    public int insertSelective(DsDsemAnalysis record);
    
    /**
     * @Title: getCompleteWaringSpotByReportDate 
     * @Description: 根据上报时间范围获取已经完成工单的警情点
     * @param @param st
     * @param @param et
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月16日 下午1:57:17 
     * @version V1.0
     */
    public List<Map<String, String>> getCompleteWaringSpotByReportDate(
    		@Param("st") Date st, 
    		@Param("et") Date et);
    
    public List<Map<String, String>> getWaringSpotByReportDate2(
    		@Param("st") Date st, 
    		@Param("et") Date et);
    
    /**
     * @Title: deleteWaringSpotByID 
     * @Description: 根据警情ID假删除警情
     * @param @param id
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月28日 上午10:43:19 
     * @version V1.0
     */
    public int deleteWaringSpotByID(@Param("id") int id);
    
    public int getMaxId();
    
    /**
     * @Title: addSimpleWarningSpot 
     * @Description: 新建警情点，与积水点无关联
     * @param @param WARNINGNAME
     * @param @param WARNINGSOURCE
     * @param @param UPLOADPERSON
     * @param @param UPLOADPERSONTEL
     * @param @param UPLOADTIME
     * @param @param DESCRIPTION
     * @param @param LOCATION
     * @param @param X
     * @param @param Y
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月29日 下午2:16:19 
     * @version V1.0
     */
    public int addSimpleWarningSpot(
    		@Param("WARNINGID") int WARNINGID, 
    		@Param("WARNINGNAME") String WARNINGNAME, 
    		@Param("WARNINGSOURCE") int WARNINGSOURCE, 
    		@Param("UPLOADPERSON") String UPLOADPERSON, 
    		@Param("UPLOADPERSONTEL") String UPLOADPERSONTEL, 
    		@Param("UPLOADTIME") Date UPLOADTIME, 
    		@Param("DESCRIPTION") String DESCRIPTION, 
    		@Param("LOCATION") String LOCATION, 
    		@Param("X") double X, 
    		@Param("Y") double Y, 
    		@Param("FloodLevelID") int FloodLevelID);
    
    /**
     * @Title: getMaxWarningCode 
     * @Description: 获取警情编码最大值
     * @param @return
     * @return String
     * @author weizl
     * @throws
     * @date 2017年6月29日 上午10:02:55 
     * @version V1.0
     */
    public String getMaxWarningCode(@Param("nowDate") String nowDate);
    
    /**
     * @Title: updateWarningSpotByID 
     * @Description: TODO(这里用一句话描述这个方法的作用) 
     * @param @param id
     * @param @param waringName
     * @param @param warningDes
     * @param @param warningLocation
     * @param @param warningSource
     * @param @param warningReporter
     * @param @param warningReporterTel
     * @param @param warningTime
     * @param @param warningLevel
     * @param @param warningPFPID
     * @param @param warningIsCompleted
     * @param @param COMPLETETIME
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月29日 下午3:18:50 
     * @version V1.0
     */
    public int updateWarningSpotByID(
    		@Param("id") int id,
    		@Param("waringName") String waringName,
    		@Param("warningDes") String warningDes,
    		@Param("warningLocation") String warningLocation,
    		@Param("warningSource") String warningSource,
    		@Param("warningReporter") String warningReporter,
    		@Param("warningReporterTel") String warningReporterTel,
    		@Param("warningTime") Date warningTime,
    		@Param("warningLevel") String warningLevel,
    		@Param("warningPFPID") int warningPFPID,
    		@Param("warningIsCompleted") int warningIsCompleted,
    		@Param("completedTime") Date completedTime);
    
    /**
     * @Title: updateWarningSpotByID 
     * @Description: 根据警情ID修改状态
     * @param @param id
     * @param @param statusID
     * @param @param nowDate
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午3:33:27 
     * @version V1.0
     */
    public int updateWarningSpotStatusByID(
    		@Param("id") int id,
    		@Param("statusID") int statusID,
    		@Param("nowDate") Date nowDate);
    
    /**
     * @Title: getCompleteWaringSpotByFloodID 
     * @Description: 获取已处理或者已反馈的警情点
     * @param @param floodId
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月30日 下午5:36:45 
     * @version V1.0
     */
    public List<Map<String, String>> getCompleteWaringSpotByFloodID(
    		@Param("floodId") int floodId);
    
    /**
     * @Title: updateWarningRepairInfoByID 
     * @Description: 更新警情的后续整治信息
     * @param @param id
     * @param @param status 状态
     * @param @param detail 整治内容
     * @param @param chargePerson 责任人
     * @param @param exminPerson 审核人
     * @param @param et 截止时间
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午3:58:22 
     * @version V1.0
     */
    public int updateWarningRepairInfoByID(
    		@Param("id") int id,
    		@Param("status") int status,
    		@Param("detail") String detail,
    		@Param("chargePerson") String chargePerson,
    		@Param("exminPerson") String exminPerson,
		    @Param("et") Date et);
    
    /**
     * @Title: updateWarningLocalInfoByID 
     * @Description: 更新警情的现场的信息  
     * @param @param id 
     * @param @param method 现场处理措施
     * @param @param depth 最大积水深度
     * @param @param area 积水面积
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午4:19:12 
     * @version V1.0
     */
    public int updateWarningLocalInfoByID(
    		@Param("id") int id,
    		@Param("method") String method,
    		@Param("depth") double depth,
    		@Param("area") double area);
    
    /**
     * @Title: updateWarningSpotIDByID 
     * @Description: 根据警情ID修改积水点ID
     * @param @param id
     * @param @param id
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年7月3日 下午4:39:27 
     * @version V1.0
     */
    public int updateWarningSpotIDByID(
    		@Param("id") int id,
    		@Param("spotID") int spotID);
}