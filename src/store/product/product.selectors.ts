import { createSelector } from "reselect";
import { AppState } from "../app-state.interface";
import { StoreStatus } from "../store.interface";
import { ProductState } from "./product.interface";

export const getProductState = (state: AppState) => state.product;
export const getProduct = createSelector(
     getProductState,
     (productState: ProductState) => productState.data
);
export const getProductStatus = createSelector(
     getProductState,
     (productState) => productState.status
);

export const getIsProductPending = createSelector(getProductStatus, (status) =>
     [StoreStatus.INITIAL, StoreStatus.PENDING].includes(status)
);
