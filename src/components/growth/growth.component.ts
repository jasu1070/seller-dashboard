import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrowthComponent {}
