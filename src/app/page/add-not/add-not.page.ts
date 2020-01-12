import {Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';

import { ITask } from 'src/app/resurses/interfaisis';
import { NotificationService } from 'src/app/servises/notification.service';
import {TasksService} from '../../servises/tasks.service';




@Component({
  selector: 'app-add-not',
  templateUrl: './add-not.page.html',
  styleUrls: ['./add-not.page.scss'],
})
export class AddNotPage implements OnInit {

	// location : string
	// hint : string
	task : ITask = {location : '', hint : ''}

	constructor(private alertController: AlertController,
							private tasksService : TasksService) {console.log('add-not constructor')}

  ngOnInit() {
	}

	/**
	 * вывод сообщения в алерте
	 */
	async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Заполните все поля',
      message: 'Поля ввода должны быть заполнены.',
      buttons: ['OK']
    });

    await alert.present();
  }

  addNot(){
		console.log(this.task)
		if(!this.task.location || !this.task.hint){
			this.presentAlert()
			return
		}

		this.tasksService.addTaskToList(this.task);

		// this.notifService.createNotification(this.task)
	}

}
