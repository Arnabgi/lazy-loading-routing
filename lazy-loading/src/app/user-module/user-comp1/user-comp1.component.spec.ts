import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComp1Component } from './user-comp1.component';

describe('UserComp1Component', () => {
  let component: UserComp1Component;
  let fixture: ComponentFixture<UserComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
