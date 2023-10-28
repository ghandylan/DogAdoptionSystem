import { TestBed } from '@angular/core/testing';

import { AdoptionInterestService } from './adoption-interest.service';

describe('AdoptionInterestService', () => {
  let service: AdoptionInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptionInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
