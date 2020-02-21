import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBookingComponent } from './trade-booking.component';

describe('TradeBookingComponent', () => {
  let component: TradeBookingComponent;
  let fixture: ComponentFixture<TradeBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
