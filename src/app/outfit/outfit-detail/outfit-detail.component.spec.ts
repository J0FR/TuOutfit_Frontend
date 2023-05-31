/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { OutfitDetailComponent } from './outfit-detail.component';
import { OutfitDetail } from '../outfitDetail';
import { Prenda } from 'src/app/prenda/prenda';
import { PrendaDetail } from 'src/app/prenda/prenda-detail/PrendaDetail';
import { Marca } from 'src/app/marca/marca';
import { Comentario } from 'src/app/comentario/comentario';

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
    component = fixture.componentInstance;

    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());
    const prendas: Prenda[] = [];
    for(let i = 0; i < 3; i++) {
      const prenda = new Prenda(faker.datatype.number(), faker.lorem.sentence(), faker.image.imageUrl(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.lorem.sentence(),marca);
      prendas.push(prenda);
    }

    const comentarios: Comentario[] = [];
    for(let i = 0; i < 3; i++) {
      const comentario = new Comentario(faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence());
      comentarios.push(comentario);
    }

    component.outfitDetail = new OutfitDetail(
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
      prendas,
      comentarios
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

});
