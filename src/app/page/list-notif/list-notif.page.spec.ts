import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListNotifPage } from './list-notif.page';

describe('ListNotifPage', () => {
  let component: ListNotifPage;
  let fixture: ComponentFixture<ListNotifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListNotifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
