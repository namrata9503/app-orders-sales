import { TestBed } from '@angular/core/testing';

import { AddOrdersService } from './add-orders.service';

describe('AddOrdersService', () => {
  let service: AddOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
