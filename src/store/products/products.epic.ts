import { Action } from "redux";
import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, debounceTime, map, Observable, of, switchMap } from "rxjs";
import {
     getProductsErrAction,
     getProductsOkAction,
     ProductsActions,
     ProductsActionType,
} from "./products.actions";
import { ProductsService } from "./products.service";

const getProducts: Epic<ProductsActions> = (action$) => {
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
