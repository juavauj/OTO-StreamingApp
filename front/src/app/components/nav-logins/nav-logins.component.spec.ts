import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoginsComponent } from './nav-logins.component';

describe('NavLoginsComponent', () => {
  let component: NavLoginsComponent;
  let fixture: ComponentFixture<NavLoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
