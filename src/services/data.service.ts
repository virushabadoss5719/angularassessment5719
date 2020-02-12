import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { log } from 'util';
import { ShopService } from './shop.service';
import * as productData from './../products.json';

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
export class DataService {
    addedProducts = []; 

    private products = new BehaviorSubject<Product[]>([]);
    productList: BehaviorSubject<Product[]>;
    currentProducts = this.products.asObservable();

    constructor(private shopService: ShopService) {
        this.productList = new BehaviorSubject(productData.data);
    }

    addToCart(product: any) {
        this.addedProducts.push(product);
        this.updateCount(this.addedProducts.length);
        this.products.next(this.addedProducts);
    }

    updateCount(count) {
        this.shopService.nextCount(count);
    }
}