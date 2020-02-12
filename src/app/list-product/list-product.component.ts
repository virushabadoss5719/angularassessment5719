import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ProductService } from './../../services/product.service';
import { MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private productService: ProductService) { }
  displayedColumns: string[] = ['id', 'title', 'price', 'category'];
  dataSource = new MatTableDataSource();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // this.getProducts();
    this.productService.newProducts.subscribe(products => this.dataSource.data = products);
  }

  getProducts() {
    // this.dataSource.data = this.productService.getProducts();
  }
}
