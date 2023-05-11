import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// J'importe les routes necessaires pour les trois composant
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskUpdateComponent } from './component/task-update/task-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
