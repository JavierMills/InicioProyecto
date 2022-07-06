import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReestructurasComponent } from './table-reestructuras.component';

describe('TableReestructurasComponent', () => {
  let component: TableReestructurasComponent;
  let fixture: ComponentFixture<TableReestructurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableReestructurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableReestructurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
