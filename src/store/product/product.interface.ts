import { Product } from "../products/products.interface";
import { StoreStatus } from "../store.interface";

export interface ProductState {
     status: StoreStatus;
     data: Product;
     error?: string | undefined;
}
