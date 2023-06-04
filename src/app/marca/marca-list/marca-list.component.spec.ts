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
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';


describe('MarcaListComponent', () => {
  let component: MarcaListComponent;
  let fixture: ComponentFixture<MarcaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule,NgxPaginationModule],
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

  it('should display the heading correctly', () => {
    fixture.detectChanges();
    const headingElement = fixture.nativeElement.querySelector('#marcas');
    expect(headingElement.textContent).toContain('Marcas');
  });

  it('should invoke onSelected method when a brand is clicked', () => {
    spyOn(component, 'onSelected');
    fixture.detectChanges();
    const brandElement = fixture.nativeElement.querySelector('.card');
    brandElement.click();
    expect(component.onSelected).toHaveBeenCalled();
  });

});
