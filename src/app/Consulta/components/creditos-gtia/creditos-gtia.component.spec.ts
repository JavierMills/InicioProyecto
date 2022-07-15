import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosGtiaComponent } from './creditos-gtia.component';

describe('CreditosGtiaComponent', () => {
  let component: CreditosGtiaComponent;
  let fixture: ComponentFixture<CreditosGtiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditosGtiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditosGtiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
