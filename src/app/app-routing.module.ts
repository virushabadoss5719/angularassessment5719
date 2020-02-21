import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TradeBookingComponent } from './trade-booking/trade-booking.component';
import { CashFlowScheduleComponent } from './cash-flow-schedule/cash-flow-schedule.component';
import { StaticDataComponent } from './static-data/static-data.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component : DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'trade',
    component : TradeBookingComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'schedule-details',
    component : CashFlowScheduleComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'static-data',
    component : StaticDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component : LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
