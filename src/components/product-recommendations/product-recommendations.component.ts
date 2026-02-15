import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRecommendationsComponent {}