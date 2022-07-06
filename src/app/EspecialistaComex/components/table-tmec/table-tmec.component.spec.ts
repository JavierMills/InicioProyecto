import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTmecComponent } from './table-tmec.component';

describe('TableTmecComponent', () => {
  let component: TableTmecComponent;
  let fixture: ComponentFixture<TableTmecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTmecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTmecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
