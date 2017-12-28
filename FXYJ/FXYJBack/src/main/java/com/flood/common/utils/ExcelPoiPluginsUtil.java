package com.flood.common.utils;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.DynaBean;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.Drawing;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.beans.factory.annotation.Value;

import com.flood.common.entity.ExcelPicBean;
import com.flood.common.entity.PoiDataBean;
import com.flood.common.entity.PoiTitleBean;



/**
 * Excel 解析、读写工具类
 * 
 * 需要
 * poi-3.9-20121203.jar
 * poi-ooxml-3.9-20121203.jar
 * poi-ooxml-schemas-3.9-20121203.jar
 * xmlbeans-2.3.0.jar 
 * 支持
 * @author 
 *
 */
public class ExcelPoiPluginsUtil {

	private static final int EXCELMAXCOUNT = 5000;
	private static final String EXCEL_ROOT = "resource\\excel\\";
	private static final String EXCEL_SUB = "excel";
	
	public static final int HSSFCell_CELL_TYPE_STRING = HSSFCell.CELL_TYPE_STRING;
//	public static final int HSSFCell_CELL_TYPE_STRING = HSSFCell.CELL_TYPE_NUMERIC;
//	public static final int HSSFCell_CELL_TYPE_STRING = HSSFCell.CELL_TYPE_STRING;
//	public static final int HSSFCell_CELL_TYPE_STRING = HSSFCell.CELL_TYPE_STRING;
//	public static final int HSSFCell_CELL_TYPE_STRING = HSSFCell.CELL_TYPE_STRING;


	public static List<PoiTitleBean> inikPoiTitleBean(int _start, String[] _titles){
		List<PoiTitleBean> _poiTitleBeanList = new ArrayList<PoiTitleBean>();
		PoiTitleBean _poiTitleBean = null;
		for(int _i=0;_i<_titles.length;_i++){
			_poiTitleBean = new PoiTitleBean(_start+_i, _titles[_i]);
			_poiTitleBeanList.add(_poiTitleBean);
		}
		return _poiTitleBeanList;
	}
	/**
	 * 
	 * @param data			数据
	 * @param frompath		模板路径
	 * @param filename		文件名称
	 * @param columnstart	开始列0
	 * @param rowstart		开始行0
	 * @return
	 * @throws IOException
	 * @throws RowsExceededException
	 * @throws WriteException
	 */
	public static DynaBean wirte(List<List<String>> data,String frompath ,String filename , int columnstart, int rowstart) throws IOException
	{
		DynaBean _dynaBean = DynaBeanPluginsUtil.invoke();
		int fileCount = getFileCount(data.size());
		
		String downFile = null;
		if(fileCount==1){
			downFile =  EXCEL_ROOT + UUIDToolsUtil.getUUID(EXCEL_SUB) + frompath.substring(frompath.lastIndexOf("."),frompath.length());
			String toPath = FileToolsUtil.ROOT + downFile;
			wirte( data, frompath, toPath, columnstart,  rowstart, 0,  data.size());
		}else{
			String felie = UUIDToolsUtil.getUUID(EXCEL_SUB);
			String sourceDir = EXCEL_ROOT  + felie;
			for(int _h=1;_h<=fileCount;_h++){
				String filePath =  sourceDir +"\\" + filename + "_" + _h +frompath.substring(frompath.lastIndexOf("."),frompath.length());
				String toPath = FileToolsUtil.ROOT + filePath;
				wirte( data, frompath, toPath, columnstart,  rowstart, (_h-1)*EXCELMAXCOUNT,  _h==fileCount?(data.size()-(_h-1)*EXCELMAXCOUNT):EXCELMAXCOUNT);
			}
			
			downFile = sourceDir + ".zip";
			String zipFile = FileToolsUtil.ROOT + downFile;
			ZipPluginsUtil.zip(FileToolsUtil.ROOT + sourceDir + "\\", zipFile);
		}
		
		_dynaBean.set("fileCount", fileCount);
		_dynaBean.set("downFile", downFile);
		_dynaBean.set("filename", filename);
		
		return _dynaBean;
	}
	
	
	
