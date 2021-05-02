import { Footer } from './footer';


export const Layout:React.FC = ( {children}) => {
  return (
    <>
      <head>
        <title>Goker Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className="
      layout 
      grid 
      grid-rows-layout
      m-auto
">
        {children}
        <Footer/>
      </div>
    </>
  );
};