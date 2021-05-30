import { useState, useEffect } from "react";
import { ProductInterface } from "../interfaces/product-interface";

interface BaskeType {
     date: "";
     id: number;
     userId: number;
     products: { productId: number; quantity: number }[];
}

export const Basket: React.FC = () => {
     const [baskets, setBaskets] = useState({
          date: "",
          id: 0,
          userId: 0,
          products: [{ productId: 0, quantity: 0 }],
     });
     useEffect(() => {
          fetch("https://fakestoreapi.com/carts/1")
               .then((res) => res.json())
               .then((json) => setBaskets(json));
     }, []);
     console.log(baskets.products.length);
     return (
          <p>
               Basket
               {baskets.products.map((basket) => basket.productId)}
          </p>
     );
};
