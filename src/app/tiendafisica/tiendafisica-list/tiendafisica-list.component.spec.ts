/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { TiendafisicaListComponent } from './tiendafisica-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Tiendafisica } from 'src/app/tiendafisica/tiendafisica';
import { Marca } from 'src/app/marca/marca';
import { Ubicacion } from 'src/app/ubicacion/ubicacion';
import { RouterTestingModule } from '@angular/router/testing';

describe('TiendafisicaListComponent', () => {
  let component: TiendafisicaListComponent;
  let fixture: ComponentFixture<TiendafisicaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule],
      declarations: [ TiendafisicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendafisicaListComponent);
    component = fixture.componentInstance;

    const ubicacion = new Ubicacion(faker.datatype.number(), faker.datatype.number(), faker.datatype.number());
    const marca = new Marca(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(),faker.image.imageUrl(), faker.lorem.sentence());
    for(let i = 0; i < 10; i++) {
    const tiendaFisica = new Tiendafisica(faker.datatype.number(),
                                          faker.lorem.sentence(),
                                          faker.lorem.sentence(),
                                          ubicacion,
                                          marca)
    component.tiendasfisicas.push(tiendaFisica);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should display the heading correctly', () => {
    const headingElement = fixture.debugElement.query(By.css('#tiendasfisicas')).nativeElement;
    expect(headingElement.textContent).toContain('Tiendas Fisicas');
  });

  it('should display the list of tiendasfisicas correctly', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('.card'));
    expect(cardElements.length).toBe(component.tiendasfisicas.length);

    for (let i = 0; i < component.tiendasfisicas.length; i++) {
      const tiendaFisica = component.tiendasfisicas[i];
      const cardTextElement = cardElements[i].query(By.css('.card-text')).nativeElement;
      const listItems = cardElements[i].queryAll(By.css('.list-group-item'));

      expect(cardTextElement.textContent).toContain(tiendaFisica.nombre);
      expect(listItems[0].nativeElement.textContent).toContain('id:');
      expect(listItems[0].nativeElement.textContent).toContain(tiendaFisica.id);
      expect(listItems[1].nativeElement.textContent).toContain('horarios:');
      expect(listItems[1].nativeElement.textContent).toContain(tiendaFisica.horarios);
      expect(listItems[2].nativeElement.textContent).toContain('marca:');
      expect(listItems[2].nativeElement.textContent).toContain(tiendaFisica.marca.nombre);
    }
  });

});
