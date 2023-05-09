/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PrendaListComponent } from './prenda-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Prenda } from '../prenda';
import { PrendaService } from '../Prenda.service';

describe('PrendaListComponent', () => {
  let component: PrendaListComponent;
  let fixture: ComponentFixture<PrendaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PrendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendaListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
    const prenda = new Prenda(faker.datatype.number(), faker.lorem.sentence(), faker.image.imageUrl(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(),
    faker.lorem.sentence(), faker.lorem.sentence());
    component.prendas.push(prenda);
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

  it('should have 10 <div.card.shadow-sm> elements', () => {
    expect(debug.queryAll(By.css('div.card.shadow-sm'))).toHaveSize(10)
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

//   it('should have the corresponding src to the prendas image and alt to the prendas name', () => {
  // debug.queryAll(By.css('img')).forEach((img, i)=>{
    // expect(img.attributes['src']).toEqual(
      // component.prendas[i].imagen)
//
    // expect(img.attributes['alt']).toEqual(
      // component.prendas[i].nombre)
  // })
// });

  it('should have 10 <p.card-text> elements', () => {
    expect(debug.queryAll(By.css('p.card-text'))).toHaveSize(10)
  });

  it('should have 10 <div.list-group.list-group-flush> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });
});
