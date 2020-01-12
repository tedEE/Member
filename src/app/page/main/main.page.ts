import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public modalController: ModalController) { console.log('main constructor') }

  ngOnInit() {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
