import { TestBed } from '@angular/core/testing';

import { LocalService } from './local.service';

describe('MunicipioService', () => {
  let service: LocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
