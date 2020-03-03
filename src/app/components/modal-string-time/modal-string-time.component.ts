import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {selectTime} from '../../resurses/interfaisis';

@Component({
  selector: 'app-modal-string-time',
  templateUrl: './modal-string-time.component.html',
  styleUrls: ['./modal-string-time.component.scss'],
})
export class ModalStringTimeComponent implements OnInit {

  @Input() time : Array<selectTime>
  @Input() isOpen : boolean
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() onSelectTime: EventEmitter<selectTime> = new EventEmitter<selectTime>()

  ngOnInit() {
    console.log(this.isOpen)
  }

  close(e: MouseEvent){
    this.onSelectTime.emit(e.toElement.innerHTML)
    console.log(e.toElement.innerHTML)
    this.onClose.emit(false)
  }

}
