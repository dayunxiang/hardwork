package com.example;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.beanutils.DynaBean;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.ClassUtils;

import com.flood.Application;
import com.flood.common.entity.PoiDataBean;
import com.flood.common.entity.PoiTitleBean;
import com.flood.common.utils.DateToolsUtil;
import com.flood.common.utils.DynaBeanPluginsUtil;
import com.flood.common.utils.ExcelPoiPluginsUtil;
import com.flood.common.utils.FileToolsUtil;
import com.flood.common.utils.JsonPluginsUtil;
import com.flood.common.utils.Util;
import com.flood.controller.FloodReadyController;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class FloodReadyTest {

	@Autowired
	private FloodReadyController floodReadyController;

	@Test
	public void test() {
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("year", "2013");
		floodReadyController.getAllFlood(JsonPluginsUtil.bean2Json(bean));
	}

	@Test
	public void test1() {
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("teamID", "22");
		floodReadyController.getStuffByTeamID(JsonPluginsUtil.bean2Json(bean));
	}

	@Test
	public void test2() {
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("objectID", "43");
		// bean.set("address", "1111111111111111116");
		// bean.set("department", "655555");
		// bean.set("manage", "测试清淤记录");
		// bean.set("problem", "1212");
		// bean.set("year", "2017");
		// bean.set("des", "1");
		// bean.set("time", "2017-05-05");
		floodReadyController.deleteFacilityRecord(JsonPluginsUtil.bean2Json(bean));
	}

	@Test
	public void test3() {
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("st", "2013-06-25 12:22:32.810");
		bean.set("et", "2013-07-20 10:58:52.183");
		floodReadyController.getCompleteWaringSpotByReportDate(JsonPluginsUtil.bean2Json(bean));
	}

	@Test
	public void Test() throws IOException {
		DynaBean bean = DynaBeanPluginsUtil.invoke();
		bean.set("deviceID", "215");
		bean.set("name", "bbbbbbbbbbbbbbbbb");
		bean.set("size", "123");
		bean.set("des", "des__desdesdesdesdes");
		bean.set("detail", "detail_detaildetaildetaildetail");
		bean.set("year", "2013");
		bean.set("pumpID", "12");
		bean.set("pumpType", "1");
		bean.set("status", "22");
		bean.set("completetime", "2013-04-12");
		floodReadyController.deletePumpDevice(JsonPluginsUtil.bean2Json(bean));
	}

}
