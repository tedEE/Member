import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import {NotificationService} from '../../servises/notification.service';

@Component({
  selector: 'app-list-notif',
  templateUrl: './list-notif.page.html',
  styleUrls: ['./list-notif.page.scss'],
})
export class ListNotifPage implements OnInit {



  constructor(private notificationServise : NotificationService, private platform: Platform) {
		// надо будет вынести в main
		this.platform.ready().then(()=>{
			this.notificationServise.trigerEvent()
				})
	 }

  ngOnInit() {
    
  }

}
