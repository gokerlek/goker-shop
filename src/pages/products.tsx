import { useState, useEffect} from "react"
import { ProductCard } from "../components/productCard"

interface item     {
    id:Number,
    title:String,
    price:Number,
    category:String,
    description:String,
    image:String
  }

export const Products: React.FC =()=> {

    const [items, setItems] = useState<item[]>([])
    useEffect (()=> {
     fetch('https://fakestoreapi.com/products')
     .then(res => res.json() as Promise<item[]>)
     .then(json => setItems(json))
    },[])

    
    return (<>
    {items.map((item)=>(
    <ProductCard 
    id={item.id}
    title={item.title}
    price={item.price}
    category={item.category}
    description={item.description}
    image={item.image}     
    />))}    
    </>)
};
