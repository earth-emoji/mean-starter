import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private as: ApiService) { 
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.form = this.fb.group({
      task: ['', Validators.required]
    });
  }

  addTodo(task: String) {
    this.as.addTodo(task);
  }

}
