import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsignupPage } from './loginsignup.page';

describe('LoginsignupPage', () => {
  let component: LoginsignupPage;
  let fixture: ComponentFixture<LoginsignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
