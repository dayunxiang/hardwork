package com.flood.common.utils;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import org.apache.tools.zip.ZipEntry;
import org.apache.tools.zip.ZipFile;
import org.apache.tools.zip.ZipOutputStream;

import com.flood.common.entity.FileBean;


/**
 * zip解压、压缩工具类
 * @author 
 *
 */
public class ZipPluginsUtil {
	
//	/**
//	 * 传入打包后的文件名file，和所要打包的路径
//	 * @param file
//	 * @param path
//	 */
//	public static void  createzip(String file,String path){
//		//dwbh+"//a//
//		//System.out.println("A:"+path);
//		File[] f1 = new File(path).listFiles();
//		String[] filenames = new String[f1.length];
//		byte[] buf = new byte[1024];
//		for(int i=0;i<f1.length;i++){
//			filenames[i] = path+File.separator+f1[i].getName();
//		}
//		String outfile = path.substring(0,path.length()-1);
//		
//		ZipOutputStream out = null;
//		try{
//			out = new ZipOutputStream(new FileOutputStream(outfile+".zip"));
//			out.setEncoding("gbk");
//			for(int i=0;i<f1.length;i++){
//				FileInputStream in = new FileInputStream(filenames[i]);
//				String name  = f1[i].getName();
//				out.putNextEntry(new ZipEntry(name));
//				out.write(name.getBytes("utf-8"));  
//				int len;
//				while((len=in.read(buf))>0){
//					out.write(buf,0,len);
//				}
//				out.closeEntry();
//				in.close();
//			}
//			out.close();
//		}catch(Exception e){
//			e.printStackTrace();
//		}
//		
//	}
//	/**
//	 * @param args
//	 */
//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//
//	}
	public static void main(String[] args) {

		List<FileBean> _sourceFileBeanList = new ArrayList<FileBean>();
		_sourceFileBeanList.add(new FileBean(null,"D:\\ipList.xml"));
		_sourceFileBeanList.add(new FileBean("ipListTest.xml","D:\\ipList.xml"));
		_sourceFileBeanList.add(new FileBean("斗罗大陆Test.txt","D:\\斗罗大陆.txt"));
		_sourceFileBeanList.add(new FileBean("测试","D:\\zhu"));
		_sourceFileBeanList.add(new FileBean(null,"D:\\rtrttr"));
		
		ZipPluginsUtil.zipFile(_sourceFileBeanList, "D:\\aaa\\abc.zip");

//		unZip("D:\\测试结果.zip", "D:\\解压结果");

	}
	public static void zip(String sourceDir,String zipFile) {
		zip( sourceDir,null,  zipFile);
	}
	/**
	 * 功能：把 sourceDir 目录下的所有文件进行 zip 格式的压缩，保存为指定 zip 文件
	 * @param sourceDir
	 * @param zipFile
	 */

	public static void zip(String sourceDir,String _renameFile, String zipFile) {

		OutputStream os;
		

		try {
			File _zipFile = new File(zipFile);
			if(!_zipFile.getParentFile().exists()){
				_zipFile.getParentFile().mkdirs();
        	}
			os = new FileOutputStream(zipFile);

			BufferedOutputStream bos = new BufferedOutputStream(os);

			ZipOutputStream zos = new ZipOutputStream(bos);
			
			zos.setEncoding("gbk");

			File file = new File(sourceDir);

			String basePath = null;

			if (file.isDirectory()) {

				basePath = file.getPath();

			} else {//直接压缩单个文件时，取父目录

				basePath = file.getParent();

			}

			zipFile(file, basePath,_renameFile, zos);

			zos.closeEntry();

			zos.close();

		} catch (Exception e) {

			e.printStackTrace();

		}

	}
	
