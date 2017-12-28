package com.flood.webservice;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

/**
 * 
 * @ClassName: WaterWebService 
 * @Description: TODO(这里用一句话描述这个类的作用) 
 * @author guxuebei  
 * @date 2017年3月31日 下午5:34:15 
 * @version V1.0
 */
@WebService
public interface WaterWebService {
	@WebMethod
    public String getName(@WebParam(name = "userId") Long userId);
    @WebMethod
    public String getUser(Long userId);

}
