import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListNotifPageRoutingModule } from './list-notif-routing.module';

import { ListNotifPage } from './list-notif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListNotifPageRoutingModule
  ],
  declarations: []
})
export class ListNotifPageModule {}
