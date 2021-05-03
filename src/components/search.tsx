export const Search:React.FC =()=> {
    return ( 
    <div className="bg-white mt-4 text-sm border-transparent rounded-lg py-2 px-4 flex w-1/3 cursor-pointer">
     <input className=" w-full m-0 p-0  border-none placeholder-gray-400 cursor-pointer" type="text" placeholder="Search your dream product..."/>
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>    
 </div>
    );
}