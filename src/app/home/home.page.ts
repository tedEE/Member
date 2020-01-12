import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor( private platform: Platform, private backgroundMode: BackgroundMode,
		 private router : Router) {}
	
	ngOnInit(){
		// this.router.events
		// // @ts-ignore
		// .subscribe(e=>console.log(e.url))

		// backgroundMode с прекрученными уведомлениями
		// this.platform.ready().then(()=>{
		// 	this.backgroundMode.on('activate').subscribe(()=> {
		// 		setTimeout(this.showNotification, 5000)
		// 		console.log('activate')})
		// 		})
		// 		this.backgroundMode.enable();
		// 		// выход из приложения
		// 		this.backButtonEvent()
	}

	showNotification () {
		// @ts-ignore
		cordova.plugins.notification.local.schedule({
			title: 'My first notification',
			text: 'Thats pretty easy...',
	})
	}

	backButtonEvent() {
		this.platform.backButton.subscribe(async () => {
			this.close()
		})
	}

	close() {
    navigator['app'].exitApp();
  }

}
