import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todo-item';
import { TodoDescriptionComponent } from '../todo-description/todo-description.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  todos: ToDoItem[];
  title: string;
  showDescription: boolean;

  constructor() {
    this.showDescription = false;
    this.title = 'Test';

    this.todos = [
      {
        name: 'todo1',
        description: 'todo1desc',
        completed: false
      },
      {
        name: 'todo2',
        description: 'todo2desc',
        completed: true
      }
    ];
  }

  ngOnInit() {

  }
}
