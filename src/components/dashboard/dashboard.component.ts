import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeBarComponent } from '../notice-bar/notice-bar.component';
import { SalesChartComponent } from '../sales-chart/sales-chart.component';
import { RecentOrdersCardComponent } from '../recent-orders-card/recent-orders-card.component';
import { SupplierScoreCardComponent } from '../supplier-score-card/supplier-score-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NoticeBarComponent,
    SalesChartComponent,
    RecentOrdersCardComponent,
    SupplierScoreCardComponent,
  ],
})
export class DashboardComponent {}