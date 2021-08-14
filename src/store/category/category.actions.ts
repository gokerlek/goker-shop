import { Product } from "../products/products.interface";

export enum CategoryActionType {
     /* CRUD operation
       Create
       Read
       Update
       Delete
    */

     GET = "[category] get",
     GET_OK = "[category] get ok",
     GET_ERR = "[category] get err",
}

export interface GetCategoryAction {
     type: CategoryActionType.GET;
     payload: string;
}
export const getCategoryAction = (payload: string): GetCategoryAction => ({
     type: CategoryActionType.GET,
     payload,
});

export interface GetCategoryOkAction {
     type: CategoryActionType.GET_OK;
     payload: Product[];
}
export const getCategoryOkAction = (
     payload: Product[]
): GetCategoryOkAction => ({
     type: CategoryActionType.GET_OK,
     payload,
});

export interface GetCategoryErrAction {
     type: CategoryActionType.GET_ERR;
     payload: string;
}
export const getCategoryErrAction = (
     payload: string
): GetCategoryErrAction => ({
     type: CategoryActionType.GET_ERR,
     payload,
});

export type CategoryActions =
     | GetCategoryAction
     | GetCategoryErrAction
     | GetCategoryOkAction;
