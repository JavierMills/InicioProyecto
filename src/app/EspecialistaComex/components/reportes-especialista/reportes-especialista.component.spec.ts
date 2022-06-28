import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesEspecialistaComponent } from './reportes-especialista.component';

describe('ReportesEspecialistaComponent', () => {
  let component: ReportesEspecialistaComponent;
  let fixture: ComponentFixture<ReportesEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
