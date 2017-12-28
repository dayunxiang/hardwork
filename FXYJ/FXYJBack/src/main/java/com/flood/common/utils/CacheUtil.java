package com.flood.common.utils;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

public class CacheUtil {

	private static Map<String, Object> map = new HashMap<String, Object>();

	public static Map<String, Object> getMap() {
		return map;
	}

	public static void setMap(Map<String, Object> _map) {
		map = _map;
	}

	public static Object getKeyValue(String key) {
		return map.get(key);
	}

	public static void setKeyValue(String key, Object value) {
		map.put(key, value);
	}

	public static String getIP(String ip) throws UnknownHostException, SocketException {
		if (ip.equals("0:0:0:0:0:0:0:1")) {
			InetAddress addr = InetAddress.getLocalHost();
			ip = addr.getHostAddress();// 获得本机IP
		}
		if (ip.equals("127.0.0.1")) {
			StringBuilder IFCONFIG = new StringBuilder();
			for (Enumeration<NetworkInterface> en = NetworkInterface.getNetworkInterfaces(); en.hasMoreElements();) {
				NetworkInterface intf = en.nextElement();
				for (Enumeration<InetAddress> enumIpAddr = intf.getInetAddresses(); enumIpAddr.hasMoreElements();) {
					InetAddress inetAddress = enumIpAddr.nextElement();
					if (!inetAddress.isLoopbackAddress() && !inetAddress.isLinkLocalAddress()
							&& inetAddress.isSiteLocalAddress()) {
						IFCONFIG.append(inetAddress.getHostAddress().toString() + "\n");
					}

				}
			}
			ip = IFCONFIG.toString();
		}
		return ip;
	}

	public static String getIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");

		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");

		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");

		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("http_client_ip");

		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("HTTP_X_FORWARDED_FOR");

		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {

			ip = request.getRemoteAddr();

		}

		// 如果是多级代理，那么取第一个ip为客户ip
		if (ip != null && ip.indexOf(",") != -1) {
			ip = ip.substring(ip.lastIndexOf(",") + 1, ip.length()).trim();
		}
		return ip;

	}

	public static String getIp(HttpServletRequest request) {
		String userIp = "";

		try {
			userIp = getIP(getIpAddr(request));
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SocketException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return userIp;
	}

	public static String getCurrentTime()// 获得当前时间
	{
		Date now = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		String time = dateFormat.format(now);
		return time;
	}

	public static String splitString(String str, String n)// 字符拆分方法
	{
		String st[] = str.split(n);
		str = "";
		for (int i = 0; i < st.length; i++) {
			str = str + st[i];
		}
		return str;
	}

	/**
	 * 
	 * @return
	 * @Description:获取当前时间的字符串
	 * @author guxuebei
	 * @date 2013-11-17
	 */
	public static String getTimeInt() // 对字符进行拆分
	{

		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		String time = dateFormat.format(new Date());

		return time;
	}

	public static void main(String[] args) {
		System.out.println(CacheUtil.getTimeInt());

	}

}
