import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { Container as ContainerMui, Button } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';
import Container from 'components/Container';
import Title from 'components/Title';
import Loading from 'components/Loading';
import {
  HealthHubServiceById,
  useServiceQuery,
  useUpdateServiceMutation,
} from 'generated-types';
import useToast from 'hooks/useToast';
import strings from 'strings';
import MainForm from './components/MainForm';
import CollapsibleQuestionsForm from './components/CollapsibleQuestionsForm';
import { getFormattedPayload } from './utils/formatPayload';
import * as Styled from './styled';

type EditServiceFormTypes = { defaultValues: HealthHubServiceById };

const texts = strings.services.edit;

function EditServiceForm({ defaultValues }: EditServiceFormTypes) {
  const renderToast = useToast();
  const router = useRouter();
  const methods = useForm({ defaultValues });
  const [updateService, { loading }] = useUpdateServiceMutation();
  const { isDirty } = methods.formState;

  const onSubmit = (payload: HealthHubServiceById) => {
    const id = router.query.id as string;
    const service = getFormattedPayload(payload);
    updateService({ variables: { id, service } })
      .then(() => {
        renderToast(texts.form.feedback.success, 'success');
      })
      .catch(() => {
        renderToast(texts.form.feedback.error, 'error');
      });
  };

  return (
    <div style={{ position: 'relative' }}>
      <FormProvider {...methods}>
        {loading && <Loading overlay text="Salvando..." />}
        <Styled.CustomForm onSubmit={methods.handleSubmit(onSubmit)}>
          <MainForm />
          <CollapsibleQuestionsForm />
          <Button
            disabled={!isDirty}
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            {texts.form.save}
          </Button>
        </Styled.CustomForm>
      </FormProvider>
    </div>
  );
}

function EditService() {
  const router = useRouter();
  const { data, loading } = useServiceQuery({
    variables: { id: router.query.id as string },
    skip: Boolean(!router.query.id),
  });
  const defaultValues = data?.service as HealthHubServiceById;

  return (
    <ContainerMui maxWidth="lg">
      <Container title={<Title StartIcon={EditOutlined}>{texts.title}</Title>}>
        {loading ? (
          <div style={{ position: 'relative', minHeight: 250 }}>
            <Loading overlay />
          </div>
        ) : (
          <EditServiceForm defaultValues={defaultValues} />
        )}
      </Container>
    </ContainerMui>
  );
}

export default EditService;
