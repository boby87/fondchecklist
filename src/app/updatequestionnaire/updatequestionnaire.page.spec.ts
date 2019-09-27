import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequestionnairePage } from './updatequestionnaire.page';

describe('UpdatequestionnairePage', () => {
  let component: UpdatequestionnairePage;
  let fixture: ComponentFixture<UpdatequestionnairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatequestionnairePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequestionnairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
