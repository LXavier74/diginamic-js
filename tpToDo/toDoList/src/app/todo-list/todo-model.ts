import { TodoListComponent } from './todo-list.component';

export class ToDo {
    id: number ;
    label: string;
    constructor(id: number, label: string)
       {
   this.id = id;
   this.label = label;
       }
   }

export type todo =  Array<ToDo>;