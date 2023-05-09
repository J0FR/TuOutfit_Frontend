/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { OutfitListComponent } from './outfit-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OutfitService } from '../outfit.service';
import { Outfit } from '../outfit';
import { OutfitDetail } from '../outfitDetail';

describe('OutfitListComponent', () => {
  let component: OutfitListComponent;
  let fixture: ComponentFixture<OutfitListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ OutfitListComponent ],
      providers: [ OutfitService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const outfit = new OutfitDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.color.human(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),[]
        );
        component.outfits.push(outfit);
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

  it('should have the corresponding src to the outfits image and alt to the outfits name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.outfits[i].imagen)

      expect(img.attributes['alt']).toEqual(
        component.outfits[i].nombre)
    })
  });

  it('should have 10 <p.card-text> elements', () => {
    expect(debug.queryAll(By.css('p.card-text'))).toHaveSize(10)
  });

  it('should have 10 <div.list-group.list-group-flush> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

  it('should have p.card-text tag with the outfit.name', () => {
    debug.queryAll(By.css('p.card-text')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.outfits[i].nombre)
    });
  });

  it('should have 9 <div.col> elements and the deleted outfit should not exist', () => {
    const outfit = component.outfits.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col'))).toHaveSize(9)

    debug.queryAll(By.css('div.col')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(outfit.nombre);
    });
  });

});



