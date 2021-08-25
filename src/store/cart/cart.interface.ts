import { Product } from "../products/products.interface";
import { StoreStatus } from "../store.interface";

export interface Cart {
     date: string;
     id?: number;
     userId: number;
     products: { productId: number; quantity: number }[];
}

export interface CartState {
     status: StoreStatus;
     data: Cart;
     products?: Product[];
     error?: string | undefined;
}
