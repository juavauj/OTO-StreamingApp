import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPerfilComponent } from './vista-perfil.component';

describe('VistaPerfilComponent', () => {
  let component: VistaPerfilComponent;
  let fixture: ComponentFixture<VistaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
