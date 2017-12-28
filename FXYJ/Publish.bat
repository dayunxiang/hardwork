@echo.
@echo 【提示】 开始执行 防汛系统 一键发布脚本
@echo.

@echo.
@echo 【提示】 清理发布目录
rd/s/q Release\fangxun
md Release\fangxun

@echo.
@echo 【提示】 将前台文件拷贝到发布目录下
xcopy /s/e FXYJFront Release\fangxun
del Release\fangxun\.project

@echo.
@echo 【提示】 将后台发布文件拷贝到发布文件夹下
md Release\fangxun\WEB-INF
xcopy /s/e FXYJBack\target\fangxun-0.0.1\WEB-INF Release\fangxun\WEB-INF

@echo.
@echo 【提示】 脚本执行完毕
pause

