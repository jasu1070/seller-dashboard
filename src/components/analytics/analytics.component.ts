import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsComponent {}
