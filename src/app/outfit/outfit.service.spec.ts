/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OutfitService } from './outfit.service';

describe('Service: Outfit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutfitService]
    });
  });

  it('should ...', inject([OutfitService], (service: OutfitService) => {
    expect(service).toBeTruthy();
  }));
});
