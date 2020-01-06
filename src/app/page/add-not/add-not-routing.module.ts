import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNotPage } from './add-not.page';

const routes: Routes = [
  {
    path: '',
    component: AddNotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNotPageRoutingModule {}
