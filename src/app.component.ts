import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GrowthComponent } from './components/growth/growth.component';
import { QualityDashboardComponent } from './components/quality-dashboard/quality-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogUploadsComponent } from './components/catalog-uploads/catalog-uploads.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ProductRecommendationsComponent } from './components/product-recommendations/product-recommendations.component';
import { PriceRecommendationsComponent } from './components/price-recommendations/price-recommendations.component';

export type ViewType = 'home' | 'orders' | 'returns' | 'inventory' | 'catalog-uploads' | 'image-bulk-upload' | 'payments' | 'advertisements' | 'promotions' | 'price-recommendations' | 'product-recommendations' | 'quality-dashboard' | 'analytics' | 'growth' | 'settings' | 'notices' | 'support';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SidebarComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    PaymentsComponent,
    ReturnsComponent,
    AnalyticsComponent,
    SettingsComponent,
    GrowthComponent,
    QualityDashboardComponent,
    CatalogUploadsComponent,
    AdvertisementsComponent,
    PromotionsComponent,
    ProductRecommendationsComponent,
    PriceRecommendationsComponent,
  ],
})
export class AppComponent {
  isSidebarCollapsed = signal(false);
  currentView = signal<ViewType>('home');

  currentViewTitle = computed(() => {
    const view = this.currentView();
    switch (view) {
      case 'home': return 'Dashboard Overview';
      case 'orders': return 'Orders';
      case 'returns': return 'Returns & Exchanges';
      case 'inventory': return 'Product Inventory';
      case 'catalog-uploads': return 'Catalog Uploads';
      case 'image-bulk-upload': return 'Image Bulk Upload';
      case 'payments': return 'Payments';
      case 'advertisements': return 'Advertisements';
      case 'promotions': return 'Promotions';
      case 'price-recommendations': return 'Price Recommendations';
      case 'product-recommendations': return 'Product Recommendations';
      case 'quality-dashboard': return 'Quality Dashboard';
      case 'analytics': return 'Analytics';
      case 'growth': return 'Growth';
      case 'settings': return 'Settings';
      case 'notices': return 'Notices';
      case 'support': return 'Support';
      default: return 'Dashboard';
    }
  });

  toggleSidebar(): void {
    this.isSidebarCollapsed.update(v => !v);
  }

  onViewChange(view: ViewType): void {
    this.currentView.set(view);
  }
}