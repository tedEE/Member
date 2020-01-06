import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNotPage } from './add-not.page';

describe('AddNotPage', () => {
  let component: AddNotPage;
  let fixture: ComponentFixture<AddNotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
