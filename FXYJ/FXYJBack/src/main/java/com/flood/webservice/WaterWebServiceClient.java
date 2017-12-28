package com.flood.webservice;

import org.apache.cxf.endpoint.Client;
import org.apache.cxf.jaxws.endpoint.dynamic.JaxWsDynamicClientFactory;

public class WaterWebServiceClient {

	private WaterWebServiceClient() {
	}

	private static volatile WaterWebServiceClient instance = null;

	public static WaterWebServiceClient instance() {
		if (instance == null) {
			synchronized (WaterWebServiceClient.class) {
				if (instance == null) {
					instance = new WaterWebServiceClient();
				}
			}
		}
		return instance;
	}
	
	JaxWsDynamicClientFactory dcf = JaxWsDynamicClientFactory.newInstance();
	
	
	/**
	 * Oms
	 */
	private Client clientOMS = null;
	public  Client getOMSClient(String clientoms) throws Exception{
		if(clientOMS == null){
			synchronized(this){
				if(clientOMS == null){
					clientOMS =dcf.createClient(clientoms);
				}
			}
		}
		return clientOMS;
	}
	
	/**
	 * SSO
	 */
	private Client clientSSO = null;
	public  Client getSSOClient(String clientsso) throws Exception{
		if(clientSSO == null){
			synchronized(this){
				if(clientSSO == null){
					clientSSO =dcf.createClient(clientsso);
				}
			}
		}
		return clientSSO;
	}
}
