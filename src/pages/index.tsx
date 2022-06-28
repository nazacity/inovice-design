import React from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';
import ActionBar from 'component/layout/ActionBar';
import useAsync from 'utils/useAsync';
import dataServices from 'services/data.services';
import { Box } from '@mui/system';
import useTranslation from 'next-translate/useTranslation';
import InvoiceCard from 'component/card/InvoiceCard';

const Index = () => {
  const { t } = useTranslation();
  const { data: orderLists, status: orderListsLoading } = useAsync(
    dataServices.getData,
    {
      immediate: true,
    }
  );

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <ActionBar total={orderLists?.length || 0} />
      {orderListsLoading === 'loading' && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
          }}
        >
          <CircularProgress size={30} />
        </Box>
      )}
      {orderLists && orderLists.length > 0 ? (
        <Box sx={{ py: 5 }}>
          {orderLists.map((item) => {
            return <InvoiceCard key={item.id} item={item} />;
          })}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
          }}
        >
          <Typography>{t('common:no_invoice')}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default Index;
