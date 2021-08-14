import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Search } from "../components/search";
import { ProductInterface } from "../interfaces/product-interface";
import { Logo } from "../components/logo";
import { AddToCartButton } from "../components/add-to-cart-button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/category/category.selectors";
import { getCategoryAction } from "../store/category/category.actions";

interface BasketType {
     date: string;
     id: number;
     userId: number;
     products: { productId: number; quantity: number }[];
     product: ProductInterface;
}

export const Products: React.FC = () => {
     const { category }: { category: string } = useParams();
     const products = useSelector(getCategory);

     const [userCart, setUserCart] = useState<BasketType>(({
          products: [],
     } as unknown) as BasketType);
     const [userProducts, setUserProducts] = useState<ProductInterface[]>(
          [] as ProductInterface[]
     );

     const [totalPriceOfCart, setTotalPriceOfCart] = useState<number>(0);

     const updateProductCart = (quantity: number, productId: number) => {
          const updatedUserCart = userCart;
          const findIndex = userCart.products.findIndex(
               (product) => product.productId === productId
          );

          findIndex > -1
               ? (updatedUserCart.products[findIndex].quantity = quantity)
               : updatedUserCart.products.push({ quantity, productId });

          return updatedUserCart;
     };

     const addProductToCart = (productId: number) => () => {
          // eğer ürün eklenmemişse ürünü userCart quantity 1 olarak ekle. +
          // eğer eren ürün varsa quantity 1 arttır +
          // yeni değerleri setuserCart çağır +
          // yeni değerlerle API patch request yap +

          let quantity;
          const findProduct = userCart.products.find(
               (product) => product.productId === productId
          )?.quantity;

          if (!findProduct) {
               quantity = 1;
          } else {
               quantity = findProduct + 1;
          }

          const updatedProductCart = updateProductCart(quantity, productId);
          setUserCart({ ...updatedProductCart });

          fetch("https://fakestoreapi.com/carts/1", {
               method: "PATCH",
               body: JSON.stringify({
                    userId: 1,
                    date: 2019 - 12 - 10,
                    products: [...updatedProductCart.products],
               }),
          });
     };
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getCategoryAction(category.replaceAll("_", " ")));
     }, [category]);

     useEffect(() => {
          fetch("https://fakestoreapi.com/carts/1")
               .then((res) => res.json() as Promise<BasketType>)
               .then((json) => setUserCart(json));
     }, [setUserCart]);

     useEffect(() => {
          Promise.all(
               userCart.products.map(
                    (product) =>
                         fetch(
                              `https://fakestoreapi.com/products/${product.productId}`
                         ).then((res) =>
                              res.json()
                         ) as Promise<ProductInterface>
               )
          ).then(setUserProducts);
     }, [userCart, setUserProducts]);

     useEffect(() => {
          const prices = userCart.products.map((product) => {
               const findPrices = userProducts.find(
                    (userProduct) => userProduct.id === product.productId
               );
               return findPrices ? findPrices.price * product.quantity : 0;
          });
          setTotalPriceOfCart(prices.reduce((sum, cur) => sum + cur, 0));
     }, [setTotalPriceOfCart, userCart, userProducts]);

     return (
          <>
               <div className='h-productLine flex items-center justify-between bg-productLine mb-16'>
                    <div className='flex justify-between w-1/3'>
                         <Logo xsmall />
                         <Search />
                    </div>
                    <div className='m-4 p-3 w-40 border-gray-50 border rounded-lg'>
                         basket {totalPriceOfCart}
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
