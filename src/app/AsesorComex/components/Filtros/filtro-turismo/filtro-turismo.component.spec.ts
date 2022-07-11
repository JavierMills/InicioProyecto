import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTurismoComponent } from './filtro-turismo.component';

describe('FiltroTurismoComponent', () => {
  let component: FiltroTurismoComponent;
  let fixture: ComponentFixture<FiltroTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroTurismoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
