import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { Backgraund } from "../components/backgraund";
import { Search } from "../components/search";
import { Logo } from "../components/logo";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Backgraund>
          <Logo small />
          <Search />
        </Backgraund>
      </Container>
    </Layout>
  );
};
