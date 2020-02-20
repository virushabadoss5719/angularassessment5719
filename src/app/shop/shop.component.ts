import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public products: Array<Product>;
  constructor(
    private productService: ProductService,
    private dataService: DataService,
    private notify: NotificationService
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.products;
    });
  }

  addToCart(index: number) {
    this.dataService.addToCart(this.products[index]);
    this.products.splice(index, 1);
    this.notify.showInfo('Added to cart');
  }
}
