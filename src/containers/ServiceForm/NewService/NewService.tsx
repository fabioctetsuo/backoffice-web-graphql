import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { Container as ContainerMui, Button } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';
import Container from 'components/Container';
import Title from 'components/Title';
import Loading from 'components/Loading';
import useToast from 'hooks/useToast';
import { handleGraphqlError } from 'utils/graphql';
import {
  HealthHubFieldType,
  HealthHubServiceById,
  HealthHubServiceFieldType,
  useCreateServiceMutation,
} from 'generated-types';
import strings from 'strings';
import CollapsibleQuestionsForm from '../components/CollapsibleQuestionsForm';
import MainForm from '../components/MainForm';
import { getFormattedPayload } from '../utils/formatPayload';
import { hasDuplicateKeys } from '../utils/hasDuplicateKeys';
import * as Styled from './styled';

const texts = strings.services.form;

function NewService() {
  const router = useRouter();
  const renderToast = useToast();
  const [createService, { loading }] = useCreateServiceMutation({
    onError: error => {
      handleGraphqlError(error.graphQLErrors, codes => {
        if (codes.length) {
          codes.map(code => {
            switch (code) {
              case 409:
                renderToast(texts.feedback.duplicated.service, 'error');
                break;
              default:
                renderToast(texts.feedback.error, 'error');
            }
          });
        }
      });
    },
    onCompleted: () => {
      renderToast(texts.feedback.createSuccess, 'success');
      router.push('/services');
    },
  });

  const methods = useForm({
    defaultValues: {
      info: '',
      name: '',
      price: '',
      description: '',
      result: '',
      preparation: '',
      procedureFields: [
        {
          key: '',
          label: '',
          type: HealthHubServiceFieldType.Text,
          position: 0,
          validations: { required: true },
          values: [],
        },
      ],
      type: HealthHubFieldType.PharmaService,
    },
  });
  const onSubmit = (payload: HealthHubServiceById) => {
    const isDuplicated = hasDuplicateKeys(payload, methods.setError);
    if (!isDuplicated) {
      const service = getFormattedPayload(payload);
      createService({ variables: { service } });
    }
  };
  const { isDirty } = methods.formState;

  return (
    <ContainerMui maxWidth="lg">
      <Container title={<Title StartIcon={EditOutlined}>{texts.newTitle}</Title>}>
        <div style={{ position: 'relative' }}>
          <FormProvider {...methods}>
            {loading && <Loading overlay text={texts.loadingSave} />}
            <Styled.CustomForm onSubmit={methods.handleSubmit(onSubmit)}>
              <MainForm />
              <CollapsibleQuestionsForm errors={methods.errors} />
              <Button
                disabled={!isDirty}
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 16 }}
              >
                {texts.newSave}
              </Button>
            </Styled.CustomForm>
          </FormProvider>
        </div>
      </Container>
    </ContainerMui>
  );
}

export default NewService;
