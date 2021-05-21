import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductCard } from "../components/productCard";
import { item } from "../interfaces/item";

export const Products: React.FC = () => {
     const { category }: { category: string } = useParams();
     const [items, setItems] = useState<item[]>([]);
     useEffect(() => {
          fetch(
               `https://fakestoreapi.com/products/category/${category.replaceAll(
                    "_",
                    " "
               )}`
          )
               .then((res) => res.json() as Promise<item[]>)
               .then((json) => setItems(json));
     }, []);

     return (
          <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
               {items.map((item) => (
                    <div key={`${item.id}`}>
                         <ProductCard
                              id={item.id}
                              title={item.title}
                              price={item.price}
                              category={item.category}
                              description={item.description}
                              image={item.image}
                         />
                    </div>
               ))}
          </div>
     );
};
