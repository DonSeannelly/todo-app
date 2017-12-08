import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from '../resources/services/to-do.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private router: Router, private service: ToDoService) { }

  @Input('listitem') listitem: string;

  ngOnInit() {

  }

}
