import { CircularProgress, Typography } from '@material-ui/core';
import { useAuth } from 'context/auth-context';
import { useGetUserByIdQuery } from 'generated-types';
import Head from 'next/head';
import React from 'react';
import { withBasePath } from 'utils/withBasePath';
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
    <S.Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Typography variant="h1">
          Welcome,{' '}
          <S.Name>
            <S.Name>{user?.displayName}</S.Name>
          </S.Name>
          !
        </Typography>
        <Typography variant="body1">
          A query GraphQL respondeu com o usuário{' '}
          <strong>{data?.getUserById?.name}</strong>, id{' '}
          <strong>{data?.getUserById?.id}</strong> e status{' '}
          <strong>{data?.getUserById?.active ? 'Ativo' : 'Inativo'}</strong>
        </Typography>
      </main>

      <S.Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="body2">Powered by</Typography>{' '}
          <img src={withBasePath('/vercel.svg')} alt="Vercel Logo" />
        </a>
      </S.Footer>
    </S.Container>
  );
};

export default HomeContainer;
