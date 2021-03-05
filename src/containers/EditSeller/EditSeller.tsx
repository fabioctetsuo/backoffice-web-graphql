import React from 'react';
import { Container } from '@material-ui/core';
import { EditOutlined } from '@material-ui/icons';
import Title from 'components/Title';
import CustomContainer from 'components/Container';
import { useRouter } from 'next/router';

import strings from 'strings';
import {
  Provider,
  useProviderLazyQuery,
  useSellerQuery,
  useUpdateProviderMutation,
  useUpdateSellerMutation,
} from 'generated-types';
import SellerForm from 'components/SellerForm';
import Loading from 'components/Loading';
import useToast from 'hooks/useToast';
import removeInputMask from 'components/FormInput/TextFieldInput/helpers/removeInputMask';
import { handleGraphqlError } from 'utils/graphql';
import { SellerInfo } from 'components/SellerForm/SellerForm';

const texts = strings.sellers.edit;

const EditSeller = () => {
  const router = useRouter();
  const renderToast = useToast();

  const sellerID = router.query['id'] as string;

  const [sellerInfo, setSellerInfo] = React.useState<SellerInfo>();

  const [getProvider, { loading: providerLoading }] = useProviderLazyQuery({
    onError: error => {
      handleGraphqlError(error.graphQLErrors, codes => {
        if (codes.length) {
          codes.map(code => {
            switch (code) {
              case 404:
                if (sellerData?.seller) {
                  setSellerInfo({
                    ...sellerData.seller,
                    provider: {} as Provider,
                  });
                }
                renderToast(texts.feedback.providerNotFound, 'error');
                break;
              default:
                router.push('/sellers');
                renderToast(texts.feedback.loadSellerError, 'error');
            }
          });
        }
      });
    },
    onCompleted: ({ provider }) => {
      if (sellerData) {
        setSellerInfo({
          ...sellerData.seller,
          provider,
        });
      }
    },
  });

  const { data: sellerData, loading } = useSellerQuery({
    variables: {
      id: sellerID,
    },
    onError: () => {
      router.push('/sellers');
      renderToast(texts.feedback.loadSellerError, 'error');
    },
    onCompleted: () => {
      getProvider({
        variables: {
          id: sellerID,
        },
      });
    },
  });

  const [updateProvider, { loading: updateProviderLoading }] = useUpdateProviderMutation({
    onError: () => {
      renderToast(texts.feedback.error, 'error');
    },
    onCompleted: () => {
      router.push('/sellers');
      renderToast(texts.feedback.success);
    },
  });

  const [updateSeller, { loading: updateSellerLoading }] = useUpdateSellerMutation({
    onError: () => {
      renderToast(texts.feedback.error, 'error');
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

    updateSeller({
      variables: {
        id: sellerID,
        seller: sellerPayload,
      },
    }).then(() => {
      updateProvider({
        variables: {
          id: sellerID,
          provider,
        },
      });
    });
  };

  return (
    <Container maxWidth="lg">
      <main>
        <CustomContainer title={<Title StartIcon={EditOutlined}>{texts.title}</Title>}>
          {loading || providerLoading || !sellerInfo ? (
            <div style={{ position: 'relative', minHeight: 250 }}>
              <Loading />
            </div>
          ) : (
            <SellerForm
              disableCNPJ
              defaultValues={sellerInfo}
              onSubmit={handleSubmit}
              isSubmitting={updateSellerLoading || updateProviderLoading}
            />
          )}
        </CustomContainer>
      </main>
    </Container>
  );
};

export default EditSeller;
