import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-score-card',
  templateUrl: './supplier-score-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class SupplierScoreCardComponent {
  scores = [
    { name: 'On-Time Shipment', value: 98, target: 95, unit: '%' },
    { name: 'Product Quality', value: 4.8, target: 4.5, unit: ' Stars' },
    { name: 'Response Rate', value: 92, target: 90, unit: '%' },
  ];

  getBarWidth(value: number, target: number): string {
    // Cap value at 100 for percentage-based scores
    const effectiveValue = Math.min(value, 100);
    return `${effectiveValue}%`;
  }
  
  getBarColor(value: number, target: number): string {
    if (value >= target) return 'bg-green-500';
    if (value >= target * 0.9) return 'bg-yellow-500';
    return 'bg-red-500';
  }
}