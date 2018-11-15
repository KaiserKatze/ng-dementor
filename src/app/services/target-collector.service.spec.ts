import { TestBed } from '@angular/core/testing';

import { TargetCollectorService } from './target-collector.service';

describe('TargetCollectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetCollectorService = TestBed.get(TargetCollectorService);
    expect(service).toBeTruthy();
  });
});
