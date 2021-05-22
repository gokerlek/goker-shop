import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Product: React.FC = () => {
     const { id }: { id: string } = useParams();
     const [items, setItems] = useState({
          id: 0,
          title: "",
          price: 0,
          category: "",
          description: "",
          image: "",
     });
     useEffect(() => {
          fetch(`https://fakestoreapi.com/products/${id}`)
               .then((res) => res.json())
               .then((json) => setItems(json));
     }, []);
     console.log(items.title);

     return (
          <div className='text-gray-600 body-font overflow-hidden'>
               <div className='container px-5 py-24 mx-auto'>
                    <div className='lg:w-4/5 mx-auto flex flex-wrap'>
                         <img
                              alt='ecommerce'
                              className='lg:w-1/3 w-auto lg:h-64 h-64 object-contain object-center rounded'
                              src={items.image}
                         />
                         <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                                   {items.title}
                              </h1>
                              <p className='leading-relaxed'>
                                   {items.description}
                              </p>

                              <div className='flex my-10'>
                                   <span className='title-font font-medium text-2xl text-gray-900'>
                                        ${items.price}
                                   </span>
                                   <button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                                        Buy
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
