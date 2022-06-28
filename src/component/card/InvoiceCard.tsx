import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { IInvoice } from 'models/invoice.model';
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { COLORS } from 'theme';
import numeral from 'numeral';
import ArrowRightIcon from '@root/public/icons/svg/ArrowRightIcon';

interface IProps {
  item: IInvoice;
}

const InvoiceCard: React.FC<IProps> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: COLORS.white,
        boxShadow: 1,
        p: 4,
        mb: 2,
        borderRadius: 1,
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          #
        </Typography>
        <Typography variant="h4" color="black" sx={{ fontWeight: 600 }}>
          {item.id}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }} style={{ width: 30 }}>
          Due
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          {dayjs(item.paymentDue).format('DD MMM YYYY')}{' '}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          {item.clientName}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2" color="black" sx={{ fontWeight: 600 }}>
          € {numeral(item.total).format('0,0.00')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: COLORS.inovice[item.status].bg,
          p: 2,
          borderRadius: 1,
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: COLORS.inovice[item.status].text,
            width: 8,
            height: 8,
            borderRadius: 10,
            mr: 1,
          }}
        />
        <Typography
          color="black"
          sx={{
            fontWeight: 600,
            color: COLORS.inovice[item.status].text,
            lineHeight: 0,
          }}
        >
          {item.status.charAt(0).toUpperCase()}
          {item.status.slice(1)}
        </Typography>
      </Box>
      <IconButton>
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default InvoiceCard;
