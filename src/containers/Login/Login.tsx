import React from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import TextFieldInput from 'components/FormInput/TextFieldInput';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { VALID_EMAIL } from 'utils/validations/regex';
import strings from 'strings';
import baseTheme from 'theme';
import { Hidden } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useAuth, FormProps } from 'context/auth-context';
import handleLoginError from './utils/handleLoginError';
import useToast from 'hooks/useToast';

const PageContainer = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

const PageSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const LoginSection = styled(PageSection)`
  background: white;
`;

const FormContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(4)}px;
`;

const Login = () => {
  const router = useRouter();
  const {
    query: { url },
  } = router;
  const methods = useForm();
  const { login: loginTexts } = strings;

  const { login } = useAuth();
  const sendtoast = useToast();

  const toUrl = url || '/';

  const handleLogin = (form: FormProps) => {
    login &&
      login(form)
        .then(() => {
          router.push(toUrl as string);
        })
        .catch(error => {
          const errorMessage = handleLoginError(error);
          sendtoast(errorMessage, 'error');
        });
  };

  return (
    <PageContainer>
      <Hidden smDown>
        <PageSection>
          <Container maxWidth="sm">
            <Typography variant="h1" style={{ color: 'white' }}>
              Espaço <b>Saúde e Bem-Estar</b>
            </Typography>
          </Container>
        </PageSection>
      </Hidden>
      <LoginSection>
        <FormContainer maxWidth="xs">
          <Typography variant="h4" style={{ fontWeight: 700 }}>
            {loginTexts.message.hello}
          </Typography>
          <Typography variant="h4" style={{ fontWeight: 700 }}>
            {loginTexts.message.welcome}
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleLogin)}>
              <Box margin={`${baseTheme.spacing(5)}px 0 0 0`}>
                <TextFieldInput
                  field="email"
                  label={loginTexts.fields.email.label}
                  padding="0 0 20px 0"
                  rules={{
                    required: loginTexts.fields.email.required,
                    pattern: {
                      value: VALID_EMAIL,
                      message: loginTexts.fields.email.invalid,
                    },
                  }}
                />
                <TextFieldInput
                  field="password"
                  label={loginTexts.fields.password.label}
                  type="password"
                  padding="20px 0 0 0"
                  rules={{
                    required: loginTexts.fields.password.required,
                  }}
                />
              </Box>
              <Box margin={`${baseTheme.spacing(6)}px 0 0 0`}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowForward />}
                >
                  {loginTexts.submitButton}
                </Button>
              </Box>
            </form>
          </FormProvider>
          <Box margin={`${baseTheme.spacing(20)}px 0 0 0`}>
            <Typography variant="body1">{loginTexts.message.forgotPassword}</Typography>
          </Box>
        </FormContainer>
      </LoginSection>
    </PageContainer>
  );
};

export default Login;
