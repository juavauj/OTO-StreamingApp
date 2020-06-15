import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAdminComponent } from './playlist-admin.component';

describe('PlaylistAdminComponent', () => {
  let component: PlaylistAdminComponent;
  let fixture: ComponentFixture<PlaylistAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
