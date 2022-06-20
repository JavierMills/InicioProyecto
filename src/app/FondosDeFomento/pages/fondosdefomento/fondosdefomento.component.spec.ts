import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosdefomentoComponent } from './fondosdefomento.component';

describe('FondosdefomentoComponent', () => {
  let component: FondosdefomentoComponent;
  let fixture: ComponentFixture<FondosdefomentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondosdefomentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosdefomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
