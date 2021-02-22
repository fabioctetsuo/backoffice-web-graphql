import Layout from 'components/Layout';
import EditSeller from 'containers/EditSeller';
import { authSSR } from 'utils/authentication';

const EditSellerPage = () => {
  return (
    <Layout>
      <EditSeller />
    </Layout>
  );
};

export const getServerSideProps = authSSR;

export default EditSellerPage;
