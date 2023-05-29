/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrendaDetailComponent } from './prenda-detail.component';
import { Outfit } from '../../outfit/outfit';
import { PrendaDetail } from './PrendaDetail'
import { faker } from '@faker-js/faker';
import { Marca } from 'src/app/marca/marca';

describe('PrendaDetailComponent', () => {
  let component: PrendaDetailComponent;
  let fixture: ComponentFixture<PrendaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrendaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendaDetailComponent);
    component = fixture.componentInstance;

    const outfits: Outfit[] = [];
    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());
    for (let i = 0; i < 3; i++) {
      const outfit = new Outfit(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.color.human(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
        );
        outfits.push(outfit);
    }

    component.prendaDetail = new PrendaDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.name.firstName(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      marca,
      outfits
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

});
