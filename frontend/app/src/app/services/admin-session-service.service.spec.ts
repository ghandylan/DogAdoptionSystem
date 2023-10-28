import { TestBed } from '@angular/core/testing';

import { AdminSessionServiceService } from './admin-session-service.service';

describe('AdminSessionServiceService', () => {
  let service: AdminSessionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSessionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
