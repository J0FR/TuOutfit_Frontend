/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { OutfitDetailComponent } from './outfit-detail.component';
import { OutfitDetail } from '../outfitDetail';

describe('OutfitDetailComponent', () => {
  let component: OutfitDetailComponent;
  let fixture: ComponentFixture<OutfitDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitDetailComponent);
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
        faker.lorem.sentence(),
        []
        );
        component = fixture.componentInstance;
        component.outfits.push(outfit);
      }
    fixture.detectChanges();
  });

  it('should have 10 <div.p> elements', () => {
    expect(debug.queryAll(By.css('div.p'))).toHaveSize(10)
  });

  it('should have 10 <div.text-center> elements', () => {
    expect(debug.queryAll(By.css('div.text-center'))).toHaveSize(10)
  });

  it('should have 1 <div.dd.p> elements', () => {
    expect(debug.queryAll(By.css('div.dd.p'))).toHaveSize(1)
  });




});
