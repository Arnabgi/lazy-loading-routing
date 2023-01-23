import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComp2Component } from './user-comp2.component';

describe('UserComp2Component', () => {
  let component: UserComp2Component;
  let fixture: ComponentFixture<UserComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
