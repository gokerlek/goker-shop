import { map } from "rxjs/operators";
import { http } from "../http";
import { Cart } from "./cart.interface";
import { ProductService } from "../product/product.service";
import { forkJoin } from "rxjs";

export class CartService {
     static get(number: number) {
          return http.get(`/carts/${number}`).pipe(
               map((res) => {
                    return res.response as Cart;
               })
          );
     }
     static update({ cartId, cart }: { cartId: number; cart: Cart }) {
          return http
               .patch(`/carts/${cartId}`, cart)
               .pipe(map((res) => res.response));
     }

     static getCartProduct(productIds: number[]) {
          return forkJoin(...productIds.map((id) => ProductService.getAll(id)));
     } // promiseAll'un RxJS'teki hali gibi ama aynısı değil. Fake Api ile çalışığım için yapmak zonda kaldım
}
