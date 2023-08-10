import { Injectable } from '@angular/core';
import { SalesOrder } from '../model/salesOrder';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateOrdersService {
  postId: number = 6;
  url: string = '../../assets/salesOrder.json';

  constructor(private http: HttpClient ) { }


  // editOrder (sales: SalesOrder): Observable<any> {
  //   const body = { description: 'yet to be placed' };
  //    this.http.put<any>(this.url, body).subscribe(data => this.postId = data.id);
  //   return;
  //  }
  editOrder (sales: SalesOrder): Observable<any> {
    const body = { description: 'yet to be placed' };
    return this.http.put<any>(this.url, body);
  
   }
}
