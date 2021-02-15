import Layout from 'components/Layout';
import SellersList from 'containers/Sellers';
import { authSSR } from 'utils/authentication';

const Sellers = () => {
  return (
    <Layout>
      <SellersList />
    </Layout>
  );
};

export const getServerSideProps = authSSR;

export default Sellers;
