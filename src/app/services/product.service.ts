import { Injectable } from '@angular/core';
import * as productData from '../../products.json';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  availableProducts: any;
  newProducts: BehaviorSubject<Product[]>;
  constructor(private http: HttpClient) {
    this.newProducts = new BehaviorSubject(productData.data);
  }

  getProducts(): Observable<any>
  {
      return this.http.get('products');
  }

  upsertProduct(product, isNew = true) {
    this.availableProducts.push(product);
    this.newProducts.next(this.availableProducts);
  }
}
