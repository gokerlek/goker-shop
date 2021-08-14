import { Product } from "../products/products.interface";
import { StoreStatus } from "../store.interface";
import { ProductActions, ProductActionType } from "./product.actions";
import { ProductState } from "./product.interface";

const productInitialState: ProductState = {
     status: StoreStatus.INITIAL,
     data: {} as Product,
     error: undefined,
};

export const productReducer = (
     state = productInitialState,
     action: ProductActions
) => {
     switch (action.type) {
          case ProductActionType.GET: {
               return {
                    ...state,
                    status: StoreStatus.PENDING,
               };
          }
          case ProductActionType.GET_OK: {
               return {
                    ...state,
                    status: StoreStatus.SUCCESS,
                    data: action.payload,
               };
          }
          case ProductActionType.GET_ERR: {
               return {
                    ...state,
                    status: StoreStatus.ERROR,
                    error: action.payload,
               };
          }
          default:
               return state;
     }
};
