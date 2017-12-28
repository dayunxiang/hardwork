package com.flood.omsandsso.serviceimpl;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.DynaBean;
import org.apache.cxf.endpoint.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.springframework.ui.context.support.UiApplicationContextUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.flood.common.ConstantUtil;
import com.flood.common.redis.RedisUtil;
import com.flood.common.utils.CacheUtil;
import com.flood.common.utils.Util;
import com.flood.omsandsso.service.OmsAndSsoService;
import com.flood.webservice.WaterWebServiceClient;

/**
 * 
 * @ClassName: OmsAndSsoServiceImpl
 * @Description: OmsAndSsoService
 * @author guxuebei
 * @date 2017年4月14日 上午10:38:39
 * @version V1.0
 */
@Service
public class OmsAndSsoServiceImpl implements OmsAndSsoService, CommandLineRunner {

	/**
	 * oms配置地址
	 */
	@Value("${client.clientoms}")
	private String clientoms;

	/**
	 * sso配置地址
	 */
	@Value("${client.clientsso}")
	private String clientsso;
	
	@Autowired
	private RedisUtil redisUtil;

	@Override
	public void run(String... args) throws Exception {
		//如果暂时不用oms，则将下面3行代码注释，不然找不到oms的服务会报错，启动不起来
//		WaterWebServiceClient.instance().getOMSClient(clientoms);
//		WaterWebServiceClient.instance().getSSOClient(clientsso);
//		getAllUsersAndRoles();

	}

	@Override
	public String loginCheck(String userName, String password, HttpServletRequest request) throws Exception {
		Client client = WaterWebServiceClient.instance().getSSOClient(clientsso);
		Object[] pObjects = new Object[3];
		pObjects[0] = userName;
		pObjects[1] = password;
		pObjects[2] = CacheUtil.getIp(request);

		Object[] objects = client.invoke("loginCheck", pObjects);
		if (objects != null && objects.length > 0) {
			//通过userName获取用户信息
			Map<String, String> map = new HashMap<String, String>();
			JSONObject map2 = (JSONObject) redisUtil.get(ConstantUtil.USERNAMEINFMAP);
			if(map2 == null){
				getAllUsersAndRoles();
				map2 = (JSONObject) redisUtil.get(ConstantUtil.USERNAMEINFMAP);
			}
			map.put("checkResult", objects[0].toString());
			// 如果该用户不存在，则不添加user信息
			if (!"2".equals(objects[0].toString())) {
				map.put("user",map2.get(userName).toString());
			}
			return JSON.toJSONString(map);
			
			
		}

		// 输出调用结果
		return "";

	}
	
	private void getAllUsersAndRoles() throws Exception{
		
		findAllUsersAndRolesOfUser();
	}
	
	
	//根据组Id获取组下的所有用户
	Map<String, String> rolesAllusersMap = null;
	//根据组Id获取组下的所有用户
	Map<String, String> allRolesObjMap = null;

	@Override
	public String findAllUsersAndRolesOfUser() throws Exception {
		Client client = WaterWebServiceClient.instance().getOMSClient(clientoms);
		Object[] pAllUsers = new Object[3];
		Object[] allUsers = client.invoke("findAllUsersAndRolesOfUser", pAllUsers);
		Object[] pAllRoles = new Object[3];
		Object[] allRoles = client.invoke("getAllRoles", pAllRoles);
		if(allRoles != null && allRoles.length > 0) {
			// json对象List
			String allRolesStr = allRoles[0].toString();
			rolesAllusersMap = new HashMap<String, String>();
			allRolesObjMap = new HashMap<String, String>();
			String[] strings = allRolesStr.split("[|]");
			for(String string:strings){
				String[] strings2 = string.split(",");
				rolesAllusersMap.put(strings2[0], "|");
				// 拼装组属性map
				allRolesObjMap.put(strings2[0], strings2[1]);
			}
		}

		if (allUsers != null && allUsers.length > 0) {
			// json对象List
			JSONArray array = JSON.parseArray(allUsers[0].toString());

			// 根据用户id获取用户的基本信息
			Map<String, String> userIdInfMap = new HashMap<String, String>();

			// 根据登陆名获取用户的基本信息
			Map<String, String> userNameInfMap = new HashMap<String, String>();

			// 根据用户id获取所属组
			Map<String, String> userIdRolesMap = new HashMap<String, String>();

			for (Object object : array) {
				Map<String, Object> map = JSON.parseObject(object.toString());
				userIdInfMap.put(Util.toString(map.get("user_id")), object.toString());
				userNameInfMap.put(Util.toString(map.get("user_name")), object.toString());
				String rolesVal = getRolesByRolesInf(Util.toString(map.get("roles")),Util.toString(map.get("user_id")));
				userIdRolesMap.put(Util.toString(map.get("user_id")),rolesVal);
			}

			redisUtil.set(ConstantUtil.USERIDINFMAP, JSON.toJSON(userIdInfMap));
			redisUtil.set(ConstantUtil.USERNAMEINFMAP, JSON.toJSON(userNameInfMap));
			redisUtil.set(ConstantUtil.USERIDROLESMAP, JSON.toJSON(userIdRolesMap));
			redisUtil.set(ConstantUtil.ROLESALLUSERSMAP, JSON.toJSON(rolesAllusersMap));
			redisUtil.set(ConstantUtil.ALLROLESOBJMAP, JSON.toJSON(allRolesObjMap));
			
			return allUsers[0].toString();
		}

		// 输出调用结果
		return "";
	}

