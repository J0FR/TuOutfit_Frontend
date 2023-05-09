/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MarcaDetailComponent } from './marca-detail.component';
import { MarcaDetail } from '../marcaDetail';
import { Prenda } from 'src/app/prenda/prenda';
import { Marca } from 'src/app/marca/marca';

describe('MarcaDetailComponent', () => {
  let component: MarcaDetailComponent;
  let fixture: ComponentFixture<MarcaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaDetailComponent ]
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
      faker.lorem.sentence(), faker.lorem.sentence(),marca);
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


  it('should have a td.id element with marcaDetail.id', () => {
    const element: HTMLElement = debug.query(By.css('td.id')).nativeElement;
    expect(element.textContent).toContain(component.marcaDetail.id);
  });

  it('should have a td.name element with marcaDetail.nombre', () => {
    const element: HTMLElement = debug.query(By.css('td.name')).nativeElement;
    expect(element.textContent).toContain(component.marcaDetail.nombre);
  });

  it('should have a td.url element with marcaDetail.url_sitio_web', () => {
    const element: HTMLElement = debug.query(By.css('td.url')).nativeElement;
    expect(element.textContent).toContain(component.marcaDetail.url_sitio_web);
  });

  it('should have a td.detalle element with marcaDetail.detalle', () => {
    const element: HTMLElement = debug.query(By.css('td.detalle')).nativeElement;
    expect(element.textContent).toContain(component.marcaDetail.detalle_de_marca);
  });

  it('should have an img element with src= marcaDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.marcaDetail.logo
    );
  });

  it('should have an img element with alt= marcaDetail.name', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.marcaDetail.nombre
    );
  });

  it('should have 3 <dd> elements', () => {
    expect(debug.queryAll(By.css('dd.caption'))).toHaveSize(3)
  });


  /*it('should have one td tag for component.marcaDetail.nombre', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('td'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == '';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.marcaDetail.nombre);
  });*/

});
