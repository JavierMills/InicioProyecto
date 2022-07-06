import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReestructurasComponent } from './form-reestructuras.component';

describe('FormReestructurasComponent', () => {
  let component: FormReestructurasComponent;
  let fixture: ComponentFixture<FormReestructurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReestructurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReestructurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
