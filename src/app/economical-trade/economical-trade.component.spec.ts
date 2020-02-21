import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicalTradeComponent } from './economical-trade.component';

describe('EconomicalTradeComponent', () => {
  let component: EconomicalTradeComponent;
  let fixture: ComponentFixture<EconomicalTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicalTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicalTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
