import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient:HttpClient){}

  getProductData():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/1237172031882911744')
  }
}
