import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetmanagerPage } from './fleetmanager.page';

describe('FleetmanagerPage', () => {
  let component: FleetmanagerPage;
  let fixture: ComponentFixture<FleetmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetmanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
