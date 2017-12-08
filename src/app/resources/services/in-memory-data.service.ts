import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDoItem } from '../../models/todo-item';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: ToDoItem[] = [
      {
        name: 'test',
        description: 'guyijok',
        completed: false,
      },
      {
        name: 'test2',
        description: 'guyijok',
        completed: false,
      }
    ];
    return { todos };
  }
}