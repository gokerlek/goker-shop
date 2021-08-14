import { CombinedState, combineReducers, Reducer } from "redux";
import { AppState } from "./app-state.interface";
import { categoryReducer } from "./category/category.reducer";
import { productReducer } from "./product/product.reducer";
import { productsReducer } from "./products/products.reducer";

export const reducer: Reducer<CombinedState<AppState>, any> = combineReducers({
     products: productsReducer,
     category: categoryReducer,
     product: productReducer,
});
