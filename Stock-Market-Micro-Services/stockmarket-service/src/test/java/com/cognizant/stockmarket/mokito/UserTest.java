package com.cognizant.stockmarket.mokito;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;

import com.cognizant.stockmarket.controller.UserController;
import com.cognizant.stockmarket.model.User;

public class UserTest {

	UserController userController;
	User u1 = null;
	User u2 = null;

	@Before(value = "")
	public void setUp() throws Exception {

		userController = mock(UserController.class);
		u1 = new User(255, "Tejashri", "Brian", "tej@gmail.com", "1234567890", true, null);
		u2 = new User(256, "Sanhita", "Brian", "sah@gmail.com", "0987654321", false, null);

		when(userController.getAUser()).thenReturn(Arrays.asList(u1, u2));
		when(userController.getUser(255)).thenReturn(u1);

		when(userController.updateProfile(u1)).thenReturn(u1);

	}

	@Test
	public void testupdateProfileTest() throws Exception {
		List<User> users = userController.getAUser();
		assertEquals(2, users.size());

		User c = new User();
		c = userController.getUser(255);
		c.setUserName("teja");

		c = userController.updateProfile(c);
		System.out.println(c);
		assertEquals("teja", c.getUserName());

	}
}
