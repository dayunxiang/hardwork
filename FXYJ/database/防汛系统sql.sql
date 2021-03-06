
----------------------------------------------------------------------------------------------------------------

--接口：getWorksheetByPreFloodTeamID
--说明：根据防汛队ID获取相关工单

--SELECT * FROM DS_DSEM_PREFLOODTEAM	--防汛队基本信息
--SELECT * FROM DS_DSEM_USEDTEAM	--防汛队出险信息
--SELECT * FROM DS_DSEM_TASK t	--工单信息
--SELECT * FROM DS_DSEM_ANALYSIS	--警情点信息
--select * from DS_DSEM_FACTORINFO where FACTORTYPE = '100'	--工单状态代码表
  
select	
	 task.TASKID	--工单编号
	,analy.WARNINGID	--警情点编号
	,analy.WARNING_NAME	--警情点名称	
	,analy.X	--警情点位置，经度
	,analy.Y		--警情点位置，纬度
	,CONVERT(varchar(100), task.ORDERTIME, 20) as ORDERTIME	--派单时间
	,CONVERT(varchar(100), task.FINISHTIME, 20) as FINISHTIME	--完成时间
	,factor.FACTORNAME as TASKSTATUS	--工单状态
	,(select COUNT(*) from DS_DSEM_USEDFILE usefile where usefile.FEILDID=usedteam.RELATIONID) as PICTURECOUNT	--工单中的照片数量
from 
	DS_DSEM_USEDTEAM usedteam	--防汛队出险信息表
	inner join 
	DS_DSEM_PREFLOODTEAM floodteam on usedteam.PFTID = floodteam.PFTID	--防汛队基本信息
    inner join 
    DS_DSEM_TASK task on task.TASKID=usedteam.TASKID	--工单信息表
    inner join 
    DS_DSEM_ANALYSIS analy on task.WARNINGID = analy.WARNINGID	--警情点信息
    left join 
    (select * from DS_DSEM_FACTORINFO where FACTORTYPE = '100') factor on factor.FACTORID = task.TASKSTATUS	--工单状态代码表
where 
	floodteam.PFTID = '28'	--防汛队编码
	and analy.FLOODID = '12'	--汛情编码
	
----------------------------------------------------------------------------------------------------------------

--接口：getWorksheetPictureByTaskId
--说明：获取警情工单中的图片地址，根据工单编号

--select * from DS_DSEM_FILE	--文件存放信息表
--select * from DS_DSEM_USEDFILE	--文件使用信息表
--select * from DS_DSEM_USEDTEAM	--防汛队出险信息表

select	
	files.URL	--图片地址
	,files.DESCRIPTION	--图片说明
	,CONVERT(varchar(100), files.UPLOADDATE, 20) as UPLOADDATE	--上传时间
	,files.SOURCE as PICTURETYPE	--图片分类，1：警情上报图片，2：警情处理图片
from 
	DS_DSEM_USEDFILE usefile	--文件使用信息表
	inner join 
	DS_DSEM_FILE files on usefile.FileID=files.FileID	--文件存放信息表
	inner join 
	DS_DSEM_USEDTEAM useteam on usefile.FEILDID=useteam.RELATIONID	--防汛队出险信息表
where 
	usefile.TableName='DS_DSEM_USEDTEAM'	
	and useteam.TASKID = 6	--任务编码
	and files.SOURCE = 1	--图片分类，1：警情上报图片，2：警情处理图片
order by files.UPLOADDATE

-- pictureType
	
----------------------------------------------------------------------------------------------------------------

--接口：getWaringSpotByFloodCode
--说明：获取警情点列表,根据汛情编号条件

SELECT WARNINGID as WARNING_CODE,
	WARNING_NAME,
	FLOODID as FLOODCODE,
	s.FACTORNAME as WARNING_ISCOMPLETE,
	CONVERT(varchar(100), WARNING_UPLOADTIME, 20) as WARNING_UPLOADTIME,
	f.FACTORNAME as WARNING_SOURCE,
	X,
	Y,
	WARNING_LOCATION,
	WARNING_DESCRIPTION
from DS_DSEM_ANALYSIS t
	left join
	(SELECT FACTORID,FACTORNAME from DS_DSEM_FACTORINFO where FACTORTYPE=10 ) f on t.WARNING_SOURCE = f.FACTORID
	left join
	(SELECT FACTORID,FACTORNAME from DS_DSEM_FACTORINFO where FACTORTYPE=12 ) s on t.WARNING_ISCOMPLETE = s.FACTORID
where 
	FLOODID='12'
	and ISDELETE = 0
