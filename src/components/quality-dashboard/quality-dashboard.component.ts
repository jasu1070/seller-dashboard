import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { QualityCatalog } from '../../types';

type MainTab = 'need-attention' | 'other-catalogs';
type SubTab = 'low-visibility' | 'risk-of-getting-blocked';

@Component({
  selector: 'app-quality-dashboard',
  templateUrl: './quality-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class QualityDashboardComponent {
  private dataService = inject(DataService);

  allCatalogs = this.dataService.qualityCatalogs;

  activeTab = signal<MainTab>('need-attention');
  activeSubTab = signal<SubTab>('low-visibility');

  // Pagination state
  currentPage = signal(1);
  itemsPerPage = 10;
  
  totalPages = computed(() => {
    // Add more items to test pagination
    return Math.ceil((this.allCatalogs().length * 10) / this.itemsPerPage);
  });

  paginatedCatalogs = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    // Repeat the catalogs to simulate a larger dataset for pagination
    const repeatedCatalogs = Array.from({ length: 10 }).flatMap(() => this.allCatalogs());
    return repeatedCatalogs.slice(start, end);
  });

  paginationPages = computed((): (number | string)[] => {
    const total = this.totalPages();
    const current = this.currentPage();
    
    if (total <= 7) { // show all pages if 7 or less
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    
    // In the middle
    if (current > 3 && current < total - 2) {
      return [1, '...', current - 1, current, current + 1, '...', total];
    }
    
    // Near the beginning
    if (current <= 3) {
      return [1, 2, 3, '...', total - 1, total];
    }
    
    // Near the end
    return [1, 2, '...', total - 2, total - 1, total];
  });


  // Example value for the progress bar
  badQualityScore = 16;

  setPage(page: number): void {
    if (page > 0 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
}
