/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OutfitService } from './outfit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Outfit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OutfitService]
    });
  });

  it('should ...', inject([OutfitService], (service: OutfitService) => {
    expect(service).toBeTruthy();
  }));
});
