import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ToDoItem } from '../../models/todo-item';
import { ListObject } from '../../models/list-object';
@Injectable()
export class ToDoService {

  private todoURL: string = 'api/todos';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  async createList(title: string, id: string): Promise<Array<ToDoItem>> {
    let newList: ListObject = {
      id: id,
      title: title,
      items: [],
    }

    await this.http.put(this.todoURL + `/${id}`, JSON.stringify(newList), { headers: this.headers })
      .toPromise()
      .then((response) => response.json() as void)
      .catch(this.handleError)

    return this.getLists();

  }

  getLists(): Promise<Array<ToDoItem>> {
    return this.http.get(this.todoURL, { headers: this.headers })
      .toPromise()
      .then((response) => response.json() as Array<ToDoItem>)
      .catch(this.handleError);
  }

  getList(id: string) {
    return this.http.get(this.todoURL + '/' + id).toPromise().then((id)=>{
      return id.json();
    }).catch(this.handleError);
  }

  updateList(listobject: ListObject): Promise<ListObject> {
    return this.http.put(
      this.todoURL + '/' + listobject.id,
      JSON.stringify(listobject)
    ).toPromise()
      .then((response) => response.json() as ListObject)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error(`There was an error processing this request. Error: ${error}`); //Dev Purposes only
    return Promise.reject(error.message || error);
  }

  deleteList(listObjectID: string) {
    return this.http.delete(this.todoURL + `/${listObjectID}`).toPromise().then(response=> response.json)
    .catch(this.handleError);
  }
}
