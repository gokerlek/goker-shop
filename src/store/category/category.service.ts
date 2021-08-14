import { map } from "rxjs/operators";
import { http } from "../http";
import { Product } from "../products/products.interface";

export class CategoryService {
     static getAll(category: string) {
          return http.get(`/products/category/${category}`).pipe(
               map((res) => {
                    return res.response as Product[];
               })
          );
     }
}
