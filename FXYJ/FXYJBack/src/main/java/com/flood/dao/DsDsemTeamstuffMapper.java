package com.flood.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemTeamstuff;
@Mapper
public interface DsDsemTeamstuffMapper {
	
    public int insert(DsDsemTeamstuff record);

    public int insertSelective(DsDsemTeamstuff record);
    
	/**
	 * @Title: findTeamStuffByStuffID 
	 * @Description: 
	 * @param @param PFSID
	 * @param @return
	 * @return List<Map<String,String>>
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午5:13:49 
	 * @version V1.0
	 */
    public List<Map<String, String>> findTeamStuffByStuffID(@Param("PFSID") String PFSID);
    
    /**
     * @Title: addTeamStuff 
     * @Description: 添加物资分配记录
     * @param @param PFSID
     * @param @param TEAMID
     * @param @param STUFFCOUNT
     * @param @param STUFFUSEDCOUNT
     * @param @param REASON
     * @param @param DISTRIBUTEPERSON
     * @param @param DISTRIBUTETIME
     * @param @param USEDPERSON
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月9日 上午11:13:25 
     * @version V1.0
     */
    public int addTeamStuff(@Param("pfsId") int pfsId,@Param("teamId") int teamId,@Param("stuffCount") double stuffCount,
    		@Param("stuffUsedCount") double stuffUsedCount,@Param("reason") String reason,@Param("distributePerson") String distributePerson,
    		@Param("distributeTime") Date distributeTime,@Param("usedPerson") String usedPerson);
    
    /**
     * @Title: getStuffByTeamID 
     * @Description: 根据队伍id获取物资
     * @param @param teamID
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月13日 上午11:23:54 
     * @version V1.0
     */
    public List<Map<String, String>> getStuffByTeamID(@Param("teamID") int teamID);
    /**
     * @Title: findCountByTeamId 
     * @Description: 根据队伍id获取物资使用数量
     * @param @param teamID
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月13日 下午2:51:50 
     * @version V1.0
     */
    public List<Map<String, String>> findCountByTeamId(@Param("teamID") int teamID);
    /**
     * @Title: deleteTeamStuff 
     * @Description: 删除物资分配记录
     * @param @param objID
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月13日 下午4:34:57 
     * @version V1.0
     */
    public int deleteTeamStuff(@Param("teamID") int objID);
    
    public int delTeamStuffByStuffID(@Param("stuffID") int stuffID);
}