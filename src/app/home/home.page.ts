import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor( private platform: Platform, private backgroundMode: BackgroundMode) {}
	
	ngOnInit(){
		console.log('home')
		this.platform.ready().then(()=>{
			this.backgroundMode.on('activate').subscribe(()=> {
				setTimeout(this.showNotification, 5000)
				console.log('activate')})
				})
				this.backgroundMode.enable();
				this.backButtonEvent()
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
