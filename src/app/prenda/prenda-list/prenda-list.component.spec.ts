import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';

import { PrendaListComponent } from './prenda-list.component';
import { PrendaService } from '../Prenda.service';
import { PrendaDetail } from '../prenda-detail/PrendaDetail';
import { Marca } from 'src/app/marca/marca';

describe('PrendaListComponent', () => {
  let component: PrendaListComponent;
  let fixture: ComponentFixture<PrendaListComponent>;
  let debug: DebugElement;
  let mockPrendaService: jasmine.SpyObj<PrendaService>;

  beforeEach(async(() => {
    mockPrendaService = jasmine.createSpyObj('PrendaService', ['getPrendas']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, NgxPaginationModule],
      declarations: [PrendaListComponent],
      providers: [{ provide: PrendaService, useValue: mockPrendaService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendaListComponent);
    component = fixture.componentInstance;

    const marca = new Marca(1, 'Marca', 'Descripción', 'image-url', 'Sitio web');

    const fakePrendas: PrendaDetail[] = [];
    for (let i = 0; i < 10; i++) {
      const prenda = new PrendaDetail(
        i,
        `Prenda ${i}`,
        `image-url-${i}`,
        `Color ${i}`,
        `Genero ${i}`,
        100 + i,
        `Ocasion ${i}`,
        `Rango Edad ${i}`,
        `Talla ${i}`,
        marca,
        [],
        [],
        `URL Sitio Web Compra ${i}`
      );
      fakePrendas.push(prenda);
    }

    mockPrendaService.getPrendas.and.returnValue(of(fakePrendas));

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct initial values', () => {
    expect(component.prendas.length).toBe(10);
    expect(component.selectedColor).toBe('Color');
    expect(component.selectedGender).toBe('Genero');
    expect(component.selectedOccasion).toBe('Ocasion');
    expect(component.showFilters).toBe(false);
  });

  it('should call getPrendas on ngOnInit', () => {
    component.ngOnInit();
    expect(mockPrendaService.getPrendas).toHaveBeenCalled();
    expect(component.prendas.length).toBe(10);
  });

  it('should return the correct number of prendas', () => {
    const numberOfPrendas = component.getNumberOfPrendas();
    expect(numberOfPrendas).toBe(10);
  });
});
