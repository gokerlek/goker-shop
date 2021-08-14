import { combineEpics } from "redux-observable";
import { productsEpic } from "./products/products.epic";

export const epic = combineEpics(productsEpic);
