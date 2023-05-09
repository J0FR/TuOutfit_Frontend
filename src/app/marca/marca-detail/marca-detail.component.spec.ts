/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarcaDetailComponent } from './marca-detail.component';

describe('MarcaDetailComponent', () => {
  let component: MarcaDetailComponent;
  let fixture: ComponentFixture<MarcaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
