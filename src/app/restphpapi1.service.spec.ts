import { TestBed } from '@angular/core/testing';

import { Restphpapi1Service } from './restphpapi1.service';

describe('Restphpapi1Service', () => {
  let service: Restphpapi1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Restphpapi1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
