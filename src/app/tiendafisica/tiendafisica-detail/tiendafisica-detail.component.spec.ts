/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TiendafisicaDetailComponent } from './tiendafisica-detail.component';
import { Outfit } from '../../outfit/outfit';
import { TiendafisicaDetail } from './TiendafisicaDetail'
import { faker } from '@faker-js/faker';
import { Marca } from 'src/app/marca/marca';
import { Ubicacion } from 'src/app/ubicacion/ubicacion';

describe('TiendafisicaDetailComponent', () => {
  let component: TiendafisicaDetailComponent;
  let fixture: ComponentFixture<TiendafisicaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendafisicaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendafisicaDetailComponent);
    component = fixture.componentInstance;

    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());
    const ubicacion = new Ubicacion(faker.datatype.number(), faker.datatype.number(), faker.datatype.number());

    component.tiendafisicaDetail = new TiendafisicaDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      ubicacion,
      marca
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

});
