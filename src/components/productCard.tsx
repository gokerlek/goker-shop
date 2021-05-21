import { Link } from "react-router-dom";

export const ProductCard: React.FC<{
     id?: Number;
     title: String;
     price?: Number;
     category?: String;
     description?: String;
     image: String;
}> = ({ id, title, price, category, description, image }) => {
     return (
          <div className='w-full max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden'>
               <div
                    className='flex items-end justify-end h-56 w-full bg-cover'
                    style={{ backgroundImage: `url(${image})` }}>
                    <button className='p-2 rounded-full bg-gray-700 mx-5 -mb-4 hover:bg-gray-600 hover:border-gray-900 hover:border-opacity-100 focus:outline-none focus:bg-red-900'>
                         <svg
                              className='w-7'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='white'
                              viewBox='0 0 20 20'>
                              <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                         </svg>
                    </button>
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
