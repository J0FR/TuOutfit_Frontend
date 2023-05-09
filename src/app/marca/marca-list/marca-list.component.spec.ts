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

    for(let i = 0; i < 10; i++) {
    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());
    component.marcas.push(marca);
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

  it('should have the corresponding src to the marcas image and alt to the marcas name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.marcas[i].logo)
    })
  });

  it('should have 10 <p.card-text> elements', () => {
    expect(debug.queryAll(By.css('p.card-text'))).toHaveSize(10)
  });

  it('should have 10 <div.list-group.list-group-flush> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

});
