package com.flood.common.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;

/**
 * file表
 * 文件存储
 *
 */
@MappedSuperclass
public class BaseFileBO extends BaseBO {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 文件名称
	 */
	private String filename;//文件名称
	/**
	 * 文件路径
	 */
	@Column(length=1000) 
	private String filepath;//文件路径
	/**
	 * 后缀名
	 */
	private String suffixName;//后缀名
	/**
	 * 关系编号 区域编号/工作对象编号
	 */
	private String relationNum;//关系编号 区域编号/工作对象编号

	/**
	 * 判断类型（过河管传21） （应急事故处理31）
	 */
	private String elementType;//判断类型（过河管传21） （应急事故处理添加图片31，应急事故处理回单图片32,应急事故处理回单附件33）
	/**
	 * 上传时间
	 */
	private Date uploadDate;//上传时间
	/**
	 * 描述 备注
	 */
	@Column(length=2000) 
	private String remark;//描述 备注
	
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getFilepath() {
		return filepath;
	}
	public void setFilepath(String filepath) {
		this.filepath = filepath;
	}
	public String getSuffixName() {
		return suffixName;
	}
	public void setSuffixName(String suffixName) {
		this.suffixName = suffixName;
	}
	public String getRelationNum() {
		return relationNum;
	}
	public void setRelationNum(String relationNum) {
		this.relationNum = relationNum;
	}
	public String getElementType() {
		return elementType;
	}
	public void setElementType(String elementType) {
		this.elementType = elementType;
	}
	public Date getUploadDate() {
		return uploadDate;
	}
	public void setUploadDate(Date uploadDate) {
		this.uploadDate = uploadDate;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}

}
