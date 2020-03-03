import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../servises/settings.service';
import {ITimeSetting} from '../../resurses/interfaisis';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddSettingAction} from '../../reducers/settingReduser/setting.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private settingService : SettingsService,
              private store$ : Store<ITimeSetting>) { }

  private settings$ : Observable<ITimeSetting[]>

  ngOnInit() {
    // нужно сделать чтоб вызывалось один раз
    // this.settingService.getTimeSettings().then(arrSetting => {
    //   arrSetting.forEach(setting => this.store$.dispatch(new AddSettingAction(setting)))
    // })
    this.settings$ = this.settingService.settingTime$
  }

  delete(id: number | string) {
    this.settingService.deleteSetingTime(id)
  }
}
