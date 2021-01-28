import HomeContainer from 'containers/Home';
import Layout from 'components/Layout';
import { authSSR } from 'utils/authentication';

const Home = () => (
  <Layout>
    <HomeContainer />
  </Layout>
);

export const getServerSideProps = authSSR;

export default Home;
