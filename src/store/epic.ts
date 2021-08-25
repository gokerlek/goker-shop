import { combineEpics } from "redux-observable";
import { cartEpic } from "./cart/cart.epic";
import { categoryEpic } from "./category/category.epic";
import { productEpic } from "./product/product.epic";
import { productsEpic } from "./products/products.epic";

// @ts-ignore
export const epic = combineEpics<any>(
     cartEpic,
     categoryEpic,
     productsEpic,
     productEpic
);
