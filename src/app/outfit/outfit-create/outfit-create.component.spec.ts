/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutfitCreateComponent } from './outfit-create.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { OutfitService } from '../outfit.service';

describe('OutfitCreateComponent', () => {
  let component: OutfitCreateComponent;
  let fixture: ComponentFixture<OutfitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule],
      declarations: [ OutfitCreateComponent ],
      providers: [ OutfitService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the heading "Crea un outfit"', () => {
    const headingElement: HTMLElement = fixture.debugElement.query(By.css('h1#outfits')).nativeElement;
    expect(headingElement.textContent).toContain('Crea un outfit');
  });

  it('should display the label "Nombre del outfit"', () => {
    const labelElement: HTMLElement = fixture.debugElement.query(By.css('label[for=nombre]')).nativeElement;
    expect(labelElement.textContent).toContain('Nombre del outfit');
  });

  it('should have a required input field for "Precio del outfit"', () => {
    const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input[name=precio]')).nativeElement;
    expect(inputElement.required).toBeTruthy();
  });

  it('should display the options for "Género"', () => {
    const selectElement: HTMLSelectElement = fixture.debugElement.query(By.css('select[name=genero]')).nativeElement;
    const options = selectElement.querySelectorAll('option');
    const optionValues = Array.from(options).map((option) => option.value);
    expect(optionValues).toEqual(['HOMBRE', 'MUJER', 'UNISEX']);
  });

  it('should display the options for "Ocasión"', () => {
    const selectElement: HTMLSelectElement = fixture.debugElement.query(By.css('select[name=ocasiones]')).nativeElement;
    const options = selectElement.querySelectorAll('option');
    const optionValues = Array.from(options).map((option) => option.value);
    expect(optionValues).toEqual(['BODA', 'CASUAL', 'CENA', 'FIESTA', 'FORMAL', 'GRADO']);
  });

  it('should display the options for "Talla"', () => {
    const selectElement: HTMLSelectElement = fixture.debugElement.query(By.css('select[name=talla]')).nativeElement;
    const options = selectElement.querySelectorAll('option');
    const optionValues = Array.from(options).map((option) => option.textContent);
    expect(optionValues).toEqual(['XS', 'S', 'M', 'L', 'XL', 'XXL']);
  });

  it('should display the options for "Color"', () => {
    const selectElement: HTMLSelectElement = fixture.debugElement.query(By.css('select[name=colores]')).nativeElement;
    const options = selectElement.querySelectorAll('option');
    const optionValues = Array.from(options).map((option) => option.value);
    expect(optionValues).toEqual(['ROJO', 'AZUL', 'DORADO', 'VERDE', 'PLATA', 'AMARILLO', 'CAFE', 'BLANCO', 'NEGRO']);
  });



});
