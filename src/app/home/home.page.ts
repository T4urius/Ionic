import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private todos: Todo[];
  private total: number = 0;
  private sum: number = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
      if(res.length > 0) {
        this.sumTotal();
      }
    })    
  }

  sumTotal() {
    this.total = 0;
    for (let i = 0; i < this.todos.length; i++) {
      this.total += this.todos[i].valorConta + this.sum;
    }
  }

  remove(item) {
    this.todoService.removeTodo(item.id).then(() => {
      this.sumTotal();
    }).catch();    
  }
}
