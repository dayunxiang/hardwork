package com.flood.webservice;


/**
 * 
 * @ClassName: WaterWebServiceImpl 
 * @Description: TODO(这里用一句话描述这个类的作用) 
 * @author guxuebei  
 * @date 2017年3月31日 下午5:34:23 
 * @version V1.0
 */
public class WaterWebServiceImpl implements WaterWebService{

	@Override
	public String getName(Long userId) {
		
		return userId+"";
	}

	@Override
	public String getUser(Long userId) {
		
		return userId+"";
	}

}
