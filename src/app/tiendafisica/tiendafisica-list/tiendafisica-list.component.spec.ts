/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { TiendafisicaListComponent } from './tiendafisica-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Tiendafisica } from 'src/app/tiendafisica/tiendafisica';
import { Marca } from 'src/app/marca/marca';
import { Ubicacion } from 'src/app/ubicacion/ubicacion';

describe('TiendafisicaListComponent', () => {
  let component: TiendafisicaListComponent;
  let fixture: ComponentFixture<TiendafisicaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TiendafisicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendafisicaListComponent);
    component = fixture.componentInstance;

    const ubicacion = new Ubicacion(faker.datatype.number(), faker.datatype.number(), faker.datatype.number());
    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());
    for(let i = 0; i < 10; i++) {
    const tiendaFisica = new Tiendafisica(faker.datatype.number(),
                                          faker.lorem.sentence(),
                                          faker.lorem.sentence(),
                                          ubicacion,
                                          marca)
    component.tiendasfisicas.push(tiendaFisica);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 10 <div.col> elements', () => {
    expect(debug.queryAll(By.css('div.col'))).toHaveSize(10)
  });

  it('should have 10 <p.card-text> elements', () => {
    expect(debug.queryAll(By.css('p.card-text'))).toHaveSize(10)
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });
});
