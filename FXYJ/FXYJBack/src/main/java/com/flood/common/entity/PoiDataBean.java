package com.flood.common.entity;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.DynaBean;

public class PoiDataBean {
	
	public PoiDataBean(int columnstart, int rowstart, List<DynaBean> data,
			String[] columnname) {
		super();
		this.columnstart = columnstart;
		this.rowstart = rowstart;
		this.data = data;
		this.columnname = columnname;
	}
	private int columnstart;//开始列0
	private int rowstart;//开始行0
	private List<DynaBean> data;//数据集合
	private String[] columnname;//数据项
	private boolean tieleWirte;//是否已经写入
	
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
	public List<DynaBean> getData() {
		return data;
	}
	public void setData(List<DynaBean> data) {
		this.data = data;
	}
	public String[] getColumnname() {
		return columnname;
	}
	public void setColumnname(String[] columnname) {
		this.columnname = columnname;
	}
	public boolean isTieleWirte() {
		return tieleWirte;
	}
	public void setTieleWirte(boolean tieleWirte) {
		this.tieleWirte = tieleWirte;
	}
	

}
