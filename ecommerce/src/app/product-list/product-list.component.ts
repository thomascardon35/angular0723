import { Component } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  product1 : Product = {
    id : 123,
    category : "véhicules",
    price : 6999,
    promo : .2,
    name : "moto",
    description : "un véhicule 2 roues",
    active : true,
  }

  product2 : Product = {
    id : 124,
    category : "véhicules",
    price : 13999,
    promo : .1,
    name : "voiture",
    description : "véhicule 4 roues",
    active : true,
  }

}
