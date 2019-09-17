import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteurPage } from './transporteur.page';

describe('TransporteurPage', () => {
  let component: TransporteurPage;
  let fixture: ComponentFixture<TransporteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
