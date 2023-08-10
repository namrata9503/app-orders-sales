import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesOrder } from '../model/salesOrder';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteOrdersService {
  url: string = '../../assets/salesOrder.json';

  constructor(private http: HttpClient) { }

  removeUser(id: string): Observable<any> {
    return this.http.delete(this.url)
  }
}
