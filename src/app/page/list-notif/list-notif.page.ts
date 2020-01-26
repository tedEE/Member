import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

import {NotificationService} from '../../servises/notification.service';
import {TasksService} from '../../servises/tasks.service';
import {DbService} from '../../servises/db.service';
import {dbKey} from '../../resurses/constants';
import {ITask} from '../../resurses/interfaisis';

@Component({
  selector: 'app-list-notif',
  templateUrl: './list-notif.page.html',
  styleUrls: ['./list-notif.page.scss'],
})
export class ListNotifPage implements OnInit {

  private tasks = this.tasksServ.tasks$
  // public tasks : Observable<ITask[]> = this.store$.pipe(select(selectTask))
  constructor(private notificationServise: NotificationService,
              private platform: Platform,
              private routeActiv: ActivatedRoute,
              private tasksServ: TasksService,
              private db : DbService,
  ) {
    console.log('list-notif constructor');
    // надо будет вынести в main
    this.platform.ready().then(() => {
      this.notificationServise.trigerEvent();
    });
  }

  ngOnInit() {}

  delelem(id : string){
    this.db.deleteElem(id, dbKey).then(()=>this.tasksServ.removeTaskForList(id))
  }

  update(task : ITask){
    // нужно прикрутить модальное окно с формой редактирования
  }

}
