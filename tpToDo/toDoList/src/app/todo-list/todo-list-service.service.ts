import { Injectable } from '@angular/core';
import { ToDo, todo } from './todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {
 todolist:todo;

  constructor() {
    this.todolist = new Array();

   }


  public getAll() {
    return this.todolist;
  }
  get(id: number) {
    let toDo: ToDo;
    this.todolist.filter(element => {
      if (element.id === id) {
        toDo = element;
      }
    });
    return toDo;
  }

  public getNewId() {
    let id : number = this.todolist.length + 1;
    return id + 1;
  }

 public add(todo : ToDo) {

  todo.id =  this.getNewId();
  this.todolist.push(todo);
  }

  public edit(todo : ToDo) {
    this.get(todo.id).label = todo.label;

  }

 public delete(id : number) {
  for (let i=0;i<this.todolist.length;i++)
  {
    if(this.todolist[i].id == id)
    {
      this.todolist.splice(i);
    }
  }

}
}
