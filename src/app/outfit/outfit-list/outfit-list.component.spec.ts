/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { OutfitListComponent } from './outfit-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OutfitService } from '../outfit.service';
import { Outfit } from '../outfit';
import { OutfitDetail } from '../outfitDetail';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

describe('OutfitListComponent', () => {
  let component: OutfitListComponent;
  let fixture: ComponentFixture<OutfitListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule,NgxPaginationModule],
      declarations: [ OutfitListComponent ],
      providers: [ OutfitService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const outfit = new OutfitDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.color.human(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),[],[]
        );
        component.outfits.push(outfit);
      }
      fixture.detectChanges();
      debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the "Outfits" heading', () => {
    const headingElement: HTMLElement = fixture.nativeElement.querySelector('h1#outfits');
    expect(headingElement.textContent).toContain('Outfits');
  });

  it('should display the number of outfits', () => {
    const filterElement: HTMLElement = fixture.nativeElement.querySelector('.detail-filter');
    expect(filterElement.textContent).toContain(`Outfits (${component.getNumberOfOutfits()})`);
  });

  it('should toggle the filters section on button click', () => {
    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    fixture.detectChanges();
    const filterSectionElement: HTMLElement = fixture.nativeElement.querySelector('.filter');
    expect(filterSectionElement).toBeTruthy();
  });

});



