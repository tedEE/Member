import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-add-not',
  templateUrl: './add-not.page.html',
  styleUrls: ['./add-not.page.scss'],
})
export class AddNotPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  addNot(){
    // @ts-ignore
    cordova.plugins.notification.local.schedule({
      title: 'Design team meeting',
      trigger: { in: 1, unit: 'minute' }
    });
  }

}
