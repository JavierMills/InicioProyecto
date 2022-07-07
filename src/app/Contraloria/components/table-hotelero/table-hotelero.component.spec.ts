import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHoteleroComponent } from './table-hotelero.component';

describe('TableHoteleroComponent', () => {
  let component: TableHoteleroComponent;
  let fixture: ComponentFixture<TableHoteleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHoteleroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHoteleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
