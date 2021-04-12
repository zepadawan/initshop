import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/products';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  carts : Cart[] = [];
  cartData : any;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.carts = this.cartService.carts;
    this.cartData = this.cartService.cartData;
  }



}
