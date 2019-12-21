import { TestBed } from '@angular/core/testing';

import { IpoService } from './ipo.service';

describe('IpoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpoService = TestBed.get(IpoService);
    expect(service).toBeTruthy();
  });
});
