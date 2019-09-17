import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterchauffeurPage } from './registerchauffeur.page';

describe('RegisterchauffeurPage', () => {
  let component: RegisterchauffeurPage;
  let fixture: ComponentFixture<RegisterchauffeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterchauffeurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterchauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
