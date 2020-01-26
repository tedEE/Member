import { Injectable } from '@angular/core';
import {ITask, ITaskState} from '../resurses/interfaisis';
import {dbKey} from '../resurses/constants';
import { NotificationService } from 'src/app/servises/notification.service';
import {DbService} from './db.service';
import {from, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectTask} from '../reducers/taskReducer/task.selectors';
import {AddTaskAction, DelTaskAction, UpdateTaskAction} from '../reducers/taskReducer/task.actions';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  //

  public tasks$ : Observable<ITask[]> = this.store$.pipe(select(selectTask))


  constructor(private notifService : NotificationService,
              private dbServise : DbService,
              private store$ : Store<ITaskState>) {}

  /**
   * добовление задач в список
   * @param task
   */
  addTaskToList(task : ITask){
    // this.tasks.push(task)
    this.dbServise.addElem(task, dbKey).then(()=> {
      this.store$.dispatch(new AddTaskAction(task))
      this.notifService.createNotification(task)
    })
  }

  removeTaskForList(id : string){
    this.store$.dispatch(new DelTaskAction(id))
  }

  updateTaskForList(task : ITask){
    this.store$.dispatch(new UpdateTaskAction(task))
  }

}
