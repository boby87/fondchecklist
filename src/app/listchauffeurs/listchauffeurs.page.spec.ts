import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchauffeursPage } from './listchauffeurs.page';

describe('ListchauffeursPage', () => {
  let component: ListchauffeursPage;
  let fixture: ComponentFixture<ListchauffeursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchauffeursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchauffeursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
