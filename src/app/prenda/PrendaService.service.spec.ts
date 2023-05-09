/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrendaService } from './Prenda.service';

describe('Service: PrendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrendaService]
    });
  });

  it('should ...', inject([PrendaService], (service: PrendaService) => {
    expect(service).toBeTruthy();
  }));
});
