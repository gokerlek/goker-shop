import {Container} from './container';
import { Copyright } from './copyright';
import {Logo} from './logo'
 
export const Footer:React.FC = (  ) => {
    return (
      
          <Container>
            <div className="footer min-h-full flex justify-between items-center flex-col bg-footerGray text-white">
            <div className="flex justify-center items-center flex-col my-4">
              <Logo />
              <div className="py-4 text-gray-500 text-sm font-light">This is a fake store and nothing is for sale.</div>
            </div>
              <Copyright/>
              </div>
          </Container>
        
      
    );
  };

