import Layout from 'components/Layout';
import { authSSR } from 'utils/authentication';

const SellerPage = () => {
  return (
    <Layout>
      <div>cadastro de loja</div>
    </Layout>
  );
};

export const getServerSideProps = authSSR;

export default SellerPage;
