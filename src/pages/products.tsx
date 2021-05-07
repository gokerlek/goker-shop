import { useState, useEffect} from "react"

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

    const data = items.map((item)=>(
      item.category));

    return <p>{data}</p>
};
