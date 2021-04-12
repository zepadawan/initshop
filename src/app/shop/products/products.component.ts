import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products : Product[]= [];
  prodSub: Subscription;
  prefUrlImage = `${environment.prefUrlImage}`;
  constructor(private productService : ProductsService, private cartService : CartService) { }

  ngOnInit(): void {
    this.prodSub = this.productService.productSubject.subscribe(
      (data)=>{
        this.products =  data;
      }
    );
    this.productService.emitProducts();
  }

  ngOnDestroy(): void{
    this.prodSub.unsubscribe();
  }
  addToCart(product: Product):void{
    this.cartService.addProductToCard(product);
  }

  deleteFromCart(product : Product):void{
    this.cartService.deleteFromCart(product);

  }
}
