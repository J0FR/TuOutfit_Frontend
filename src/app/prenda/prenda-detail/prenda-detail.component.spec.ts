/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrendaDetailComponent } from './prenda-detail.component';
import { Outfit } from '../../outfit/outfit';
import { PrendaDetail } from './PrendaDetail'
import { faker } from '@faker-js/faker';
import { Marca } from 'src/app/marca/marca';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PrendaService } from '../Prenda.service';

describe('PrendaDetailComponent', () => {
  let component: PrendaDetailComponent;
  let fixture: ComponentFixture<PrendaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule],
      declarations: [ PrendaDetailComponent ],
      providers: [ PrendaService]
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
      outfits,[]
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should display the prenda\'s image', () => {
    const imageElement: HTMLImageElement = debug.query(By.css('.card-img-top')).nativeElement;
    expect(imageElement.src).toBe(component.prendaDetail.imagen);
  });

  it('should display the prenda\'s ID', () => {
    const idElement: HTMLElement = debug.query(By.css('.small')).nativeElement;
    expect(idElement.textContent).toContain(component.prendaDetail.id.toString());
  });

  it('should display the prenda\'s name', () => {
    const nameElement: HTMLElement = debug.query(By.css('.display-5')).nativeElement;
    expect(nameElement.textContent).toContain(component.prendaDetail.nombre);
  });

  it('should display the prenda\'s details', () => {
    const detailsElement: HTMLElement = debug.query(By.css('.fs-5')).nativeElement;
    expect(detailsElement.textContent).toContain(component.prendaDetail.precio.toString());
    expect(detailsElement.textContent).toContain(component.prendaDetail.colores);
    expect(detailsElement.textContent).toContain(component.prendaDetail.genero);
    expect(detailsElement.textContent).toContain(component.prendaDetail.ocasiones);
    expect(detailsElement.textContent).toContain(component.prendaDetail.talla);
    expect(detailsElement.textContent).toContain(component.prendaDetail.rango_edad);
    expect(detailsElement.textContent).toContain(component.prendaDetail.marca.nombre);
  });

});
