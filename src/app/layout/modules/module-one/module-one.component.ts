import { Component, OnInit } from '@angular/core';
import { ApiBackendService } from '../../../service-backend/api-backend.service';
import { Todo } from '../../../models/todo.model.';

@Component({
  selector: 'app-module-one',
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.scss']
})
export class ModuleOneComponent implements OnInit {


  public todos: Array<Todo>
  public page: number;
  
  constructor(private serviceBackend: ApiBackendService) {
    this.todos = new Array();
   }

  ngOnInit() {
    this.page=1;
    this.getTodos();
  }

  private async getTodos(){
    this.todos = await this.serviceBackend.getAllTodos();
  }

}
