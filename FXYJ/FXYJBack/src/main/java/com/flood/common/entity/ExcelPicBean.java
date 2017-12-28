package com.flood.common.entity;

public class ExcelPicBean {

	public ExcelPicBean(String picPath, int columnstart, int rowstart,
			int columnCount, int rowCount) {
		super();
		this.picPath = picPath;
		this.columnstart = columnstart;
		this.rowstart = rowstart;
		this.columnCount = columnCount;
		this.rowCount = rowCount;
	}
	/**
	 * 图片路径
	 */
	private String picPath ;
	/**
	 * 从第几列开始
	 */
	private int columnstart;
	/**
	 * 从第几行开始
	 */
	private int rowstart;
	/**
	 * 占用几列
	 */
	private int columnCount;
	/**
	 * 占用几行
	 */
	private int rowCount;
	
	public String getPicPath() {
		return picPath;
	}
	public void setPicPath(String picPath) {
		this.picPath = picPath;
	}
	public int getColumnstart() {
		return columnstart;
	}
	public void setColumnstart(int columnstart) {
		this.columnstart = columnstart;
	}
	public int getRowstart() {
		return rowstart;
	}
	public void setRowstart(int rowstart) {
		this.rowstart = rowstart;
	}
	public int getColumnCount() {
		return columnCount;
	}
	public void setColumnCount(int columnCount) {
		this.columnCount = columnCount;
	}
	public int getRowCount() {
		return rowCount;
	}
	public void setRowCount(int rowCount) {
		this.rowCount = rowCount;
	}
}