order by WARNING_UPLOADTIME DESC
	
----------------------------------------------------------------------------------------------------------------

--接口：getFloodWarningStatus
--说明：获取最新汛情信息

--SELECT * FROM DS_DSEM_FLOOD	--历史汛情表
--select * from DS_DSEM_FLOODLEVELRECORD	--预警记录表
--select * from DS_DSEM_FLOODSTANDARD		--预警标准表

select top 1		
	flood.FLOODID as FLOODCODE		--汛情编号
	,flood.FLOODNAME				--汛情名称
	,standards.LEVELNAME as FLOODLEVEL	--预警级别
	,standards.LEVELCOLOR as FLOODCOLOR	--级别颜色码
from 
	DS_DSEM_FLOOD flood		--汛情表
	left join 
	DS_DSEM_FLOODLEVELRECORD record on record.FLOODID = flood.FLOODID	--预警记录表
	left join
	DS_DSEM_FLOODSTANDARD standards on standards.WARNINGLEVEL = record.WARNINGLEVEL		--预警标准表
where
	record.WARNINGSTATUS = 1	--预警状态
order by 
	record.CHANGETIME DESC		
		
----------------------------------------------------------------------------------------------------------------

--接口：getNoFloodWarning
--说明：获取无预警的状态信息

select 
	-1  as FLOODCODE		--汛情编号
	,'-' as FLOODNAME		--汛情名称
	,standards.LEVELNAME as FLOODLEVEL	--预警级别
	,standards.LEVELCOLOR as FLOODCOLOR	--级别颜色码
from 
	DS_DSEM_FLOODSTANDARD standards		--预警标准表
where
	standards.WARNINGLEVEL = 0		--无预警
		
----------------------------------------------------------------------------------------------------------------

--接口：getWorksheetByTeamIDUseMobile
--说明：获取警情工单，根据防汛队编号，用于移动端

--SELECT * FROM DS_DSEM_USEDTEAM	--防汛队出险信息
--SELECT * FROM DS_DSEM_TASK t		--工单信息
--SELECT * FROM DS_DSEM_ANALYSIS	--警情点信息
--select * from DS_DSEM_FACTORINFO where FACTORTYPE = '12'		--工单状态代码表
  
select	
	 analy.WARNINGID	--警情点编号
	,analy.WARNING_NAME	--警情点名称	
	,analy.FLOODID		--所属汛情编号
	,analy.WARNING_ISCOMPLETE	--警情处理状态编码  
	,(select factor.FACTORNAME 
	from DS_DSEM_FACTORINFO factor 
	where FACTORTYPE = '10' and factor.FACTORID = analy.WARNING_SOURCE
	) as WARNING_SOURCE	--警情上报来源
	,analy.X	--经度
	,analy.Y	--纬度
	,analy.WARNING_LOCATION		--警情位置
	,analy.WARNING_DESCRIPTION	--警情描述
	,CONVERT(varchar(100), analy.WARNING_UPLOADTIME, 20) as WARNING_UPLOADTIME	--警情上报时间
	,CONVERT(varchar(100), task.PROCESSINGTIME, 20) as PROCESSINGTIME	--处理时间
	,CONVERT(varchar(100), task.FINISHTIME, 20) as FINISHTIME	--完成时间
from 
	DS_DSEM_USEDTEAM usedteam	--防汛队出险信息表
    inner join 
    DS_DSEM_TASK task on task.TASKID=usedteam.TASKID	--工单信息表
    inner join 
    DS_DSEM_ANALYSIS analy on task.WARNINGID = analy.WARNINGID	--警情点信息
where 
	analy.FLOODID = '3'	--汛情编码
	and usedteam.PFTID = '28'	--防汛队编码
	and analy.WARNING_ISCOMPLETE in (2,3,4)		--不查询未派单的警情
	
----------------------------------------------------------------------------------------------------------------

--接口：getWorksheetDetailByWaringId
--说明：获取警情工单详情，根据警情编号

--SELECT * FROM DS_DSEM_TASK t	--工单信息
--SELECT * FROM DS_DSEM_ANALYSIS	--警情点信息

