package com.flood;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

public class SpringBootStartApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
    	// 注意这里要指向原先用main方法执行的Application启动类aaa111
    	// 注意这里要指向原先用main方法执行的Application启动类bbb222
        // 注意这里要指向原先用main方法执行的Application启动类ccc655646456456456

        return builder.sources(Application.class);
    }
}