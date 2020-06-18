import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistReproductorComponent } from './playlist-reproductor.component';

describe('PlaylistReproductorComponent', () => {
  let component: PlaylistReproductorComponent;
  let fixture: ComponentFixture<PlaylistReproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistReproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
