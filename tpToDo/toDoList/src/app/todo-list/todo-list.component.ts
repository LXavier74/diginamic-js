import { Component, OnInit } from '@angular/core';
import { ToDo, todo } from './todo-model';
import { TodoListServiceService } from './todo-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist: todo;

  constructor(private todolistS: TodoListServiceService, private route: Router) { 

  }
  ngOnInit() {
    this.todolist = this.todolistS.getAll();
  }
  editTodo(id: number) {
    this.route.navigate(['/edit/' + id]);
  }

  deleteTodo(id: number) {
    this.todolistS.delete(id);
  }
}
