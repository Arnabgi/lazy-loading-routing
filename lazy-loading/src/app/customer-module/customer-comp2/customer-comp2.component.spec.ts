import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComp2Component } from './customer-comp2.component';

describe('CustomerComp2Component', () => {
  let component: CustomerComp2Component;
  let fixture: ComponentFixture<CustomerComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
