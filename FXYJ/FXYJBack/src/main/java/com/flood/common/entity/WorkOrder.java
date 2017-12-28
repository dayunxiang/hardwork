package com.flood.common.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
/**
 * 工单表
 *
 */
//@Entity
@Table(name = "WorkOrder")
public class WorkOrder extends BaseBO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String businessId;//业务模块标识
	private String orderNum = this.id;//工单编号
	private String orderNumInt;//数字型的工单编号
	private String creater;//创建人
	private String processInstanceId;//工作流流程实例id
	
	private Date createOrderDate;//工单创建时间
	private Date distributionDate;//分配时间
	private Date runDate;//工单启动时间
	private Date backOrderDate;//回单时间
	private Date closeDate;//关闭时间
	
	private String executor;//操作人员/执行人/负责人
	private int priority;//工单优先级 高/中/低 0/1/2
	private String description;//工单描述
	
	/**
	 * 
	 * 如果计划时间 不是时间段，是具体的某天时间
	 * 则 计划时间 记录在startDate字段，endDate为空
	 * 
	 */
	private Date startDate;//计划执行开始时间
	private Date endDate;//计划执行结束时间
	
	/**
	 * 考核类型
	 */
	private String checkType;//苏州表务专用
	
	/**
	 * 所属计划年月 取数据时 只取年月即可
	 */
	private Date underDate;//所属计划年月 取数据时 只取年月即可
	
	private int status;//工单状态
	private String reason;//原因
	
	private String regional;//维护区域
	private int sort;//排序
	private String planId;//计划id
	
	private int deleteFlag;//删除标记（0：未删除；1：删除）
	
	private Integer reportSource;//故障来源
	
	
	

	public String getProcessInstanceId() {
		return processInstanceId;
	}

	public void setProcessInstanceId(String processInstanceId) {
		this.processInstanceId = processInstanceId;
	}

	public String getCheckType() {
		return checkType;
	}

	public void setCheckType(String checkType) {
		this.checkType = checkType;
	}

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

	public String getOrderNumInt() {
		return orderNumInt;
	}

	public void setOrderNumInt(String orderNumInt) {
		this.orderNumInt = orderNumInt;
	}

	public String getCreater() {
		return creater;
	}

	public void setCreater(String creater) {
		this.creater = creater;
	}

	public Date getCreateOrderDate() {
		return createOrderDate;
	}

	public void setCreateOrderDate(Date createOrderDate) {
		this.createOrderDate = createOrderDate;
	}

	public Date getDistributionDate() {
		return distributionDate;
	}

	public void setDistributionDate(Date distributionDate) {
		this.distributionDate = distributionDate;
	}

	public Date getRunDate() {
		return runDate;
	}

	public void setRunDate(Date runDate) {
		this.runDate = runDate;
	}

	public Date getBackOrderDate() {
		return backOrderDate;
	}

	public void setBackOrderDate(Date backOrderDate) {
		this.backOrderDate = backOrderDate;
	}

	public Date getCloseDate() {
		return closeDate;
	}

	public void setCloseDate(Date closeDate) {
		this.closeDate = closeDate;
	}

	public String getExecutor() {
		return executor;
	}

	public void setExecutor(String executor) {
		this.executor = executor;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getRegional() {
		return regional;
	}

	public void setRegional(String regional) {
		this.regional = regional;
	}

	public int getSort() {
		return sort;
	}

	public void setSort(int sort) {
		this.sort = sort;
	}

	public String getPlanId() {
		return planId;
	}

	public void setPlanId(String planId) {
		this.planId = planId;
	}

	public int getDeleteFlag() {
		return deleteFlag;
	}

	public void setDeleteFlag(int deleteFlag) {
		this.deleteFlag = deleteFlag;
	}

	public Integer getReportSource() {
		return reportSource;
	}

	public void setReportSource(Integer reportSource) {
		this.reportSource = reportSource;
	}

	public Date getUnderDate() {
		return underDate;
	}

	public void setUnderDate(Date underDate) {
		this.underDate = underDate;
	}

	@Override
	public String toString() {
		return "WorkOrder [businessId=" + businessId + ", orderNum=" + orderNum + ", orderNumInt=" + orderNumInt
				+ ", creater=" + creater + ", createOrderDate=" + createOrderDate + ", distributionDate="
				+ distributionDate + ", runDate=" + runDate + ", backOrderDate=" + backOrderDate + ", closeDate="
				+ closeDate + ", executor=" + executor + ", priority=" + priority + ", description=" + description
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", checkType=" + checkType + ", underDate="
				+ underDate + ", status=" + status + ", reason=" + reason + ", regional=" + regional + ", sort=" + sort
				+ ", planId=" + planId + ", deleteFlag=" + deleteFlag + ", reportSource=" + reportSource + "]";
	}
	
}
