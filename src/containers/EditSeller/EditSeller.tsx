import React from 'react';
import { Container } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';
import Title from 'components/Title';
import CustomContainer from 'components/Container';
import { useRouter } from 'next/router';

import strings from 'strings';
import { Seller, useSellerQuery, useUpdateSellerMutation } from 'generated-types';
import SellerForm from 'components/SellerForm';
import Loading from 'components/Loading';
import useToast from 'hooks/useToast';
import removeInputMask from 'components/FormInput/TextFieldInput/helpers/removeInputMask';
import { handleGraphqlError } from 'utils/graphql';

const texts = strings.sellers.edit;

const EditSeller = () => {
  const router = useRouter();
  const renderToast = useToast();

  const sellerID = router.query['id'] as string;

  const { data: sellerData, loading } = useSellerQuery({
    variables: {
      id: sellerID,
    },
    onError: () => {
      router.push('/sellers');
      renderToast(texts.feedback.loadSellerError, 'error');
    },
  });

  const [updateSeller, { loading: updateSellerLoading }] = useUpdateSellerMutation({
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

    updateSeller({
      variables: {
        id: sellerID,
        seller,
      },
    });
  };

  return (
    <Container maxWidth="lg">
      <main>
        <CustomContainer title={<Title StartIcon={EditOutlined}>{texts.title}</Title>}>
          {loading || !sellerData ? (
            <div style={{ position: 'relative', minHeight: 250 }}>
              <Loading />
            </div>
          ) : (
            <SellerForm
              disableCNPJ
              defaultValues={sellerData?.seller}
              onSubmit={handleSubmit}
              isSubmitting={updateSellerLoading}
            />
          )}
        </CustomContainer>
      </main>
    </Container>
  );
};

export default EditSeller;
