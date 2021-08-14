import { Product } from "../products/products.interface";

export enum ProductActionType {
     /* CRUD operation
       Create
       Read
       Update
       Delete
    */

     GET = "[product] get",
     GET_OK = "[product] get ok",
     GET_ERR = "[product] get err",
}

export interface GetProductAction {
     type: ProductActionType.GET;
     payload: string;
}
export const getProductAction = (payload: string): GetProductAction => ({
     type: ProductActionType.GET,
     payload,
});

export interface GetProductOkAction {
     type: ProductActionType.GET_OK;
     payload: Product;
}
export const getProductOkAction = (payload: Product): GetProductOkAction => ({
     type: ProductActionType.GET_OK,
     payload,
});

export interface GetProductErrAction {
     type: ProductActionType.GET_ERR;
     payload: string;
}
export const getProductErrAction = (payload: string): GetProductErrAction => ({
     type: ProductActionType.GET_ERR,
     payload,
});

export type ProductActions =
     | GetProductAction
     | GetProductErrAction
     | GetProductOkAction;
