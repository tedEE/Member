import {Component, OnInit} from '@angular/core';
import {ModalController, Platform, ToastController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

import {NotificationService} from '../../servises/notification.service';
import {TasksService} from '../../servises/tasks.service';
import {ITask, ITaskState} from '../../resurses/interfaisis';
import {ModalPage} from '../modal/modal.page';
import {Store} from '@ngrx/store';
import {AddTaskAction} from '../../reducers/taskReducer/task.actions';
import { AlertController } from '@ionic/angular';


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
              private store$: Store<ITaskState>,
              private toastCrt : ToastController,
              private alertController: AlertController
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

  async delelem(task : ITask){
    this.notificationServise.deleteNotificationMassege(task.id)
    // Создание диалогового окна Alert с вопросом об удалени
    const alert = await this.alertController.create({
      header: 'Предупреждение!',
      message: `<strong>Удалить ${task.location}</strong>!!!`,
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
        }, {
          text: 'Удалить',
          handler: () => {
            this.tasksServ.removeTaskForList(task)
            // вызов Toast уведомления
            toast.present();
          }
        }
      ]
    });

    await alert.present();
    // создание Toast уведомления об удалении
    const toast = await this.toastCrt.create({
      message: `Локация ${task.location} удалена `,
      duration : 3000,
    });

  }


  async update(task : ITask){
    // вызов модального окна с формой
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps : {task}
    });
    return await modal.present();
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     componentProps : {taskid : this.taskId}
  //   });
  //   return await modal.present();
  // }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
