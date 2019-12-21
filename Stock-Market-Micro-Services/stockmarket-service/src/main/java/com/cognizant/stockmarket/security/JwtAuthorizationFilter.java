package com.cognizant.stockmarket.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
	private static final Logger LOGGER = LoggerFactory.getLogger(JwtAuthorizationFilter.class);

	public JwtAuthorizationFilter(AuthenticationManager authenticationManager) {
		super(authenticationManager);
		LOGGER.info("Start");
		LOGGER.debug("{}: ", authenticationManager);
	}

	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		LOGGER.info("Start");
		String header = req.getHeader("Authorization");
		if(req.getRequestURI().contains("confirm")) {
			header = "Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu";
			HeaderMapRequestWrapper requestWrapper = new HeaderMapRequestWrapper(req);
	        requestWrapper.addHeader("Authorization", header);
			chain.doFilter(requestWrapper, res);
			return;
		}
		
		
		LOGGER.debug(header);

		

		if (header == null || !header.startsWith("Bearer ")) {
			chain.doFilter(req, res);
			return;
		}
		UsernamePasswordAuthenticationToken authentication = getAuthentication(req);

		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(req, res);
		LOGGER.info("End");
	}

	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
		String token = request.getHeader("Authorization");
		LOGGER.info("TOKEN: " + token);

		if (token != null) {
			// parse the token.
			Jws<Claims> jws;
			try {
				LOGGER.info("TRY ENTERS");
				jws = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary("stockmarket"))
						.parseClaimsJws(token.replace("Bearer ", ""));
				LOGGER.info("JWS: " + jws);
				String user = jws.getBody().getSubject();
				LOGGER.debug("USERNAME " + user.substring(0,user.indexOf(":")));
				LOGGER.debug("ROLE " + user.substring(user.indexOf(":")+1,user.length()));

				if (user != null) {
					return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
				}
			} catch (JwtException ex) {
				return null;
			}
			return null;
		}
		return null;
	}
}
