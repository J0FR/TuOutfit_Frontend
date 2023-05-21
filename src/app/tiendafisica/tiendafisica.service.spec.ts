/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TiendafisicaService } from './tiendafisica.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Tiendafisica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TiendafisicaService]
    });
  });

  it('should ...', inject([TiendafisicaService], (service: TiendafisicaService) => {
    expect(service).toBeTruthy();
  }));
});
