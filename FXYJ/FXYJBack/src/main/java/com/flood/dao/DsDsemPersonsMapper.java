package com.flood.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.entity.DsDsemPersons;
import java.util.List;
import java.util.Map;

@Mapper
public interface DsDsemPersonsMapper {
	
    int insert(DsDsemPersons record);

    int insertSelective(DsDsemPersons record);
    
    /**
     * @Title: findPersonsByType 
     * @Description: 根据类型获取防汛责任岗人员
     * @param @return
     * @return List<Map<String,String>>
     * @author weizl
     * @throws
     * @date 2017年6月8日 下午1:42:21 
     * @version V1.0
     */
    List<Map<String, String>> findPersonsByType(@Param("type") String type);
    
	/**
	 * @Title: deletePerson 
	 * @Description: 删除人员
	 * @param @param json
	 * @param @return
	 * @return Result
	 * @author weizl
	 * @throws
	 * @date 2017年6月8日 下午1:29:47 
	 * @version V1.0
	 */
    int deletePerson(@Param("personId") String personId);
    
    // 添加人员
    int addPerson(@Param("personName") String personName,@Param("chargeArea") String chargeArea,@Param("phone") String phone,
    		@Param("email") String email,@Param("tel") String tel,@Param("personType") String personType,
    		@Param("x") double x,@Param("y") double y);
    
    // 更新人员
    int updatePerson(@Param("personId") String personId,@Param("personName") String personName,@Param("chargeArea") String chargeArea,@Param("phone") String phone,
    		@Param("email") String email,@Param("tel") String tel,@Param("personType") String personType,
    		@Param("x") double x,@Param("y") double y);
}