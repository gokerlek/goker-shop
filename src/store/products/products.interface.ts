import { StoreStatus } from "../store.interface";

export interface Product {
     id: number;
     title: string;
     price: number;
     category: string;
     description: string;
     image: string;
}

export interface ProductsState {
     searchTerm: string;
     status: StoreStatus;
     data: Product[];
     error?: string | undefined;
}
