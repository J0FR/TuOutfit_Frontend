/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutfitCreateComponent } from './outfit-create.component';

describe('OutfitCreateComponent', () => {
  let component: OutfitCreateComponent;
  let fixture: ComponentFixture<OutfitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
