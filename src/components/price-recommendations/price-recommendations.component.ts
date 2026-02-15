import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-price-recommendations',
  templateUrl: './price-recommendations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceRecommendationsComponent {}