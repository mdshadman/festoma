import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageHallComponent } from './marriage-hall.component';

describe('MarriageHallComponent', () => {
  let component: MarriageHallComponent;
  let fixture: ComponentFixture<MarriageHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
