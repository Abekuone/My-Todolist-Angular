import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// J'importe les trois composants necessaires avec leurs chemins
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskUpdateComponent } from './component/task-update/task-update.component';

// Pour pouvoir gérer les formulaires
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Je declare les composant que j'ai importes
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    TaskUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



