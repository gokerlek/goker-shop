import { createSelector } from "reselect";
import { AppState } from "../app-state.interface";
import { CartState } from "./cart.interface";
import { getCategory } from "../category/category.selectors";

export const getCartState = (state: AppState) => state.cart;
export const getCart = createSelector(
     getCartState,
     (cartState: CartState) => cartState.data
);
export const getCartProducts = createSelector(
     getCartState,
     (cartState: CartState) => cartState.products
);
export const getTotalPricesOfCart = createSelector(
     getCartProducts,
     getCart,
     (products, userCart) => {
          const prices =
               userCart.products &&
               userCart.products.map((product) => {
                    const findPrices = products?.find(
                         (userProduct) => userProduct.id === product.productId
                    );

                    return findPrices ? findPrices.price * product.quantity : 0;
               });

          return prices && prices.reduce((sum, cur) => sum + cur, 0);
     }
);
