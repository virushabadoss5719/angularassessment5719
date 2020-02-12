import { Component, OnInit } from '@angular/core';
import { ShopService } from './../../services/shop.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  inCart: number;
  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.cartCount.subscribe(count => {
        this.inCart = count;
    });
  }

}
