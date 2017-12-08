import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ToDoItem } from '../../models/todo-item';
@Injectable()
export class ToDoService {

  private todoURL: string = '/todos';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getLists(): Promise<Array<ToDoItem>> {
    return this.http.get(this.todoURL, { headers: this.headers })
      .toPromise()
      .then((response) => response.json() as Array<ToDoItem>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error(`There was an error processing this request. Error: ${error}`); //Dev Purposes only
    return Promise.reject(error.message || error);
  }
}
