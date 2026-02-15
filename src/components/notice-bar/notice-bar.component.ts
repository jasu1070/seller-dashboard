import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notice-bar',
  templateUrl: './notice-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class NoticeBarComponent {
  isVisible = signal(true);

  dismiss(): void {
    this.isVisible.set(false);
  }
}
