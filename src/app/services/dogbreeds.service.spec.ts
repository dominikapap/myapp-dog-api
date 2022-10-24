import { TestBed } from '@angular/core/testing';

import { DogbreedsService } from './dogbreeds.service';

describe('DogbreedsService', () => {
  let service: DogbreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogbreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
