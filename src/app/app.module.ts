import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from '../interceptor.service';
import { NotificationService } from './services/notification.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeBookingComponent } from './trade-booking/trade-booking.component';
import { EconomicalTradeComponent } from './economical-trade/economical-trade.component';
import { NonEconomicalTradeComponent } from './non-economical-trade/non-economical-trade.component';
import { CashFlowScheduleComponent } from './cash-flow-schedule/cash-flow-schedule.component';
import { StaticDataComponent } from './static-data/static-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    DashboardComponent,
    TradeBookingComponent,
    EconomicalTradeComponent,
    NonEconomicalTradeComponent,
    CashFlowScheduleComponent,
    StaticDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    HttpClientModule,
    MatSelectModule
  ],
  entryComponents: [],
  providers: [NotificationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