	public static DynaBean  wirte(List<List<String>> data,String frompath , int columnstart, int rowstart) throws IOException
	{
	
		
		return wirte(data, frompath , UUIDToolsUtil.getUUID(EXCEL_SUB) ,  columnstart,  rowstart);
	}
	
	private static void  wirte(List<List<String>> data,String frompath,String topath, int columnstart, int rowStart, int dataStart, int dataCount) throws IOException
	{
		
//		创建文件副本
//		String filePath =  EXCEL_ROOT + UUIDToolsUtil.getUUID(EXCEL_SUB) + frompath.substring(frompath.lastIndexOf("."),frompath.length());
//		String toPath = FileToolsUtil.ROOT + filePath;
		
		FileToolsUtil.copyFile(frompath, topath);
		
//		初始化
		Workbook wb = null;
		InputStream inp = new FileInputStream(topath);
		
//
		int rowCount = 0;
		rowCount = rowStart + dataCount;
		
		int i = dataStart;
	    try {
	    	
	    	wb = WorkbookFactory.create(inp);
	    	
	    	Sheet sheet = wb.getSheetAt(0);
	    	  // Sheet样式    
//	        CellStyle sheetStyle = wb.createCellStyle();    
//	        // 背景色的设定    
//	        sheetStyle.setFillBackgroundColor(HSSFColor.GREY_25_PERCENT.index);    
//	        // 前景色的设定    
//	        sheetStyle.setFillForegroundColor(HSSFColor.GREY_25_PERCENT.index);    
//	        // 填充模式    
//	        sheetStyle.setFillPattern(HSSFCellStyle.FINE_DOTS);    
	    	
//	    	// 设置列宽    
//	        sheet.setColumnWidth(0, 1000);   
//	    	sheet.createFreezePane(1, 3);// 冻结    
	    	 //修改当前行 默认行高  列宽
	           //行高
//	           sheet.setDefaultRowHeightInPoints(40);
//	           sheet.setDefaultColumnWidth(100);
//	           sheet.setDefaultRowHeight((short) 1000);
//	           HSSFPalette customPalette = wb.getCustomPalette(); 
//	           palette.setColorAtIndex(HSSFColor.BLACK.index,(byte)colors[0], (byte)colors[1], (byte)colors[2]);
//	    	//设置Excel中的边框
//	    	   CellStyle cellStyle = wb.createCellStyle();
//	    	   cellStyle.setFillBackgroundColor(HSSFColor.BLUE.index);
//	    	   cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
//	    	   cellStyle.setBorderBottom(HSSFCellStyle.BORDER_MEDIUM);
//	    	   cellStyle.setBottomBorderColor(HSSFColor.BLACK.index);
//	    	   cellStyle.setBorderLeft(HSSFCellStyle.BORDER_MEDIUM);
//	    	   cellStyle.setLeftBorderColor(HSSFColor.BLACK.index);
//	    	   cellStyle.setBorderRight(HSSFCellStyle.BORDER_MEDIUM);
//	    	   cellStyle.setRightBorderColor(HSSFColor.BLACK.index);
//	    	   cellStyle.setBorderTop(HSSFCellStyle.BORDER_MEDIUM);
//	    	   cellStyle.setTopBorderColor(HSSFColor.BLACK.index);
//	    	   cellStyle.setFillPattern(HSSFCellStyle.ALT_BARS);//设置填充样式
//	    	   cellStyle.setFillForegroundColor(HSSFColor.GREY_25_PERCENT.index);// 设置单元格的背景颜色．
	    	  
	    	
//	    	HSSFRow hssfRow = hssfSheet.createRow((short) row);
//	    	   HSSFCell firstHssfCell = hssfRow.createCell(0);//库房
//	    	   firstHssfCell.setCellType(HSSFCell.CELL_TYPE_STRING);
//	    	   firstHssfCell.setCellValue(new HSSFRichTextString(warehouse.getName()));
//	    	   firstHssfCell.setCellStyle(cellStyle);//设置单元格的样式
	    	  
	    	 for(int _i = rowStart; _i <rowCount; _i++) {
				   
				   Row _row = sheet.getRow(_i);
				  
				   List<String> _i_data=data.get(i);
				   if(_row==null){
					   _row= sheet.createRow(_i);
				   }
				   _row.setHeight((short) 500);
				   int columnCount = _i_data.size()+columnstart;//需要加上开始的列数
				   int j = 0;//需要额外的计数
				   for(int _j = columnstart; _j <columnCount; _j++) {
					   Cell cell = _row.getCell(_j);
					   if(cell==null){
						   cell = _row.createCell(_j);
					   }
//					   cell.setCellStyle(cellStyle);
					   cell.setCellType(HSSFCell.CELL_TYPE_STRING);
					   cell.setCellValue(_i_data.get(j));
					   j++;
				   }
				   i++;
			   }
			   
			   FileOutputStream out=new FileOutputStream(topath);
			   
			   wb.write(out);
			   out.flush();
			   out.close();
	    	
		} catch (InvalidFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}   
		
	}
	
//	public static void  wirte(List<List<String>> data,String frompath ,String filename , int columnstart, int rowstart, HttpServletResponse response) throws Exception
//	{
//		String file = wirte( data, frompath , filename ,  columnstart,  rowstart);
//		DownLoadPluginsUtil.loadFile(FileToolsUtil.ROOT + file,filename, response);
//	}
	
