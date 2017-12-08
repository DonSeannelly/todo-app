import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
<<<<<<< HEAD
import { ToDoItem } from '../../modules/todo-item';
import {ListObject} from '../../list-object';
=======
import { ToDoItem } from '../../models/todo-item';
>>>>>>> 98f41de323bce433f752ac71872b8da932439af7
@Injectable()
export class ToDoService {

  private todoURL: string = 'api/todos';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getLists(): Promise<Array<ToDoItem>> {
    return this.http.get(this.todoURL, { headers: this.headers })
      .toPromise()
      .then((response) => response.json() as Array<ToDoItem>)
      .catch(this.handleError);
  }

  updateList(listobject: ListObject): Promise<ListObject> {
    return Promise.resolve(listobject);
  }

  private handleError(error: any): Promise<any> {
    console.error(`There was an error processing this request. Error: ${error}`); //Dev Purposes only
    return Promise.reject(error.message || error);
  }
}
