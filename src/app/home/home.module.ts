import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {ListNotifPage} from '../page/list-notif/list-notif.page';
import {AddNotPage} from '../page/add-not/add-not.page';
import {ModalPage} from '../page/modal/modal.page';
import {SettingsPage} from '../page/settings/settings.page';
import {SettingsPageModule} from '../page/settings/settings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'list-notif',
            component: ListNotifPage
          },
          {
            path: 'add-notif',
            component: AddNotPage
          },
          {
            path: 'settings',
            component: SettingsPage
          },
        ]
      },
    ]),
    SettingsPageModule
  ],
  declarations: [HomePage, ListNotifPage, AddNotPage, ModalPage, SettingsPage],
  entryComponents : [ModalPage]
})
export class HomePageModule {}
