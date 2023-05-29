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

describe('OutfitListComponent', () => {
  let component: OutfitListComponent;
  let fixture: ComponentFixture<OutfitListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
        faker.lorem.sentence(),[]
        );
        component.outfits.push(outfit);
      }
      fixture.detectChanges();
      debug = fixture.debugElement;
  });

});



