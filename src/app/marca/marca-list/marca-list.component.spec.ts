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
import { MarcaDetail } from '../marcaDetail';


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
    const marca = new MarcaDetail(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence(),[]);
    component.marcas.push(marca);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

});
