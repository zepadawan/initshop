import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  // products = [];
  // prodSub: Subscription;
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    // this.prodSub = this.productService.productSubject.subscribe(
    //   (data)=>{
    //     this.products =  data;
    //   }
    // )

  }

}
