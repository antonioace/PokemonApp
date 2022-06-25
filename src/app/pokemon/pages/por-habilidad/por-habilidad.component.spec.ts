import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorHabilidadComponent } from './por-habilidad.component';

describe('PorHabilidadComponent', () => {
  let component: PorHabilidadComponent;
  let fixture: ComponentFixture<PorHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
