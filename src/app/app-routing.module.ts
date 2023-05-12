import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// J'importe mes trois composants nécessaires
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskUpdateComponent } from './component/task-update/task-update.component';


// J'écris les routes necessaires pour mes trois composants
const routes: Routes = [

  // Routes d'affichage de la liste des taches
  {
    path: 'list-task',
    component: TaskListComponent,
  },

  // Route pour le composant d'ajout
  {
    path: 'add-task',
    component: TaskAddComponent,
  },

  // Route pour le composant de mise à jour
  {
    path: 'update-task',
    component: TaskUpdateComponent,
  },

  // Route par defaut de l'application, routes d'affichage de la liste des taches
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







