import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestructurasComponent } from './reestructuras.component';

describe('ReestructurasComponent', () => {
  let component: ReestructurasComponent;
  let fixture: ComponentFixture<ReestructurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReestructurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReestructurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
