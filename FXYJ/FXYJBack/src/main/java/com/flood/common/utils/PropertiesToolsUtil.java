package com.flood.common.utils;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.Set;

public class PropertiesToolsUtil {

	public static PropertiesToolsUtil invoke(){
		return new PropertiesToolsUtil();
	}
	public Properties getProperties(String _propertiesName) {

		ClassLoader cl = this.getClass().getClassLoader();
		Properties pro = new Properties();
		try {
			InputStream in = cl.getResourceAsStream(_propertiesName);
			pro.load(in);
			in.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

		return pro;
	}

	public void setProperty(String _propertiesName, String _key, String _value) {
		Properties pro = getProperties(_propertiesName);
		pro.setProperty(_key, _value);
	}

	public void setPropertys(String _propertiesName, Map<String, String> _map) {
		Properties pro = getProperties(_propertiesName);
		Set<String> keys = _map.keySet();
		Iterator<String> iterator = keys.iterator();
		String key;
		while (iterator.hasNext()) {
			key = iterator.next();
			pro.setProperty(key, _map.get(key));
		}

	}

	/**
	 * 
	 * @param _propertiesName
	 * @param _property
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public String getProperty(String _propertiesName, String _property) {
		Properties pro = getProperties(_propertiesName);
		String _val = pro.getProperty(_property);
		if(!Util.isNull(_val)){
			try {
				return new String(_val.getBytes("iso-8859-1"),"UTF-8");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		
		return null;
	}

	/**
	 * 
	 * @param _propertiesName
	 * @param _propertys
	 * @return
	 */
	public String[] getProperty(String _propertiesName, String[] _propertys) {
		Properties pro = getProperties(_propertiesName);

		for (int i = 0; i < _propertys.length; i++) {
			_propertys[i] = pro.getProperty(_propertys[i]);
		}
		return _propertys;
	}
	
	
	/**
	 * 
	 * @param _propertiesName
	 * @param _propertys
	 * @return
	 */
	public Map<String,String> getPropertys(String _propertiesName, String[] _propertys) {
		Properties pro = getProperties(_propertiesName);
		Map<String,String> _tempMap = new HashMap<String,String>();
		
		for(String _property : _propertys){
			_tempMap.put(_property, pro.getProperty(_property));
		}
		return _tempMap;
	}

	public Iterator<Entry<Object,Object>> getEntryProperty(String propertiesName){
		Properties pp = getProperties(propertiesName);
		Iterator<Entry<Object,Object>> it = pp.entrySet().iterator();
		return it;
	}
	
	public Iterator<Entry<Object, Object>> getAllProperty(String _propertiesName) {
		Properties pp = getProperties(_propertiesName);
		Iterator<Entry<Object, Object>> it = pp.entrySet().iterator();  
        
		return it;
	}
}
