import {Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';

import { ITask } from 'src/app/resurses/interfaisis';
import { NotificationService } from 'src/app/servises/notification.service';
import {TasksService} from '../../servises/tasks.service';
import {FormGroup} from '@angular/forms';




@Component({
  selector: 'app-add-not',
  templateUrl: './add-not.page.html',
  styleUrls: ['./add-not.page.scss'],
})
export class AddNotPage implements OnInit {

	// location : string
	// hint : string
	task : ITask = {id : '', location : '', hint : ''}

	constructor(private alertController: AlertController,
							private tasksService : TasksService,) {}

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

  // очистка формы
  clear(){
	  // сюда можно добавить анимацию исчезновения формы или что то вроде этого
    console.log('task clear')
    this.task.location = ''
    this.task.hint = ''
  }

  addNot(){
		if(!this.task.location || !this.task.hint){
      this.presentAlert()
      return
    }
    this.task.id = Date.now().toString()
    const newTask = {...this.task} // дублирование объекта task
    this.clear()
    this.tasksService.addTaskToList(newTask)

  }

}
