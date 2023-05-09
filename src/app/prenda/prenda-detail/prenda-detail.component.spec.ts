/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrendaDetailComponent } from './prenda-detail.component';

describe('PrendaDetailComponent', () => {
  let component: PrendaDetailComponent;
  let fixture: ComponentFixture<PrendaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrendaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
