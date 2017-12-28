package com.flood.common;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * 
 * @param <T>
 * @描述: 分页组件.

 */
public class PageBean implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 8470697978259453214L;
	
	
	private int pageNum; 
	private int pageSize; 
	
	private int startRow; 
	private int endRow; 
	private int total; 
	private int pages; 
	private List<Map<String, Object>> recordList;
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	public int getStartRow() {
		return startRow;
	}
	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}
	public int getEndRow() {
		return endRow;
	}
	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}
	
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getPages() {
		return pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}
	public List<Map<String, Object>> getRecordList() {
		return recordList;
	}
	public void setRecordList(List<Map<String, Object>> recordList) {
		this.recordList = recordList;
	} 
	/**
	 * 只接受前4个必要的属性，会自动的计算出其他3个属生的值
	 * 
	 * @param pageNum
	 * @param pageSize
	 * @param totalCount
	 * @param recordList
	 */
	public PageBean(int pageNum,int pageSize,int total) {
		
		this.pageNum = pageNum;
		this.pageSize = pageSize;
		this.startRow = pageNum !=-1?(pageNum-1)*pageSize:0;
		this.endRow = pageSize !=-1?startRow+pageSize:0;
		this.total = total;
		this.pages = total%pageSize==0?total/pageSize:total/pageSize + 1;
		
	}

}
