import {Container} from './container';
import { Copyright } from './copyright';
import {Logo} from './logo'
 
export const Footer:React.FC = (  ) => {
    return (
      <div className="footer">
          <Container>
              <Logo/>
              <p>This is a fake store and nothing is for sale.</p>
              <Copyright/>
          </Container>
        
      </div>
    );
  };