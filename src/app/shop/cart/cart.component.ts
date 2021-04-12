import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts : Cart[] =[];
  prefUrlImage = `${environment.prefUrlImage}`;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.carts = this.cartService.carts;
  }

  addProduct(product:Product):void{
    this.cartService.addProductToCard(product);

  }

  deleteProduct(product:Product): void{
    this.cartService.deleteFromCart(product);
  }
}