	/**
	 * 
	 * @Title: getRolesByRolesInf
	 * @Description: 获取用户下的id，用逗号隔开
	 * @param @param
	 *            rolesInf
	 * @param @return
	 * @return String
	 * @author guxuebei
	 * @throws @date
	 *             2017年4月24日 下午1:01:07
	 * @version V1.0
	 */
	private String getRolesByRolesInf(String rolesInf,String userId) {
		String rolesVal = "";
		if (!Util.isNull(rolesInf)) {
			StringBuffer buffer = new StringBuffer();
			buffer.append("|");
			String[] strings = rolesInf.split("[|]");
			if (strings != null && strings.length > 0) {
				for (int i = 0; i < strings.length; i++) {
					String string = strings[i];
					String string2 = string.substring(0, string.indexOf(","));
					if (!buffer.toString().contains(string2)) {
						if(rolesAllusersMap.containsKey(string2)){
							String mapVal = rolesAllusersMap.get(string2)+userId+"|";
							rolesAllusersMap.put(string2, mapVal);
						}
							
						buffer.append(string2+"|");
					}

				}
				rolesVal = buffer.toString();
			}
		}
		return rolesVal;
	}

	@Override
	public String getUserIdInfMap() throws Exception {
		String val = "";
		JSONObject jsonObject = (JSONObject) redisUtil.get(ConstantUtil.USERIDINFMAP);
		if(jsonObject == null){
			findAllUsersAndRolesOfUser();
			jsonObject = (JSONObject) redisUtil.get(ConstantUtil.USERIDINFMAP);
		}
		val = jsonObject.toJSONString();
		return val;
	}

	@Override
	public String getUserNameInfMap()  throws Exception{
		String val = "";
		JSONObject jsonObject = (JSONObject) redisUtil.get(ConstantUtil.USERNAMEINFMAP);
		if(jsonObject == null){
			findAllUsersAndRolesOfUser();
			jsonObject = (JSONObject) redisUtil.get(ConstantUtil.USERNAMEINFMAP);
		}
		val = jsonObject.toJSONString();
		return val;
	}

	@Override
	public String getUserIdRolesMap() throws Exception {
		String val = "";
		JSONObject jsonObject = (JSONObject) redisUtil.get(ConstantUtil.USERIDROLESMAP);
		if(jsonObject == null){
			findAllUsersAndRolesOfUser();
			jsonObject = (JSONObject) redisUtil.get(ConstantUtil.USERIDROLESMAP);
		}
		val = jsonObject.toJSONString();
		return val;
	}

	@Override
	public String getRolesAllusersMap() throws Exception {
		String val = "";
		JSONObject jsonObject = (JSONObject) redisUtil.get(ConstantUtil.ROLESALLUSERSMAP);
		if(jsonObject == null){
			findAllUsersAndRolesOfUser();
			jsonObject = (JSONObject) redisUtil.get(ConstantUtil.ROLESALLUSERSMAP);
		}
		val = jsonObject.toJSONString();
		return val;
	}

}
