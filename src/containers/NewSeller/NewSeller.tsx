import React from 'react';
import { Container } from '@material-ui/core';
import { BusinessOutlined } from '@material-ui/icons';
import Title from 'components/Title';
import CustomContainer from 'components/Container';
import { useRouter } from 'next/router';

import strings from 'strings';
import { Seller, useCreateSellerMutation } from 'generated-types';
import SellerForm from 'components/SellerForm';
import useToast from 'hooks/useToast';
import removeInputMask from 'components/FormInput/TextFieldInput/helpers/removeInputMask';
import { handleGraphqlError } from 'utils/graphql';

const texts = strings.sellers.new;

const NewSeller = () => {
  const router = useRouter();
  const renderToast = useToast();

  const [createSeller, { loading: createSellerLoading }] = useCreateSellerMutation({
    onError: error => {
      handleGraphqlError(error.graphQLErrors, codes => {
        if (codes.length) {
          codes.map(code => {
            switch (code) {
              case 409:
                renderToast(texts.feedback.cnpjAlreadyRegistered, 'error');
                break;
              default:
                renderToast(texts.feedback.error, 'error');
            }
          });
        }
      });
    },
    onCompleted: () => {
      router.push('/sellers');
      renderToast(texts.feedback.success);
    },
  });

  const handleSubmit = (data: Seller) => {
    const seller = {
      ...data,
      documentNumber: removeInputMask(data.documentNumber),
      phoneNumber: removeInputMask(data.phoneNumber),
      mobileNumber: removeInputMask(data.mobileNumber),
      address: {
        ...data.address,
        number: Number(data.address.number),
        zipCode: removeInputMask(data.address.zipCode),
      },
    };

    createSeller({
      variables: {
        seller,
      },
    });
  };

  return (
    <Container maxWidth="lg">
      <main>
        <CustomContainer
          title={<Title StartIcon={BusinessOutlined}>{texts.title}</Title>}
        >
          <SellerForm onSubmit={handleSubmit} isSubmitting={createSellerLoading} />
        </CustomContainer>
      </main>
    </Container>
  );
};

export default NewSeller;
