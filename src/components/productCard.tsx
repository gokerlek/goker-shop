import { Link } from "react-router-dom";
import { addToCartButton } from "./add-to-cart-button";

export type propsProductCard = {
     id?: Number;
     title: String;
     price?: Number;
     category?: String;
     description?: String;
     image: String;
};

export const ProductCard: React.FC<propsProductCard> = ({
     id,
     title,
     price,
     category,
     description,
     image,
}) => {
     return (
          <div className='w-full max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden'>
               <div
                    className='flex items-end justify-end h-56 w-full bg-cover'
                    style={{ backgroundImage: `url(${image})` }}>
                    <addToCartButton item={item} addToCart={addToCart} />
               </div>
               <div className='px-5 py-3'>
                    <div className='text-footerGray overflow-ellipsis truncate'>
                         <Link to={`/product/${id}`}>{title}</Link>
                    </div>
                    <div className='text-gray-500 mt-2'>${price}</div>
               </div>
          </div>
     );
};