	private static int getFileCount(int dataSize){

		int fileCount = (dataSize%EXCELMAXCOUNT==0?dataSize:(dataSize-dataSize%EXCELMAXCOUNT+EXCELMAXCOUNT))/EXCELMAXCOUNT;
		
//		if(fileCount==1){
//			
//		}else{
//			for(int _h=0;_h<fileCount;_h++){
//				
//			}
//		}
//		
		return fileCount;
	}
	/**
	 * @descri 使用该方法进行excel导出
	 * @param frompath	模板路径
	 * @param filename  文件名称
	 * @param _poiDataBean	数据
	 * @param _poiTitleBean 标题
	 * @return
	 * @throws IOException
	 * @throws RowsExceededException
	 * @throws WriteException
	 */
	public static void  wirte(String frompath ,String filename, PoiDataBean _poiDataBean, List<PoiTitleBean> _poiTitleBean, 
			HttpServletRequest request, HttpServletResponse response) throws IOException {
		String toPath = FileToolsUtil.TMPPATH + UUIDToolsUtil.getUUID(EXCEL_SUB) + 
				frompath.substring(frompath.lastIndexOf("."),frompath.length());
		wirte(frompath, toPath, filename, 0, _poiDataBean.getData().size(), _poiDataBean, _poiTitleBean, request, response);
	}
	
