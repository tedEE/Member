import { Injectable } from '@angular/core';
import { ITask } from '../resurses/interfaisis';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

	constructor() {}

	createNotification(task : ITask){
		    // @ts-ignore
    cordova.plugins.notification.local.schedule([
			// { id: task.id + 1, title: `${task.location} через минуту` ,foreground: true, trigger: { in: 1, unit: 'minute' }, icon : "res://brain.png"},
			// { id: task.id + 2, title: `${task.location} через 5 минут` ,foreground: true, trigger: { in: 5, unit: 'minute' }, icon : "res://brain.png"},
			{ id: task.id + 1, title: `${task.location} через полчаса` ,foreground: true, trigger: { in: 30, unit: 'minute' }, icon : "res://brain.png", smallIcon: "res://brain.png", },
			{ id: task.id + 2, title: `${task.location} через 1 час`,foreground: true, trigger: { in: 1, unit: 'hour' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
			{ id: task.id + 3, title: `${task.location} через 3 часа`, foreground: true,  trigger: { in: 3, unit: 'hour' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
			{ id: task.id + 4, title: `${task.location} через 8 часов`, foreground: true,  trigger: { in: 8, unit: 'hour' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
			{ id: task.id + 5, title: `${task.location} через 24 часа`, foreground: true,  trigger: { in: 1, unit: 'day' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
			{ id: task.id + 6, title: `${task.location} через 3 дня`, foreground: true,  trigger: { in: 3, unit: 'day' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
			{ id: task.id + 7, title: `${task.location} через 7 дней`, foreground: true,  trigger: { in: 7, unit: 'day' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
			{ id: task.id + 8, title: `${task.location} через 1 месяц`, foreground: true,  trigger: { in: 1, unit: 'month' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
			{ id: task.id + 9, title: `${task.location} через 3 месяц`, foreground: true,  trigger: { in: 3, unit: 'month' }, icon : "res://brain.png", smallIcon: "res://brain.png",},
	]);
	}

  deleteNotificationMassege(id : string){
      // количество итераций захардкоженно временно
      for (let i = 1; i <= 9; i++) {
        // @ts-ignore
        cordova.plugins.notification.local.clear(id + i, function() {
          console.log(`done `);
        });
      }
  }

  trigerEvent() {
    // @ts-ignore
    cordova.plugins.notification.local.on("trigger", (notification, state) => {
			console.log(state)
    })
  }
}
