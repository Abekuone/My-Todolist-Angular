
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// J'importe les élément de gestion du formulaire
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from './models/task';
import { TaskService } from './services/task.service';

// J'importe les trois composants leurs chemins
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskUpdateComponent } from './component/task-update/task-update.component';



@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent {

  taskForm!: FormGroup;
  /**
  *@param router
  *@param formBuilder
  */

  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private taskService : TaskService) {
  }
  ngOnInit(){
    this.creerFormulaire();
  }
  creerFormulaire(): void {
    this.taskForm = this.formBuilder.group({
      id : ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      tache : ['', Validators.required],
    });
  }
  Onsubmit(){
    if (this.taskForm.valid){
      const { id, tache } = this.taskForm.value;
      const newTask : Task = { id, tache };
      this.taskService.creerTask(newTask);
      this.taskForm.reset();
      this.router.navigateByUrl('/task');
    }
  }
}
