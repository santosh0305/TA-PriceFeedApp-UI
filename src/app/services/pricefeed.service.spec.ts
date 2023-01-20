import { TestBed } from '@angular/core/testing';

import { PricefeedService } from './pricefeed.service';

describe('PricefeedService', () => {
  let service: PricefeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricefeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
