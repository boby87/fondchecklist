import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateallPage } from './updateall.page';

describe('UpdateallPage', () => {
  let component: UpdateallPage;
  let fixture: ComponentFixture<UpdateallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
