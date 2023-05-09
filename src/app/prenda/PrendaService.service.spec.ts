/* tslint:disable:no-unused-variable */

import { TestBed,async, inject } from '@angular/core/testing';
import { PrendaService } from './Prenda.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Prenda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrendaService]
  });
});

  it('should ...', inject([PrendaService],(service: PrendaService) => {
    expect(service).toBeTruthy();
  }));
});
