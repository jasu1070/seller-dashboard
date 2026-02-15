import { Injectable, signal } from '@angular/core';
import { Order, Product, Payment, Return, QualityCatalog } from '../types';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly mockOrders: Order[] = [
    { id: 'ORD001', customerName: 'Alice Johnson', date: '2023-10-26', amount: 150.00, status: 'Delivered', paymentMethod: 'Credit Card' },
    { id: 'ORD002', customerName: 'Bob Williams', date: '2023-10-25', amount: 75.50, status: 'Shipped', paymentMethod: 'PayPal' },
    { id: 'ORD003', customerName: 'Charlie Brown', date: '2023-10-25', amount: 220.00, status: 'Pending', paymentMethod: 'Credit Card' },
    { id: 'ORD004', customerName: 'Diana Miller', date: '2023-10-24', amount: 35.20, status: 'Delivered', paymentMethod: 'Stripe' },
    { id: 'ORD005', customerName: 'Ethan Davis', date: '2023-10-23', amount: 500.00, status: 'Canceled', paymentMethod: 'PayPal' },
    { id: 'ORD006', customerName: 'Fiona Garcia', date: '2023-10-22', amount: 88.00, status: 'Delivered', paymentMethod: 'Credit Card' },
    { id: 'ORD007', customerName: 'George Harris', date: '2023-10-22', amount: 12.99, status: 'Shipped', paymentMethod: 'Credit Card' },
    { id: 'ORD008', customerName: 'Hannah Clark', date: '2023-10-21', amount: 345.50, status: 'Pending', paymentMethod: 'Stripe' },
  ];

  private readonly mockProducts: Product[] = [
    { id: 'PROD01', name: 'Premium Wireless Headphones', sku: 'HD-1022', price: 199.99, stock: 58, status: 'Active', imageUrl: 'https://picsum.photos/seed/headphones/200' },
    { id: 'PROD02', name: 'Smart Fitness Tracker', sku: 'FT-405', price: 89.99, stock: 120, status: 'Active', imageUrl: 'https://picsum.photos/seed/tracker/200' },
    { id: 'PROD03', name: 'Ergonomic Office Chair', sku: 'CH-801', price: 249.99, stock: 15, status: 'Active', imageUrl: 'https://picsum.photos/seed/chair/200' },
    { id: 'PROD04', name: 'Vintage Leather Wallet', sku: 'WL-007', price: 49.99, stock: 0, status: 'Inactive', imageUrl: 'https://picsum.photos/seed/wallet/200' },
    { id: 'PROD05', name: 'Gourmet Coffee Beans', sku: 'CF-235', price: 22.50, stock: 200, status: 'Active', imageUrl: 'https://picsum.photos/seed/coffee/200' },
    { id: 'PROD06', name: 'Portable Power Bank', sku: 'PB-30k', price: 65.00, stock: 88, status: 'Active', imageUrl: 'https://picsum.photos/seed/powerbank/200' },
  ];

   private readonly mockPayments: Payment[] = [
    { id: 'PAY001', date: '2023-10-20', orderId: 'ORD001', amount: 150.00, status: 'Completed' },
    { id: 'PAY002', date: '2023-10-18', orderId: 'ORD004', amount: 35.20, status: 'Completed' },
    { id: 'PAY003', date: '2023-10-15', orderId: 'ORD006', amount: 88.00, status: 'Completed' },
    { id: 'PAY004', date: '2023-10-26', orderId: 'ORD002', amount: 75.50, status: 'Pending' },
    { id: 'PAY005', date: '2023-10-27', orderId: 'ORD007', amount: 12.99, status: 'Pending' },
  ];
  
  private readonly mockReturns: Return[] = [
    { id: 'RET001', orderId: 'ORD001', customerName: 'Alice Johnson', date: '2023-10-28', reason: 'Item defective', status: 'Pending' },
    { id: 'RET002', orderId: 'ORD005', customerName: 'Ethan Davis', date: '2023-10-27', reason: 'Wrong size', status: 'Approved' },
    { id: 'RET003', orderId: 'ORD007', customerName: 'George Harris', date: '2023-10-29', reason: 'Not as described', status: 'Rejected' },
  ];

  private readonly mockQualityCatalogs: QualityCatalog[] = [
    { id: 'QC001', name: 'Kanchan Elegant Art Silk Kurtis Vol 5', catalogId: '1234556', rating: 4.0, images: ['https://picsum.photos/seed/kurti1a/80', 'https://picsum.photos/seed/kurti1b/80', 'https://picsum.photos/seed/kurti1c/80'], badQualityScore: 20, oneAndTwoStarRatings: 30, totalRatings: 150, avgOrdersPerDay: 50 },
    { id: 'QC002', name: 'Kanchan Elegant Art Silk Kurtis Vol 1', catalogId: '1234356', rating: 1.0, images: ['https://picsum.photos/seed/kurti2a/80', 'https://picsum.photos/seed/kurti2b/80', 'https://picsum.photos/seed/kurti2c/80'], badQualityScore: 20, oneAndTwoStarRatings: 20, totalRatings: 100, avgOrdersPerDay: 50 },
    { id: 'QC003', name: 'Kanchan Elegant Art Silk Kurtis Vol 7', catalogId: '1234656', rating: 1.0, images: ['https://picsum.photos/seed/kurti3a/80', 'https://picsum.photos/seed/kurti3b/80', 'https://picsum.photos/seed/kurti3c/80'], badQualityScore: 20, oneAndTwoStarRatings: 30, totalRatings: 150, avgOrdersPerDay: 45 },
    { id: 'QC004', name: 'Kanchan Elegant Art Silk Kurtis Vol 2', catalogId: '1234456', rating: 1.0, images: ['https://picsum.photos/seed/kurti4a/80', 'https://picsum.photos/seed/kurti4b/80', 'https://picsum.photos/seed/kurti4c/80'], badQualityScore: 9, reason: 'High Wrong Product Dispatch', oneAndTwoStarRatings: 8, totalRatings: 90, avgOrdersPerDay: 28 },
  ];

  orders = signal<Order[]>(this.mockOrders);
  products = signal<Product[]>(this.mockProducts);
  payments = signal<Payment[]>(this.mockPayments);
  returns = signal<Return[]>(this.mockReturns);
  qualityCatalogs = signal<QualityCatalog[]>(this.mockQualityCatalogs);

  addOrUpdateProduct(product: Partial<Product> & { id?: string }): void {
    this.products.update(products => {
      if (product.id) {
        const index = products.findIndex(p => p.id === product.id);
        if (index > -1) {
          const updatedProducts = [...products];
          updatedProducts[index] = { ...updatedProducts[index], ...product };
          return updatedProducts;
        }
      }
      const newProduct: Product = {
        id: `PROD${Date.now()}`,
        name: product.name || 'New Product',
        sku: product.sku || '',
        price: product.price || 0,
        stock: product.stock || 0,
        status: product.status || 'Active',
        imageUrl: product.imageUrl || `https://picsum.photos/seed/${Date.now()}/200`,
      };
      return [...products, newProduct];
    });
  }

  updateOrderStatus(orderId: string, status: Order['status']): void {
    this.orders.update(orders => {
      return orders.map(order => 
        order.id === orderId ? { ...order, status } : order
      );
    });
  }
}