import { CombinedState, combineReducers, Reducer } from "redux";
import { AppState } from "./app-state.interface";
import { productsReducer } from "./products/products.reducer";

export const reducer: Reducer<CombinedState<AppState>, any> = combineReducers({
     products: productsReducer,
});
