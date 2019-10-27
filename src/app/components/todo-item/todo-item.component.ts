import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); 
  constructor(private todoService:TodosService) { }

  ngOnInit() {
  }

  setClass(){
      return { isComplete: this.todo.completed };
  }

  onToggleCheckbox(){
    this.todo.completed=!this.todo.completed;
    this.todoService.toggleCompleted(this.todo).subscribe(todo=>{
      //console.log(todo);
    });
  }

  onDeleteTodo(todo:Todo){
    this.deleteTodo.emit(todo);
  }
}
