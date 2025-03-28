import { TestBed } from '@angular/core/testing';

import { StockformsService } from './stockforms.service';

describe('StockformsService', () => {
  let service: StockformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
