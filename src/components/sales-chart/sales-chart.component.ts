import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SalesData {
  day: string;
  amount: number;
}

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class SalesChartComponent {
  salesData = signal<SalesData[]>([
    { day: 'Mon', amount: 2300 },
    { day: 'Tue', amount: 3100 },
    { day: 'Wed', amount: 4200 },
    { day: 'Thu', amount: 2800 },
    { day: 'Fri', amount: 5100 },
    { day: 'Sat', amount: 4700 },
    { day: 'Sun', amount: 3600 },
  ]);

  maxSale = computed(() =>
    Math.max(...this.salesData().map(d => d.amount))
  );

  getBarHeight(amount: number): string {
    const height = (amount / this.maxSale()) * 100;
    return `${height}%`;
  }
}