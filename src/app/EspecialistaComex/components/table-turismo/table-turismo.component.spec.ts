import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTurismoComponent } from './table-turismo.component';

describe('TableTurismoComponent', () => {
  let component: TableTurismoComponent;
  let fixture: ComponentFixture<TableTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTurismoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
