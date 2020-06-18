import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsReproductorComponent } from './albums-reproductor.component';

describe('AlbumsReproductorComponent', () => {
  let component: AlbumsReproductorComponent;
  let fixture: ComponentFixture<AlbumsReproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsReproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
