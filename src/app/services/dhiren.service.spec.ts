import { TestBed, inject } from '@angular/core/testing';

import { DhirenService } from './dhiren.service';

describe('DhirenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DhirenService]
    });
  });

  it('should be created', inject([DhirenService], (service: DhirenService) => {
    expect(service).toBeTruthy();
  }));
});
