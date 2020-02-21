import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEconomicalTradeComponent } from './non-economical-trade.component';

describe('NonEconomicalTradeComponent', () => {
  let component: NonEconomicalTradeComponent;
  let fixture: ComponentFixture<NonEconomicalTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonEconomicalTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEconomicalTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
