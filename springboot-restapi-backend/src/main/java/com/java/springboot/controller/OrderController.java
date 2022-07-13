package com.java.springboot.controller;

import com.java.springboot.exception.ResourceNotFoundException;
import com.java.springboot.model.Employee;
import com.java.springboot.model.Order;
import com.java.springboot.repository.EmployeeRepository;
import com.java.springboot.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class OrderController {

	@Autowired
	private OrderRepository orderRepository;
	
	// get all Orders
	@GetMapping("/orders")
	public List<Order> getAllOrders(){
		return orderRepository.findAll();
	}		
	
	// create Order rest api
	@PostMapping("/orders")
	public Order createEmployee(@RequestBody Order order) {
		return orderRepository.save(order);
	}
	
	// get order by id rest api
	@GetMapping("/orders/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(order);
	}
	
	// update order rest api
	
	@PutMapping("/orders/{id}")
	public ResponseEntity<Order> updateEmployee(@PathVariable Long id, @RequestBody Order orderDetails){
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		order.setTickerName(orderDetails.getTickerName());
		order.setTickerCode(orderDetails.getTickerCode());
		order.setPrice(orderDetails.getPrice());
		
		Order updatedOrder = orderRepository.save(order);
		return ResponseEntity.ok(updatedOrder);
	}
	
	// delete employee rest api
	@DeleteMapping("/orders/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Order order = orderRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		orderRepository.delete(order);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
