export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string[];
  images: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}
