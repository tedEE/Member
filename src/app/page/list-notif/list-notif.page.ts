import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

import {NotificationService} from '../../servises/notification.service';
import {TasksService} from '../../servises/tasks.service';

@Component({
  selector: 'app-list-notif',
  templateUrl: './list-notif.page.html',
  styleUrls: ['./list-notif.page.scss'],
})
export class ListNotifPage implements OnInit {

  // private tasks = this.tasksServ.tasks
  constructor(private notificationServise: NotificationService,
              private platform: Platform,
              private routeActiv: ActivatedRoute,
              private tasksServ: TasksService,
  ) {
    console.log('list-notif constructor');
    // надо будет вынести в main
    this.platform.ready().then(() => {
      this.notificationServise.trigerEvent();
    });
  }

  ngOnInit() {
    // this.routeActiv.outlet
  }

}
