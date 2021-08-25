import { CombinedState, combineReducers, Reducer } from "redux";
import { AppState } from "./app-state.interface";
import { cartReducer } from "./cart/cart.reducer";
import { categoryReducer } from "./category/category.reducer";
import { productReducer } from "./product/product.reducer";
import { productsReducer } from "./products/products.reducer";

export const reducer: Reducer<CombinedState<AppState>, any> = combineReducers({
     cart: cartReducer,
     products: productsReducer,
     category: categoryReducer,
     product: productReducer,
});
