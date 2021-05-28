import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductCard } from "../components/productCard";
import { ProductInterface } from "../interfaces/product-interface";

export const Products: React.FC = () => {
     const { category }: { category: string } = useParams();
     const [products, setProducts] = useState<ProductInterface[]>([]);
     useEffect(() => {
          fetch(
               `https://fakestoreapi.com/products/category/${category.replaceAll(
                    "_",
                    " "
               )}`
          )
               .then((res) => res.json() as Promise<ProductInterface[]>)
               .then((json) => setProducts(json));
     }, [category]);

     return (
          <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
               {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
               ))}
          </div>
     );
};
