import { Link } from "react-router-dom";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductInterface } from "../interfaces/product-interface";

export type PropsProductCard = {
     product: ProductInterface;
};

export const ProductCard: React.FC<PropsProductCard> = ({ product }) => {
     const handleAddToCart = () => {
          console.log(product.id);
     };
     return (
          <div className='w-full max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden'>
               <div
                    className='flex items-end justify-end h-56 w-full bg-cover'
                    style={{ backgroundImage: `url(${product.image})` }}>
                    <AddToCartButton onClick={handleAddToCart}>
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
                    <div className='text-gray-500 mt-2'>${product.price}</div>
               </div>
          </div>
     );
};
