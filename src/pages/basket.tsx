import { useState, useEffect } from "react";

interface BasketType {
     date: string;
     id: 0;
     userId: 0;
     products: { productId: number; quantity: number }[];
     product: {
          id: number;
          title: string;
          price: number;
          category: string;
          description: string;
          image: string;
          amount: number;
     }[];
}

export const Basket: React.FC = () => {
     const [baskets, setBaskets] = useState<BasketType>();
     useEffect(() => {
          fetch("https://fakestoreapi.com/carts/user/1")
               .then((res) => res.json() as Promise<BasketType>)
               .then((json) => setBaskets(json));
     }, []);

     const [ned, setN] = useState({
          date: "",
          id: 0,
          userId: 0,
          products: [{ productId: 0, quantity: 0 }],
     });
     useEffect(() => {
          fetch("https://fakestoreapi.com/carts", {
               method: "POST",
               body: JSON.stringify({
                    userId: 5,
                    date: `2020-02-03`,
                    products: [
                         { productId: 5, quantity: 1 },
                         { productId: 1, quantity: 5 },
                    ],
               }),
          })
               .then((res) => res.json() as Promise<BasketType>)
               .then((json) => setN(json));
     }, []);
     console.log(ned.products);

     return (
          <p>
               Basket
               <div> {baskets?.products.map((basket) => basket.productId)}</div>
               {ned.id}
          </p>
     );
};
