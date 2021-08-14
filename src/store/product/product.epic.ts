import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";
import {
     getProductErrAction,
     getProductOkAction,
     ProductActionType,
     GetProductAction,
     ProductActions,
} from "./product.actions";
import { ProductService } from "./product.service";

const getProduct: Epic<ProductActions> = (action$) => {
     return action$.pipe(
          ofType(ProductActionType.GET),
          switchMap((action) =>
               ProductService.getAll((action as GetProductAction).payload).pipe(
                    map((product) => getProductOkAction(product)),
                    catchError((err) => of(getProductErrAction(err)))
               )
          )
     );
};

export const productEpic = combineEpics(getProduct);
