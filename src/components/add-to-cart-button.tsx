export type Props = {
     onClick: () => void;
};

export const AddToCartButton: React.FC<Props> = ({ onClick, children }) => {
     return (
          <button
               onClick={onClick}
               className='p-2 rounded-full bg-gray-700 mx-5 -mb-4 hover:bg-gray-600 hover:border-gray-900 hover:border-opacity-100 focus:outline-none focus:bg-red-900'>
               {children}
          </button>
     );
};
