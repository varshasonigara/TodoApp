import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodosService) { 
    
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos=todos;
    });
  }

  onDeleteTodo(deleteTodo:Todo){
    console.log(deleteTodo);
    this.todoService.deleteTodo(deleteTodo).subscribe(()=>{
      this.todos=this.todos.filter(todo=> todo.id!=deleteTodo.id)
    });
  }

  addTodo(todo: Todo){
    //add to ui, send request to server
    this.todoService.addTodo(todo).subscribe(todo=>{
      this.todos.push(todo);
    });
  }
}
