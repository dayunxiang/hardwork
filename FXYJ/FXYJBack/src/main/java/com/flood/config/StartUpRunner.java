package com.flood.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.flood.common.utils.FileToolsUtil;
/**
 * @ClassName: StartUpRunner 
 * @Description: 服务启动执行类
 * @author weizl  
 * @date 2017年6月21日 上午11:01:24 
 * @version V1.0
 */
@Component
//@Order(value=1)// 执行的顺序，1>2>3>...
public class StartUpRunner implements CommandLineRunner {
	
	
	@Value("${excel.filePath}")
	private String tmpAddress;

	@Override
	public void run(String... args) throws Exception {
		// 获取项目路径
		String basePath = this.getClass().getResource("/").getPath();
		FileToolsUtil.ROOT = basePath.substring(1, basePath.length());
		
		// 临时文件路径
		FileToolsUtil.TMPPATH = tmpAddress;
		
	}

}
