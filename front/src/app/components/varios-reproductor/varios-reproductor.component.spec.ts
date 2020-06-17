import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariosReproductorComponent } from './varios-reproductor.component';

describe('VariosReproductorComponent', () => {
  let component: VariosReproductorComponent;
  let fixture: ComponentFixture<VariosReproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariosReproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariosReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
