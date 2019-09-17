import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtransportuerPage } from './listtransportuer.page';

describe('ListtransportuerPage', () => {
  let component: ListtransportuerPage;
  let fixture: ComponentFixture<ListtransportuerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtransportuerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtransportuerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
