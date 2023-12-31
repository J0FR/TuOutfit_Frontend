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
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TiendafisicaService } from '../tiendafisica.service';

describe('TiendafisicaDetailComponent', () => {
  let component: TiendafisicaDetailComponent;
  let fixture: ComponentFixture<TiendafisicaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule,RouterTestingModule],
      declarations: [ TiendafisicaDetailComponent ],
      providers: [TiendafisicaService]
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

  it('should have a td.id element with tiendafisicaDetail.id', () => {
    const element: HTMLElement = debug.query(By.css('td.id')).nativeElement;
    expect(element.textContent).toContain(component.tiendafisicaDetail.id);
  });

  it('should have a td.nombre element with tiendafisicaDetail.nombre', () => {
    const element: HTMLElement = debug.query(By.css('td.nombre')).nativeElement;
    expect(element.textContent).toContain(component.tiendafisicaDetail.nombre);
  });

  it('should have a td.horarios element with tiendafisicaDetail.horarios', () => {
    const element: HTMLElement = debug.query(By.css('td.horarios')).nativeElement;
    expect(element.textContent).toContain(component.tiendafisicaDetail.horarios);
  }
  );

  it('should have a td.longitud element with tiendafisicaDetail.ubicacion.longitud', () => {
    const element: HTMLElement = debug.query(By.css('td.longitud')).nativeElement;
    expect(element.textContent).toContain(component.tiendafisicaDetail.ubicacion.longitud);
  }
  );



});
