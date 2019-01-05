import { TestBed } from '@angular/core/testing';

import { PatientDetailsService } from './patient-details.service';

describe('PatientDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientDetailsService = TestBed.get(PatientDetailsService);
    expect(service).toBeTruthy();
  });
});
