/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutfitListComponent } from './outfit-list.component';

describe('OutfitListComponent', () => {
  let component: OutfitListComponent;
  let fixture: ComponentFixture<OutfitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
