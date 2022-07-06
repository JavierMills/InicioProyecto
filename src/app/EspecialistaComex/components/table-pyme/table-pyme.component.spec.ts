import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePymeComponent } from './table-pyme.component';

describe('TablePymeComponent', () => {
  let component: TablePymeComponent;
  let fixture: ComponentFixture<TablePymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePymeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
