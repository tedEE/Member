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
			{ id: 1, title: `${task.location} через минуту` ,foreground: true, trigger: { in: 1, unit: 'minute' }},
			{ id: 2, title: `${task.location} через 5 минуты`,foreground: true, trigger: { in: 5, unit: 'minute' }}
			// { id: 3, title: `${task.location} через 2 минуты`, trigger: { in: 2, unit: 'minute' }}
			// { id: 4, title: `${task.location} через 2 минуты`, trigger: { in: 2, unit: 'minute' }}
			// { id: 5, title: `${task.location} через 2 минуты`, trigger: { in: 2, unit: 'minute' }}
			// { id: 6, title: `${task.location} через 2 минуты`, trigger: { in: 2, unit: 'minute' }}
	]);
	}

  trigerEvent() {
    // @ts-ignore
    cordova.plugins.notification.local.on("trigger", (notification, state) => {
			console.log(state)
    })
  }
}
