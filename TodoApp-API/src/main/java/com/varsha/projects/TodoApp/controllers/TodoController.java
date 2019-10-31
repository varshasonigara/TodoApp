package com.varsha.projects.TodoApp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.varsha.projects.TodoApp.models.Todo;
import com.varsha.projects.TodoApp.repositories.TodoRepository;
@CrossOrigin("*")
@RestController
public class TodoController {
	@Autowired
	TodoRepository todoRepository;
	
	@RequestMapping(value="/todos")
	public List<Todo> getTodos(){
		return todoRepository.findAll();
	}

	@RequestMapping(value="/todos", method=RequestMethod.PUT)
	public Todo toggleTodoCompleted(@RequestBody Todo todo){
		return todoRepository.save(todo);
	}
	
	@RequestMapping(value="/todos/{id}", method=RequestMethod.DELETE)
	public void deleteTodo(@PathVariable String id){
		todoRepository.deleteById(id);
	}
	
	@RequestMapping(value="/todos",method=RequestMethod.POST)
	public Todo addTodo(@RequestBody Todo todo){
		return todoRepository.save(todo);
	}
	
}
