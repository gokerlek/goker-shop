import { CartState } from "./cart/cart.interface";
import { CategoryState } from "./category/category.interface";
import { ProductState } from "./product/product.interface";
import { ProductsState } from "./products/products.interface";

export interface AppState {
     products: ProductsState;
     category: CategoryState;
     product: ProductState;
     cart: CartState;
}
