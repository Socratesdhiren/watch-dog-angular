import { TestBed, inject } from '@angular/core/testing';

import { CpuinfosService } from './cpuinfos.service';

describe('CpuinfosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpuinfosService]
    });
  });

  it('should be created', inject([CpuinfosService], (service: CpuinfosService) => {
    expect(service).toBeTruthy();
  }));
});
