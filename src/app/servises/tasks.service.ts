import {Injectable} from '@angular/core';
import {ITask, ITaskState} from '../resurses/interfaisis';
import {dbKey} from '../resurses/constants';
import {NotificationService} from 'src/app/servises/notification.service';
import {DbService} from './db.service';
import {from, Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectTask} from '../reducers/taskReducer/task.selectors';
import {AddTaskAction, DelTaskAction, UpdateTaskAction} from '../reducers/taskReducer/task.actions';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  //

  public tasks$: Observable<ITask[]> = this.store$.pipe(select(selectTask));

  constructor(private notifService: NotificationService,
              private dbServise: DbService<ITask>,
              private store$: Store<ITaskState>) {
  }

  /**
   * добовление задач в список
   * @param task
   */
  addTaskToList(task: ITask) {
    this.dbServise.addElem(task, dbKey).then(() => {
      this.store$.dispatch(new AddTaskAction(task));
      this.notifService.createNotification(task);
    });
  }

  removeTaskForList(task: ITask) {
    this.dbServise.deleteElem(task.id, dbKey).then(() => {
      this.store$.dispatch(new DelTaskAction(task.id));
    });
  }

  updateTaskList(task: ITask) {
    this.dbServise.updateElem(task, dbKey).then(() => this.store$.dispatch(new UpdateTaskAction(task)))
    // this.store$.dispatch(new UpdateTaskAction(task));
  }

  /**
   * возвращает объект одного задания
   * (надо реализовать)
   * @param id
   */
  getTask(id: string) {
  }

  getTasks() {
    return this.dbServise.getElems(dbKey)
  }

}
