import { Product } from "../products/products.interface";
import { Cart } from "./cart.interface";

export enum CartActionType {
     /* CRUD operation
       Create
       Read
       Update
       Delete
    */

     GET = "[cart] get",
     GET_OK = "[cart] get ok",
     GET_ERR = "[cart] get err",
     UPDATE = "[cart] update",
     UPDATE_OK = "[cart] update ok",
     UPDATE_ERR = "[cart] update err",
     GET_CART_PRODUCT_OK = "[cart] getCartProduct ok",
     GET_CART_PRODUCT_ERR = "[cart] getCartProduct err",
}

export interface GetCartAction {
     type: CartActionType.GET;
     payload: number;
}
export const getCartAction = (payload: number): GetCartAction => ({
     type: CartActionType.GET,
     payload,
});

export interface GetCartOkAction {
     type: CartActionType.GET_OK;
     payload: Cart;
}
export const getCartOkAction = (payload: Cart): GetCartOkAction => ({
     type: CartActionType.GET_OK,
     payload,
});

export interface GetCartErrAction {
     type: CartActionType.GET_ERR;
     payload: string;
}
export const getCartErrAction = (payload: string): GetCartErrAction => ({
     type: CartActionType.GET_ERR,
     payload,
});

export interface UpdateCartAction {
     type: CartActionType.UPDATE;
     payload: { cartId: number; cart: Cart };
}

export const updateCartAction = (payload: {
     cartId: number;
     cart: Cart;
}): UpdateCartAction => ({
     type: CartActionType.UPDATE,
     payload,
});

export interface UpdateCartOkAction {
     type: CartActionType.UPDATE_OK;
     payload: { cartId: number; cart: Cart };
}

export const updateCartOkAction = (payload: {
     cartId: number;
     cart: Cart;
}): UpdateCartOkAction => ({
     type: CartActionType.UPDATE_OK,
     payload,
});
export interface UpdateCartErrAction {
     type: CartActionType.UPDATE_ERR;
     payload: string;
}

export const updateCartErrAction = (payload: string): UpdateCartErrAction => ({
     type: CartActionType.UPDATE_ERR,
     payload,
});
export interface GetCartProductOkAction {
     type: CartActionType.GET_CART_PRODUCT_OK;
     payload: Product[];
}
export const getCartProductOkAction = (
     payload: Product[]
): GetCartProductOkAction => ({
     type: CartActionType.GET_CART_PRODUCT_OK,
     payload,
});
export interface GetCartProductErrAction {
     type: CartActionType.GET_CART_PRODUCT_ERR;
     payload: string;
}

export const getCartProductErrAction = (
     payload: string
): GetCartProductErrAction => ({
     type: CartActionType.GET_CART_PRODUCT_ERR,
     payload,
});

export type CartActions =
     | GetCartAction
     | GetCartErrAction
     | GetCartOkAction
     | UpdateCartAction
     | UpdateCartErrAction
     | UpdateCartOkAction
     | GetCartProductOkAction
     | GetCartProductErrAction;
