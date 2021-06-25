import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodo() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  
  create(title: string) {
    
    let data: Todo = {
      userId: 1,
      completed: false,
      title
    }
    return this.http.post('https://jsonplaceholder.typicode.com/todos', data);
  }
  
  update(id: number, data: {}) {
    return this.http.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, data);
  }

  delete(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
