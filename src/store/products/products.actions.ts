import { Product } from "./products.interface";

export enum ProductsActionType {
     /* CRUD operation
       Create
       Read
       Update
       Delete
    */

     GET = "[products] get",
     GET_OK = "[products] get ok",
     GET_ERR = "[products] get err",
}

export interface GetProductsAction {
     type: ProductsActionType.GET;
     payload: string;
}
export const getProductsAction = (payload: string): GetProductsAction => ({
     type: ProductsActionType.GET,
     payload,
});

export interface GetProductsOkAction {
     type: ProductsActionType.GET_OK;
     payload: Product[];
}
export const getProductsOkAction = (
     payload: Product[]
): GetProductsOkAction => ({
     type: ProductsActionType.GET_OK,
     payload,
});

export interface GetProductsErrAction {
     type: ProductsActionType.GET_ERR;
     payload: string;
}
export const getProductsErrAction = (
     payload: string
): GetProductsErrAction => ({
     type: ProductsActionType.GET_ERR,
     payload,
});

export type ProductsActions =
     | GetProductsAction
     | GetProductsErrAction
     | GetProductsOkAction;
