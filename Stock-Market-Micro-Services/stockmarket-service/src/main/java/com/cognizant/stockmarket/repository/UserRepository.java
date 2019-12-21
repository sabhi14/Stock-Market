package com.cognizant.stockmarket.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.stockmarket.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query(value = "SELECT user_id,user_name,password,email,mobile,confirmed FROM users WHERE user_name=?;", nativeQuery = true)
	Optional<User> findUserByUsername(String username);
	
	@Query(value = "SELECT user_id,user_name,password,email,mobile,confirmed FROM users WHERE user_id=?;", nativeQuery = true)
	User findUserById(long id);

	@Modifying
	@Transactional
	@Query(value = "UPDATE users SET user_name=?,email=?,mobile=?,confirmed=? WHERE user_id=?;", nativeQuery = true)
	Integer updateUserProfile(String u, String e, String m, boolean c, long id);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE users SET password=? WHERE user_id=?;", nativeQuery = true)
	Integer updateUserPassword(String u, long id);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE users SET confirmed=? WHERE user_id=? AND email=?;", nativeQuery = true)
	Integer confirmUser(boolean u, long id, String email);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO user_role (ur_us_id, ur_ro_id) values (?,?)", nativeQuery = true)
	Integer addUserRole(long userId, long rollId);

}
