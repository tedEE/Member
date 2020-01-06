import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // {
  //   path: 'modal',
  //   loadChildren: () => import('./page/modal/modal.module').then( m => m.ModalPageModule)
  // },
  // {
  //   path: 'add-not',
  //   loadChildren: () => import('./page/add-not/add-not.module').then( m => m.AddNotPageModule)
  // },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./page/main/main.module').then( m => m.MainPageModule)
  // },
  // {
  //   path: 'list-notif',
  //   loadChildren: () => import('./page/list-notif/list-notif.module').then( m => m.ListNotifPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
