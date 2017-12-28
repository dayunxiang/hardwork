package com.flood.common.entity;

import javax.persistence.Entity;
import javax.persistence.Table;
/**
 * 文件存储
 *
 */
@Entity
@Table(name = "FileData")
public class FileData extends BaseFileBO {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String businessId;//业务模型id
	public String getBusinessId() {
		return businessId;
	}
	public void setBusinessId(String businessId) {
		this.businessId = businessId;
	}

}
