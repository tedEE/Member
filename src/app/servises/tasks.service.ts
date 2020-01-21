import { Injectable } from '@angular/core';
import {ITask} from '../resurses/interfaisis';
import {dbKey} from '../resurses/constants';
import { NotificationService } from 'src/app/servises/notification.service';
import {DbService} from './db.service';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // public tasks : ITask[] = [
  //   {id : '', location : '34', hint : 'подсказка'},
  //   {id : '', location : '43', hint : 'подсказка2'},
  // ]

  constructor(private notifService : NotificationService,
              private dbServise : DbService) { }

  /**
   * добовление задач в список
   * @param task
   */
  addTaskToList(task : ITask){
    // this.tasks.push(task)
    this.dbServise.addElem(task, dbKey)
    this.notifService.createNotification(task)
  }

}
