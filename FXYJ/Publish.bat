@echo.
@echo ����ʾ�� ��ʼִ�� ��Ѵϵͳ һ�������ű�
@echo.

@echo.
@echo ����ʾ�� ������Ŀ¼
rd/s/q Release\fangxun
md Release\fangxun

@echo.
@echo ����ʾ�� ��ǰ̨�ļ�����������Ŀ¼��
xcopy /s/e FXYJFront Release\fangxun
del Release\fangxun\.project

@echo.
@echo ����ʾ�� ����̨�����ļ������������ļ�����
md Release\fangxun\WEB-INF
xcopy /s/e FXYJBack\target\fangxun-0.0.1\WEB-INF Release\fangxun\WEB-INF

@echo.
@echo ����ʾ�� �ű�ִ�����
pause

