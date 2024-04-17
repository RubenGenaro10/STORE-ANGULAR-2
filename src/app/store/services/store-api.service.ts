import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {
  baseUrl = 'https://fakestoreapi.com';
  constructor(private http:HttpClient ) { }

  getProducts(){
    return this.http.get(`${this.baseUrl}/products`);
  }
}
