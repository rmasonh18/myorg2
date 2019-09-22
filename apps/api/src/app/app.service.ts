import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg2/data';



@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo1'}, { title: 'Todo2'}];


  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: 'New todo $(Math.floor(Math.random() *1000)}'
    });
  }
}
