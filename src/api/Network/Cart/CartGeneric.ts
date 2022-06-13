import { Product, ProductItem } from '../MarketGeneric';

export interface Order {
  id: number;
  user_id: number;
  product_id: number;
  number: number;
  product: ProductItem;
}

export interface CartResponse {
  order: Order[];
}

export interface CartRoot {
  success: boolean;
  code: number;
  locale: string;
  message: string;
  data: CartResponse;
  show_alert: boolean;
}
