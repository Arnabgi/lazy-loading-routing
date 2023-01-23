import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComp1Component } from './customer-comp1.component';

describe('CustomerComp1Component', () => {
  let component: CustomerComp1Component;
  let fixture: ComponentFixture<CustomerComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
