import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {TasksService} from '../../servises/tasks.service';
import {ITask} from '../../resurses/interfaisis';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() task : ITask

  private taskForUpdated : ITask

  constructor(private modalController: ModalController,
              private taskServ : TasksService,) {}

  ngOnInit() {
    this.taskForUpdated = {...this.task}
    console.log(this.taskForUpdated)
  }

  // closeModal() {
  //   this.modalController.dismiss({
  //     'dismissed': true
  //   });
  // }

  update(taskForUpdated) {
    this.taskServ.updateTaskList(taskForUpdated)
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
