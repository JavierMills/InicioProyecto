import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComexTmecComponent } from './table-comex-tmec.component';

describe('TableComexTmecComponent', () => {
  let component: TableComexTmecComponent;
  let fixture: ComponentFixture<TableComexTmecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComexTmecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComexTmecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
