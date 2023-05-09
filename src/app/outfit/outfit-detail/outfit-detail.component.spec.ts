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
      prendas
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should have a td.id element with outfitDetail.id', () => {
    const element: HTMLElement = debug.query(By.css('td.id')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.id);
  });

  it('should have a td.descripcion element with outfitDetail.descripcion', () => {
    const element: HTMLElement = debug.query(By.css('td.descripcion')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.descripcion);
  });

  it('should have a td.nombre element with outfitDetail.name', () => {
    const element: HTMLElement = debug.query(By.css('td.nombre')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.nombre);
  });

  it('should have a td.precio element with outfitDetail.precio', () => {
    const element: HTMLElement = debug.query(By.css('td.precio')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.precio);
  });

  it('should have a td.colores element with outfitDetail.colores', () => {
    const element: HTMLElement = debug.query(By.css('td.colores')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.colores);
  });

  it('should have a td.genero element with outfitDetail.genero', () => {
    const element: HTMLElement = debug.query(By.css('td.genero')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.genero);
  });

  it('should have a td.rango_edad element with outfitDetail.rango_edad', () => {
    const element: HTMLElement = debug.query(By.css('td.rango_edad')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.rango_edad);
  });

  it('should have a td.talla element with outfitDetail.talla', () => {
    const element: HTMLElement = debug.query(By.css('td.talla')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.talla);
  });

  it('should have an img element with src= outfitDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.outfitDetail.imagen
    );
  });

  it('should have an img element with alt= outfitDetail.name', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.outfitDetail.nombre
    );
  });

  it('should have 3 <dd> elements', () => {
    expect(debug.queryAll(By.css('dd.caption'))).toHaveSize(3)
  });

  it('should have one td tag for component.outfitDetail.nombre', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('td'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == '';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.outfitDetail.nombre);
  });

});
