package com.flood.config;

import org.apache.cxf.Bus;
import org.apache.cxf.bus.spring.SpringBus;
import org.apache.cxf.jaxws.EndpointImpl;
import org.apache.cxf.transport.servlet.CXFServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.flood.webservice.WaterWebService;
import com.flood.webservice.WaterWebServiceImpl;

@Configuration
public class CxfWebServiceConfig {

//	@Bean
//	public ServletRegistrationBean dispatcherServlet() {
//		return new ServletRegistrationBean(new CXFServlet(), "ws/*");
//	}

	@Bean(name = Bus.DEFAULT_BUS_ID)
	public SpringBus springBus() {
		return new SpringBus();
	}

	@Bean
	public WaterWebService waterWebService() {
		return new WaterWebServiceImpl();
	}

	@Bean
	public EndpointImpl endpoint() {
		EndpointImpl endpoint = new EndpointImpl(springBus(), waterWebService());
		endpoint.publish("/user");
		return endpoint;
	}

}
