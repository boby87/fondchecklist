import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertransporteurPage } from './registertransporteur.page';

describe('RegistertransporteurPage', () => {
  let component: RegistertransporteurPage;
  let fixture: ComponentFixture<RegistertransporteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistertransporteurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertransporteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
