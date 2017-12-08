import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todo-item';
import { ToDoService } from '../resources/services/to-do.service';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  list: ToDoItem[]; //this is a list property that returns an array of lists that it acquires from a service


  constructor(private toDoService: ToDoService) { }



  ngOnInit() {
  }
  fetchToDos() {
    this.toDoService.getLists();
  }

}
