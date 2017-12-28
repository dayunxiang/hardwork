package com.flood.common.entity;
/**
 * 导出excel的头部信息
 * @author shaobin
 *
 */
public class PoiTitleBean {

	private int row;//行数
	private String title;//标题
	private int call = 0;//列数
	public int getRow() {
		return row;
	}
	public PoiTitleBean(int row, String title) {
		super();
		this.row = row;
		this.title = title;
	}
	public void setRow(int row) {
		this.row = row;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getCall() {
		return call;
	}
	public void setCall(int call) {
		this.call = call;
	}

}
