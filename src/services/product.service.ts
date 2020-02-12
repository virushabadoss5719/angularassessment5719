import { Injectable } from '@angular/core';
import * as productData from './../products.json';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number | string;
  price: number;
  title: string;
  icon: string;
  category: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  availableProducts = [];  
  newProducts: BehaviorSubject<Product[]>;
  constructor() {
    this.availableProducts = productData.data;
    this.newProducts = new BehaviorSubject(productData.data);
  }

  getProducts() {
    return this.availableProducts;
  }

  upsertProduct(product, isNew = true) {
    console.log("inside ser");
    this.availableProducts.push(product);
    // if(isNew) {
    //   this.availableProducts.push(product);  
    // } else {
    //   this.availableProducts[] = product;
    // }
    this.newProducts.next(this.availableProducts);
    console.log(this.newProducts);
  }
}