select	
	analy.WARNING_ISCOMPLETE	--警情处理状态,1：待处理，2：已派单，3：处理中，4：已完成
	,CONVERT(varchar(100), analy.WARNING_UPLOADTIME, 20) as WARNING_UPLOADTIME	--上报时间
	,analy.WARNINGID		--警情编号
	,analy.WARNING_NAME		--警情名称
	,analy.WARNING_DESCRIPTION	--警情描述
	,analy.WARNING_LOCATION		--警情位置
	,analy.WARNING_UPLOADPERSON	--上报人
	,CONVERT(varchar(100), task.ORDERTIME, 20) as ORDERTIME	--下发时间
	,task.ORDERPERSON		--下发人
	,CONVERT(varchar(100), analy.WARNING_HANDLETIME, 20) as HANDLETIME	--处理时间
	,analy.EFFECTAREA		--积水面积
	,analy.WATERDEPTH		--积水深度
	,analy.WARNIING_HANDLEPERSON		--处理人
	,CONVERT(varchar(100), analy.WARNING_COMPLETETIME, 20) as COMPLETETIME	--完成时间
	,analy.METHOD			--现场处理措施
	,analy.REPAIR_DETAIL	--建议整改方案
from 
	DS_DSEM_ANALYSIS analy		--警情点信息
	inner join 
    DS_DSEM_TASK task on task.WARNINGID = analy.WARNINGID	--工单信息表
where 
	analy.WARNINGID = '13'		--警情编号

-------------------------------

--方法：getWaringRwasonByWaringId
--说明：查询警情点的积水原因

--SELECT * FROM DS_DSEM_WARNINGREASON t	--警情点积水原因表
--SELECT * FROM DS_DSEM_ANALYSIS	--警情点信息

select factor.FACTORNAME	--积水原因
from 
	DS_DSEM_WARNINGREASON reason	--警情点积水原因表
	inner join 
	DS_DSEM_ANALYSIS analy on reason.WARNINGID = analy.WARNINGID	--警情表
	left join
	(select * from DS_DSEM_FACTORINFO factor where FACTORTYPE = '13' ) factor on factor.FACTORID = reason.REASONID		--要素表
where 
	analy.WARNINGID = '5'		--警情编号
	
----------------------------------------------------------------------------------------------------------------

--接口：getMethodList
--说明：现场处理措施列表

--SELECT * FROM DS_DSEM_FACTORINFO t	--现场处理措施

select 
	factor.FACTORNAME as NAME		--要素名称
from 
	DS_DSEM_FACTORINFO factor		----要素表
where 
	FACTORTYPE = '103' --现场处理措施类别码
	
----------------------------------------------------------------------------------------------------------------

--接口：getWarningReasonList
--说明：积水原因列表

--SELECT * FROM DS_DSEM_FACTORINFO t	--现场处理措施

select 
	factor.FACTORNAME as NAME		--要素名称
from 
	DS_DSEM_FACTORINFO factor		----要素表
where 
	FACTORTYPE = '13' --积水原因类别码
	
----------------------------------------------------------------------------------------------------------------

--接口：getRepairIdeaList
--说明：建议整改方案列表

--SELECT * FROM DS_DSEM_FACTORINFO t	--现场处理措施

select 
	factor.FACTORNAME as NAME		--要素名称
from 
	DS_DSEM_FACTORINFO factor		----要素表
where 
	FACTORTYPE = '104' --建议整改方案类别码
	
----------------------------------------------------------------------------------------------------------------

--接口：addWarningSpotUseMobile	
--说明：新建警情点，用于移动端

--SELECT * FROM DS_DSEM_TASK t	--工单信息
--SELECT * FROM DS_DSEM_ANALYSIS	--警情点信息

--DS_DSEM_ANALYSIS
所属汛情编号	FLOODID
警情上报时间	WARNING_UPLOADTIME
警情上报来源	WARNING_SOURCE
警情描述		WARNING_DESCRIPTION
警情位置		WARNING_LOCATION
经度			X
纬度			Y
上报人			WARNING_UPLOADPERSON
上报图片		--

INSERT INTO 
	DS_DSEM_ANALYSIS
	(
	FLOODID		--所属汛情编号
	,WARNING_UPLOADTIME		--警情上报时间
	,WARNING_SOURCE			--警情上报来源
	,WARNING_DESCRIPTION	--警情描述
	,WARNING_LOCATION		--警情位置
	,X		--经度	
	,Y		--纬度
	,WARNING_UPLOADPERSON	--上报人		
	
	,WARNING_ISCOMPLETE		--警情处理状态
	,WARNINGID		--警情编号
	,WARNING_NAME		--警情名称
	,ISDELETE		--删除标记
	)
VALUES
	(
	3		--所属汛情编号
	,GETDATE()		--上报时间
	,3		--警情上报来源
	,'发大水了'
	,'北京路和南京路交叉口'
	,120.30283
	,39.542155
	,'张三'
	
	,1
	,100
	,'第1处警情'
	,0
	)

