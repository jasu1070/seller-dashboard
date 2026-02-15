import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Order } from '../../types';

@Component({
  selector: 'app-recent-orders-card',
  templateUrl: './recent-orders-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class RecentOrdersCardComponent {
  private dataService = inject(DataService);
  
  recentOrders = computed(() => {
    // Sort by date and take the first 5. Assuming date strings are sortable.
    return this.dataService.orders().sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
  });

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