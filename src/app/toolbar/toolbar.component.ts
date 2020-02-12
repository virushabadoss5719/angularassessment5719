import { Component, OnInit } from '@angular/core';
import { ShopService } from './../../services/shop.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  inCart: number;
  constructor(
    private shopService: ShopService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.shopService.cartCount.subscribe(count => {
        this.inCart = count;
    });
  }

  logout() {
    this.authService.logout();
  }

}
