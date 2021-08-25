import { Cart, CartState } from "./cart.interface";
import { StoreStatus } from "../store.interface";
import { CartActions, CartActionType } from "./cart.actions";

const cartInitialState: CartState = {
     status: StoreStatus.INITIAL,
     data: {} as Cart,
     error: undefined,
     products: [],
};

export const cartReducer = (
     state = cartInitialState,
     action: CartActions
): any => {
     switch (action.type) {
          case CartActionType.GET: {
               return {
                    ...state,
                    status: StoreStatus.PENDING,
                    data: state.data,
               };
          }
          case CartActionType.GET_OK: {
               return {
                    ...state,
                    status: StoreStatus.SUCCESS,
                    data: action.payload,
               };
          }

          case CartActionType.UPDATE: {
               return {
                    ...state,
                    status: StoreStatus.PENDING,
                    data: state.data,
               };
          }
          case CartActionType.UPDATE_OK: {
               return {
                    ...state,
                    status: StoreStatus.SUCCESS,
                    data: action.payload,
               };
          }
          case CartActionType.GET_CART_PRODUCT_OK: {
               return {
                    ...state,
                    status: StoreStatus.SUCCESS,
                    products: action.payload,
               };
          }
          case CartActionType.GET_ERR:
          case CartActionType.GET_CART_PRODUCT_ERR:
          case CartActionType.UPDATE_ERR: {
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
