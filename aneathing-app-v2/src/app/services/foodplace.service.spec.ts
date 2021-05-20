import { TestBed } from '@angular/core/testing';

import { FoodplaceService } from './foodplace.service';

describe('FoodplaceService', () => {
  let service: FoodplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
