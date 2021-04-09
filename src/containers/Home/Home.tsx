import { Container, Typography } from '@material-ui/core';
import { useAuth } from 'context/auth-context';
import Head from 'next/head';
import React from 'react';
import CustomContainer from 'components/Container';
import * as S from './styles';

const HomeContainer = () => {
  const { user } = useAuth();

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
        </CustomContainer>
      </main>
    </Container>
  );
};

export default HomeContainer;
