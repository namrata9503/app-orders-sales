import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrdersComponent } from './sales-orders.component';

describe('SalesOrdersComponent', () => {
  let component: SalesOrdersComponent;
  let fixture: ComponentFixture<SalesOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesOrdersComponent]
    });
    fixture = TestBed.createComponent(SalesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
