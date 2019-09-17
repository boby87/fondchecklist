import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherPage } from './dispatcher.page';

describe('DispatcherPage', () => {
  let component: DispatcherPage;
  let fixture: ComponentFixture<DispatcherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatcherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
