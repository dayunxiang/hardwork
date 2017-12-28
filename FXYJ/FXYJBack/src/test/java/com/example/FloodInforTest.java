package com.example;

import static org.junit.Assert.*;
import static org.mockito.Matchers.anyFloat;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.commons.beanutils.DynaBean;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.flood.Application;
import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.DynaBeanPluginsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.controller.FloodAnalysisController;
import com.flood.controller.FloodInformationController;
import com.flood.dao.DsDsemAnalysisMapper;
import com.flood.dao.DsDsemUsedteamMapper;
import com.flood.entity.DsDsemUsedteam;
import com.flood.service.CommandDispatchService;
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class FloodInforTest {
	
	@Autowired
	private FloodInformationController controller;
	@Autowired
	private DsDsemAnalysisMapper dsDsemAnalysisMapper;
	@Autowired
	private DsDsemUsedteamMapper dsDsemUsedteamMapper;
	@Autowired
	private CommandDispatchService commandDispatchService;

	@Test
	public void test() {
		DynaBean json = DynaBeanPluginsUtil.invoke();
		json.set("startDate", "2013-06-25 00:00:00");
		json.set("endDate", "2013-07-20 10:58:52");
		controller.getWaringSpotByReportDate2(JsonPluginsUtil.bean2Json(json));
	}
	
	@Test
	public void testList() {
		DynaBean json = DynaBeanPluginsUtil.invoke();
		json.set("type", "1");
		controller.getSpotList(JsonPluginsUtil.bean2Json(json));
	}
	
	@Test
	public void testDate() {
		// 获取警情编码最大值
		Date now = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		String nowDate = format.format(now);
		String maxWarningName = dsDsemAnalysisMapper.getMaxWarningCode(nowDate);
//		if (!Util.isNull(maxWarningName)) {
//			// BigDecimal的加法操作
//			BigDecimal one = new BigDecimal("1");
//			BigDecimal bigDecimal = new BigDecimal(maxWarningName);
//			BigDecimal sum = null;
//			sum = bigDecimal.add(one);
//			System.out.println(sum.toString());
//		}else{
//			maxWarningName += "000";
//		}
		if (!Util.isNull(maxWarningName)) {
			// BigDecimal的加法操作
			BigDecimal one = new BigDecimal("1");
			BigDecimal bigDecimal = new BigDecimal(maxWarningName);
			BigDecimal sum = null;
			sum = bigDecimal.add(one);
			maxWarningName = sum.toString();
		}else{
			maxWarningName = nowDate + "000";
		}
		System.out.println(maxWarningName);
	}
	
	@Test
	public void test11() throws ParseException {
		DynaBean json = DynaBeanPluginsUtil.invoke();
		json.set("year", "2013");
		try {
			commandDispatchService.getFloodByTime(JsonPluginsUtil.bean2Json(json));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Autowired
	private FloodAnalysisController floodAnalysisController;
	
	@Test
	public void test12() {
		DynaBean json = DynaBeanPluginsUtil.invoke();
		json.set("floodId", "3");
		floodAnalysisController.getCompleteWaringSpotByFloodID(JsonPluginsUtil.bean2Json(json));
	}

}
