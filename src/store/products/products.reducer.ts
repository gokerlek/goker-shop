import { ProductsState } from "./products.interface";
import { StoreStatus } from "../store.interface";
import { ProductsActions, ProductsActionType } from "./products.actions";

const productsInitialState: ProductsState = {
     status: StoreStatus.INITIAL,
     data: [],
     error: undefined,
     searchTerm: "",
};

export const productsReducer = (
     state = productsInitialState,
     action: ProductsActions
) => {
     switch (action.type) {
          case ProductsActionType.GET: {
               return {
                    ...state,
                    status: StoreStatus.PENDING,
                    searchTerm: action.payload,
                    data: action.payload.length > 1 ? state.data : [],
               };
          }
          case ProductsActionType.GET_OK: {
               return {
                    ...state,
                    status: StoreStatus.SUCCESS,
                    data: action.payload,
               };
          }
          case ProductsActionType.GET_ERR: {
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
