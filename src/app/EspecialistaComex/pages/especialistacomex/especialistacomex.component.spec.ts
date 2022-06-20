import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistacomexComponent } from './especialistacomex.component';

describe('EspecialistacomexComponent', () => {
  let component: EspecialistacomexComponent;
  let fixture: ComponentFixture<EspecialistacomexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialistacomexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistacomexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
