import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowScheduleComponent } from './cash-flow-schedule.component';

describe('CashFlowScheduleComponent', () => {
  let component: CashFlowScheduleComponent;
  let fixture: ComponentFixture<CashFlowScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashFlowScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
