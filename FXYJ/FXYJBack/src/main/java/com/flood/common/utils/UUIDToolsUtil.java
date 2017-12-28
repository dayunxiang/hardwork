package com.flood.common.utils;

public class UUIDToolsUtil {

	public static String getUUID(String sub){
		String uuid = java.util.UUID.randomUUID().toString();
		uuid = uuid.replace("-", "");
		return uuid+"_"+sub;
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(UUIDToolsUtil.getUUID("MS"));
	}

}
