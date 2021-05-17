import { Link } from "react-router-dom";
import { item } from "../interfaces/item";

interface FlatListProps {
     searchResults: item[];
}

export const FlatList: React.FC<FlatListProps> = ({ searchResults }) => {
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
                    {searchResults.map((item) => (
                         <li className='px-4 py-3 overflow-ellipsis truncate'>
                              <Link
                                   key={`${item.id}`}
                                   to={`/products/${item.category.replaceAll(
                                        " ",
                                        "_"
                                   )}`}>
                                   {item.title}
                              </Link>
                         </li>
                    ))}
               </ul>
          </div>
     ) : null;
};
