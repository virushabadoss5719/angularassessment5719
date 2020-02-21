import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../services/data.service';
import { MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-cash-flow-schedule',
  templateUrl: './cash-flow-schedule.component.html',
  styleUrls: ['./cash-flow-schedule.component.css']
})
export class CashFlowScheduleComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private dataService: DataService) { }
  displayedColumns: string[] = ['start_date', 'end_date', 'day', 'rate', 'spread', 'period_rate', 'type'];
  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.dataSource.data = this.dataService.getCashFlowDetails();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
