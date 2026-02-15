import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Product } from '../../types';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AddProductModalComponent],
})
export class ProductsComponent {
  private dataService = inject(DataService);
  products = this.dataService.products;

  isModalOpen = signal(false);
  editingProduct = signal<Product | null>(null);
  
  openAddModal(): void {
    this.editingProduct.set(null);
    this.isModalOpen.set(true);
  }

  openEditModal(product: Product): void {
    this.editingProduct.set(product);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.editingProduct.set(null);
  }

  handleProductSave(product: Partial<Product> & { id?: string }): void {
    this.dataService.addOrUpdateProduct(product);
    this.closeModal();
  }

  getStatusClass(status: Product['status']): string {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  }
}
