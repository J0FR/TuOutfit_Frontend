/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrendaListComponent } from './prenda-list.component';

describe('PrendaListComponent', () => {
  let component: PrendaListComponent;
  let fixture: ComponentFixture<PrendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
