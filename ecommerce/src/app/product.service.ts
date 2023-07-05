import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() { }

  products : Product[] = [{
    id : 123,
    category : "véhicules",
    price : 6999,
    promo : .2,
    name : "moto",
    description : "un véhicule 2 roues",
    active : true,
  },{
    id : 124,
    category : "véhicules",
    price : 13999,
    promo : .1,
    name : "voiture",
    description : "véhicule 4 roues",
    active : true,
  },{
    id : 125,
    category : "papeterie",
    price : 5,
    promo : .25,
    name : "stylo",
    description : "Très pratique pour écrire",
    active : false,
  }
]

  findAll(){
    return this.products;
  }

  add(product : Product){
    this.products.push(product);
  }

  getOne(id : number){
    return this.products.filter(prod => prod.id = id);
  }

  delete(idProduct : number){
    this.products.slice()
  }

}
