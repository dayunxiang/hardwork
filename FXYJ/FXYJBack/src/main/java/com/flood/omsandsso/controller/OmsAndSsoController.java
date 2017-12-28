package com.flood.omsandsso.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.DynaBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.flood.common.result.Result;
import com.flood.common.utils.DynaBeanPluginsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.omsandsso.service.OmsAndSsoService;


@RestController
@RequestMapping(value = "/omsAndSso")
public class OmsAndSsoController {

	@Autowired
	private OmsAndSsoService omsAndSso;

	/**
	 * 
	 * @Title: loginCheck
	 * @Description: 用户登录验证
	 * @param @param
	 *            json
	 * @param @param
	 *            session
	 * @param @param
	 *            request
	 * @param @return
	 * @return String
	 * @author guxuebei
	 * @throws @date
	 *             2017年4月14日 下午1:41:31
	 * @version V1.0
	 */
	@RequestMapping(value = "loginCheck")
	@ResponseBody
	public Result loginCheck(@RequestBody String json, HttpSession session, HttpServletRequest request) {

		DynaBean bean = JsonPluginsUtil.json2bean(json);
		String userName = Util.toString(bean.get("username"));
		String password = Util.toString(bean.get("password"));
		try {
			String token = omsAndSso.loginCheck(userName, password, request);
			if (token.length() > 1) {
				session.setAttribute("token", token);
				session.setAttribute("username", userName);
			}
			return Result.success(token);
		} catch (Exception e) {
			return Result.error("4");
		}

	}
}
