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

  it('should have a td.id element with prendaDetail.id', () => {
    const element: HTMLElement = debug.query(By.css('td.id')).nativeElement;
    expect(element.textContent).toContain(component.prendaDetail.id);
  });

  it('should have a td.nombre element with prendaDetail.nombre', () => {
    const element: HTMLElement = debug.query(By.css('td.nombre')).nativeElement;
    expect(element.textContent).toContain(component.prendaDetail.nombre);
  });

  it('should have a td.precio element with prendaDetail.precio', () => {
    const element: HTMLElement = debug.query(By.css('td.precio')).nativeElement;
    expect(element.textContent).toContain(component.prendaDetail.precio);
  });

  it('should have a td.talla element with prendaDetail.talla', () => {
    const element: HTMLElement = debug.query(By.css('td.talla')).nativeElement;
    expect(element.textContent).toContain(component.prendaDetail.talla);
  });

  it('should have a td.ocasiones element with prendaDetail.ocasiones', () => {
    const element: HTMLElement = debug.query(By.css('td.ocasiones')).nativeElement;
    expect(element.textContent).toContain(component.prendaDetail.ocasiones);
  });

  it('should have a td.genero element with prendaDetail.genero', () => {
    const element: HTMLElement = debug.query(By.css('td.genero')).nativeElement;
    expect(element.textContent).toContain(component.prendaDetail.genero);
  });


  it('should have an img element with src= prendaDetail.image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.prendaDetail.imagen
    );
  });


  it('should have 3 <dd> elements', () => {
    expect(debug.queryAll(By.css('dd.caption'))).toHaveSize(3)
  });


  it('should have one td tag for component.prendaDetail.nombre', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('td'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == '';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.prendaDetail.nombre);
  });







});
