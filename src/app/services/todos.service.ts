import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5'
  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  toggleCompleted(todo:Todo): Observable<any>{
    const url:string =`${this.todosUrl}/${todo.id}`;
    return this.http.put<any>(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo):Observable<any>{
    const url:string =`${this.todosUrl}/${todo.id}`;
    return this.http.delete<any>(url);
  }

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
