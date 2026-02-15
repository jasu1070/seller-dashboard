import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Payment } from '../../types';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PaymentsComponent {
  private dataService = inject(DataService);
  payments = this.dataService.payments;

  totalEarnings = computed(() => 
    this.payments()
      .filter(p => p.status === 'Completed')
      .reduce((sum, p) => sum + p.amount, 0)
  );

  pendingPayout = computed(() =>
    this.payments()
      .filter(p => p.status === 'Pending')
      .reduce((sum, p) => sum + p.amount, 0)
  );

  lastPayout = computed(() => {
    const completed = this.payments()
      .filter(p => p.status === 'Completed')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return completed.length > 0 ? completed[0].amount : 0;
  });

  getStatusClass(status: Payment['status']): string {
    return status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  }
}
