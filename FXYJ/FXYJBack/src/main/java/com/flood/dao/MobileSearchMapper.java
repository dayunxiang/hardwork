package com.flood.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface MobileSearchMapper {
	
    /**
     * 获取当前预警状态
     * @author xiaolei
     * @date 2017年12月5日
     */
    public List<Map<String, String>> getFloodWarningStatus();

    /**
     * 获取无预警的状态信息
     * @author xiaolei
     * @date 2017年12月5日
     */
    public List<Map<String, String>> getNoFloodWarning();
	
    /**
     * 获取警情工单，根据防汛队编号，用于移动端
     * @param floodCode 汛情编码
     * @param teamId 防汛队编码
     * @author xiaolei
     * @date 2017年12月6日
     */
    public List<Map<String, String>> getWorksheetByTeamIDUseMobile(
    		@Param("floodCode") String floodCode
    		,@Param("teamId") String teamId
    		);
	
    /**
	 * 获取警情工单详情，根据警情编号
	 * @param WARNINGID 警情编号
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
    public List<Map<String, String>> getWorksheetDetailByWaringId(
    		@Param("WARNINGID") String WARNINGID
    		);
	
    /**
	 * 查询警情点的积水原因
	 * @param WARNINGID 警情编号
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
    public List<Map<String, String>> getWaringReasonByWaringId(
    		@Param("WARNINGID") String WARNINGID
    		);
	
    /**
	 * 现场处理措施列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
    public List<Map<String, String>> getMethodList();
	
    /**
	 * 积水原因列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
    public List<Map<String, String>> getWarningReasonList();
	
    /**
	 * 建议整改方案列表
	 * @author xiaolei
	 * @date 2017年12月7日
	 */
    public List<Map<String, String>> getRepairIdeaList();
	
    /**
	 * 新建警情点，用于移动端
	 * @param params 要增加的数据
	 * @param FLOODID 汛情编号
	 * @author xiaolei
	 * @date 2017年12月8日
	 */
    public int addWarningSpotUseMobile(
    		@Param("params") Map<String, Object> params
    		,@Param("FLOODID") String FLOODID
    		);
	
}