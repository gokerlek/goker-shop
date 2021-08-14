import { map } from "rxjs/operators";
import { http } from "../http";
import { Product } from "./products.interface";

export class ProductsService {
     static getAll() {
          return http.get("/products").pipe(
               map((res) => {
                    return res.response as Product[];
               })
          );
     }
}
