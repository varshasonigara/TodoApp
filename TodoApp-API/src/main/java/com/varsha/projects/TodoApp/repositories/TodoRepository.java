package com.varsha.projects.TodoApp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.varsha.projects.TodoApp.models.Todo;

public interface TodoRepository extends MongoRepository<Todo, String>{

}
