import Layout from 'components/Layout';
import NewServiceForm from 'containers/ServiceForm/NewService';
import { authSSR } from 'utils/authentication';

const Services = () => {
  return (
    <Layout>
      <NewServiceForm />
    </Layout>
  );
};

export const getServerSideProps = authSSR;

export default Services;
