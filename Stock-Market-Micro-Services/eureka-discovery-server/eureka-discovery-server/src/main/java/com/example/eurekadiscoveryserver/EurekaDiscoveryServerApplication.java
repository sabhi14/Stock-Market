package com.example.eurekadiscoveryserver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EurekaDiscoveryServerApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(EurekaDiscoveryServerApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(EurekaDiscoveryServerApplication.class, args);
		
		LOGGER.info("Inside  EurekaDiscoveryServerApplication main");
	}

}
