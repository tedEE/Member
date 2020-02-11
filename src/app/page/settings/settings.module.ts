import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import {SelectComponent} from '../../components/select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  exports: [
    SelectComponent
  ],
  declarations: [
    SelectComponent
  ]
})
export class SettingsPageModule {}
