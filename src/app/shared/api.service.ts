import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = 'http://localhost:3000/api/v1/todos';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get all todos
  getTodos() {
    return this
            .http
            .get(`${this.endpoint}`);
  }

  // Add todo
  addTodo(task: String) {
    const todo = {
      task: task
    };

    this
      .http
      .post(`${this.endpoint}`, todo)
      .subscribe(res => console.log('Done'));
  }



   // Error handling 
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
