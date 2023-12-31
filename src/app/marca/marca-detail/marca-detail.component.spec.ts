/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MarcaDetailComponent } from './marca-detail.component';
import { MarcaDetail } from '../marcaDetail';
import { Prenda } from 'src/app/prenda/prenda';
import { Marca } from 'src/app/marca/marca';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MarcaService } from '../marca.service';

describe('MarcaDetailComponent', () => {
  let component: MarcaDetailComponent;
  let fixture: ComponentFixture<MarcaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ MarcaDetailComponent ],
      providers: [ MarcaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaDetailComponent);
    component = fixture.componentInstance;

    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());
    const prendas: Prenda[] = [];
    for(let i = 0; i < 3; i++) {
      const prenda = new Prenda(faker.datatype.number(), faker.lorem.sentence(), faker.image.imageUrl(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.lorem.sentence(),marca, faker.lorem.sentence());
      prendas.push(prenda);
    }

    component.marcaDetail = new MarcaDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      prendas
      );
      fixture.detectChanges();
      debug = fixture.debugElement;
  });




});
