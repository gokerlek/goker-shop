

export const ProductCard:React.FC<{
    id?:Number,
    title?:String,
    price?:Number,
    category?:String,
    description?:String,
    image:String}> = ({id, title, price,category,description,image }) =>{
    
    return (
        <div className=''>
           {title}
           <img src={`${image}`} alt='' />
           {price}
        </div>
        
    );
  }