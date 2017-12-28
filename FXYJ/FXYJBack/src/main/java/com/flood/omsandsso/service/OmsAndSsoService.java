package com.flood.omsandsso.service;

import javax.servlet.http.HttpServletRequest;

/**
 * 
 * @ClassName: OmsAndSsoService 
 * @Description: oms和sso
 * @author guxuebei  
 * @date 2017年4月14日 上午10:33:55 
 * @version V1.0
 */
public interface OmsAndSsoService {
	
	/**
	 * 
	 * @Title: loginCheck 
	 * @Description: 用户登录验证
	 * @param @param userName
	 * @param @param password
	 * @param @return
	 * @return String
	 * @author guxuebei 
	 * @throws
	 * @date 2017年4月14日 上午10:34:01 
	 * @version V1.0
	 */
	public String loginCheck(String userName,String password,HttpServletRequest request)  throws Exception;
	
	/**
	 * 
	 * @Title: findAllUsersAndRolesOfUser 
	 * @Description: 取得所有用户，并取得每个用户的所有角色
	 * @param @return
	 * @param @throws Exception
	 * @return String
	 * @author guxuebei 
	 * @throws
	 * @date 2017年4月20日 上午10:12:07 
	 * @version V1.0
	 */
	public String findAllUsersAndRolesOfUser() throws Exception;
	
	/**
	 * 
	 * @Title: getUserIdInfMap 
	 * @Description: T以用户id为key的用户信息map
	 * @param @return
	 * @return String
	 * @author guxuebei 
	 * @throws
	 * @date 2017年4月24日 下午6:01:11 
	 * @version V1.0
	 */
	public String getUserIdInfMap() throws Exception ;
	
	/**
	 * 
	 * @Title: getUserNameInfMap 
	 * @Description: 以用户登陆名为key的用户信息map
	 * @param @return
	 * @return String
	 * @author guxuebei 
	 * @throws
	 * @date 2017年4月24日 下午6:02:21 
	 * @version V1.0
	 */
	public String getUserNameInfMap() throws Exception ;
	
	/**
	 * 
	 * @Title: getUserIdRolesMap 
	 * @Description: 以用户id为key的所有组map
	 * @param @return
	 * @return String
	 * @author guxuebei 
	 * @throws
	 * @date 2017年4月24日 下午6:02:47 
	 * @version V1.0
	 */
	public String getUserIdRolesMap() throws Exception ;
	
	/**
	 * 
	 * @Title: getRolesAllusersMap 
	 * @Description: 以组id为key的用户集合map
	 * @param @return
	 * @return String
	 * @author guxuebei 
	 * @throws
	 * @date 2017年4月24日 下午6:02:59 
	 * @version V1.0
	 */
	public String getRolesAllusersMap() throws Exception ;

}
