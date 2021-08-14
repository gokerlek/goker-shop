import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../store/products/products.actions";
import { getSearchTerms } from "../store/products/products.selectors";
import { SearchSuggestions } from "./search-suggestions";

export const Search: React.FC = () => {
     const dispatch = useDispatch();
     const searchTerms = useSelector(getSearchTerms);

     const handleChange = (event: any) => {
          dispatch(getProductsAction(event.target.value));
     };

     const [focus, setFocus] = useState(false);

     const handleBlur = () => {
          setTimeout(() => setFocus(false), 300);
     };
     const handleFocus = () => {
          setFocus(true);
     };

     return (
          <div className='w-1/3 '>
               <div className='bg-white mt-4 text-sm rounded-lg py-2 px-4 flex w-full cursor-pointer'>
                    <input
                         className='w-full m-0 p-0 text-gray-600 border-none placeholder-gray-400 focus:ring-transparent cursor-pointer'
                         type='text'
                         placeholder='Search your dream product...'
                         defaultValue={searchTerms}
                         onChange={handleChange}
                         onFocus={handleFocus}
                         onBlur={handleBlur}
                         data-testid='search'
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
               {focus ? <SearchSuggestions /> : null}
          </div>
     );
};
