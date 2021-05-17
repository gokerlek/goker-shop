import { useState, useEffect } from "react";
import { item } from "../interfaces/item";
import { FlatList } from "./flat-list";

export const Search: React.FC = () => {
     const [searchResults, setSearchResults] = useState<item[]>([]);
     const [searchTerm, setSearchTerm] = useState<string>("");
     const handleChange = (event: any) => {
          setSearchTerm(event.target.value);
     };
     useEffect(() => {
          if (searchTerm.length > 1) {
               fetch("https://fakestoreapi.com/products")
                    .then((res) => res.json() as Promise<item[]>)
                    .then((json) =>
                         setSearchResults(
                              json.filter((data) =>
                                   data.title
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                              )
                         )
                    );
          } else {
               setSearchResults([]);
          }
     }, [searchTerm]);

     return (
          <div className='w-1/3 realtive'>
               <div className='bg-white mt-4 text-sm rounded-lg py-2 px-4 flex w-full cursor-pointer'>
                    <input
                         className=' 
                         w-full m-0 p-0 
                         text-gray-600 border-none  placeholder-gray-400                          
                         focus:ring-transparent 
                         cursor-pointer'
                         type='text'
                         placeholder='Search your dream product...'
                         value={searchTerm}
                         onChange={handleChange}
                    />
                    <svg
                         xmlns='http://www.w3.org/2000/svg'
                         className='h-6 w-6 text-gray-400'
                         fill='none'
                         viewBox='0 0 24 24'
                         stroke='currentColor'>
                         <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                         />
                    </svg>
               </div>
               <FlatList searchResults={searchResults} />
          </div>
     );
};
