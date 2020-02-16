import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {selectTime} from '../../resurses/interfaisis';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {

  @Input() time : Array<selectTime>
  @Output() onSelect: EventEmitter<selectTime> = new EventEmitter<string | number>()

  private isOpen : boolean = false
  private styleStringComponent = 'string_select'
  private styleNumberComponent = 'number_select'
  private selected : selectTime

  constructor() { }

  ngOnInit() {
    //инициализация select начальными значенияи
    this.selected = this.time[0]
    // отправка начального значения в родитьельский элемент
    this.selectItem(this.selected)
  }

  open() {
    this.isOpen = !this.isOpen
  }

  selectItem(e : selectTime) {
    this.selected = e
    this.onSelect.emit(e)
  }

  componentStyleDefinition() : boolean{
    return typeof this.time[0] === 'number'
  }


}
