import { useState, useEffect } from "react";

export const Basket: React.FC = () => {
     const [basket, setBasket] = useState();
     useEffect(() => {
          fetch("https://fakestoreapi.com/carts")
               .then((res) => res.json())
               .then((json) => setBasket(json));
     }, []);
     console.log(basket);
     return <p>Basket</p>;
};
