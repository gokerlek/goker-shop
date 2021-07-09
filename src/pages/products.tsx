import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ProductCard } from "../components/productCard";
import { Search } from "../components/search";
import { ProductInterface } from "../interfaces/product-interface";
import { Logo } from "../components/logo";
import { AddToCartButton } from "../components/add-to-cart-button";
import { Link } from "react-router-dom";

interface BasketType {
     date: string;
     id: number;
     userId: number;
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

export const Products: React.FC = () => {
     const { category }: { category: string } = useParams();
     const [products, setProducts] = useState<ProductInterface[]>([]);
     const [userCart, setUserCart] = useState<BasketType>();
     const [carts, setCarts] = useState<ProductInterface>();
     const [oner, setOner] = useState<BasketType>();
     console.log(oner?.id);
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

     useEffect(() => {
          fetch("https://fakestoreapi.com/carts/1")
               .then((res) => res.json() as Promise<BasketType>)
               .then((json) => setUserCart(json));
     }, []);

     const increaseQuantity = (productId: number, quantity: number) => {
          const updatedUserCart = userCart;
          const index = (userCart as BasketType).products.findIndex(
               (product) => product.productId === productId
          );
          if (index > -1) {
               (updatedUserCart as BasketType).products[
                    index
               ].quantity = quantity;
          } else {
               (updatedUserCart as BasketType).products.push({
                    productId,
                    quantity,
               });
          }
          setUserCart(updatedUserCart);
     };

     const addProductToCart = (productId: number) => () => {
          const quantity =
               userCart?.products.find(
                    (product) => product.productId === productId
               )?.quantity || 0;
          const newQuantity = quantity + 1;

          increaseQuantity(productId, newQuantity);

          fetch("https://fakestoreapi.com/carts/1", {
               method: "PATCH",
               body: JSON.stringify({
                    userId: 1,
                    date: 2019 - 12 - 10,
                    products: [{ productId, quantity: newQuantity }],
               }),
          });
     };
     console.log(userCart);
     return (
          <>
               <div className='h-productLine flex items-center justify-between bg-productLine mb-16'>
                    <div className='flex justify-between w-1/3'>
                         <Logo xsmall />
                         <Search />
                    </div>
                    <div className='m-4 p-3 w-40 border-gray-50 border rounded-lg'>
                         basket
                    </div>
               </div>
               <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
                    {products.map((product) => (
                         <div
                              key={product.id}
                              className='w-full h-80 max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden'>
                              <div
                                   className='flex items-end justify-end h-56 w-full bg-cover'
                                   style={{
                                        backgroundImage: `url(${product.image})`,
                                   }}>
                                   <AddToCartButton
                                        onClick={addProductToCart(product.id)}>
                                        <svg
                                             className='w-7'
                                             xmlns='http://www.w3.org/2000/svg'
                                             fill='white'
                                             viewBox='0 0 20 20'>
                                             <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                                        </svg>
                                   </AddToCartButton>
                              </div>
                              <div className='px-5 py-3'>
                                   <div className='text-footerGray overflow-ellipsis truncate'>
                                        <Link to={`/product/${product.id}`}>
                                             {product.title}
                                        </Link>
                                   </div>
                                   <div className='text-gray-500 mt-2'>
                                        ${product.price}
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </>
     );
};
