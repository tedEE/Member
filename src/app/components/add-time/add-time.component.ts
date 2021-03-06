import {Component, OnInit,} from '@angular/core';
import {ITimeSetting, selectTime} from '../../resurses/interfaisis';
import {SettingsService} from '../../servises/settings.service';
import {Subject} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.scss']
})
export class AddTimeComponent implements OnInit {

  private selectedTimeSettings: Array<ITimeSetting>
  private settings : ITimeSetting
  private stream$
  private time = {
    'минут' : 59,
    'часов' : 23,
    'дней' : 6,
    'недели': 3,
    'месяцев' : 12
  }
  private resetStream$ = new Subject()
  private timeString: Array<string> = []
  private timeNumber: Array<number> = []
  private selectTimeString : string;
  private selectTimeNumber : number;

  constructor(private settingsServ : SettingsService) {}


  ngOnInit() {
    this.fillArrayDefault()
  }

  onSelect(e: selectTime) {
    switch (typeof e) {
      case 'number' :
        console.log('number');
        this.selectTimeNumber = e
        break
      case 'string':
        console.log('string');
        this.selectTimeString = e
        this.resetStream$.next(true)
        this.fillArraysAtSelect(e)
        break
      default :
        return new Error('i don\'t now')
    }
    this.settings = {
      id : Date.now(),
      stringTime : this.selectTimeString,
      numberTime : this.selectTimeNumber
    }
  }

  addTime() {
    this.settingsServ.setTimeSettings(this.settings)
  }

  /**
   * заполнение массивав timeString timeNumber значениями по умолчанию
   */
  fillArrayDefault(){
    for(let t in this.time){
      this.timeString.push(t)
    }
    for(let i = 1; i<=this.time[this.timeString[0]]; i++){
      this.timeNumber.push(i)
    }
  }


  fillArraysAtSelect(e : string){
    this.timeNumber = []
    for(let i = 1; i<=this.time[e]; i++){
      this.timeNumber.push(i)
    }
  }
}
