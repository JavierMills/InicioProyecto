import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroHoteleroComponent } from './filtro-hotelero.component';

describe('FiltroHoteleroComponent', () => {
  let component: FiltroHoteleroComponent;
  let fixture: ComponentFixture<FiltroHoteleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroHoteleroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroHoteleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
