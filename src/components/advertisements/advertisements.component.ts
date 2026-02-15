import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementsComponent {}