/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutfitComentarioComponent } from './outfitComentario.component';

describe('OutfitComentarioComponent', () => {
  let component: OutfitComentarioComponent;
  let fixture: ComponentFixture<OutfitComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