	/**
	 * 功能：执行文件压缩成zip文件
	 * @param _sourceFileBeanList 需要压缩文件的集合 可以是不同路径的文件及文件夹 可以对文件及文件夹进行相应的重命名操作 在压缩文件中显示
	 * @param zipFile 生成压缩文件路径 绝对地址 压缩包全路径
	 */
	public static void zipFile(List<FileBean> _sourceFileBeanList, String zipFile) {

		
		OutputStream os=null;
		BufferedOutputStream bos =null;
		ZipOutputStream zos = null;
		InputStream is = null;
		BufferedInputStream bis = null;
		
		byte[] buf = new byte[1024];

		
		int length = 0;
		try {

			File _zipFile = new File(zipFile);
			if(!_zipFile.getParentFile().exists()){
				_zipFile.getParentFile().mkdirs();
        	}
			
			os = new FileOutputStream(zipFile);

			bos = new BufferedOutputStream(os);

			zos = new ZipOutputStream(bos);
			
			zos.setEncoding("gbk");
			
			String basePath = null;
			File file = null;
			for (FileBean _sourceFileBean : _sourceFileBeanList) {
				file = new File(_sourceFileBean.getFilepath());
				if (file.isDirectory()) {
					
					if (file.isDirectory()) {

						basePath = file.getPath();

					} else {//直接压缩单个文件时，取父目录

						basePath = file.getParent();

					}
					String _filename = null;
					if(Util.isNull(_sourceFileBean.getFilename())){
						_filename = file.getName();
					}else{
						_filename = _sourceFileBean.getFilename();
					}
					zipFile(file, basePath,_filename, zos);

				} else {

					
					is = new FileInputStream(file);

					bis = new BufferedInputStream(is);
					String _filename = null;
					if(Util.isNull(_sourceFileBean.getFilename())){
						_filename = file.getName();
					}else{
						_filename = _sourceFileBean.getFilename();
					}
					zos.putNextEntry(new ZipEntry(_filename));
					
					while ((length = bis.read(buf)) > 0) {

						zos.write(buf, 0, length);

					}

					is.close();
					bis.close();
				}

			}

			

			zos.closeEntry();

			zos.close();

		} catch (Exception e) {

			e.printStackTrace();

		}finally{
			if(os!=null){
				try {
					os.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(bos!=null){
				try {
					bos.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(is!=null){
				try {
					is.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(bis!=null){
				try {
					bis.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(zos!=null){
				try {
					zos.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			
			
			
		}
		
		

	}

	private static void zipFile(File source, String basePath,String _renameFile,

			ZipOutputStream zos) {
			InputStream is = null;
			BufferedInputStream bis = null;
			
				File[] files = new File[0];

				if (source.isDirectory()) {

					files = source.listFiles();

				} else {

					files = new File[1];

					files[0] = source;

				}

				String pathName;//存相对路径(相对于待压缩的根目录)

				byte[] buf = new byte[1024];

				int length = 0;

				try {

					for (File file : files) {

						if (file.isDirectory()) {

							
							if(Util.isNull(_renameFile)){
								pathName = file.getPath().substring(basePath.length() + 1)

										+ "/";
							}else{
								pathName = _renameFile+ "/"+file.getPath().substring(basePath.length() + 1)

										+ "/";
							}

							zos.putNextEntry(new ZipEntry(pathName));
							
							zipFile(file, basePath,_renameFile, zos);

						} else {

							if(Util.isNull(_renameFile)){
								pathName = file.getPath().substring(basePath.length() + 1);
							}else{
								pathName =  _renameFile+ "/"+file.getPath().substring(basePath.length() + 1);
							}
							

							is = new FileInputStream(file);

							bis = new BufferedInputStream(is);

							zos.putNextEntry(new ZipEntry(pathName));

							while ((length = bis.read(buf)) > 0) {

								zos.write(buf, 0, length);

							}

							is.close();

						}

					}

				} catch (Exception e) {

					e.printStackTrace();

				}finally{
					if(is!=null){
						try {
							is.close();
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
					if(bis!=null){
						try {
							bis.close();
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
				}

			}

	/**
	 * 功能：解压 zip 文件，只能解压 zip 文件
	 * @param zipfile
	 * @param destDir
	 */

	public static void unZip(String zipfile, String destDir) {

		destDir = destDir.endsWith("\\") ? destDir : destDir + "\\";

		byte b[] = new byte[1024];

		int length;

		ZipFile zipFile;
		OutputStream outputStream = null;
		InputStream inputStream = null;
		try {

			zipFile = new ZipFile(new File(zipfile));

			Enumeration<?> enumeration = zipFile.getEntries();

			ZipEntry zipEntry = null;

			while (enumeration.hasMoreElements()) {

				zipEntry = (ZipEntry) enumeration.nextElement();

				File loadFile = new File(destDir + zipEntry.getName());

				if (zipEntry.isDirectory()) {
					loadFile.mkdirs();

				} else {

					if (!loadFile.getParentFile().exists()){

						loadFile.getParentFile().mkdirs();
						
					}

					outputStream = new FileOutputStream(loadFile);

					inputStream = zipFile.getInputStream(zipEntry);

					while ((length = inputStream.read(b)) > 0)

						outputStream.write(b, 0, length);

				}

			}

		} catch (IOException e) {

			e.printStackTrace();

		}finally{
			if(inputStream!=null){
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(outputStream!=null){
				try {
					outputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

	}

}
