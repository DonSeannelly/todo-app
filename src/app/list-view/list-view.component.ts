import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoItem } from '../models/todo-item';
import { TodoDescriptionComponent } from '../todo-description/todo-description.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit, OnDestroy {
  todos: ToDoItem[];
  title: string;
  showDescription: boolean;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {
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
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
