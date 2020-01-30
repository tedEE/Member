import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {dbKey} from '../../resurses/constants';

import {ModalPage} from '../modal/modal.page';
import {DbService} from '../../servises/db.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private modalController: ModalController) { console.log('main constructor') }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  show(){
    // this.dbserv.getElems(dbKey).then(e => console.log(e))
  }
}
