import {Component, OnInit} from '@angular/core';
import {ModalController, Platform} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

import {NotificationService} from '../../servises/notification.service';
import {TasksService} from '../../servises/tasks.service';
import {DbService} from '../../servises/db.service';
import {dbKey} from '../../resurses/constants';
import {ITask, ITaskState} from '../../resurses/interfaisis';
import {ModalPage} from '../modal/modal.page';
import {Store} from '@ngrx/store';
import {AddTaskAction} from '../../reducers/taskReducer/task.actions';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-list-notif',
  templateUrl: './list-notif.page.html',
  styleUrls: ['./list-notif.page.scss'],
})
export class ListNotifPage implements OnInit {

  private tasks = this.tasksServ.tasks$
  private taskId : string // переменная для передачи в модальное окно редактирования
  // public tasks : Observable<ITask[]> = this.store$.pipe(select(selectTask))
  constructor(private notificationServise: NotificationService,
              private platform: Platform,
              private routeActiv: ActivatedRoute,
              private tasksServ: TasksService,
              private modalController: ModalController,
              private store$: Store<ITaskState>
  ) {
    // надо будет вынести в main
    this.platform.ready().then(() => {
      this.notificationServise.trigerEvent();
    });
  }

  ngOnInit() {
    /**
     * получение из базы всех тасков и помещение их в store
     */
    this.tasksServ.getTasks().then(arrayTask => arrayTask.map(
      task => this.store$.dispatch(new AddTaskAction(task))
    ) )
  }

  delelem(id : string){
    this.tasksServ.removeTaskForList(id)
  }

  async update(task : ITask){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps : {task}
    });
    return await modal.present();

    // this.taskId = task
    // console.log(this.taskId)
    // this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps : {taskid : this.taskId}
    });
    return await modal.present();
  }

}
