import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesOrder } from '../model/salesOrder';

@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {
  url: string = '../../assets/salesOrder.json';

  constructor(private http: HttpClient) { }

     /* get all orders from json */
     getAllOrders(): Observable<any> {
      return this.http.get<SalesOrder[]>(this.url);
  }

      /* get order details from API */
      getUserDetails(order: any): Observable<SalesOrder> {
        return this.http.get<SalesOrder>(
            `${this.url}/orderdetails?order=${order}`,
        );
    }
}
