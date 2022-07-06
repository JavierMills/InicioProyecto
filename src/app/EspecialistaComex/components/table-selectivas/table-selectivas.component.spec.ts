import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectivasComponent } from './table-selectivas.component';

describe('TableSelectivasComponent', () => {
  let component: TableSelectivasComponent;
  let fixture: ComponentFixture<TableSelectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSelectivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSelectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
