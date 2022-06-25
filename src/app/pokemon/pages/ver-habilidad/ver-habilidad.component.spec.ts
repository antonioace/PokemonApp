import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHabilidadComponent } from './ver-habilidad.component';

describe('VerHabilidadComponent', () => {
  let component: VerHabilidadComponent;
  let fixture: ComponentFixture<VerHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
