/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { MarcaListComponent } from './marca-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Marca } from '../marca';
import { MarcaService } from '../marca.service';
import { provideRoutes } from '@angular/router';


describe('MarcaListComponent', () => {
  let component: MarcaListComponent;
  let fixture: ComponentFixture<MarcaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MarcaListComponent ],
      providers: [ MarcaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaListComponent);
    component = fixture.componentInstance;
  });

  for(let i = 0; i < 10; i++) {
    const marca = new Marca(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
    );
    component.marcas.push(marca);
  }
  fixture.detectChanges();
  debug = fixture.debugElement;
});

it('should create', () => {
  expect(component).toBeTruthy();
});

it('should have 10 <div.col.mb-2> elements', () => {
  expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
});

it('should have 10 <card.p-2> elements', () => {
  expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
});

it('should have 10 <img> elements', () => {
  expect(debug.queryAll(By.css('img'))).toHaveSize(10)
});

it('should have 10 <div.card-body> elements', () => {
  expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
});

it('should have the corresponding src to the book image and alt to the book name', () => {
  debug.queryAll(By.css('img')).forEach((img, i)=>{
    expect(img.attributes['src']).toEqual(
      component.books[i].image)

    expect(img.attributes['alt']).toEqual(
      component.books[i].name)
  })
});

it('should have h5 tag with the book.name', () => {
  debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
    expect(h5.nativeElement.textContent).toContain(component.books[i].name)
  });
});

it('should have p tag with the book.editorial.name', () => {
  debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
    expect(p.nativeElement.textContent).toContain(component.books[i].editorial.name)
  });
});

it('should have 9 <div.col.mb-2> elements and the deleted book should not exist', () => {
  const book = component.books.pop()!;
  fixture.detectChanges();
  expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)

  debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
    expect(selector.nativeElement.textContent).not.toContain(book.name);
  });
});

});


