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
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { OutfitService } from '../outfit.service';

describe('OutfitDetailComponent', () => {
  let component: OutfitDetailComponent;
  let fixture: ComponentFixture<OutfitDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule],
      declarations: [ OutfitDetailComponent],
      providers: [ OutfitService ]
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
      faker.lorem.sentence(), faker.lorem.sentence(),marca, faker.lorem.sentence());
      prendas.push(prenda);
    }

    const comentarios: Comentario[] = [];
    for(let i = 0; i < 3; i++) {
      const comentario = new Comentario(0, faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence());
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

  it('should have a div.small.mb-1 element with outfitDetail.id', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('div.small.mb-1')).nativeElement;
    expect(element.textContent).toContain(component.outfitDetail.id);
 });

 it('should have a h1.display-5 element with outfitDetail.nombre', () => {
  const element: HTMLElement = fixture.debugElement.query(By.css('h1.display-5')).nativeElement;
  expect(element.textContent).toContain(component.outfitDetail.nombre);
});

it('should have a span element with outfitDetail.precio', () => {
  const element: HTMLElement = fixture.debugElement.query(By.css('span')).nativeElement;
  expect(element.textContent).toContain(component.outfitDetail.precio);
});

it('should have a p.lead element with outfitDetail.descripcion', () => {
  const element: HTMLElement = fixture.debugElement.query(By.css('p.lead')).nativeElement;
  expect(element.textContent).toContain(component.outfitDetail.descripcion);
});

////

it('should have a link to Font Awesome stylesheet', () => {
  const linkElement: HTMLLinkElement = fixture.debugElement.query(By.css('header link[rel="stylesheet"]')).nativeElement;
  expect(linkElement.href).toContain('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');
});

it('should display outfitDetail.id', () => {
  const element: HTMLElement = fixture.debugElement.query(By.css('.small.mb-1')).nativeElement;
  expect(element.textContent).toContain(component.outfitDetail.id);
});

it('should display outfitDetail.nombre', () => {
  const element: HTMLElement = fixture.debugElement.query(By.css('h1.display-5')).nativeElement;
  expect(element.textContent).toContain(component.outfitDetail.nombre);
});

it('should display outfitDetail.precio', () => {
  const element: HTMLElement = fixture.debugElement.query(By.css('span')).nativeElement;
  expect(element.textContent).toContain(component.outfitDetail.precio);
});

it('should display outfitDetail.descripcion', () => {
  const element: HTMLElement = fixture.debugElement.query(By.css('p.lead')).nativeElement;
  expect(element.textContent).toContain(component.outfitDetail.descripcion);
});

it('should have a Like button', () => {
  const button: HTMLElement = fixture.debugElement.query(By.css('.heart')).nativeElement;
  expect(button.textContent).toContain('Like');
});

it('should display the correct number of Prenda cards', () => {
  const cardElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.card'));
  expect(cardElements.length).toEqual(component.outfitDetail.prendas.length);
});

it('should display the correct number of Prenda cards', () => {
  const cardElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.card'));
  expect(cardElements.length).toEqual(component.outfitDetail.prendas.length);
});

// it('should display the correct information in each Prenda card', () => {
//   const cardElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.card'));
//   cardElements.forEach((cardElement: DebugElement, index: number) => {
//     const prenda = component.outfitDetail.prendas[index];
//     const nombreElement: HTMLElement = cardElement.query(By.css('h5')).nativeElement;
//     const generoElement: HTMLElement = cardElement.query(By.css('.card-text:nth-of-type(1)')).nativeElement;
//     const coloresElement: HTMLElement = cardElement.query(By.css('.card-text:nth-of-type(2)')).nativeElement;
//     const ocasionesElement: HTMLElement = cardElement.query(By.css('.card-text:nth-of-type(3)')).nativeElement;
//     const rangoEdadElement: HTMLElement = cardElement.query(By.css('.card-text:nth-of-type(4)')).nativeElement;
//     const tallaElement: HTMLElement = cardElement.query(By.css('.card-text:nth-of-type(5)')).nativeElement;
//     const precioElement: HTMLElement = cardElement.query(By.css('.card-text:nth-of-type(6)')).nativeElement;
//     const marcaElement: HTMLElement = cardElement.query(By.css('.card-text:nth-of-type(7)')).nativeElement;

//     expect(nombreElement.textContent).toContain(prenda.nombre);
//     expect(generoElement.textContent).toContain(prenda.genero);
//     expect(coloresElement.textContent).toContain(prenda.colores);
//     expect(ocasionesElement.textContent).toContain(prenda.ocasiones);
//     expect(rangoEdadElement.textContent).toContain(prenda.rangoEdad);
//     expect(tallaElement.textContent).toContain(prenda.talla);
//     expect(precioElement.textContent).toContain(prenda.precio);
//     expect(marcaElement.textContent).toContain(prenda.marca.nombre);
//   });
// });


});
