package com.example.zuulgateway;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;


@EnableZuulProxy
@SpringBootApplication
public class ZuulGatewayApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(ZuulGatewayApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(ZuulGatewayApplication.class, args);

		LOGGER.info("Inside  ZuulGatewayApplication main");
	}

}
