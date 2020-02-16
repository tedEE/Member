import { Injectable } from '@angular/core';
import {ITimeSeting} from '../resurses/interfaisis';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private selectedTimeSettings : Array <ITimeSeting> = []

  constructor() { }
////////////////////////// геттер и сеттор для массива с настройками
  getTimeSettings() : Array <ITimeSeting>{
    return this.selectedTimeSettings
  }

  setTimeSettings(setings : ITimeSeting){
      this.selectedTimeSettings.push(setings)
  }
////////////////////////////////////////////////////////////////////////



}
