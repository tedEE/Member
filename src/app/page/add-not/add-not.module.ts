import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNotPageRoutingModule } from './add-not-routing.module';

import { AddNotPage } from './add-not.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNotPageRoutingModule
  ],
  declarations: []
})
export class AddNotPageModule {}
