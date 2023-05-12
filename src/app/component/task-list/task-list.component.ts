import { Component } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service.ts';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  task: Task [] = [];
  constructor(private taskService: TaskService){}


}
