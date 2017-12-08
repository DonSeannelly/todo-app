import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDoItem } from '../../models/todo-item';
import { ListObject } from '../../models/list-object';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: ListObject[] = [
      {
        id: '1',
        title: 'Test List',
        items: []
      },
      {
        id: '2',
        title: 'Test List 2',
        items: []
      },
    ];
    return { todos };
  }
}