	private static void  wirte(String frompath, String topath, String filename, int dataStart, int dataCount, PoiDataBean _poiDataBean, List<PoiTitleBean> _poiTitleBean, 
			HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		// response输出流
		ServletOutputStream out = response.getOutputStream();
		// 文件名外加当前时间
		DateFormat format = new SimpleDateFormat("yyyyMMdd");
		String timeFileName = format.format(new Date());
		timeFileName =encodingFileName(filename + "_" + timeFileName);
		// 设置response必要参数
		response.reset();
		response.setContentType("application/octet-stream; charset=iso-8859-1");
		response.setContentType("application/octet-stream");
		response.setHeader("Content-Disposition", "attachment; filename=" + timeFileName +".xlsx" );	
		
	   List<DynaBean> data = _poiDataBean.getData();
	   int columnstart = _poiDataBean.getColumnstart();
	   int rowStart = _poiDataBean.getRowstart();
	   String[] columnname = _poiDataBean.getColumnname();
		 
		if(FileToolsUtil.copyFile(frompath, topath)){
			// 初始化
			Workbook wb = null;
			InputStream inp = new FileInputStream(topath);
			
			int rowCount = 0;
			rowCount = rowStart + dataCount;
			
			int i = dataStart;
			
		    try {
		    	
		    	wb = WorkbookFactory.create(inp);
		    	
		    	Sheet sheet = wb.getSheetAt(0);
		    	
//		    	 CellStyle cellStyle0 = null;
//		    	 CellStyle cellStyle1 = null;
		    	 Row _row = sheet.getRow(_poiDataBean.getRowstart());
		    	 int columnCount = columnname.length+columnstart;//需要加上开始的列数
		    	 Cell _cell = null;
		    	 Map<Integer,CellStyle > _callTypeMap0 = new HashMap<Integer,CellStyle >();
		    	 Cell cell = _row.getCell(_poiDataBean.getColumnstart());
//		    	 cellStyle0 = cell.getCellStyle();
		    	  for(int _j = columnstart; _j <columnCount; _j++){
		    		  _cell = _row.getCell(_j);
		    		  if(_cell!=null){
		    			  _callTypeMap0.put(_j,  _cell.getCellStyle());
		    		  }else{
		    			  _callTypeMap0.put(_j,  cell.getCellStyle());
		    		  }
		    	  }
		    	
		    	 _row = sheet.getRow(_poiDataBean.getRowstart()+1);
		    	  Map<Integer,CellStyle > _callTypeMap1 = new HashMap<Integer,CellStyle >();
		    	  cell = _row.getCell(_poiDataBean.getColumnstart());
//			      cellStyle1 = cell.getCellStyle();
		    	  for(int _j = columnstart; _j <columnCount; _j++){
		    		  _cell = _row.getCell(_j);
		    		  if(_cell!=null){
		    			  _callTypeMap1.put(_j,  _cell.getCellStyle());
		    		  }else{
		    			  _callTypeMap1.put(_j,  cell.getCellStyle());
		    		  }
		    	  }
		    	
		    	short _rowHeight = _row.getHeight();
		    	if(!_poiDataBean.isTieleWirte()){
		    		if(_poiTitleBean != null && _poiTitleBean.size()>0){
			    		
			    		for(PoiTitleBean _title : _poiTitleBean){
			    			_row = sheet.getRow(_title.getRow());
			    			cell = _row.getCell(_title.getCall());
			    			cell.setCellValue(_title.getTitle());
			    		}
			    	}
		    	}
		    	
		    	
		    	
		    	  // Sheet样式    
//		        CellStyle sheetStyle = wb.createCellStyle();    
//		        // 背景色的设定    
//		        sheetStyle.setFillBackgroundColor(HSSFColor.GREY_25_PERCENT.index);    
//		        // 前景色的设定    
//		        sheetStyle.setFillForegroundColor(HSSFColor.GREY_25_PERCENT.index);    
//		        // 填充模式    
//		        sheetStyle.setFillPattern(HSSFCellStyle.FINE_DOTS);    
		    	
//		    	// 设置列宽    
//		        sheet.setColumnWidth(0, 1000);   
//		    	sheet.createFreezePane(1, 3);// 冻结    
		    	 //修改当前行 默认行高  列宽
		           //行高
//		           sheet.setDefaultRowHeightInPoints(40);
//		           sheet.setDefaultColumnWidth(100);
//		           sheet.setDefaultRowHeight((short) 1000);
//		           HSSFPalette customPalette = wb.getCustomPalette(); 
//		           palette.setColorAtIndex(HSSFColor.BLACK.index,(byte)colors[0], (byte)colors[1], (byte)colors[2]);
//		    	//设置Excel中的边框
//		    	   CellStyle cellStyle = wb.createCellStyle();
//		    	   cellStyle.setFillBackgroundColor(HSSFColor.BLUE.index);
//		    	   cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
//		    	   cellStyle.setBorderBottom(HSSFCellStyle.BORDER_MEDIUM);
//		    	   cellStyle.setBottomBorderColor(HSSFColor.BLACK.index);
//		    	   cellStyle.setBorderLeft(HSSFCellStyle.BORDER_MEDIUM);
//		    	   cellStyle.setLeftBorderColor(HSSFColor.BLACK.index);
//		    	   cellStyle.setBorderRight(HSSFCellStyle.BORDER_MEDIUM);
//		    	   cellStyle.setRightBorderColor(HSSFColor.BLACK.index);
//		    	   cellStyle.setBorderTop(HSSFCellStyle.BORDER_MEDIUM);
//		    	   cellStyle.setTopBorderColor(HSSFColor.BLACK.index);
//		    	   cellStyle.setFillPattern(HSSFCellStyle.ALT_BARS);//设置填充样式
//		    	   cellStyle.setFillForegroundColor(HSSFColor.GREY_25_PERCENT.index);// 设置单元格的背景颜色．
		    	  
		    	
//		    	HSSFRow hssfRow = hssfSheet.createRow((short) row);
//		    	   HSSFCell firstHssfCell = hssfRow.createCell(0);//库房
//		    	   firstHssfCell.setCellType(HSSFCell.CELL_TYPE_STRING);
//		    	   firstHssfCell.setCellValue(new HSSFRichTextString(warehouse.getName()));
//		    	   firstHssfCell.setCellStyle(cellStyle);//设置单元格的样式
		    	 
//		    	 CellStyle _cellStyle = null;
		    	 for(int _i = rowStart; _i <rowCount; _i++) {
					   
					   _row = sheet.getRow(_i);
					  
					   DynaBean _i_data=data.get(i);
					   if(_row==null){
						   _row= sheet.createRow(_i);
					   }
					   _row.setHeight(_rowHeight);
					   Map<Integer,CellStyle > _callTypeMap = null;
					   if(_i%2!=0){
//						   _cellStyle = cellStyle0;
						   _callTypeMap = _callTypeMap0;
					   }else{
//						   _cellStyle = cellStyle1;
						   _callTypeMap = _callTypeMap1;
					   }
					   int j = 0;//需要额外的计数
					   for(int _j = columnstart; _j <columnCount; _j++) {
						   cell = _row.getCell(_j);
						   
						   if(cell==null){
							   cell = _row.createCell(_j);
						   }
//						   cell.setCellStyle(_cellStyle);
//						   if(_callTypeMap.get(_j)!=null){
//							   
//							   cell.setCellStyle(_callTypeMap.get(_j));
//						   }else{
////							   cell.setCellType(HSSFCell.CELL_TYPE_STRING);
//						   }
						   cell.setCellStyle(_callTypeMap.get(_j));
						   dynaBeanVal2CellVal(cell,_i_data.get(columnname[_j-columnstart]));
						   j++;
					   }
					   i++;
				   }
				   
				   wb.write(out);
		    	
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				out.close();
			}   
		}
	}
	
