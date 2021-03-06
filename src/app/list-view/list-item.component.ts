import { Component, Input, Output, OnInit } from '@angular/core';
import { ToDoService } from '../resources/services/to-do.service';
import { ListObject } from '../models/list-object';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private service: ToDoService) { }

  @Input() listobject: ListObject;
  @Input() index: number;
  @Output() updatedItem = new EventEmitter();

  ngOnInit() {

  }
  updateList = function () {
    this.service.updateList(this.listobject)
      .then((newobject) => { this.updatedItem.emit(newobject); });
  };
}
