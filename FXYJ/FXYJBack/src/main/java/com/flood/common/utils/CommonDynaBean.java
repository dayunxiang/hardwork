package com.flood.common.utils;

import org.apache.commons.beanutils.LazyDynaBean;

public class CommonDynaBean extends LazyDynaBean{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public Object get(String name) {

		if(values.get(name) == null){
			
			return null;
		}
		return super.get(name);
	}

	@Override
	public void set(String name, Object value) {
		
		super.set(name, value);
	}

}
