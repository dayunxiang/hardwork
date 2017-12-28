/**
 * 
 * web页面操作公共组件
 * 
 */
var JQueryUtil = {

	lastSubmissionId : 0,
	suffix:"",
	contextPath:null,
	setContextPath:function(){/*以js 方式用来获取上下文*/
		var _temp = document.location.pathname.substr(1);
	    _temp = "/" + _temp.substr(0, _temp.indexOf("/")) + "/";
	    this.contextPath=_temp;
	},
	getContextPath:function(){/*以js 方式用来获取上下文*/
		if(this.contextPath){
			
		}else{
			this.setContextPath();
		}
	    return this.contextPath;
	},
	getResult:function(/*Object*/obj){
		if(typeof obj == "object"){
			if(obj){
				if("result" in obj){
					return obj.result;
				}
				if("Result" in obj){
					return obj.Result;
				}
				if("ResultSet" in obj){
					return obj.ResultSet;
				}
			}
		}
		return obj;
	},
	toJsonIndentStr : "\t",/*--------增加toJson扩展【摘取自dojo】 --邵斌 20120414*/
	/**
	 * 将对象转换成字符串
	 */
	json2str:function( /*Object*/ it, /*Boolean?*/ prettyPrint ) {

		return this.stringify(it, function(key, value){
			if(value){
				var tf = value.__json__||value.json;
				if(typeof tf == "function"){
					return tf.call(value);
				}
			}
			return value;
		}, prettyPrint && this.toJsonIndentStr);

	},
	escapeString:function(/*String*/str){
		
		return ('"' + str.replace(/(["\\])/g, '\\$1') + '"').
			replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").
			replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
	},
	stringify:function(value, replacer, spacer){
		
		var undef;
		if(typeof replacer == "string"){
			spacer = replacer;
			replacer = null;
		}
		function stringify(it, indent, key){
			if(replacer){
				it = replacer(key, it);
			}
			var val, objtype = typeof it;
			if(objtype == "number"){
				return isFinite(it) ? it + "" : "null";
			}
			if(objtype == "boolean"){
				return it + "";
			}
			if(it === null){
				return "null";
			}
			if(typeof it == "string"){
				return JQueryUtil.escapeString(it);
			}
			if(objtype == "function" || objtype == "undefined"){
				return undef; 
			}
			
			if(typeof it.toJSON == "function"){
				return stringify(it.toJSON(key), indent, key);
			}
			if(it instanceof Date){
				return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(t, prop, plus){
					var num = it["getUTC" + prop]() + (plus ? 1 : 0);
					return num < 10 ? "0" + num : num;
				});
			}
			if(it.valueOf() !== it){
				
				return stringify(it.valueOf(), indent, key);
			}
			var nextIndent= spacer ? (indent + spacer) : "";
			
			var sep = spacer ? " " : "";
			var newLine = spacer ? "\n" : "";
		
			if(it instanceof Array){
				var itl = it.length, res = [];
				for(key = 0; key < itl; key++){
					var obj = it[key];
					val = stringify(obj, nextIndent, key);
					if(typeof val != "string"){
						val = "null";
					}
					res.push(newLine + nextIndent + val);
				}
				return "[" + res.join(",") + newLine + indent + "]";
			}
			
			var output = [];
			for(key in it){
				var keyStr;
				if(typeof key == "number"){
					keyStr = '"' + key + '"';
				}else if(typeof key == "string"){
					keyStr = JQueryUtil.escapeString(key);
				}else{
					
					continue;
				}
				val = stringify(it[key], nextIndent, key);
				if(typeof val != "string"){
					
					continue;
				}
				
				output.push(newLine + nextIndent + keyStr + ":" + sep + val);
			}
			return "{" + output.join(",") + newLine + indent + "}";
		}
		return stringify(value, "", "");

	},
	/**
	 * 
	 * 异步
	 * 
	 * 获取RCP远程调用的对象
	 * @param {Object} _url 	远程调用的url
	 * @return {TypeName} 		RCP远程调用的对象
	 */
	/**
	 * 调用远程方法
	 * @param {Object} _url			远程调用的url
	 * @param {Object} _method		远程方法
	 * @param {Object} _beans		参数数据
	 * @param {Object} callback		回调函数
	 * @param {Object} _num			方法参数的数量【没有参数或者只有1参数可以省略，多个参数的必须写出相应的参数数量】
	 * @memberOf {TypeName} 
	 */
	sendRCP: function (_url,_beans,callback,errorback){

		_url=_url+JQueryUtil.suffix;
		/**
		    做判断 如果是数组类型
			return new dojo.rpc.JsonService(_url);
		**/
		var testRPC;
		/**
			无参数调用function (_url,_method,_beans)
			1参数调用 function (_url,_method,_beans,callback)
			多参数调用function (_url,_method,_beans,callback,_num)
		**/
		
		try{
			if(_beans){
					testRPC = _beans;
				}else{
					testRPC =[];
				}
				var _json=JQueryUtil.json2str(testRPC);
				$.ajax({
					   type: "POST",
					   url: _url,
					   async : true,
					   dataType:"json",
					   data: _json,
					   contentType:'application/json',
					   success:callback,
					   error:errorback
					}); 
		}catch(exception){
			if(errorback!=null){
				errorback();
			}
	    }   
		
		
	},
	
	
	
	/**
	 * beforeSend
	 * 异步
	 * 
	 * 获取RCP远程调用的对象
	 * @param {Object} _url 	远程调用的url
	 * @return {TypeName} 		RCP远程调用的对象
	 */
	/**
	 * 调用远程方法
	 * @param {Object} _url			远程调用的url
	 * @param {Object} _method		远程方法
	 * @param {Object} _beans		参数数据
	 * @param {Object} callback		回调函数
	 * @param {Object} _num			方法参数的数量【没有参数或者只有1参数可以省略，多个参数的必须写出相应的参数数量】
	 * @memberOf {TypeName} 
	 */
	sendRCPbs: function (_url,_beans,beforeSend,callback,errorback){

		_url=_url+JQueryUtil.suffix;
		/**
		    做判断 如果是数组类型
			return new dojo.rpc.JsonService(_url);
		**/
		var testRPC;
		/**
			无参数调用function (_url,_method,_beans)
			1参数调用 function (_url,_method,_beans,callback)
			多参数调用function (_url,_method,_beans,callback,_num)
		**/
		
		try{
			if(_beans){
					testRPC = _beans;
				}else{
					testRPC =[];
				}
				var _json=JQueryUtil.json2str(testRPC);
				$.ajax({
					   type: "POST",
					   url: _url,
					   async : true,
					   dataType:"json",
					   data: _json,
					   contentType:'application/json',
					   beforeSend:beforeSend,
					   success:callback,
					   error:errorback
					}); 
		}catch(exception){
			if(errorback!=null){
				errorback();
			}
	    }   
		
		
	},
	
	
	
	/**
	 * 
	 * 同步 beforeSend
	 * 
	 * 获取RCP远程调用的对象
	 * @param {Object} _url 	远程调用的url
	 * @return {TypeName} 		RCP远程调用的对象
	 */
	/**
	 * 调用远程方法
	 * @param {Object} _url			远程调用的url
	 * @param {Object} _method		远程方法
	 * @param {Object} _beans		参数数据
	 * @param {Object} callback		回调函数
	 * @param {Object} _num			方法参数的数量【没有参数或者只有1参数可以省略，多个参数的必须写出相应的参数数量】
	 * @memberOf {TypeName} 
	 */
	sendAsyncRCPbs: function (_url,_beans,beforeSend,callback,errorback){
		
		_url=_url+JQueryUtil.suffix;
		/**
		    做判断 如果是数组类型
			return new dojo.rpc.JsonService(_url);
		 **/
		var testRPC;
		/**
			无参数调用function (_url,_method,_beans)
			1参数调用 function (_url,_method,_beans,callback)
			多参数调用function (_url,_method,_beans,callback,_num)
		 **/
		
		try{
			if(_beans){
				testRPC = _beans;
			}else{
				testRPC =[];
			}
			var _json=JQueryUtil.json2str(testRPC);
			$.ajax({
				type: "POST",
				url: _url,
				async : false,
				dataType:"json",
				data: _json,
				contentType:'application/json',
				beforeSend:beforeSend,
				success:callback,
				error:errorback
			}); 
		}catch(exception){
			if(errorback!=null){
				errorback();
			}
		}   
		
		
	},
	/**
	 * 
	 * 同步
	 * 
	 * 获取RCP远程调用的对象
	 * @param {Object} _url 	远程调用的url
	 * @return {TypeName} 		RCP远程调用的对象
	 */
	/**
	 * 调用远程方法
	 * @param {Object} _url			远程调用的url
	 * @param {Object} _method		远程方法
	 * @param {Object} _beans		参数数据
	 * @param {Object} callback		回调函数
	 * @param {Object} _num			方法参数的数量【没有参数或者只有1参数可以省略，多个参数的必须写出相应的参数数量】
	 * @memberOf {TypeName} 
	 */
	sendAsyncRCP: function (_url,_beans,callback,errorback){

		_url=_url+JQueryUtil.suffix;
		/**
		    做判断 如果是数组类型
			return new dojo.rpc.JsonService(_url);
		**/
		var testRPC;
		/**
			无参数调用function (_url,_method,_beans)
			1参数调用 function (_url,_method,_beans,callback)
			多参数调用function (_url,_method,_beans,callback,_num)
		**/
		
		try{
			if(_beans){
					testRPC = _beans;
				}else{
					testRPC =[];
				}
				var _json=JQueryUtil.json2str(testRPC);
				$.ajax({
					   type: "POST",
					   url: _url,
					   async : false,
					   dataType:"json",
					   data: _json,
					   contentType:'application/json',
					   success:callback,
					   error:errorback
					}); 
		}catch(exception){
			if(errorback!=null){
				errorback();
			}
	    }   
		
		
	},

	getWinWidth:function(){
		return document.body.scrollWidth;
	},
	winResize:function(_left,_right,_win,_id) {
		if(webWindow!=null){
			var content = webWindow.document.body.scrollWidth- _left-_right+180;
			webWindow.document.getElementById(_id).width=content+"px;";
		}
	},
	
	/**
	 * 获取页面对象
	 * @param {Object} _id		页面对象id
	 * @return {TypeName} 		页面对象
	 */
	byId: function (_id,_this_win){
		
		try {
			if(_this_win){
				return _this_win.document.getElementById(_id);
			}else{
				return document.getElementById(_id);;
			}
			
			
		}catch(e){
			
			return null;
		}
	},
	getElementsByClassName: function(_tagname, className,_this_win) {
           var tagname;  /*获取指定元素*/
           if(_this_win){
        	   tagname = this.getElementsByTagName(_tagname,null,_this_win);
           }else{
        	   tagname = this.getElementsByTagName(_tagname,null,_this_win);
           }
           var tagnameAll = [];     /*这个数组用于存储所有符合条件的元素*/
           for (var i = 0; i < tagname.length; i++) {     /*遍历获得的元素*/
               if (tagname[i].className == className) {     /*如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll*/
                   tagnameAll[tagnameAll.length] = tagname[i];
               }
           }
           return tagnameAll;
      },
	/**
	 * @param {String}_tag_name
	 * @param {String}_obj_scope
	 * @param {Object}_this_win
	 */
	getElementsByTagName: function (_tag_name,_obj_scope,_this_win){
		
		try {
			
			if(_obj_scope){
				
				var v_obj_scope = this.byId(_obj_scope,_this_win);
				return v_obj_scope.getElementsByTagName(_tag_name);
				
			}else{
				
				if(_this_win){
					return _this_win.document.getElementsByTagName(_tag_name);
				}else{
					return document.getElementsByTagName(_tag_name);
				}
			}
			
			
			
		}catch(e){
			
			return null;
		}
	},
	
	/**
	 * 对象集合的封装
	 * @return {TypeName} 		对象集合
	 */
	getBeans: function (){
	
		return {};
	},
	
	/**
	 * 想法：将一些html控件封装属性，直接从大面上获取，这样较为好用
	 * 对象集合封装
	 * @param {Object} _ids		属性集
	 * @memberOf {TypeName} 
	 * @return {TypeName} 		属性集对象
	 */
	getHtmlBeans: function (_ids,_names,_this_win){
	
		var _beans = this.getBeans();
		
		if(_ids){
			
			var _obj;
			var _name;
			var _ids_len = _ids.length;
			if(_names){
				if(_names.length!=_ids_len){
					alert("_ids与_names不匹配");
				}
			}
			for(var _i=0;_i<_ids_len;_i++){
				
				_obj=this.byId(_ids[_i],_this_win);
				if(_names){
					
					if(_names[_i]){
						_name=_names[_i];
					}else{
						_name=_ids[_i];
					}
				}else{
					_name=_ids[_i];
				}
				this.setBean(_beans, _name, _obj?_obj.value.replace(/\040/g,''):"");
				
			}
		}
		
		return _beans;
		
	},
	
	setHtmlValues: function (_ids,_values,_this_win){
		if(_ids){
			
			var _obj;
//			var _name;
			var _ids_len = _ids.length;
			for(var _i=0;_i<_ids_len;_i++){
				
				_obj=this.byId(_ids[_i],_this_win);
				
				if(_obj){
					_obj.value=(_values[_i]&&_values[_i]!=null&&_values[_i]!="")?_values[_i]:"";
				}
			}
		}
	},
	setHtmlInnerHtmls: function (_ids,_values,_this_win){
		if(_ids){
			
			var _obj;
//			var _name;
			var _ids_len = _ids.length;
			for(var _i=0;_i<_ids_len;_i++){
				
				_obj=this.byId(_ids[_i],_this_win);
				
				if(_obj){
					_obj.innerHTML=(_values[_i]&&_values[_i]!=null&&_values[_i]!="")?_values[_i]:"";
				}
			}
		}
	},
	
	getRadioValue: function(_radio_name,_this_win){
		var radio;
		if(_this_win){
			radio = $(_this_win)('input[name="'+_radio_name+'"]').filter(':checked');
		}else{
			radio = $('input[name="'+_radio_name+'"]').filter(':checked');
		}
		if(radio.length){
			return radio.val();
		}else{
			return null;
		}
	},
	
	setRadioValue: function(_radio_name,_val,_this_win){
		var radio = null;
		if(_this_win){
			radio = $(_this_win)('input[name="'+_radio_name+'"]');
		}else{
			radio = $('input[name="'+_radio_name+'"]');
		}
		
	},
	
	clear: function (_ids,_this_win){
		
//		var _beans = this.getBeans();
		
		if(_ids){
			
			var _obj;
			var _ids_len = _ids.length;
			for(var _i=0;_i<_ids_len;_i++){
				
				_obj=this.byId(_ids[_i],_this_win);
				
				if(_obj){
					_obj.value="";
				}
			}
		}
		
	},
	
	/**
	 * 往_beans对象库中加入对象
	 * @param {Object} _beans		对象库
	 * @param {Object} _bean_key	对象标识
	 * @param {Object} _bean_obj	存放的对象
	 */
	setBean: function (_beans, _bean_key, _bean_obj){
		
		_beans[_bean_key] = _bean_obj;
	},
	
	/**
	 * 获取_beans对象库中的对象
	 * @param {Object} _beans		对象库
	 * @param {Object} _bean_key	对象标识
	 * @return {TypeName} 			相应对象
	 */
	getBean: function (_beans, _bean_key){
		
		return _beans[_bean_key];
	},
	
	/**
	 * 验证字符串是否为空
	 * @param {Object} _str  	   验证的字符串
	 * 【true为空】【false不为空】 
	 */
	isNull: function (_str,_message){
		if(_str && _str!=null && ""!=(_str.replace(/\040/g,''))){
			return false;
		}else{
			if(_message){
				this.alert(_message);
			}
			return true;
		}
	},
	
	isNulls:function(_strs,_messages){
		var _bool = false;
		if(_messages){
			for(var _i=0;_i<_strs.length;_i++){
				_bool=this.isNull(_strs[_i],_messages[_i]);
				if(_bool){
					break;
				}
			}
		}else{
			for(var _i=0;_i<_strs.length;_i++){
				_bool=this.isNull(_strs[_i]);
				if(_bool){
					break;
				}
			}
		}
		return _bool;
	},
	/**
	 *  将json字符串转换成json对象
	 * @param jsonData
	 * @returns
	 */
	str2json:function (jsonData){
        var json = eval("(" + jsonData +")");//转换为json对象     
        return json;  
    } ,
    /**
     * 单参
     * @param _params
     * @returns {Array}
     */
    getRcpParam:function (_params){
           
        return [""+_params];  
    } ,
    /**
     * 多参
     * @param _params
     * @returns
     */
    getRcpParams:function (_params){
        
        return _params;  
    } ,
	/**
	 * 动态创建script元素
	 * @param {Object} _head
	 * @param {Object} _src
	 */
	createScript:function (_head, _src, _atts,_win){
		var _write_str = "%3Cscript type='text/javascript' src='"+_src+"' ";
		
		if(_atts){
			
			var _atts_len = _atts.length;
			
			for(var _i=0; _i<_atts_len; _i++){
				
				_write_str+=(_atts[_i].name +"='"+ _atts[_i].val+"' ");
			}
		}
		
		_write_str+="%3E%3C/script%3E";
		
		if(_win){
			_win.document.write(unescape(_write_str));
		}else{
			document.write(unescape(_write_str));
		}
	},
	createCss:function (_head, _src, _atts,_win){
		
		var _css_link;
		if(_win){
			 _css_link = _win.document.createElement("link");
		}else{
			 _css_link = document.createElement("link");
		}
		
		_css_link.rel = "stylesheet";
		_css_link.type = "text/css";
		_css_link.href = _src;
	    _head.appendChild(_css_link);
	},
	IsTelephone : function (obj){
		var pattern=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/; 
		if(pattern.test(obj)){ 
			return true; 
		}else{ 
			return false;
		} 
	},
	IsEmail : function (obj) {
	    var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;   
	    if (!pattern.test(obj)) {
	        return false;   
	    }   
	    return true;   
	}

};

var pathName = window.location.pathname;
pathName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
var pathUrl = 'http://' + window.location.host + pathName;


