import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayevetsComponent } from './birthdayevets.component';

describe('BirthdayevetsComponent', () => {
  let component: BirthdayevetsComponent;
  let fixture: ComponentFixture<BirthdayevetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayevetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayevetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
