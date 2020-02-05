import { Component, OnInit } from '@angular/core';
import { TodoListServiceService } from '../todo-list/todo-list-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDo } from '../todo-list/todo-model';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
todo: ToDo;

  constructor(private todolist : TodoListServiceService, private router: Router, private activatedRoute : ActivatedRoute) { 


  }
  addTodo() {
    if (this.todo.id === 0) {
      this.todo.id = this.todolist.getNewId();
      this.todolist.add(this.todo);
    }
    this.router.navigate(['/list']);

}
  ngOnInit() {
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');

    if (id==null)
    {
   
        this.todo = new ToDo(0, '');
          }
    else
    {
      this.todo = this.todolist.get(parseInt(this.activatedRoute.snapshot.paramMap.get('id')));

    }
  }

}
