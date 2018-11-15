import { TestBed } from '@angular/core/testing';

import { TargetResolverService } from './target-resolver.service';

describe('TargetResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetResolverService = TestBed.get(TargetResolverService);
    expect(service).toBeTruthy();
  });
});
