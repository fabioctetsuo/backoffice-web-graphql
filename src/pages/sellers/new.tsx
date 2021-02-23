import Layout from 'components/Layout';
import NewSeller from 'containers/NewSeller';
import { authSSR } from 'utils/authentication';

const SellerPage = () => {
  return (
    <Layout>
      <NewSeller />
    </Layout>
  );
};

export const getServerSideProps = authSSR;

export default SellerPage;
