import { Injectable } from '@nestjs/common';

interface Todo {
  title:string;
}

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
