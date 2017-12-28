package com.flood.config;


import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "client")
public class WebServiceConfig {
	
	private String clientoms;
	private String clientsso;

	public String getClientoms() {
		return clientoms;
	}

	public void setClientoms(String clientoms) {
		this.clientoms = clientoms;
	}

	public String getClientsso() {
		return clientsso;
	}

	public void setClientsso(String clientsso) {
		this.clientsso = clientsso;
	}
	
	
	
	

}
