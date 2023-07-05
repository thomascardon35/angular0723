import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  theColor = 'red';
  
  product : Product = { 
    id : 1,
    name : "voiture",
    active : true,
    category : "vehicule",
    description : "véhicule à 4 roues",
    promo : 12345,
    price : 10099,
  
  }

  toggleActive(): void {
    this.product.active = !this.product.active;
  }

}
