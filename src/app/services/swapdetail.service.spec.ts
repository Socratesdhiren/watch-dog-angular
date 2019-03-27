import { TestBed, inject } from '@angular/core/testing';

import { SwapdetailService } from './swapdetail.service';

describe('SwapdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapdetailService]
    });
  });

  it('should be created', inject([SwapdetailService], (service: SwapdetailService) => {
    expect(service).toBeTruthy();
  }));
});
