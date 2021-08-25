import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";
import {
     getCartErrAction,
     getCartOkAction,
     CartActions,
     CartActionType,
     GetCartAction,
     updateCartOkAction,
     updateCartErrAction,
     UpdateCartAction,
     GetCartOkAction,
     getCartProductOkAction,
     getCartProductErrAction,
} from "./cart.actions";
import { Cart } from "./cart.interface";
import { CartService } from "./cart.service";

const getCart: Epic<CartActions> = (action$) => {
     return action$.pipe(
          ofType(CartActionType.GET),
          switchMap((action) =>
               CartService.get((action as GetCartAction).payload).pipe(
                    map((cart) => getCartOkAction(cart as Cart)),
                    catchError((err) => of(getCartErrAction(err)))
               )
          )
     );
};

const getCartProducts: Epic<CartActions> = (action$) => {
     return action$.pipe(
          ofType(CartActionType.GET_OK, CartActionType.UPDATE_OK),
          switchMap((action) =>
               CartService.getCartProduct(
                    (action as GetCartOkAction).payload.products.map(
                         (cartProduct) => cartProduct.productId
                    )
               ).pipe(
                    map((products) => getCartProductOkAction(products)),
                    catchError((err) => of(getCartProductErrAction(err)))
               )
          )
     );
};

const updateCart: Epic<CartActions> = (action$) => {
     return action$.pipe(
          ofType(CartActionType.UPDATE),
          switchMap((action) =>
               CartService.update((action as UpdateCartAction).payload).pipe(
                    map((cart: any) => updateCartOkAction(cart)),
                    catchError((err) => of(updateCartErrAction(err)))
               )
          )
     );
};

export const cartEpic = combineEpics(getCart, updateCart, getCartProducts);
