package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemPrefloodteam;
@Mapper
public interface DsDsemPrefloodteamMapper {
	
	public int insert(DsDsemPrefloodteam record);

	/**
	 * @Title: insertSelective 
	 * @Description: 添加防汛队
	 * @param @param record
	 * @param @return
	 * @return int
	 * @author weizl
	 * @throws
	 * @date 2017年6月14日 下午2:09:46 
	 * @version V1.0
	 */
    public int insertSelective(DsDsemPrefloodteam record);
    
    /**
     * @Title: getMaxId 
     * @Description: TODO(这里用一句话描述这个方法的作用) 
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月14日 下午3:18:23 
     * @version V1.0
     */
    public int getMaxId();
    
	/**
	 * @Title: findAllPreFloodTeam 
	 * @Description: 获取所有防汛队
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
    public List<Map<String, String>> findAllPreFloodTeam();
    /**
     * @Title: addPreFloodTeam 
     * @Description: 添加防汛队
     * @param @param teamName
     * @param @param manager
     * @param @param persons
     * @param @param personsCount
     * @param @param firm
     * @param @param description
     * @param @param tel
     * @param @param email
     * @param @param password
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月14日 下午2:08:03 
     * @version V1.0
     */
//    public int addPreFloodTeam(@Param("teamName") String teamName, @Param("manager") String manager, 
//    		@Param("persons") String persons, @Param("personsCount") int personsCount, @Param("firm") String firm,
//    		@Param("description") String description, @Param("tel") String tel, @Param("email") String email, 
//    		@Param("password") String password);
    /**
     * @Title: updatePreFloodTeam 
     * @Description: 更新防讯队信息
     * @param @param teamId
     * @param @param teamName
     * @param @param manager
     * @param @param persons
     * @param @param personsCount
     * @param @param firm
     * @param @param description
     * @param @param tel
     * @param @param email
     * @param @param password
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月14日 下午3:10:54 
     * @version V1.0
     */
    public int updatePreFloodTeam(@Param("teamId") int teamId, @Param("teamName") String teamName, @Param("manager") String manager, 
    		@Param("persons") String persons, @Param("personsCount") int personsCount, @Param("firm") String firm,
    		@Param("description") String description, @Param("tel") String tel, @Param("email") String email, 
    		@Param("password") String password);
    /**
     * @Title: delPreFloodTeam 
     * @Description: 删除防讯队
     * @param @param teamId
     * @param @return
     * @return int
     * @author weizl
     * @throws
     * @date 2017年6月14日 下午3:54:04 
     * @version V1.0
     */
    public int delPreFloodTeam(@Param("teamId") int teamId);
    
}