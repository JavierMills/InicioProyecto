import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesInternacionalesComponent } from './operaciones-internacionales.component';

describe('OperacionesInternacionalesComponent', () => {
  let component: OperacionesInternacionalesComponent;
  let fixture: ComponentFixture<OperacionesInternacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesInternacionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesInternacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
