import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { HttpProductService } from '../http-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product : Product = {
    id : 123,
    category : "véhicules",
    price : 6999,
    promo : .2,
    name : "moto",
    description : "un véhicule 2 roues",
    active : true,
  }

  constructor(private productService : HttpProductService){
  }


  
  selectedProduct: Product | undefined
  
  filteringStr = ''

  products : Product[] = [];


ngOnInit(): void {
  // console.log(this.productService.addProduct(this.product)
  //   .subscribe());

  this.productService.findAll()
    .subscribe(products => this.products = products);
}


receiveSelectedProduct(product: Product){
  this.selectedProduct = product
}

getProductsFiltered(): Product[]{
  return this.products.filter(prod => prod.name.toLowerCase().includes(this.filteringStr.toLowerCase()))
}
}
