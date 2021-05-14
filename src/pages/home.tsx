import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { Backgraund } from "../components/backgraund";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Backgraund />
      </Container>
    </Layout>
  );
};
