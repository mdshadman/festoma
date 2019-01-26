import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAirComponent } from './open-air.component';

describe('OpenAirComponent', () => {
  let component: OpenAirComponent;
  let fixture: ComponentFixture<OpenAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
