/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarcaService } from './marca.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Marca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarcaService]
    });
  });

  it('should ...', inject([MarcaService], (service: MarcaService) => {
    expect(service).toBeTruthy();
  }));
});
