package com.flood.common.entity;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;

import org.apache.commons.lang.builder.ToStringBuilder;

@MappedSuperclass
public class BaseBO implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4567041038811176723L;
	
	@Transient
	private int hashCode = Integer.MIN_VALUE;
	/**
	 * 主键 id
	 */
	@Id
	protected String id = splituuid();

	public BaseBO() {
		super();
	}
	public BaseBO(String id) {
		super();
		this.id = id;
	}

	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
	
	public boolean equals (Object obj) {
		if (null == obj) return false;
		if (!(obj instanceof BaseBO)) return false;
		else {
			BaseBO bo = (BaseBO) obj;
			if (null == this.getId() || null == bo.getId()) return false;
			else return (this.getId().equals(bo.getId()));
		}
	}

	public int hashCode () {
		if (Integer.MIN_VALUE == this.hashCode) {
			if (null == this.getId()) return super.hashCode();
			else {
				String hashStr = this.getClass().getName() + ":" + this.getId().hashCode();
				this.hashCode = hashStr.hashCode();
			}
		}
		return this.hashCode;
	}
	
	
	
	/**
	 * 将id简化掉“-”，长度32个字符
	 * @return
	 */
	public String splituuid(){
		if(id == null){
			String uuid = java.util.UUID.randomUUID().toString();
			uuid = uuid.replace("-", "");
			return uuid+"_wbbp";
		}else{
			return id;
		}
		
	}
}
