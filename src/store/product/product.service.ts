import { map } from "rxjs/operators";
import { http } from "../http";
import { Product } from "../products/products.interface";

export class ProductService {
     static getAll(id: string) {
          return http.get(`/products/${id}`).pipe(
               map((res) => {
                    return res.response as Product;
               })
          );
     }
}
