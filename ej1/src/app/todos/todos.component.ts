import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos();

  }

  addTodo(){
    var newTodo = {
      text: this.text
    }
    this.todos.push(newTodo);

    this._todoService.addTodo(newTodo);
    this.text = "";  
}

  deleteTodo(todoText){
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText){
        this.todos.splice(i, 1);
      }  
    }

    this._todoService.deleteTodo(todoText);
    this.text = "";  
}

  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo(){
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText){
        this.todos[i].text = this.text;
      }  
    }

    this._todoService.updateTodo(this.oldText, this.text);
    this.text = "";
    this.appState = "default";
}

}
