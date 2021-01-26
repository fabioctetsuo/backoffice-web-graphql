import { CircularProgress, Typography } from '@material-ui/core';
import { useGetUserByIdQuery } from 'generated-types';
import Head from 'next/head';
import React from 'react';
import { withBasePath } from 'utils/withBasePath';
import * as S from './styles';

const HomeContainer = () => {
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
          Welcome, <S.Name>{data?.getUserById?.name}</S.Name>!
        </Typography>
        <Typography variant="body1">
          Seu ID é <strong>{data?.getUserById?.id}</strong> e seu status é{' '}
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
