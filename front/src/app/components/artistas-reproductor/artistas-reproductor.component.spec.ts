import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasReproductorComponent } from './artistas-reproductor.component';

describe('ArtistasReproductorComponent', () => {
  let component: ArtistasReproductorComponent;
  let fixture: ComponentFixture<ArtistasReproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistasReproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
