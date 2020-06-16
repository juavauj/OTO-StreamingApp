import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasAdminComponent } from './artistas-admin.component';

describe('ArtistasAdminComponent', () => {
  let component: ArtistasAdminComponent;
  let fixture: ComponentFixture<ArtistasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
