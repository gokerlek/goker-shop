import { Footer } from "./footer";

export const Layout: React.FC = ({ children }) => {
     return (
          <div
               className='
      layout 
      grid 
      grid-rows-layout
      m-auto
      font-layout
      '>
               {children}
               <Footer />
          </div>
     );
};
