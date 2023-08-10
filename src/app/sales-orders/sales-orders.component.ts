import { Component, OnInit } from '@angular/core';
import { GetOrdersService } from '../services/get-orders.service';
import { AddOrdersService } from '../services/add-orders.service';
import { UpdateOrdersService } from '../services/update-orders.service';
import { DeleteOrdersService } from '../services/delete-orders.service';

@Component({
  selector: 'app-sales-orders',
  templateUrl: './sales-orders.component.html',
  styleUrls: ['./sales-orders.component.scss']
})
export class SalesOrdersComponent implements OnInit {
  salesData: any;
  url: string = '../../assets/salesOrder.json';

  constructor(private getOrderService : GetOrdersService,
    private addOrderService : AddOrdersService,
    private editOrderService: UpdateOrdersService,
    private deleteOrderService: DeleteOrdersService ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.getOrderService.getAllOrders().subscribe(res => {
      this.salesData = res;
    });
  }

  getOrderDetails(order:any) {
    this.getOrderService.getUserDetails(order).subscribe(res => {
      this.salesData = res;
    })
  }
  addOrders() {
    this.addOrderService.addOrder(this.salesData).subscribe(data => {
      data = this.salesData;
    })    
  }
  editOrders() {
    this.editOrderService.editOrder(this.salesData).subscribe(data => {
      data = this.salesData;
    })
  }
  deleteOrders() {
    this.deleteOrderService.removeUser(this.salesData.id).subscribe(data => {
      data = this.salesData;
    })
  }
}
