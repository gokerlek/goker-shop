import { useState, useEffect } from "react";
import { useParams } from "react-router";

interface item {
     id: Number;
     title: String;
     price: Number;
     category: String;
     description: String;
     image: String;
}

export const Product: React.FC = () => {
     const { id }: { id: string } = useParams();
     const [items, setItems] = useState({ title: "", id: "" });
     useEffect(() => {
          fetch(`https://fakestoreapi.com/products/${id}`)
               .then((res) => res.json())
               .then((json) => setItems(json));
     }, []);
     console.log(items.title);

     return (
          <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
               {items.title}
          </div>
     );
};
