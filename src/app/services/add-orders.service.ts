import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SalesOrder } from '../model/salesOrder';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddOrdersService {
  url: string = '../../assets/salesOrder.json';
  data: any;
  body = { 
      id: '4', 
      description: 'pending', 
      createdOn: "2023-07-11T16:30:19.096Z",  
      updatedOn: "2023-07-19T15:30:19.096Z"
  }

  constructor(private http: HttpClient) { }

  addOrder (sales: SalesOrder): Observable<any> {
   return this.http.post<SalesOrder>('https://reqres.in/api/users', this.body);
  }
}