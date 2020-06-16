import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesAdminComponent } from './albumes-admin.component';

describe('AlbumesAdminComponent', () => {
  let component: AlbumesAdminComponent;
  let fixture: ComponentFixture<AlbumesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
