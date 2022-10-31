import { TestBed } from '@angular/core/testing';

import { DatediffServiceTsService } from './datediff.service.ts.service';

describe('DatediffServiceTsService', () => {
  let service: DatediffServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatediffServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
