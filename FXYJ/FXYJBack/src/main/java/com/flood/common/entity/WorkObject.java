package com.flood.common.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 
 *
 */
//@Entity
@Table(name = "WorkObject")
public class WorkObject extends BaseBO {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String objectName;//工作对象名称
	private String objectType;//工作对象类型
	private String objectNum;//工作对象编号/标识
	private String objectXY;//地理id/位置
	
	public String getObjectName() {
		return objectName;
	}
	public void setObjectName(String objectName) {
		this.objectName = objectName;
	}
	public String getObjectType() {
		return objectType;
	}
	public void setObjectType(String objectType) {
		this.objectType = objectType;
	}
	public String getObjectNum() {
		return objectNum;
	}
	public void setObjectNum(String objectNum) {
		this.objectNum = objectNum;
	}
	public String getObjectXY() {
		return objectXY;
	}
	public void setObjectXY(String objectXY) {
		this.objectXY = objectXY;
	}
	

}
