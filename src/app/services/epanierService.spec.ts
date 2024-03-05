import { TestBed } from '@angular/core/testing';

import { EPanierService } from './epanierService';

describe('EPanierServiceService', () => {
  let service: EPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
