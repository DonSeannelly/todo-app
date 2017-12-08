import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from '../resources/services/to-do.service';
import { ListObject } from '../list-object';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private router: Router, private service: ToDoService) { }

  @Input() listobject: ListObject;
  @Input() index: number;
  @Output() updatedItem = new EventEmitter();

  ngOnInit() {

  }
  updateList = function() {
    this.updatedItem.emit(this.service.updateList(this.listobject));
  };
}
