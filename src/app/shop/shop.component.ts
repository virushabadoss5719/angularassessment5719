import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public products: any;
  constructor(private productService: ProductService, private dataService: DataService) { }

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
    //this.notify.showToaster('Added to cart');
  }
}
