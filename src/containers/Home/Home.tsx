import { CircularProgress, Container, Typography } from '@material-ui/core';
import { useAuth } from 'context/auth-context';
import { useGetUserByIdQuery } from 'generated-types';
import Head from 'next/head';
import React from 'react';
import CustomContainer from 'components/Container';
import * as S from './styles';

const HomeContainer = () => {
  const { user } = useAuth();
  const { loading, data } = useGetUserByIdQuery({
    variables: {
      id: '1',
    },
  });

  if (loading)
    return (
      <S.Container>
        <CircularProgress />
      </S.Container>
    );

  return (
    <Container maxWidth="lg">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <CustomContainer>
          <Typography variant="h1" style={{ fontSize: 48 }}>
            Welcome, <S.Name>{user?.displayName}</S.Name>!
          </Typography>
          <Typography variant="body1">
            A query GraphQL respondeu com o usuário{' '}
            <strong>{data?.getUserById?.name}</strong>, id{' '}
            <strong>{data?.getUserById?.id}</strong> e status{' '}
            <strong>{data?.getUserById?.active ? 'Ativo' : 'Inativo'}</strong>
          </Typography>
        </CustomContainer>
      </main>
    </Container>
  );
};

export default HomeContainer;
