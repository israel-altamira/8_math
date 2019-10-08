import { TestBed } from '@angular/core/testing';

import { IteracionService } from './iteracion.service';

describe('IteracionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IteracionService = TestBed.get(IteracionService);
    expect(service).toBeTruthy();
  });
});
