package com.flood.common.utils;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

/**
 * base64编码工具类
 * @author 邵斌
 * @version 20110528
 */
public class Base64ToolsUtil {

    /**
     *  将 s 进行 BASE64 编码
     * @param s
     * @return
     */
    @SuppressWarnings("restriction")
	public static String encode(byte[] s) {
        if (s == null)
            return null;
        return (new sun.misc.BASE64Encoder()).encode(s);
    }

    /**
     *  将 s 进行 BASE64 编码,针对url的编码
     * @param s
     * @return
     */
    public static String encodeForUrl(byte[] s){
        if (s == null)
            return null;
        String standerBase64 = encode(s);        
        String encodeForUrl = standerBase64;
        //转成针对url的base64编码
        encodeForUrl = encodeForUrl.replace("=", "");
        encodeForUrl = encodeForUrl.replace("+", "*");
        encodeForUrl = encodeForUrl.replace("/", "-"); 
        encodeForUrl = encodeForUrl.replace("--", "-");
        encodeForUrl = encodeForUrl.replace("---", "-");
        encodeForUrl = encodeForUrl.replace("----", "-");
        //去除换行
        encodeForUrl = encodeForUrl.replace("\n", "");
        encodeForUrl = encodeForUrl.replace("\r", "");
        
        //转换*号为 -x-
        //防止有违反协议的字符
        encodeForUrl = encodeSpecialLetter1(encodeForUrl);
       
        return encodeForUrl;
        
    }
    
    /**
     * 转换*号为 -x-，
                 为了防止有违反协议的字符，-x 转换为-xx
     * @param str
     * @return
     */
    private static String encodeSpecialLetter1(String str){
     str = str.replace("-x", "-xx");
     str = str.replace("*", "-x-");
     return str;
    }
    
    /**
     * 转换 -x-号为*，-xx转换为-x
     * @param str
     * @return
     */
    private static String decodeSpecialLetter1(String str){
     str = str.replace("-x-", "*");
  str = str.replace("-xx", "-x");
     return str;
    }
    /**
     *  将 s 进行 BASE64 编码
     * @param s
     * @return
     */
    public static String encode(String s) {
        
        if (s == null)
            return null;
        return encode(s.getBytes());
    }
    
    /**
     *  将 s 进行 BASE64 编码
     * @param s
     * @return
     */
    public static String encode(String s,String _enc) {
        
        if (s == null)
            return null;
        try {
			return encode(s.getBytes(_enc));
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        return null;
    }

	public static String decode(String s,String _enc) {
        if (s == null)
            return null;
        sun.misc.BASE64Decoder decoder = new sun.misc.BASE64Decoder();
        try {
            byte[] b = decoder.decodeBuffer(s);
            return new String(b,_enc);
        } catch (Exception e) {
            return null;
        }
    }
    /**将 BASE64 编码的字符串 s 进行解码
     * 
     * @param s
     * @return
     */
    @SuppressWarnings("restriction")
	public static byte[] decode(String s) {
        if (s == null)
            return null;
        sun.misc.BASE64Decoder decoder = new sun.misc.BASE64Decoder();
        try {
            byte[] b = decoder.decodeBuffer(s);
            return b;
        } catch (Exception e) {
            return null;
        }
    }
    /**将 BASE64 编码的字符串 s 进行解码
     * 
     * @param s
     * @return
     */
    @SuppressWarnings("restriction")
	public static byte[] decodeForUrl(String s) {
        if (s == null)
            return null;
        s = decodeSpecialLetter1(s);
        s = s.replace("*", "+");
        s = s.replace("-", "/");
        s += "=";
        sun.misc.BASE64Decoder decoder = new sun.misc.BASE64Decoder();
        try {
            byte[] b = decoder.decodeBuffer(s );
            return b;
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
        
        String a = "将 ASSass s &?进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码将 s 进行 BASE64 编码,针对url的编码userId=1441&mailId=981&date=2011-02-15-62";
        String b = encodeForUrl(a.getBytes());
//        b = b.replace("\n", "");
//        b = b.replace("\r", "");
        System.out.println(b);
        
        
        System.out.println(new String(decodeForUrl(b)));
        
        b = encode(a.getBytes());
        System.out.println(b);
        System.out.println(new String(decode(b)));

    }
    
    public static String ImageToBase64Str(String imgFilePath) {// 将图片文件转化为字节数组字符串，并对其进行Base64编码处理  
    	byte[] data = null;  
    	  
    	// 读取图片字节数组  
    	try {  
	    	InputStream in = new FileInputStream(imgFilePath);  
	    	data = new byte[in.available()];  
	    	in.read(data);  
	    	in.close();  
    	} catch (IOException e) {  
    		e.printStackTrace();  
    	}  
    	  
    	// 对字节数组Base64编码  
    	BASE64Encoder encoder = new BASE64Encoder();  
    	return encoder.encode(data);// 返回Base64编码过的字节数组字符串  
    }  
    	  
    	public static boolean GenerateImage(String imgStr, String imgFilePath) {// 对字节数组字符串进行Base64解码并生成图片  
    	if (imgStr == null) // 图像数据为空  
	    	return false;  
	    	BASE64Decoder decoder = new BASE64Decoder();  
    	try {  
	    	// Base64解码  
	    	byte[] bytes = decoder.decodeBuffer(imgStr);  
	    	for (int i = 0; i < bytes.length; ++i) {  
	    	if (bytes[i] < 0) {// 调整异常数据  
	    	bytes[i] += 256;  
	    	}  
    	}  
    	// 生成jpeg图片  
    	OutputStream out = new FileOutputStream(imgFilePath);  
    	out.write(bytes);  
    	out.flush();  
    	out.close();  
    	return true;  
    	} catch (Exception e) {  
	    	return false;  
	    }  
    }  

}



