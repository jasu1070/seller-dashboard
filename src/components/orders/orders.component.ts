import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Order } from '../../types';

type OrderStatus = 'All' | 'Pending' | 'Shipped' | 'Delivered' | 'Canceled';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
})
export class OrdersComponent {
  private dataService = inject(DataService);
  private allOrders = this.dataService.orders;

  filterOptions: OrderStatus[] = ['All', 'Pending', 'Shipped', 'Delivered', 'Canceled'];
  activeFilter = signal<OrderStatus>('All');
  searchTerm = signal('');
  selectedOrders = signal<Set<string>>(new Set());

  filteredOrders = computed(() => {
    const filter = this.activeFilter();
    const term = this.searchTerm().toLowerCase();
    const orders = this.allOrders();

    return orders.filter(order => {
      const statusMatch = filter === 'All' || order.status === filter;
      const termMatch = order.id.toLowerCase().includes(term) || order.customerName.toLowerCase().includes(term);
      return statusMatch && termMatch;
    });
  });
  
  isAllSelected = computed(() => {
    const filteredIds = this.filteredOrders().map(o => o.id);
    return filteredIds.length > 0 && filteredIds.every(id => this.selectedOrders().has(id));
  });

  setFilter(status: OrderStatus) {
    this.activeFilter.set(status);
  }
  
  toggleOrderSelection(orderId: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectedOrders.update(currentSet => {
      const newSet = new Set(currentSet);
      if (isChecked) {
        newSet.add(orderId);
      } else {
        newSet.delete(orderId);
      }
      return newSet;
    });
  }

  toggleAllOrders(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const filteredIds = this.filteredOrders().map(o => o.id);
    if (isChecked) {
      this.selectedOrders.set(new Set(filteredIds));
    } else {
      this.selectedOrders.set(new Set());
    }
  }

  acceptOrder(orderId: string): void {
    this.dataService.updateOrderStatus(orderId, 'Shipped');
  }

  getStatusClass(status: Order['status']): string {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Canceled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
