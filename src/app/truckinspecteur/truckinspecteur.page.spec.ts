import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckinspecteurPage } from './truckinspecteur.page';

describe('TruckinspecteurPage', () => {
  let component: TruckinspecteurPage;
  let fixture: ComponentFixture<TruckinspecteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckinspecteurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckinspecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
