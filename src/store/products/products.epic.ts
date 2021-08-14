import { Action } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { catchError, debounceTime, map, Observable, of, switchMap } from "rxjs";
import {
     getProductsErrAction,
     getProductsOkAction,
     ProductsActionType,
} from "./products.actions";
import { ProductsService } from "./products.service";

const getProducts = (action$: Observable<Action>) => {
     return action$.pipe(
          ofType(ProductsActionType.GET),
          debounceTime(300), // kullanıcının yazma hızına göre verilmiş 300 milisaniye bekleme süresi.
          switchMap(() =>
               ProductsService.getAll().pipe(
                    map((products) => getProductsOkAction(products)),
                    catchError((err) => of(getProductsErrAction(err)))
               )
          )
     );
};

export const productsEpic = combineEpics(getProducts);
