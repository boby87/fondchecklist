import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervehiculePage } from './registervehicule.page';

describe('RegistervehiculePage', () => {
  let component: RegistervehiculePage;
  let fixture: ComponentFixture<RegistervehiculePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistervehiculePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistervehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
