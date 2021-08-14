import { combineEpics } from "redux-observable";
import { categoryEpic } from "./category/category.epic";
import { productEpic } from "./product/product.epic";
import { productsEpic } from "./products/products.epic";

// @ts-ignore
export const epic = combineEpics(productsEpic, categoryEpic, productEpic);
