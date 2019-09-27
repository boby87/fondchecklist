import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtachecklistPage } from './etachecklist.page';

describe('EtachecklistPage', () => {
  let component: EtachecklistPage;
  let fixture: ComponentFixture<EtachecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtachecklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtachecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
