import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-non-economical-trade',
  templateUrl: './non-economical-trade.component.html',
  styleUrls: ['./non-economical-trade.component.css']
})
export class NonEconomicalTradeComponent implements OnInit {

  tradeDetails: object;
  currentDate = new Date();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.tradeDetails = this.dataService.getNonEconomicalDetails();
    console.log(this.tradeDetails);
  }

}
