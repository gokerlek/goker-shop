import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFilterProducts } from "../store/products/products.selectors";

export const SearchSuggestions = () => {
     const searchResults = useSelector(getFilterProducts);

     return searchResults?.length > 0 ? (
          <div
               className='
          bg-white mt-4 
          text-gray-600 text-sm 
          border-transparent rounded-lg 
          w-1/3
          cursor-pointer
          absolute
          '>
               <ul className='divide-gray-200 divide-y '>
                    {searchResults.map((searchResult) => (
                         <li
                              key={`${searchResult.id}`}
                              className='px-4 py-3 overflow-ellipsis truncate'>
                              <Link
                                   to={`/products/${searchResult.category
                                        .toLocaleLowerCase()
                                        .replaceAll(" ", "_")}`}>
                                   {searchResult.title}
                              </Link>
                         </li>
                    ))}
               </ul>
          </div>
     ) : null;
};
