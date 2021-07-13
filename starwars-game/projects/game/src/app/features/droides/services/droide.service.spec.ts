import { TestBed } from '@angular/core/testing';

import { DroideService } from './droide.service';

describe('DroideService', () => {
  let service: DroideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DroideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
