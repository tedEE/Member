import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {selectTime} from '../../resurses/interfaisis';
import {Subject} from 'rxjs';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {

  @Input() resetStream$ : Subject<boolean>
  @Input() time: Array<selectTime>
  @Output() onSelect: EventEmitter<selectTime> = new EventEmitter<selectTime>()

  private isOpen : boolean = false
  private typeElement
  // имена стилей
  private styleStringComponent = 'string_select'
  private styleNumberComponent = 'number_select'
  // выбранный элемент
  private selected : selectTime


  constructor() { }

  ngOnInit() {
    //инициализация select начальными значенияи
    this.selected = this.time[0]
    this.componentTypeDefinition()
    // отправка начального значения в родитьельский элемент
    this.selectItem(this.selected)
  }

  onSelectTime(e){
    // почемуто этот метод работает
    if (isNaN(parseInt(e))) {
      this.selected = e
      console.log('строка')
    }else {
      this.selected = parseInt(e)
      this.resetStream$.subscribe(e => this.resetSelected(e))
      console.log('цифра')
    }
    this.onSelect.emit(this.selected)
  }

  selectItem(e) {
    this.onSelect.emit(e)
  }

  componentTypeDefinition(){
    this.typeElement = typeof this.time[0]
  }

  resetSelected(e){
      if(e){
        this.selected = 1
      }
  }

  openModal(){
    this.isOpen = true
  }

  closeModal(e) {
    this.isOpen = e
  }
}
