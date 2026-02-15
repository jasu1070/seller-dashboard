import { ChangeDetectionStrategy, Component, EventEmitter, inject, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../types';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddProductModalComponent implements OnInit, OnChanges {
  product = input<Product | null>();
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Partial<Product> & { id?: string }>();

  // FIX: Explicitly type FormBuilder to help TypeScript's type inference.
  private fb: FormBuilder = inject(FormBuilder);
  
  productForm = this.fb.group({
    name: ['', Validators.required],
    sku: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  });

  isEditing = false;

  ngOnInit(): void {
    this.updateForm(this.product());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.updateForm(this.product());
    }
  }

  updateForm(product: Product | null | undefined): void {
     if (product) {
      this.isEditing = true;
      this.productForm.patchValue({
        name: product.name,
        sku: product.sku,
        price: product.price,
        stock: product.stock,
      });
    } else {
      this.isEditing = false;
      this.productForm.reset({
        name: '',
        sku: '',
        price: 0,
        stock: 0
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      const productData: Partial<Product> & { id?: string } = {
        name: formValue.name!,
        sku: formValue.sku!,
        price: formValue.price!,
        stock: formValue.stock!,
      };
      if (this.isEditing && this.product()) {
        productData.id = this.product()!.id;
      }
      this.save.emit(productData);
    }
  }
}
