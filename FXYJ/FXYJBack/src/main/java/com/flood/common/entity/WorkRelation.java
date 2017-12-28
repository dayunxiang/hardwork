package com.flood.common.entity;

import javax.persistence.Table;
/**
 * 工单/工作区域/工作对象 关系表
 *
 */
//@Entity
@Table(name = "WorkRelation")
public class WorkRelation extends BaseBO {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String businessId;//业务模型id
	private String orderNum;//工单编号
	private String areaNum;//区域编号 索引
	private String objectNum;//工作对象编号 索引
	private int status;//提交状态 0未提交 1 已提交
	private String informant;//填报人
	
	public String getBusinessId() {
		return businessId;
	}
	public void setBusinessId(String businessId) {
		this.businessId = businessId;
	}
	public String getOrderNum() {
		return orderNum;
	}
	public void setOrderNum(String orderNum) {
		this.orderNum = orderNum;
	}
	
	public String getAreaNum() {
		return areaNum;
	}
	public void setAreaNum(String areaNum) {
		this.areaNum = areaNum;
	}
	public String getObjectNum() {
		return objectNum;
	}
	public void setObjectNum(String objectNum) {
		this.objectNum = objectNum;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getInformant() {
		return informant;
	}
	public void setInformant(String informant) {
		this.informant = informant;
	}
	
}
