import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import {SelectComponent} from '../../components/select/select.component';
import {AddTimeComponent} from '../../components/add-time/add-time.component';
import {ModalStringTimeComponent} from '../../components/modal-string-time/modal-string-time.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  exports: [
    AddTimeComponent,
    // SelectComponent,
    // SelectNumberComponent,
    // SelectStringComponent
  ],
  declarations: [
    SelectComponent,
    AddTimeComponent,
    ModalStringTimeComponent,
  ]
})
export class SettingsPageModule {}
