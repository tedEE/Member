import { Injectable } from '@angular/core';
import {ITask} from '../resurses/interfaisis';
import { NotificationService } from 'src/app/servises/notification.service';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks : ITask[] = []

  constructor(private notifService : NotificationService) { }

  /**
   * добовление задач в список
   * @param task
   */
  addTaskToList(task : ITask){
    this.tasks.push(task)
    this.notifService.createNotification(task)
  }

}
