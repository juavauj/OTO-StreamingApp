import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesReproComponent } from './canciones-repro.component';

describe('CancionesReproComponent', () => {
  let component: CancionesReproComponent;
  let fixture: ComponentFixture<CancionesReproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionesReproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesReproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
