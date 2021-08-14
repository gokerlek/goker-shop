import { StoreStatus } from "../store.interface";
import { CategoryActions, CategoryActionType } from "./category.actions";
import { CategoryState } from "./category.interface";

const categoryInitialState: CategoryState = {
     status: StoreStatus.INITIAL,
     data: [],
     error: undefined,
};

export const categoryReducer = (
     state = categoryInitialState,
     action: CategoryActions
) => {
     switch (action.type) {
          case CategoryActionType.GET: {
               return {
                    ...state,
                    status: StoreStatus.PENDING,
               };
          }
          case CategoryActionType.GET_OK: {
               return {
                    ...state,
                    status: StoreStatus.SUCCESS,
                    data: action.payload,
               };
          }
          case CategoryActionType.GET_ERR: {
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
