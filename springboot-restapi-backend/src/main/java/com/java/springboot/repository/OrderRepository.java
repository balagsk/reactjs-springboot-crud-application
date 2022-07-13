package com.java.springboot.repository;

import com.java.springboot.model.Employee;
import com.java.springboot.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

}
