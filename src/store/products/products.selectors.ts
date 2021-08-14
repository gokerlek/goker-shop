import { createSelector } from "reselect";
import { AppState } from "../app-state.interface";
import { ProductsState } from "./products.interface";

export const getProductsState = (state: AppState) => state.products;
export const getProducts = createSelector(
     getProductsState,
     (productsState: ProductsState) => productsState.data
);
export const getSearchTerms = createSelector(
     getProductsState,
     (productsState) => productsState.searchTerm
);
export const getFilterProducts = createSelector(
     getProducts,
     getSearchTerms,
     (products, searchTerms) =>
          products
               .filter(
                    (data) =>
                         searchTerms.length > 1 &&
                         data.title
                              .toLowerCase()
                              .includes(searchTerms.toLowerCase())
               )
               .slice(0, 5)
);
