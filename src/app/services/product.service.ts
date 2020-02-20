import { Injectable } from '@angular/core';
import * as productData from '../../products.json';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  availableProducts: Array<Product[]>;
  newProducts: BehaviorSubject<Product[]>;
  constructor(private apiService: ApiService) {
    this.newProducts = new BehaviorSubject(productData.data);
  }

  getProducts(): Observable<any> {
      return this.apiService.get('products');
  }

  upsertProduct(product) {
    this.availableProducts.push(product);
    this.newProducts.next(this.availableProducts);
  }
}
