package com.flood.scheduled;

import java.util.Date;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 
 * @ClassName: ScheduledTasks 
 * @Description: 定时任务Tasks
 * @author guxuebei  
 * @date 2017年3月28日 上午10:39:24 
 * @version V1.0
 */
@Component
public class ScheduledTasks {
	/**
	 * @Title: doScheduled 
	 * @Description:第一个定时任务测试 
	 * @param 
	 * @return void
	 * @author guxuebei 
	 * @throws
	 * @date 2017年3月28日 下午12:36:10 
	 * @version V1.0
	 */
	@Scheduled(cron = "${cron.cron1}")
	public void doScheduled() {
		System.err.println("每秒任务，当前时间：" + new Date());
	}
	

}
