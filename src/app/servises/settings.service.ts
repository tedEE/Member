import {Injectable} from '@angular/core';
import {ITimeSetting} from '../resurses/interfaisis';
import {DbService} from './db.service';
import {dbSettingKey} from '../resurses/constants';
import {select, Store} from '@ngrx/store';
import {AddSettingAction, DelSettingAction} from '../reducers/settingReduser/setting.actions';
import {Observable} from 'rxjs';
import {selectTimeSettings} from '../reducers/settingReduser/setting.selectors';
import {AddTaskAction} from '../reducers/taskReducer/task.actions';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public settingTime$ : Observable<ITimeSetting[]> = this.store$.pipe(select(selectTimeSettings))

  // selectedTimeSettings: Array<ITimeSetting>
  constructor(private db: DbService<ITimeSetting>,
              private store$ : Store<ITimeSetting>) {
    this.initialStore()
    // this.getTimeSettings().then(arr => this.selectedTimeSettings = arr)
  }

  // async getTimeSettings(){
  //   let arr = await this.db.getElems(dbSettingKey)
  //   // надо попробовать добавить в редусер актион с добовлением массива
  //   arr.forEach(e => this.store.dispatch(new AddSettingAction(e)))
  //   return arr
  // }

  getTimeSettings(){
    return this.db.getElems(dbSettingKey)
  }

  async setTimeSettings(setings: ITimeSetting) {
   let e = await this.db.addElem(setings, dbSettingKey)
    this.store$.dispatch(new AddSettingAction(setings))
    console.log(e)
  }


  async deleteSetingTime(id) {
    let arr = await this.db.deleteElem(id, dbSettingKey)
    this.store$.dispatch(new DelSettingAction(id))
    console.log(arr)
  }

  initialStore(){
    this.getTimeSettings().then(arrayTask => arrayTask.forEach(
      set => this.store$.dispatch(new AddSettingAction(set))
    ) )
  }

}
