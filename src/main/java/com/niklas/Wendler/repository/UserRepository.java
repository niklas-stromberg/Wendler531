package com.niklas.Wendler.repository;

import com.niklas.Wendler.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

}
