import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesAdminComponent } from './canciones-admin.component';

describe('CancionesAdminComponent', () => {
  let component: CancionesAdminComponent;
  let fixture: ComponentFixture<CancionesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
