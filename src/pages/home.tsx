import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { Background } from "../components/background";
import { Search } from "../components/search";
import { Logo } from "../components/logo";

export const HomePage: React.FC = () => {
     return (
          <Layout>
               <Container>
                    <Background>
                         <Logo small />
                         <Search />
                    </Background>
               </Container>
          </Layout>
     );
};
