import { Component } from '@angular/core';

interface Item {
  task: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
taskInput: string = '';
completedInput: boolean = false;  
filterText: string;

todos: Item[] = [
  {task: "Finish Lab 1", completed: true},
  {task: "Post to GitHub", completed: false},
  {task: "Submit in LMS", completed: false}
  ];

  filteredTodos = [...this.todos];

  add = () => {
    const newToDo = {
      task: this.taskInput,
      completed: this.completedInput,
    };
    this.todos.push(newToDo);

    this.taskInput = null;
  }

  markComplete = (index) => {
    this.todos[index].completed = true;
  };

  delete = (index) => {
    this.todos.splice(index, 1)
  };

  filterTodos = () => {
    
    this.filteredtodos = this.todos.filter(todo =>
    todo.name.includes(this.filterText));
  }
 

}
