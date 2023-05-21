/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComentarioService } from './comentario.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Comentario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComentarioService]
    });
  });

  it('should ...', inject([ComentarioService], (service: ComentarioService) => {
    expect(service).toBeTruthy();
  }));
});
