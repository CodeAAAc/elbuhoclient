import { TestBed } from '@angular/core/testing';

import { BuhoClasesService } from './buho-clases.service';

describe('BuhoClasesService', () => {
  let service: BuhoClasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuhoClasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
