import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToDoItem } from '../models/todo-item';
import { TodoDescriptionComponent } from '../todo-description/todo-description.component';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from '../resources/services/to-do.service';
import { Router } from '@angular/router';
import { ListObject } from '../models/list-object';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit, OnDestroy {
  activetodo: ToDoItem;
  showDescription: boolean;
  id: string;
  private sub: any;
  list: ListObject;
  currentIndex: number;

  constructor(private route: ActivatedRoute, private todoService: ToDoService, private router: Router) {
    this.showDescription = false;
  }

  delete() {
    this.todoService.deleteList(this.id).then(()=>{
      this.router.navigateByUrl('/');
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  deletetodo() {
    this.list.items.splice(this.currentIndex, 1);
    this.todoService.updateList(this.list).then(updated=> {
      this.activetodo=undefined;
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  save(todo: ToDoItem) {
    this.list.items.push(todo);
    this.todoService.updateList(this.list).then(updated=> {
      console.log(updated);
      this.activetodo=undefined;
    })
      .catch((error)=> {
        console.log(error);
      })
  }

  getList() {
    this.todoService.getList(this.id).then((list)=>{
      this.list = list;
      console.log(list);
    })
    .catch((error=> {
      console.log(error);
    }))
  }

  addtodo() {
    let newtodo: ToDoItem= {name:"", description:"", completed:false};
    this.activetodo=newtodo;
    this.currentIndex=this.list.items.length - 1;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getList();
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
