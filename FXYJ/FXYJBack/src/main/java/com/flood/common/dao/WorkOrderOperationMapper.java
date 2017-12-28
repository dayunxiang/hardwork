package com.flood.common.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.flood.common.entity.WorkOrderOperation;
@Mapper
public interface WorkOrderOperationMapper {
    int deleteByPrimaryKey(String id);

    int insert(WorkOrderOperation record);

    int insertSelective(WorkOrderOperation record);

    WorkOrderOperation selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(WorkOrderOperation record);

    int updateByPrimaryKey(WorkOrderOperation record);
    
	/**
	 * @Title: findOperationRecordByOrderId   
	 * @Description: 根据工单id获取操作记录
	 * @param: @param orderId
	 * @param: @return
	 * @author: weizl      
	 * @return: Result
	 * @date: 2017年5月4日 上午10:43:37      
	 * @throws
	 * @version: V1.0
	 */
	List<WorkOrderOperation> findOperationRecordByOrderId(@Param("orderId") String orderId);
}