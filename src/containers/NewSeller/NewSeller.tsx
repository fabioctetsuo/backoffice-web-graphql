import React from 'react';
import { Container } from '@material-ui/core';
import { BusinessOutlined } from '@material-ui/icons';
import Title from 'components/Title';
import CustomContainer from 'components/Container';
import { useRouter } from 'next/router';

import strings from 'strings';
import { useCreateProviderMutation, useCreateSellerMutation } from 'generated-types';
import SellerForm from 'components/SellerForm';
import useToast from 'hooks/useToast';
import removeInputMask from 'components/FormInput/TextFieldInput/helpers/removeInputMask';
import { handleGraphqlError } from 'utils/graphql';
import { SellerInfo } from 'components/SellerForm/SellerForm';

const texts = strings.sellers.new;

const DEFAULT_INTERVAL = 30;
const DEFAULT_SLOTS = 1;

const NewSeller = () => {
  const router = useRouter();
  const renderToast = useToast();
  const [sellerID, setSellerID] = React.useState<string>();

  const [createProvider, { loading: createProviderLoading }] = useCreateProviderMutation({
    onError: () => {
      router.push(`/sellers/${sellerID}`);
    },
    onCompleted: () => {
      router.push('/sellers');
      renderToast(texts.feedback.success);
    },
  });

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
  });

  const handleSubmit = (data: SellerInfo) => {
    const { provider, ...seller } = data;
    const sellerPayload = {
      ...seller,
      documentNumber: removeInputMask(seller.documentNumber),
      phoneNumber: removeInputMask(seller.phoneNumber),
      mobileNumber: removeInputMask(seller.mobileNumber),
      address: {
        ...seller.address,
        number: Number(seller.address.number),
        zipCode: removeInputMask(seller.address.zipCode),
      },
    };

    createSeller({
      variables: {
        seller: sellerPayload,
      },
    }).then(response => {
      if (response?.data?.createSeller) {
        const {
          data: {
            createSeller: { id },
          },
        } = response;
        setSellerID(id);
        createProvider({
          variables: {
            provider: {
              ...provider,
              interval: DEFAULT_INTERVAL,
              slots: DEFAULT_SLOTS,
              providerId: id,
            },
          },
        });
      }
    });
  };

  return (
    <Container maxWidth="lg">
      <main>
        <CustomContainer
          title={<Title StartIcon={BusinessOutlined}>{texts.title}</Title>}
        >
          <SellerForm
            onSubmit={handleSubmit}
            isSubmitting={createSellerLoading || createProviderLoading}
          />
        </CustomContainer>
      </main>
    </Container>
  );
};

export default NewSeller;
