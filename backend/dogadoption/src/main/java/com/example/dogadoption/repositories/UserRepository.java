package com.example.dogadoption.repositories;

import com.example.dogadoption.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
//pass email
@Repository
public interface UserRepository extends CrudRepository<User, String> {
}
