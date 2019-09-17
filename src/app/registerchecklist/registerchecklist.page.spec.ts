import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterchecklistPage } from './registerchecklist.page';

describe('RegisterchecklistPage', () => {
  let component: RegisterchecklistPage;
  let fixture: ComponentFixture<RegisterchecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterchecklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterchecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
