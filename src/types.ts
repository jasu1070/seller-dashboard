export interface Order {
  id: string;
  customerName: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Canceled';
  paymentMethod: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: 'Active' | 'Inactive';
  imageUrl: string;
}

export interface Payment {
  id:string;
  date: string;
  orderId: string;
  amount: number;
  status: 'Completed' | 'Pending';
}

export interface Return {
  id: string;
  orderId: string;
  customerName: string;
  date: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface QualityCatalog {
  id: string;
  name: string;
  catalogId: string;
  rating: number;
  images: string[];
  badQualityScore: number;
  reason?: string;
  oneAndTwoStarRatings: number;
  totalRatings: number;
  avgOrdersPerDay: number;
}