import { Injectable } from '@angular/core';
import { Task } from '../models/task.ts';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

// Je définie une variable privee task qui prend une liste task vide
  private task: Task[] = [];
  constructor() { 

// Methode pour afficher toutes les taches
    getAllTask(): Task[]{
      return this.task;
    }

// Methode pour supprimer
    createTask(task: Task): void{
      this.task.push(task);
    }

// Methode pour mettre à jour
    updtadeTask(task: Task): void{
      const index = this.task.findIndex(t=>t.numero===task.numero)
      if (index !== -1){
        this.task[index]= task;
      }
    }

// Methode pour supprimer
    deleteTask(numero: number): void{
      this.task = this.task.filter(t=>t.numero!==numero);
    }

  }
}
