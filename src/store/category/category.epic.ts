import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import {
     getCategoryErrAction,
     getCategoryOkAction,
     CategoryActionType,
     GetCategoryAction,
     CategoryActions,
} from "./category.actions";
import { CategoryService } from "./category.service";

const getCategory: Epic<CategoryActions> = (action$) => {
     return action$.pipe(
          ofType(CategoryActionType.GET),
          switchMap((action) =>
               CategoryService.getAll(
                    (action as GetCategoryAction).payload
               ).pipe(
                    map((category) => getCategoryOkAction(category)),
                    catchError((err) => of(getCategoryErrAction(err)))
               )
          )
     );
};

export const categoryEpic = combineEpics(getCategory);
