import { TestBed } from '@angular/core/testing';

import { WorkingFieldsService } from './working-fields.service';

describe('WorkingFieldsService', () => {
  let service: WorkingFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
