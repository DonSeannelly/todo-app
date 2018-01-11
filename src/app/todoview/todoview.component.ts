import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../models/todo-item';

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent implements OnInit {
@Input() todo: ToDoItem;
@Output() save: EventEmitter<ToDoItem>=new EventEmitter<ToDoItem>();
@Output() delete: EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { 

  }

  savetodo(){
    this.save.emit(this.todo);
  }

  deletetodo(){
    this.delete.emit(false);
  }

  ngOnInit() {
    console.log(this.todo);
  }

}
