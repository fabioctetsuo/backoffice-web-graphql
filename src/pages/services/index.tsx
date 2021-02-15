import Layout from 'components/Layout';
import ServicesList from 'containers/Services';
import { authSSR } from 'utils/authentication';

const Services = () => {
  return (
    <Layout>
      <ServicesList />
    </Layout>
  );
};

export const getServerSideProps = authSSR;

export default Services;
