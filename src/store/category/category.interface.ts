import { Product } from "../products/products.interface";
import { StoreStatus } from "../store.interface";

export interface CategoryState {
     status: StoreStatus;
     data: Product[];
     error?: string | undefined;
}
