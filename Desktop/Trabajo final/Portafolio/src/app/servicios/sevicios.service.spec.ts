import { TestBed } from '@angular/core/testing';

import { SeviciosService } from './sevicios.service';

describe('SeviciosService', () => {
  let service: SeviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
