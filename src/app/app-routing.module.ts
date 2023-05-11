import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskUpdateComponent } from './component/task-update/task-update.component';

const routes: Routes = [

  {
    path: 'task',
    component: TaskListComponent,
  },
  {
    path: 'add-task',
    component: TaskAddComponent,
  },
  {
    path: 'update-task',
    component: TaskUpdateComponent,
  },
    {
    path: '',
    component: TaskListComponent,
  },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
