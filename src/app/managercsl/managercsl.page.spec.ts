import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagercslPage } from './managercsl.page';

describe('ManagercslPage', () => {
  let component: ManagercslPage;
  let fixture: ComponentFixture<ManagercslPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagercslPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagercslPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
