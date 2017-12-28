package com.flood.common.utils;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.DynaBean;
import org.apache.commons.beanutils.DynaProperty;


public class DynaBeanPluginsUtil {
	
	/**
	 * 创建 DynaBean
	 * @return
	 */
	public static DynaBean invoke(){
		return new CommonDynaBean();
	}
	/**
	 * 判断是否有此属性
	 * @param _dynaBean 对象
	 * @param _property   属性名称
	 * @return  【true 有】【 false 无】
	 */
	public static boolean IsProperty(DynaBean _dynaBean,String _property){
		
		return getPropertyStr(_dynaBean).indexOf(_property)!=-1?true:false;
	}
	
	/**
	 * 获取此对象中所含有的属性
	 * @param _dynaBean
	 * @param _propertys
	 * @return
	 */
	public static String[] havePropertys(DynaBean _dynaBean,String[] _propertys){
		
		String _tempStr = getPropertyStr(_dynaBean);
		List<String> _list = new ArrayList<String>();
		for(String _property : _propertys){
			if(_tempStr.indexOf(_property)!=-1){
				_list.add(_property);
			}
		}
		return _list.toArray(new String[]{});
	}
	
	/**
	 * 复制生成新的bean 
	 * 
	 * @param _bean 		复制的对象
	 * @param copyPropertys 复制某些属性
	 * @param copy2Propertys复制为对应属性
	 * @return
	 */
	public static DynaBean copyBean(DynaBean _bean,String[] copyPropertys,String[] copy2Propertys){
		DynaBean _tempBean = invoke();
		String _tempStr = getPropertyStr(_bean);
		if(copy2Propertys!=null&&copyPropertys.length!=copy2Propertys.length){
			System.out.println("复制属性与复制到的属性不匹配！");
		}else{
			String _property = null;
			if(copy2Propertys==null){
				for(int _i=0;_i<copyPropertys.length;_i++){
					_property = copyPropertys[_i];
					if(_tempStr.indexOf(_property)!=-1){
						_tempBean.set(_property, _bean.get(_property));
					}else{
						_tempBean.set(_property, null);
					}
				}
			}else{
				for(int _i=0;_i<copyPropertys.length;_i++){
					_property = copyPropertys[_i];
					if(_tempStr.indexOf(_property)!=-1){
						_tempBean.set(copy2Propertys[_i], _bean.get(_property));
					}else{
						_tempBean.set(copy2Propertys[_i], null);
					}
				}
			}
			
		}
		
		return _tempBean;
	}
	
	/**
	 * 将_bean的属性复制到的2bean 如果有数据则覆盖 但类型必须保持一致
	 * 
	 * @param _bean 		复制的对象
	 * @param copyPropertys 复制某些属性
	 * @param copy2Propertys复制为对应属性
	 * @return
	 */
	public static DynaBean copy2Bean(DynaBean _bean,DynaBean _tempBean ,String[] copyPropertys,String[] copy2Propertys){
		
		String _tempStr = getPropertyStr(_bean);
		if(copy2Propertys!=null&&copyPropertys.length!=copy2Propertys.length){
			System.out.println("复制属性与复制到的属性不匹配！");
		}else{
			String _property = null;
			if(copy2Propertys==null){
				for(int _i=0;_i<copyPropertys.length;_i++){
					_property = copyPropertys[_i];
					if(_tempStr.indexOf(_property)!=-1){
						_tempBean.set(_property, _bean.get(_property));
					}else{
						_tempBean.set(_property, null);
					}
				}
			}else{
				for(int _i=0;_i<copyPropertys.length;_i++){
					_property = copyPropertys[_i];
					if(_tempStr.indexOf(_property)!=-1){
						_tempBean.set(copy2Propertys[_i], _bean.get(_property));
					}else{
						_tempBean.set(copy2Propertys[_i], null);
					}
				}
			}
			
		}
		
		return _tempBean;
	}
	/**
	 * 复制生成新的bean 
	 * 
	 * @param _bean 		复制的对象
	 * @param copyPropertys 复制某些属性
	 * @param copy2Propertys复制为对应属性
	 * @return
	 */
	public static DynaBean copy2Bean(DynaBean _bean,DynaBean _temp2Bean ,String[] copyPropertys){
		return copy2Bean( _bean, _temp2Bean , copyPropertys, null);
	}
	/**
	 * 复制生成新的bean 
	 * 
	 * @param _bean 		复制的对象
	 * @param copyPropertys 复制某些属性
	 * @return
	 */
	public static DynaBean copyBean(DynaBean _bean,String[] copyPropertys){
		
		return copyBean(_bean, copyPropertys,null);
	}
	
	private static String getPropertyStr(DynaBean _dynaBean){
		DynaProperty[] _dynaPropertys = _dynaBean.getDynaClass().getDynaProperties();
		StringBuffer _buffer = new StringBuffer(",");
		for(DynaProperty _dynaProperty: _dynaPropertys){
			_buffer.append(_dynaProperty.getName()+",");
		}
		return _buffer.toString();
	}
}
