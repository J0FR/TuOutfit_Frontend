/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarcaListComponent } from './marca-list.component';

describe('MarcaListComponent', () => {
  let component: MarcaListComponent;
  let fixture: ComponentFixture<MarcaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
