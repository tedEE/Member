import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor( private platform: Platform,
		 private router : Router) {}

	ngOnInit(){
	  this.backButtonEvent()
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
