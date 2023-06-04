/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PrendaListComponent } from './prenda-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Prenda } from '../prenda';
import { PrendaService } from '../Prenda.service';
import { Marca } from 'src/app/marca/marca';
import { PrendaDetail } from '../prenda-detail/PrendaDetail';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PrendaListComponent', () => {
  let component: PrendaListComponent;
  let fixture: ComponentFixture<PrendaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule,NgxPaginationModule],
      declarations: [ PrendaListComponent ],
      providers: [ PrendaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendaListComponent);
    component = fixture.componentInstance;

    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());

    for(let i = 0; i < 10; i++) {
    const prenda = new PrendaDetail(faker.datatype.number(), faker.lorem.sentence(), faker.image.imageUrl(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(),
    faker.lorem.sentence(), faker.lorem.sentence(),marca,[],[]);
    component.prendas.push(prenda);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });



});
