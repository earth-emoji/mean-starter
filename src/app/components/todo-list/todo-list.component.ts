import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(private todoApi: ApiService) {}

  ngOnInit() {
    this.todoList();
  }

  todoList() {
    this.todoApi.getTodos().subscribe((data: Todo[]) => {

      this.todos = data["data"];
      console.log(this.todos);
    });
  }

}