	public static String encodingFileName(String fileName) {
        String returnFileName = "";
        try {
            returnFileName = new String(fileName.getBytes("GB2312"), "ISO8859-1");
            returnFileName = StringUtils.replace(returnFileName, "+", "%20");
                
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            
        }
        return returnFileName;
    }
	
	private static void dynaBeanVal2CellVal(Cell cell,Object _dynaBeanVal){

		if(_dynaBeanVal instanceof String){
			cell.setCellValue(Util.toString(_dynaBeanVal));
		}else if(_dynaBeanVal instanceof Date){
			cell.setCellValue((Date)_dynaBeanVal);
		}else if(_dynaBeanVal instanceof Boolean){
			cell.setCellValue((Boolean)_dynaBeanVal);
		}else if(_dynaBeanVal instanceof Integer ){
			cell.setCellValue((Integer)_dynaBeanVal);
		}else if(_dynaBeanVal instanceof Float ){
			cell.setCellValue((Float)_dynaBeanVal);
		}else if(_dynaBeanVal instanceof Double ){
			cell.setCellValue((Double)_dynaBeanVal);
		}else {
			cell.setCellValue(Util.toString(_dynaBeanVal));
		}
	}
	
//	/**
//	 * @param args
//	 */
	/**
	 * 
	 * @param _excelPath 	Excel文件路径
	 * @param _picPath		图片路径
	 * @param columnstart	从第几列开始
	 * @param rowstart		从第几行开始
	 * @param columnCount	占用几列
	 * @param rowCount		占用几行
	 * 
	 *  rowstart<0 则会自动追加在最后 |rowstart|行
	 * 
	 * @return
	 * @throws IOException
	 * @throws RowsExceededException
	 * @throws WriteException
	 */
	public static boolean  wirtePic(String _excelPath , ExcelPicBean _excelPicBean) throws IOException{
		
		String _picPath = _excelPicBean.getPicPath();
		int columnstart = _excelPicBean.getColumnstart();
		int rowstart = _excelPicBean.getRowstart();
		int columnCount = _excelPicBean.getColumnCount();
		int rowCount = _excelPicBean.getRowCount();
		
		Workbook wb = null;
		InputStream inp = new FileInputStream(_excelPath);
		ByteArrayOutputStream byteArrayOut = null;
		FileOutputStream out = null;
		
		int PICTURE_TYPE = 0;
		
	    try {
	    	
	    	wb = WorkbookFactory.create(inp);
	    	File pic = new File(_picPath);
	    	String filename = pic.getName();
	    	String sux = filename.substring(filename.lastIndexOf(".")+1, filename.length()).toLowerCase();
//			public static final int PICTURE_TYPE_JPEG = 5;
//			public static final int PICTURE_TYPE_PNG = 6;
	    	if("png".equals(sux)){
	    		PICTURE_TYPE = Workbook.PICTURE_TYPE_PNG;
	    	}else if("jpg".equals(sux)){
	    		PICTURE_TYPE = Workbook.PICTURE_TYPE_JPEG;
	    	}
		//先把读进来的图片放到一个ByteArrayOutputStream中，以便产生ByteArray
		byteArrayOut = new ByteArrayOutputStream(); 
		BufferedImage bufferImg = ImageIO.read(new File(_picPath)); 
		
		ImageIO.write(bufferImg,"png",byteArrayOut);
		//创建工作薄
//		HSSFWorkbook wb = new HSSFWorkbook(); 
		Sheet sheet = wb.getSheetAt(0);
		
		if(rowstart<0){
			
			rowstart = sheet.getLastRowNum()-rowstart;
		}
		
		
		Drawing patriarch = sheet.createDrawingPatriarch(); 
		ClientAnchor anchor = patriarch.createAnchor(
				10,10,10,10,
				columnstart            ,  rowstart,
				columnstart+columnCount,rowstart+rowCount);
//		int i, int j, int k, int l, 
//		int col1, int row1, int col2, int row2
		
//		checkRange(dx1, 0, 1023, "dx1");
//		checkRange(dx2, 0, 1023, "dx2");
//		checkRange(dy1, 0, 255, "dy1");
//		checkRange(dy2, 0, 255, "dy2");
//		checkRange(col1, 0, 255, "col1");
//		checkRange(col2, 0, 255, "col2");
//		checkRange(row1, 0, 65280, "row1");
//		checkRange(row2, 0, 65280, "row2");		
		
		//		ClientAnchor anchor = new XSSFClientAnchor(0,0,990,650,(short) 1,1,(short)10,10); 
//		如果要放多张图要设置
//		anchor.setAnchorType(2); //参数设置第几张，插入一张不用设置
		//插入图片

		patriarch.createPicture(anchor , wb.addPicture(byteArrayOut.toByteArray(),PICTURE_TYPE));


//		HSSFClientAnchor  8个参数说明
//		参数	　　说明
//		dx1	第1个单元格中x轴的偏移量
//		dy1	第1个单元格中y轴的偏移量
//		dx2	第2个单元格中x轴的偏移量，最大值1023
//		dy2	第2个单元格中y轴的偏移量，最大值255
//		col1	第1个单元格的列号
//		row1	第1个单元格的行号
//		col2	第2个单元格的列号
//		row2	第2个单元格的行号






//		合并单元格
//		import org.apache.poi.hssf.util.Region;

//		sheet.addMergedRegion(new Region(0,(short)0,0,(short)0));

//		参数说明：
//		row  起始行 cell 起始单元格  row1 终止行  cell2 终止单元格

		
			if(inp!=null){
				inp.close();
			}
			
			out = new FileOutputStream(_excelPath);
			   
			wb.write(out);
			out.flush();
			out.close();
		   
		
		
	    }catch(Exception e){
	    	e.printStackTrace();
	    	return false;
	    }finally{
	    	if(inp!=null){
				inp.close();
			}
	    	if(out!=null){
	    		out.close();
			}
	    	if(byteArrayOut!=null){
	    		byteArrayOut.close();
			}
	    	
	    }
		
		return true;
	}
	
}
