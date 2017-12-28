package com.flood.common.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.common.entity.WorkRelation;

@Mapper
public interface WorkRelationMapper {
	
    int deleteByPrimaryKey(String id);

    int insert(WorkRelation record);

    int insertSelective(WorkRelation record);

    WorkRelation selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(WorkRelation record);

    int updateByPrimaryKey(WorkRelation record);

    /**
     * @Title: findWorkOrderMeterListByOrderId   
     * @Description: 根据工单id获取工单下的水表
     * @param: @param orderId
     * @param: @return
     * @author: weizl      
     * @return: List<WorkRelation>
     * @date: 2017年4月20日 上午10:54:06      
     * @throws
     * @version: V1.0
     */
	List<WorkRelation> findWorkOrderMeterListByOrderId(@Param("businessId") String businessId,
			@Param("orderId") String orderId);
}