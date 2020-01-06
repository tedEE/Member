import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNotifPage } from './list-notif.page';

const routes: Routes = [
  {
    path: '',
    component: ListNotifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListNotifPageRoutingModule {}
