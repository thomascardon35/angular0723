import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.base_api_url}/products`);
  }

  addProduct(product : Product): Observable<Product> {
    return this.http.post<Product>(`${environment.base_api_url}/products`,product);
  }
}
