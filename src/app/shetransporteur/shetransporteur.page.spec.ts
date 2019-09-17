import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShetransporteurPage } from './shetransporteur.page';

describe('ShetransporteurPage', () => {
  let component: ShetransporteurPage;
  let fixture: ComponentFixture<ShetransporteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShetransporteurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShetransporteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
