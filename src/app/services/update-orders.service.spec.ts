import { TestBed } from '@angular/core/testing';

import { UpdateOrdersService } from './update-orders.service';

describe('UpdateOrdersService', () => {
  let service: UpdateOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
