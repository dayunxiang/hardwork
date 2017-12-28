package com.flood.common.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
/**
 * 工单/工作区域/工作对象 操作表
 *
 */
@Entity
@Table(name = "WorkOrderOperation")
public class WorkOrderOperation extends BaseBO {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
//	private String id;//业务模型id
	private String orderNum;//工单编号
	private int stateType;//状态类型
	private String opUser;//操作人员
	private String originalUser;//原派人员
	private String disUser;//改派指派人员
	private String reason;//原因
	private Date distributionDate;//操作时间
	
	public String getOrderNum() {
		return orderNum;
	}
	public void setOrderNum(String orderNum) {
		this.orderNum = orderNum;
	}
	public String getDisUser() {
		return disUser;
	}
	public void setDisUser(String disUser) {
		this.disUser = disUser;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	
	public int getStateType() {
		return stateType;
	}
	public void setStateType(int stateType) {
		this.stateType = stateType;
	}
	public String getOpUser() {
		return opUser;
	}
	public void setOpUser(String opUser) {
		this.opUser = opUser;
	}
	public Date getDistributionDate() {
		return distributionDate;
	}
	public void setDistributionDate(Date distributionDate) {
		this.distributionDate = distributionDate;
	}
	public String getOriginalUser() {
		return originalUser;
	}
	public void setOriginalUser(String originalUser) {
		this.originalUser = originalUser;
	}
	
	
}
